import './style.css'

// Initialize support chat links
function initializeSupportLinks() {
  const supportNumber = import.meta.env.VITE_SUPPORT_NUMBER || '62819808982'
  const supportMessage = import.meta.env.VITE_SUPPORT_MESSAGE || 'Halo Tim Adakami, saya butuh bantuan...'
  const chatLink = `https://wa.me/${supportNumber}?text=${encodeURIComponent(supportMessage)}`

  // Update all chat buttons
  const allChatButtons = document.querySelectorAll('.support-chat-link')
  allChatButtons.forEach(button => {
    button.href = chatLink
  })

  // Format and display phone numbers
  const displayNumbers = document.querySelectorAll('.help-contact-display')
  const formattedNum = formatPhoneNumber(supportNumber)
  displayNumbers.forEach(span => {
    span.innerText = formattedNum
  })
}

// Format phone number for display
function formatPhoneNumber(number) {
  if (number.length <= 11) {
    return '0' + number.substring(2, 5) + '-' + number.substring(5, 8) + '-' + number.substring(8)
  }
  return '0' + number.substring(2, 5) + '-' + number.substring(5, 9) + '-' + number.substring(9)
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeSupportLinks)
} else {
  initializeSupportLinks()
}
