import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: process.env.AWS_REGION });

const SITE_URL = "https://jennyannvalenciano.com";
const LOGO_URL = `${SITE_URL}/vap-logo-full.png`;

const BRAND_ACCENT = "#e8184d";
const BG_LIGHT = "#f5f5f5";
const TEXT_DARK = "#18181b";
const TEXT_MUTED = "#71717a";

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildHtml({ name, email, phone, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Not provided");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background-color:${BG_LIGHT};font-family:'DM Sans',Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BG_LIGHT};">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">

          <!-- Accent Bar -->
          <tr>
            <td style="height:4px;background-color:${BRAND_ACCENT};"></td>
          </tr>

          <!-- Logo -->
          <tr>
            <td align="center" style="padding:32px 40px 24px;">
              <img src="${LOGO_URL}" alt="Virtual Assistant Provider" width="180" style="display:block;max-width:180px;height:auto;">
            </td>
          </tr>

          <!-- Heading -->
          <tr>
            <td style="padding:0 40px 8px;">
              <h1 style="margin:0;font-size:20px;font-weight:600;color:${TEXT_DARK};">New Contact Form Submission</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:0 40px 32px;">
              <p style="margin:0;font-size:14px;color:${TEXT_MUTED};">Someone reached out via your website contact form.</p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <hr style="border:none;border-top:1px solid #e4e4e7;margin:0;">
            </td>
          </tr>

          <!-- Fields -->
          <tr>
            <td style="padding:28px 40px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:24px;">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:${BRAND_ACCENT};">Name</p>
                    <p style="margin:0;font-size:15px;color:${TEXT_DARK};">${safeName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:24px;">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:${BRAND_ACCENT};">Email</p>
                    <p style="margin:0;font-size:15px;color:${TEXT_DARK};"><a href="mailto:${safeEmail}" style="color:${TEXT_DARK};text-decoration:none;">${safeEmail}</a></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:24px;">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:${BRAND_ACCENT};">Phone</p>
                    <p style="margin:0;font-size:15px;color:${TEXT_DARK};">${safePhone}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="margin:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:${BRAND_ACCENT};">Message</p>
                    <div style="margin:0;font-size:15px;color:${TEXT_DARK};line-height:1.6;background-color:${BG_LIGHT};border-radius:8px;padding:16px;border:1px solid #e4e4e7;">${safeMessage}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:40px 40px 0;">
              <hr style="border:none;border-top:1px solid #e4e4e7;margin:0;">
            </td>
          </tr>
          <tr>
            <td style="padding:24px 40px 32px;" align="center">
              <p style="margin:0 0 4px;font-size:13px;color:${TEXT_MUTED};">Virtual Assistant Provider</p>
              <p style="margin:0;font-size:13px;color:${TEXT_MUTED};">
                <a href="${SITE_URL}" style="color:${BRAND_ACCENT};text-decoration:none;">${SITE_URL}</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export const handler = async (event) => {
  try {
    const { name, email, phone, message, website } = JSON.parse(event.body);

    // Honeypot check
    if (website) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
      };
    }

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields." }),
      };
    }

    const htmlBody = buildHtml({ name, email, phone, message });
    const textBody = `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}`;

    await ses.send(
      new SendEmailCommand({
        Source: process.env.SENDER_EMAIL,
        Destination: { ToAddresses: [process.env.RECIPIENT_EMAIL] },
        ReplyToAddresses: [email],
        Message: {
          Subject: { Data: `New Contact Form Submission from ${name}` },
          Body: {
            Text: { Data: textBody },
            Html: { Data: htmlBody },
          },
        },
      }),
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send message." }),
    };
  }
};
