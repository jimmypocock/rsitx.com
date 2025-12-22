# Contact Form Setup

The contact form UI is built but currently has no backend. This document outlines recommended solutions for handling form submissions.

## Current Implementation

- Location: `src/components/ui/ContactForm.tsx`
- Fields: Name, Email, Phone, Company, Service Interest, Message
- Status: Frontend only (simulates submission with `setTimeout`)

---

## Recommended Solution: Web3Forms

**Best for**: Simple, free, no-backend solution

### Why Web3Forms?

- **Free forever** (unlimited submissions)
- **No backend required** - works with static sites
- **No signup required** (just need access key)
- **Spam protection** built-in (hCaptcha)
- **Email notifications** to your inbox
- **GDPR compliant**

### Setup Steps

1. **Get Access Key**
   - Go to [web3forms.com](https://web3forms.com/)
   - Enter your email to receive an access key
   - No account creation needed

2. **Update ContactForm.tsx**

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      access_key: "YOUR_ACCESS_KEY_HERE", // Replace with your key
      subject: `New Contact Form Submission - ${formState.service || "General"}`,
      from_name: "RSI Website",
      ...formState,
    }),
  });

  const result = await response.json();

  setIsSubmitting(false);
  if (result.success) {
    setSubmitted(true);
  } else {
    // Handle error
    alert("Something went wrong. Please try again or call us directly.");
  }
};
```

3. **Add spam protection** (optional but recommended)

```tsx
// Add to form
<input type="hidden" name="botcheck" className="hidden" />
```

### Pricing

| Plan | Cost | Submissions |
|------|------|-------------|
| Free | $0 | Unlimited |

---

## Alternative: Formspree

**Best for**: More features, still simple

### Pricing

| Plan | Cost | Submissions/month |
|------|------|-------------------|
| Free | $0 | 50 |
| Gold | $10/mo | 1,000 |
| Platinum | $40/mo | 5,000 |

### Setup

1. Create account at [formspree.io](https://formspree.io/)
2. Create new form, get endpoint URL
3. Update form action:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formState),
  });

  setIsSubmitting(false);
  if (response.ok) {
    setSubmitted(true);
  }
};
```

---

## Alternative: Formspark

**Best for**: One-time payment, lifetime access

### Pricing

| Plan | Cost | Submissions |
|------|------|-------------|
| Lifetime | $25 (one-time) | 250,000 total |
| Free | $0 | 250 total |

### Features
- Dashboard for managing submissions
- CSV/JSON export
- Slack integration
- Zapier integration

---

## Alternative: Self-Hosted (API Route)

**Best for**: Full control, existing email infrastructure

If you want to handle submissions yourself:

1. **Create API Route** at `src/app/api/contact/route.ts`:

```tsx
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // Option 1: Send via email service (Resend, SendGrid, etc.)
  // Option 2: Save to database
  // Option 3: Forward to CRM

  // Example with Resend:
  // await resend.emails.send({
  //   from: "website@rsitx.com",
  //   to: "info@rsitx.com",
  //   subject: "New Contact Form Submission",
  //   html: `<p>Name: ${body.name}</p>...`,
  // });

  return NextResponse.json({ success: true });
}
```

2. **Update form to use API route**:

```tsx
const response = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formState),
});
```

### Email Service Options

| Service | Free Tier | Paid |
|---------|-----------|------|
| [Resend](https://resend.com) | 3,000/mo | $20/mo for 50k |
| [SendGrid](https://sendgrid.com) | 100/day | $15/mo |
| [Postmark](https://postmarkapp.com) | 100/mo | $15/mo |

---

## Spam Protection Options

### hCaptcha (Recommended)
- Free for most use cases
- Privacy-focused
- Works with Web3Forms out of the box

### Honeypot Field
Already in current implementation - hidden field that bots fill out:
```tsx
<input type="hidden" name="botcheck" className="hidden" />
```

### Rate Limiting
If using API route, add rate limiting with packages like `next-rate-limit`.

---

## Recommendation Summary

| Use Case | Recommended Solution | Cost |
|----------|---------------------|------|
| Simplest setup | **Web3Forms** | Free |
| More features needed | Formspree Gold | $10/mo |
| One-time payment | Formspark Lifetime | $25 once |
| Full control | Self-hosted + Resend | ~$0-20/mo |

**My recommendation**: Start with **Web3Forms** (free, simple, works great). Upgrade later only if you need features like file uploads, auto-responders, or CRM integrations.

---

## Additional Considerations

- [ ] Add success/error toast notifications
- [ ] Consider auto-reply email to sender
- [ ] Track form submissions in analytics
- [ ] Add form submission to CRM (if applicable)
- [ ] Set up email routing for different inquiry types
