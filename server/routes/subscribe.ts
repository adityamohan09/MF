import { RequestHandler } from "express";

export const handleSubscribe: RequestHandler = async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  try {
    // Send email to admin using Resend API (if configured)
    // Otherwise, log to console for development

    const RECIPIENT_EMAIL = "adityamohan2026@gmail.com";
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (RESEND_API_KEY) {
      // Using Resend email service (recommended)
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "noreply@maharashtrafoodstall.com",
          to: RECIPIENT_EMAIL,
          subject: `New Email Subscription from ${email}`,
          html: `<p>New email subscription received from: <strong>${email}</strong></p>
                 <p>Consider adding them to your mailing list or contacting them with updates about Maharashtra Food Stall.</p>`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }
    } else {
      // Development mode - log to console
      console.log(`✅ New email subscription: ${email}`);
      console.log(`   (To receive emails in production, set up RESEND_API_KEY)`);
    }

    res.json({
      success: true,
      message: "Email received successfully! Thank you for subscribing.",
      email: email,
    });
  } catch (error) {
    console.error("Subscription error:", error);
    res.status(500).json({
      error: "Failed to process subscription",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
