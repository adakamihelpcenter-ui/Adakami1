import assert from 'node:assert/strict'
import test from 'node:test'

import {
  createSupportChatLink,
  formatPhoneNumber,
  initializeSupportLinks,
} from '../src/supportLinks.js'

test('createSupportChatLink encodes the support message', () => {
  const link = createSupportChatLink('628197960177', 'Halo, butuh bantuan & info')

  assert.equal(
    link,
    'https://wa.me/628197960177?text=Halo%2C%20butuh%20bantuan%20%26%20info',
  )
})

test('formatPhoneNumber formats Indonesian support numbers consistently', () => {
  assert.equal(formatPhoneNumber('628123456789'), '0812-3456-789')
  assert.equal(formatPhoneNumber('+62 812-3456-7890'), '0812-3456-7890')
  assert.equal(formatPhoneNumber('081234567890'), '0812-3456-7890')
})

test('initializeSupportLinks updates chat links and visible contact numbers', () => {
  const chatButton = { href: '' }
  const footerButton = { href: '' }
  const visibleNumber = { textContent: '' }
  const documentRef = {
    querySelectorAll(selector) {
      if (selector === '.support-chat-link') {
        return [chatButton, footerButton]
      }

      if (selector === '.help-contact-display') {
        return [visibleNumber]
      }

      return []
    },
  }

  initializeSupportLinks({
    documentRef,
    supportNumber: '628197960177',
    supportMessage: 'Saya perlu bantuan',
  })

  assert.equal(chatButton.href, 'https://wa.me/628197960177?text=Saya%20perlu%20bantuan')
  assert.equal(footerButton.href, chatButton.href)
  assert.equal(visibleNumber.textContent, '0819-7960-177')
})
