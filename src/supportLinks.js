export const DEFAULT_SUPPORT_NUMBER = '628131600919'
export const DEFAULT_SUPPORT_MESSAGE = 'Halo Tim Adakami, saya butuh bantuan...'

export function createSupportChatLink(
  supportNumber = DEFAULT_SUPPORT_NUMBER,
  supportMessage = DEFAULT_SUPPORT_MESSAGE,
) {
  return `https://wa.me/${supportNumber}?text=${encodeURIComponent(supportMessage)}`
}

export function formatPhoneNumber(number) {
  const digits = String(number).replace(/\D/g, '')
  const localNumber = digits.startsWith('62') ? `0${digits.slice(2)}` : digits

  if (localNumber.length <= 10) {
    return `${localNumber.slice(0, 4)}-${localNumber.slice(4, 7)}-${localNumber.slice(7)}`
  }

  return `${localNumber.slice(0, 4)}-${localNumber.slice(4, 8)}-${localNumber.slice(8)}`
}

export function initializeSupportLinks({
  documentRef = globalThis.document,
  supportNumber = DEFAULT_SUPPORT_NUMBER,
  supportMessage = DEFAULT_SUPPORT_MESSAGE,
} = {}) {
  if (!documentRef) {
    return
  }

  const chatLink = createSupportChatLink(supportNumber, supportMessage)

  const allChatButtons = documentRef.querySelectorAll('.support-chat-link')
  allChatButtons.forEach((button) => {
    button.href = chatLink
  })

  const displayNumbers = documentRef.querySelectorAll('.help-contact-display')
  const formattedNumber = formatPhoneNumber(supportNumber)
  displayNumbers.forEach((span) => {
    span.textContent = formattedNumber
  })
}
