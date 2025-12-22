# Contact Form Setup

## Implemented

- [x] Web3Forms integration
- [x] Event tracking on successful submission (`contact_form_submit`)
- [x] Spam protection (honeypot field)
- [x] Error handling with user feedback
- [x] Loading states
- [x] Success confirmation with "send another" option

---

## Configuration

**Web3Forms Access Key**: `00d5ca3f-cd13-4ef3-bdde-8b38a9e8ccfb`

Location: `src/components/ui/ContactForm.tsx:6`

---

## Form Fields

| Field | Required | Type |
|-------|----------|------|
| First Name | Yes | text |
| Last Name | Yes | text |
| Email | Yes | email |
| Phone | No | tel |
| Company / Organization | No | text |
| Service Interested In | No | select |
| Message | Yes | textarea |

**Service Options:**
- Roofing
- Waterproofing & Dampproofing
- Restoration Services
- Sheet Metal
- Other

---

## Testing the Form

1. Run the dev server: `npm run dev`
2. Navigate to `/contact`
3. Fill out the form and submit
4. Check your Web3Forms dashboard for the submission
5. Verify Vercel Analytics shows the `contact_form_submit` event (after enabling Analytics in Vercel dashboard)

---

## Email Notifications

Web3Forms sends submissions to the email associated with your account.

To change notification settings:
1. Log in to [web3forms.com](https://web3forms.com)
2. Go to your dashboard
3. Update email notification preferences

---

## Production Checklist

- [ ] Update Web3Forms domain from `localhost` to `rsitx.com`
- [ ] Test form submission on production
- [ ] Verify email notifications are received
- [ ] Check Analytics events are tracking

---

## Optional Enhancements

### Add hCaptcha (if spam becomes an issue)
Web3Forms supports hCaptcha. See [Web3Forms docs](https://docs.web3forms.com/how-to-guides/add-captcha) for setup.

### Custom Thank You Page
Redirect to a dedicated thank you page instead of inline message.

### File Uploads
Web3Forms supports file attachments if needed for project photos.

### Auto-Reply Email
Configure auto-reply in Web3Forms dashboard to send confirmation to users.
