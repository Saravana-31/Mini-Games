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

// Alternative method: Send one email with all recipients listed in the template
export const sendFeedbackToAll = async (formData: {
  name: string
  email: string
  feedback: string
}) => {
  try {
    emailjs.init(PUBLIC_KEY)

    // Create a detailed message with all recipient info
    const detailedMessage = `
FEEDBACK FROM: ${formData.name} (${formData.email})

MESSAGE:
${formData.feedback}

---
This feedback should be sent to all team members:
1. selvasenthil2006@gmail.com
2. praveenkumarr.23aim@kongu.edu
3. vedhak.23aim@kongu.edu
4. pradeepas.23aim@kongu.edu
5. noorshifamj.23aim@kongu.edu

Please ensure all team members receive this feedback.
---
    `

    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        to_email: "selvasenthil2006@gmail.com", // Primary recipient
        message: detailedMessage,
        reply_to: formData.email,
        subject: `URGENT: New Feedback from ${formData.name} - Please Forward to All Team Members`,
        all_recipients: RECIPIENTS.join(", "),
        recipient_1: "selvasenthil2006@gmail.com",
        recipient_2: "praveenkumarr.23aim@kongu.edu",
        recipient_3: "vedhak.23aim@kongu.edu",
        recipient_4: "pradeepas.23aim@kongu.edu",
        recipient_5: "noorshifamj.23aim@kongu.edu",
      },
      PUBLIC_KEY,
    )

    console.log("Feedback email sent with all recipients listed:", result)
    return {
      status: 200,
      message: `Feedback sent to primary recipient with instructions to forward to all ${RECIPIENTS.length} team members`,
      recipients: RECIPIENTS.length,
    }
  } catch (error) {
    console.error("EmailJS error:", error)
    throw new Error(`Failed to send feedback: ${error}`)
  }
}
