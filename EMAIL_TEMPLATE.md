# Professional Email Template for TradeWithTrust Enquiries

## Template Name: `template_tradewithtrust`
## Service ID: `service_tradewithtrust`

---

## Email Subject Line:
```
New Product Enquiry from {{from_name}} - {{product}}
```

---

## Email Body (HTML Format):

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8fafc;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 3px solid #1e3a8a;
            padding-bottom: 20px;
        }
        .header h1 {
            color: #1e3a8a;
            margin: 0;
            font-size: 28px;
        }
        .header p {
            color: #ff6b35;
            margin: 5px 0 0 0;
            font-size: 14px;
        }
        .section {
            margin-bottom: 25px;
        }
        .section-title {
            background-color: #1e3a8a;
            color: white;
            padding: 12px 15px;
            border-radius: 4px;
            font-weight: 600;
            margin-bottom: 15px;
            font-size: 16px;
        }
        .info-row {
            display: flex;
            margin-bottom: 12px;
            padding-bottom: 12px;
            border-bottom: 1px solid #e5e7eb;
        }
        .info-row:last-child {
            border-bottom: none;
        }
        .label {
            font-weight: 600;
            color: #1e3a8a;
            width: 150px;
            min-width: 150px;
        }
        .value {
            color: #333;
            flex: 1;
            word-break: break-word;
        }
        .product-badge {
            display: inline-block;
            background-color: #ff6b35;
            color: white;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 600;
        }
        .message-box {
            background-color: #f8fafc;
            border-left: 4px solid #ff6b35;
            padding: 15px;
            border-radius: 4px;
            margin-top: 15px;
        }
        .message-box h4 {
            margin: 0 0 10px 0;
            color: #1e3a8a;
        }
        .message-content {
            white-space: pre-wrap;
            word-wrap: break-word;
            color: #333;
            font-size: 14px;
            line-height: 1.6;
        }
        .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #e5e7eb;
            text-align: center;
            color: #666;
            font-size: 12px;
        }
        .action-note {
            background-color: #dbeafe;
            border: 1px solid #3b82f6;
            padding: 12px 15px;
            border-radius: 4px;
            color: #1e3a8a;
            margin-top: 20px;
            font-size: 13px;
        }
        .highlight {
            background-color: #fff7ed;
            padding: 2px 6px;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <h1>🎉 New Enquiry Received</h1>
            <p>TradeWithTrust Customer Inquiry Portal</p>
        </div>

        <!-- Customer Information -->
        <div class="section">
            <div class="section-title">👤 Customer Information</div>
            <div class="info-row">
                <span class="label">Name:</span>
                <span class="value"><strong>{{from_name}}</strong></span>
            </div>
            <div class="info-row">
                <span class="label">Email:</span>
                <span class="value"><a href="mailto:{{from_email}}" style="color: #1e3a8a; text-decoration: none;">{{from_email}}</a></span>
            </div>
            <div class="info-row">
                <span class="label">Phone:</span>
                <span class="value"><a href="tel:{{phone}}" style="color: #1e3a8a; text-decoration: none;">{{phone}}</a></span>
            </div>
            <div class="info-row">
                <span class="label">Company:</span>
                <span class="value">{{company}}</span>
            </div>
            <div class="info-row">
                <span class="label">Country:</span>
                <span class="value">{{country}}</span>
            </div>
        </div>

        <!-- Product Enquiry Details -->
        <div class="section">
            <div class="section-title">📦 Product Enquiry Details</div>
            <div class="info-row">
                <span class="label">Product:</span>
                <span class="value"><span class="product-badge">{{product}}</span></span>
            </div>
            <div class="info-row">
                <span class="label">Quantity Needed:</span>
                <span class="value">{{quantity}}</span>
            </div>
        </div>

        <!-- Message -->
        <div class="section">
            <div class="section-title">💬 Customer Message</div>
            <div class="message-box">
                <h4>Message Details:</h4>
                <div class="message-content">{{message}}</div>
            </div>
        </div>

        <!-- Action Required -->
        <div class="action-note">
            <strong>⚠️ Action Required:</strong><br>
            Please review this enquiry and respond to the customer within 24-48 hours at <strong>{{from_email}}</strong> or <strong>{{phone}}</strong>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p style="margin: 0;">
                📧 This email was automatically generated from your <span class="highlight">TradeWithTrust</span> website enquiry form.<br>
                Date & Time: <script>document.write(new Date().toLocaleString());</script><br>
                <strong>Do not reply to this email.</strong> Respond directly to the customer's provided contact information.
            </p>
            <p style="margin-top: 15px; color: #999;">
                © 2024 TradeWithTrust. All rights reserved.<br>
                <a href="https://tradewithtrust.com" style="color: #1e3a8a; text-decoration: none;">Visit Our Website</a>
            </p>
        </div>
    </div>
</body>
</html>
```

---

## How to Add This to EmailJS:

### Option 1: Plain Text Version (Simpler)

If you prefer a simple text email:

```
═══════════════════════════════════════════════════════════════
                    NEW ENQUIRY RECEIVED
                   TradeWithTrust Portal
═══════════════════════════════════════════════════════════════

CUSTOMER INFORMATION:
─────────────────────────────────────────────────────────────
Name:          {{from_name}}
Email:         {{from_email}}
Phone:         {{phone}}
Company:       {{company}}
Country:       {{country}}

PRODUCT ENQUIRY DETAILS:
─────────────────────────────────────────────────────────────
Product:       {{product}}
Quantity:      {{quantity}}

CUSTOMER MESSAGE:
─────────────────────────────────────────────────────────────
{{message}}

═══════════════════════════════════════════════════════════════

ACTION REQUIRED:
Please respond to this customer within 24-48 hours.
Reply to: {{from_email}} or {{phone}}

───────────────────────────────────────────────────────────────
This email was automatically generated from your TradeWithTrust
website enquiry form. Do not reply to this email directly.

© 2024 TradeWithTrust. All rights reserved.
Visit: https://tradewithtrust.com
═══════════════════════════════════════════════════════════════
```

---

## How to Setup in EmailJS:

1. **Log in to EmailJS** → Go to Email Templates
2. **Click "Create New Template"**
3. **Fill in:**
   - **Name:** `template_tradewithtrust`
   - **Subject:** `New Product Enquiry from {{from_name}} - {{product}}`
   - **Content:** Paste the HTML template above (Option 1)
4. **Click "Save"**

---

## Variable Reference:

These are the variables that will be automatically filled:

| Variable | Description |
|----------|-------------|
| `{{from_name}}` | Customer's full name |
| `{{from_email}}` | Customer's email address |
| `{{phone}}` | Customer's phone number |
| `{{product}}` | Product they're interested in |
| `{{company}}` | Customer's company name |
| `{{country}}` | Customer's country |
| `{{quantity}}` | Estimated quantity needed |
| `{{message}}` | Customer's detailed message |
| `{{subject}}` | Email subject line |

---

## Example Output:

When a customer submits an enquiry, they will receive an email like:

```
From: noreply@emailjs.com
To: tradewithtrust8741@gmail.com
Subject: New Product Enquiry from John Smith - Neem Oil

[Professional formatted email with all customer details]
```

---

## Tips:

✅ **Professional Look** - Use the HTML template for better formatting
✅ **Mobile Friendly** - Template is responsive on all devices
✅ **Clear Organization** - Sections make information easy to scan
✅ **Call to Action** - Reminder to respond within 24-48 hours
✅ **Branding** - Includes TradeWithTrust colors and styling

---

That's it! You now have a professional email template! 🎉
