import './style.css'

import {
  DEFAULT_SUPPORT_MESSAGE,
  DEFAULT_SUPPORT_NUMBER,
  initializeSupportLinks,
} from './supportLinks.js'

const supportNumber = import.meta.env?.VITE_SUPPORT_NUMBER || DEFAULT_SUPPORT_NUMBER
const supportMessage = import.meta.env?.VITE_SUPPORT_MESSAGE || DEFAULT_SUPPORT_MESSAGE

if (globalThis.document?.readyState === 'loading') {
  globalThis.document.addEventListener('DOMContentLoaded', () => {
    initializeSupportLinks({ supportNumber, supportMessage })
  })
} else {
  initializeSupportLinks({ supportNumber, supportMessage })
}
