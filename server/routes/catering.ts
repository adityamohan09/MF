import { RequestHandler } from "express";

export const handleCatering: RequestHandler = async (req, res) => {
  const { name, email, phone, location, guests, message } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !location || !guests) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Log the catering inquiry
    console.log(`\n📋 NEW CATERING INQUIRY:`);
    console.log(`   Name: ${name}`);
    console.log(`   Email: ${email}`);
    console.log(`   Phone: ${phone}`);
    console.log(`   Location: ${location}`);
    console.log(`   Guests: ${guests}`);
    if (message) console.log(`   Message: ${message}`);
    console.log();

    // In production with RESEND_API_KEY configured:
    // Send email to admin about the catering inquiry
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const ADMIN_EMAIL = "adityamohan2026@gmail.com";

    if (RESEND_API_KEY) {
      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "onboarding@resend.dev",
            to: ADMIN_EMAIL,
            subject: `New Catering Inquiry from ${name}`,
            html: `
              <h2>New Catering Inquiry</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Event Location:</strong> ${location}</p>
              <p><strong>Number of Guests:</strong> ${guests}</p>
              ${message ? `<p><strong>Additional Details:</strong></p><p>${message}</p>` : ""}
              <hr />
              <p>Please contact the customer at your earliest convenience with a catering quote.</p>
            `,
          }),
        });

        const responseData = await response.json();
        if (!response.ok) {
          console.error("Resend API error:", responseData);
        } else {
          console.log("✅ Email sent successfully:", responseData.id);
        }
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
      }
    }

    res.json({
      success: true,
      message: "Catering inquiry received! We will contact you soon.",
      data: { name, email, phone, location, guests },
    });
  } catch (error) {
    console.error("Catering inquiry error:", error);
    res.status(500).json({
      error: "Failed to process catering inquiry",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
