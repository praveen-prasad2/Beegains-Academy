import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { firstname, secondname,email,whatsappnumber, contact, place, course, classType, message } = data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App Password for Gmail
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "duophtechnologies@gmail.com", // where you want to receive form data
      subject: "New Student Enrollment",
      html: `
        <h3>Student Enrollment Details</h3>
        <p><strong>First Name:</strong> ${firstname}</p>
        <p><strong>Second Name:</strong> ${secondname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Whatsapp Number:</strong> ${whatsappnumber}</p>
        <p><strong>Place:</strong> ${place}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Class Type:</strong> ${classType}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false, error }), { status: 500 });
  }
}
