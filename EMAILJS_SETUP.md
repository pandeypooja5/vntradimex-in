# EmailJS Setup Guide for TradeWithTrust

This guide will help you set up direct email sending from your website to **tradewithtrust8741@gmail.com**.

## Step 1: Create a Free EmailJS Account

1. Visit: https://www.emailjs.com/
2. Click **Sign Up** (top right)
3. Create a free account using your email
4. Verify your email address

## Step 2: Connect Your Gmail

1. After login, go to **Email Services** in the left menu
2. Click **Add Service**
3. Select **Gmail**
4. Follow the instructions to authorize your Gmail account (tradewithtrust8741@gmail.com)
5. Copy your **Service ID** (looks like: `service_xxxxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the left menu
2. Click **Create New Template**
3. Fill in the template details:
   - **Template Name**: `template_tradewithtrust`
   - **Subject**: `New Product Enquiry from {{from_name}}`
   - **Content**: Copy and paste this:

```
Hello,

A new enquiry has been received from your website.

Customer Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Company: {{company}}
- Country: {{country}}

Product Interest: {{product}}
Quantity Needed: {{quantity}}

Message:
{{message}}

---
This email was sent from TradeWithTrust website.
```

4. Click **Save** when done

## Step 4: Get Your Public Key

1. Go to **Account** (left menu)
2. Find **Public Key** section
3. Copy your **Public Key** (looks like: `xxxxxxxxxxxxxxxxxxxxxxxx`)

## Step 5: Update the Website Code

Open the `script.js` file and find this line:

```javascript
emailjs.init('YOUR_PUBLIC_KEY');
```

Replace `YOUR_PUBLIC_KEY` with your actual public key from step 4.

Also, make sure these IDs in the same function match what you set:
- Service ID: `service_tradewithtrust`
- Template ID: `template_tradewithtrust`

## Step 6: Test the Form

1. Refresh your website: http://localhost:8000/enquiry.html
2. Fill out the enquiry form
3. Click **Submit Enquiry**
4. You should receive the email at **tradewithtrust8741@gmail.com**
5. Responses will come from the customer's email

## Troubleshooting

- **Email not sending?** Check browser console (F12) for errors
- **"Service not found"?** Make sure your Service ID matches
- **"Template not found"?** Make sure your Template ID matches
- **Rate limited?** EmailJS has free tier limits (200/month)

## Questions?

Visit: https://www.emailjs.com/docs/

---

That's it! Your website will now send emails directly to your Gmail inbox! ✅
