import emailjs from "@emailjs/browser"

const SERVICE_ID = "service_1ines6y"
const TEMPLATE_ID = "template_dgr3cxs"
const PUBLIC_KEY = "QjTZEjuOXnFVnVH4h"

// All recipients
const RECIPIENTS = [
  "selvasenthil2006@gmail.com",
  "praveenkumarr.23aim@kongu.edu",
  "vedhak.23aim@kongu.edu",
  "pradeepas.23aim@kongu.edu",
  "noorshifamj.23aim@kongu.edu",
]

export const sendFeedback = async (formData: {
  name: string
  email: string
  feedback: string
}) => {
  try {
    // Initialize EmailJS
    emailjs.init(PUBLIC_KEY)

    // Send ONE email with all recipients in the template variables
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.feedback,
        reply_to: formData.email,
        subject: `New Feedback from ${formData.name} - Indian Laws Learning Platform`,

        // Send all recipient emails as template variables
        to_email_1: "selvasenthil2006@gmail.com",
        to_email_2: "praveenkumarr.23aim@kongu.edu",
        to_email_3: "vedhak.23aim@kongu.edu",
        to_email_4: "pradeepas.23aim@kongu.edu",
        to_email_5: "noorshifamj.23aim@kongu.edu",

        // Also send as comma-separated list for CC field
        all_recipients: RECIPIENTS.join(", "),

        // Additional info
        total_recipients: RECIPIENTS.length,
        timestamp: new Date().toLocaleString(),
      },
      PUBLIC_KEY,
    )

    console.log("Feedback email sent successfully:", result)
    return {
      status: 200,
      message: `Feedback sent successfully to ${RECIPIENTS.length} recipients`,
      recipients: RECIPIENTS,
      successful: RECIPIENTS.length,
      failed: 0,
    }
  } catch (error) {
    console.error("EmailJS error:", error)
    throw new Error(`Failed to send feedback: ${error}`)
  }
}
