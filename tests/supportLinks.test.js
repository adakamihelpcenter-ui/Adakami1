import assert from 'node:assert/strict'
import test from 'node:test'

import {
  createSupportChatLink,
  formatPhoneNumber,
  initializeSupportLinks,
} from '../src/supportLinks.js'

test('createSupportChatLink encodes the support message', () => {
  const link = createSupportChatLink('6281234567890', 'Halo, butuh bantuan & info')

  assert.equal(
    link,
    'https://wa.me/6281234567890?text=Halo%2C%20butuh%20bantuan%20%26%20info',
  )
})

test('formatPhoneNumber formats Indonesian support numbers consistently', () => {
  assert.equal(formatPhoneNumber('62819808982'), '0819-808-982')
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
    supportNumber: '6281234567890',
    supportMessage: 'Saya perlu bantuan',
  })

  assert.equal(chatButton.href, 'https://wa.me/6281234567890?text=Saya%20perlu%20bantuan')
  assert.equal(footerButton.href, chatButton.href)
  assert.equal(visibleNumber.textContent, '0812-3456-7890')
})
