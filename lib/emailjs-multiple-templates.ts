import emailjs from "@emailjs/browser"

const SERVICE_ID = "service_1ines6y"
const PUBLIC_KEY = "QjTZEjuOXnFVnVH4h"

// You would need to create 5 different templates, each with a different recipient
const TEMPLATE_CONFIGS = [
  { templateId: "template_dgr3cxs", email: "selvasenthil2006@gmail.com" },
  { templateId: "template_user2", email: "praveenkumarr.23aim@kongu.edu" }, // Create this template
  { templateId: "template_user3", email: "vedhak.23aim@kongu.edu" }, // Create this template
  { templateId: "template_user4", email: "pradeepas.23aim@kongu.edu" }, // Create this template
  { templateId: "template_user5", email: "noorshifamj.23aim@kongu.edu" }, // Create this template
]

export const sendFeedbackMultipleTemplates = async (formData: {
  name: string
  email: string
  feedback: string
}) => {
  try {
    emailjs.init(PUBLIC_KEY)

    // Send to each recipient using their specific template
    const emailPromises = TEMPLATE_CONFIGS.map(async (config) => {
      console.log(`Sending to ${config.email} using template ${config.templateId}`)

      return emailjs.send(
        SERVICE_ID,
        config.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: config.email,
          message: formData.feedback,
          reply_to: formData.email,
          subject: `New Feedback from ${formData.name} - Indian Laws Learning Platform`,
        },
        PUBLIC_KEY,
      )
    })

    const results = await Promise.allSettled(emailPromises)
    const successful = results.filter((result) => result.status === "fulfilled")
    const failed = results.filter((result) => result.status === "rejected")

    console.log(`Successfully sent to ${successful.length} recipients`)
    if (failed.length > 0) {
      console.error("Failed emails:", failed)
    }

    return {
      status: 200,
      message: `Feedback sent to ${successful.length} out of ${TEMPLATE_CONFIGS.length} recipients`,
      successful: successful.length,
      failed: failed.length,
      recipients: TEMPLATE_CONFIGS.map((config) => config.email),
    }
  } catch (error) {
    console.error("EmailJS error:", error)
    throw new Error(`Failed to send feedback: ${error}`)
  }
}
