// Walk every URL in the local sitemap and report any console.warn / console.error.
// Usage: node scripts/console-check.mjs [base-url]
//   default base-url: http://localhost:451

import { chromium } from "playwright";

const BASE = process.argv[2] || "http://localhost:451";

async function getRoutesFromSitemap() {
  const res = await fetch(`${BASE}/sitemap.xml`);
  if (!res.ok) throw new Error(`Failed to load sitemap: ${res.status}`);
  const xml = await res.text();
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  return matches.map((m) => m[1].replace(/^https?:\/\/[^/]+/, BASE));
}

async function main() {
  const urls = await getRoutesFromSitemap();
  console.log(`Found ${urls.length} URLs in sitemap. Visiting each…\n`);

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const findings = [];

  for (const url of urls) {
    const page = await context.newPage();
    const messages = [];
    page.on("console", (msg) => {
      const type = msg.type();
      if (type === "warning" || type === "error") {
        messages.push({ type, text: msg.text() });
      }
    });
    page.on("pageerror", (err) => messages.push({ type: "pageerror", text: err.message }));

    try {
      await page.goto(url, { waitUntil: "load", timeout: 90000 });
      // Give the page a moment for any post-load console warnings (e.g. LCP detection)
      await page.waitForTimeout(800);
    } catch (e) {
      messages.push({ type: "nav-error", text: e.message });
    }

    if (messages.length > 0) {
      findings.push({ url, messages });
      console.log(`✗ ${url}`);
      messages.forEach((m) => console.log(`    [${m.type}] ${m.text}`));
    } else {
      console.log(`✓ ${url}`);
    }

    await page.close();
  }

  await browser.close();

  console.log(`\nDone. ${findings.length}/${urls.length} pages had warnings/errors.`);
  if (findings.length > 0) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(2);
});
