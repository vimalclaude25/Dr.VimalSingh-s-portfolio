// ============================================================
// UPESSC Test Assistant — Message Generator
// 10+ Hinglish/Hindi template variations per message type
// ============================================================

import type { MessageType } from './automation-types'

export interface TestContext {
  test_id: string
  test_number: number
  subject: string
  unit: string
  unit_title: string
  test_title: string
  testmoz_url: string
  slot: 'Slot 1' | 'Slot 2'
  date: string
  start_time: string   // e.g. "7:00 PM"
  end_time: string     // e.g. "7:30 PM"
  date_formatted: string // e.g. "17 September 2026"
}

// ── Helper ────────────────────────────────────────────────────
function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

// ── Motivational closings (randomized) ───────────────────────
const CLOSINGS = [
  'Practice Today. Perform Tomorrow. 🎯',
  'हर test आपको UPESSC के करीब ले जाता है! 💪',
  'Consistency is the key to success! 🗝️',
  'सफलता उनकी होती है जो रुकते नहीं। चलते रहें! 🚀',
  'Every MCQ solved = One step closer to selection! ✅',
  'आज की practice कल के result को shape करती है। 🌟',
  'UPESSC 2026 — Your time is now! ⚡',
  'Smart study + Regular practice = Success Formula! 📐',
  'Believe in yourself. You are made for this! 🙌',
  'जो आज practice करेगा, वो कल selection पाएगा! 🎖️',
]

// ── Opening lines per type ────────────────────────────────────
const THIRTY_MIN_OPENERS = [
  '⏰ UPESSC 2026 TEST ALERT',
  '📢 ध्यान दें! Test शुरू होने वाला है!',
  '🔔 30 Minutes Remaining — Get Ready!',
  '⚡ UPESSC Test Countdown Begins!',
  '📣 आधे घंटे में शुरू होगा आज का Test!',
  '🎯 30 मिनट बाकी — तैयारी पूरी करें!',
  '⏰ Time to Gear Up — 30 Min Alert!',
  '🔔 UPESSC 2026 — आज का Test नजदीक है!',
  '📚 सिर्फ 30 मिनट — Ready हो जाइए!',
  '💡 30-Minute Warning — Your Test Awaits!',
]

const TEN_MIN_OPENERS = [
  '🚨 10 MINUTES TO GO!',
  '⚡ सिर्फ 10 मिनट बाकी हैं!',
  '🔴 10 Min Alert — UPESSC Aspirants!',
  '⏱️ अब बस 10 मिनट — Device Ready करें!',
  '🚀 Last 10 Minutes — Log In Now!',
  '🔥 10-Minute Countdown Starts NOW!',
  '⚠️ Emergency Alert — 10 Minutes Left!',
  '📲 10 Minutes to Test — Open the Link!',
  '🎯 तैयार हो जाइए — 10 मिनट में Test!',
  '⏰ URGENT — Test shuru hone wala hai!',
]

const LIVE_OPENERS = [
  '🚨 TEST LIVE NOW 🚨',
  '🟢 TEST IS LIVE — START NOW!',
  '🔴 LIVE: UPESSC Test Shuru Ho Gaya!',
  '⚡ GO GO GO — Test is LIVE!',
  '🎯 Test Window Open — Join Immediately!',
  '🚀 TEST LIVE — अभी शुरू करें!',
  '🟢 आपका Test Live है — देर न करें!',
  '🔔 LIVE ALERT — Test Started!',
  '📲 Test Link Active — Start Now!',
  '✅ TEST LIVE — Click and Begin!',
]

const FIVE_MIN_OPENERS = [
  '⚠️ 5 MINUTES REMAINING!',
  '⏱️ सिर्फ 5 मिनट बचे हैं — जल्दी करें!',
  '🚨 Final 5 Minutes — Submit Soon!',
  '🔴 5-Minute Warning — Wrap Up!',
  '⏰ Last 5 Minutes — Complete Your Test!',
  '⚡ अगर test दे रहे हैं तो submit करें!',
  '🎯 5 Min Left — Check Your Answers!',
  '📝 Last Chance to Complete All MCQs!',
  '⚠️ Time Running Out — 5 Min Alert!',
  '🔔 5 Minutes — Final Countdown!',
]

const SLOT_COMPLETE_OPENERS = [
  '✅ Slot 1 Test Window Closed!',
  '🕖 Slot 2 Test Window Closed!',
  '🔔 Test Session Complete!',
  '📊 आज के test का time पूरा हुआ!',
  '✔️ Test Slot Over — Results Awaited!',
  '🏁 Slot Complete — Well Done!',
  '⏹️ Test Window Closed for This Slot',
  '🎯 Session Ended — Great Effort Today!',
  '🔴 Slot Over — See You Next Time!',
  '📝 Test Completed — Stay Prepared!',
]

const ELEVEN_PM_OPENERS = [
  '🌙 आज के Test में शामिल नहीं हुए?',
  '🕚 Final Opportunity — 11 PM Alert!',
  '🌟 अभी भी chance है — Test Link Active!',
  '📲 Last Reminder — Test Still Open!',
  '🔔 11 PM — Test Window Still Live!',
  '⏰ रात 11 बज गए — क्या आपने test दिया?',
  '🚨 Final Call — Test Open Till Midnight!',
  '🌙 अभी join करें — Last Chance!',
  '💡 Don\'t Miss Out — Test Available Now!',
  '📣 11 PM Reminder — Test Ka Last Chance!',
]

const TWELVE_AM_OPENERS = [
  '🔴 Test Window Officially Closed!',
  '⛔ TEST CLOSED — Midnight Reached!',
  '🌑 12 AM — आज का Test बंद हो गया!',
  '🔒 Test Window Closed for Today!',
  '⏹️ UPESSC Test — Session Ended!',
  '🕛 Midnight — Test Closed!',
  '📵 Test Link Deactivated for Today!',
  '🔴 Closed — Practice Again Tomorrow!',
  '⛔ आज का Test Window बंद हो गया!',
  '🌙 All Done for Today — Rest & Recharge!',
]

// ── Generator Functions ───────────────────────────────────────

function gen30MinReminder(ctx: TestContext): string {
  const opener = pick(THIRTY_MIN_OPENERS)
  const closing = pick(CLOSINGS)
  const variations = [
    `${opener}

आज का test शुरू होने में सिर्फ 30 मिनट बाकी हैं!

📚 ${ctx.subject}
📖 ${ctx.unit_title}
📝 ${ctx.test_title}

🎯 50 MCQs  |  ⏱️ 20 Minutes
🕖 Test Time: ${ctx.start_time}

अपना mobile/laptop और internet connection ready रखें।

🔗 Test Link:
${ctx.testmoz_url}

${closing}`,

    `${opener}

UPESSC 2026 aspirants — आज का test ${ctx.start_time} पर शुरू होगा!

📝 ${ctx.test_title}
📚 Subject: ${ctx.subject}
📖 Unit: ${ctx.unit_title}

✅ 50 Questions  ✅ 20 Minutes  ✅ Online

सिर्फ 30 मिनट बाकी हैं — अभी से तैयार हो जाइए।

🔗 ${ctx.testmoz_url}

${closing}`,

    `${opener}

🗓️ Date: ${ctx.date_formatted}
⏰ ${ctx.start_time} – ${ctx.end_time}

📚 ${ctx.subject}  |  📖 ${ctx.unit_title}
📝 Test: ${ctx.test_title}

Format: 50 MCQs | 20 Minutes | Online (Testmoz)

30 मिनट में test शुरू होगा — device ready रखें!

👉 Test Link: ${ctx.testmoz_url}

${closing}`,

    `${opener}

UPESSC 2026 Free Test Series

📝 आज का test:
• Subject: ${ctx.subject}
• Unit: ${ctx.unit_title}
• Questions: 50 MCQs
• Duration: 20 Minutes
• Time: ${ctx.start_time}

30 मिनट बाकी — Internet check करें, link ready रखें।

🔗 ${ctx.testmoz_url}

${closing}`,

    `${opener}

⏳ Countdown: 30 Minutes

आज का UPESSC 2026 test:
📚 ${ctx.subject} — ${ctx.unit_title}
📝 ${ctx.test_title}

⏱️ 20 मिनट में 50 सवाल हल करने हैं।
🕖 Starting: ${ctx.start_time}

अभी से browser में link open करके रखें:
${ctx.testmoz_url}

${closing}`,
  ]
  return pick(variations)
}

function gen10MinAlert(ctx: TestContext): string {
  const opener = pick(TEN_MIN_OPENERS)
  const closing = pick(CLOSINGS)
  const variations = [
    `${opener}

UPESSC 2026 aspirants, get ready!

📝 ${ctx.test_title}
📚 ${ctx.subject}  |  📖 ${ctx.unit_title}
🎯 50 MCQs  |  ⏱️ 20 Minutes

🕖 Starting at: ${ctx.start_time}

अब तैयारी नहीं — performance check करने का समय है!

🔗 ${ctx.testmoz_url}`,

    `${opener}

UPESSC 2026 Free Test Series

📚 ${ctx.subject}
📖 ${ctx.unit_title}
📝 ${ctx.test_title}

बस 10 मिनट में test live होगा!
✅ 50 Questions | 20 Minutes | Testmoz

अभी link open करें और login करें:
🔗 ${ctx.testmoz_url}

${closing}`,

    `${opener}

⏰ ${ctx.start_time} पर test शुरू होगा।

📝 ${ctx.test_title}
📚 ${ctx.subject} — ${ctx.unit_title}

🎯 50 MCQs in 20 Minutes

Device ready है? Internet check किया?
Link: 🔗 ${ctx.testmoz_url}

Don't be late — every minute counts! ⚡`,

    `${opener}

Last 10 मिनट में अपना screen lock OFF करें।
Browser में यह link paste करें:

🔗 ${ctx.testmoz_url}

Test Details:
📚 ${ctx.subject}
📖 ${ctx.unit_title}
📝 ${ctx.test_title}
⏱️ 50 MCQs | 20 Minutes
🕖 Starts: ${ctx.start_time}

${closing}`,

    `${opener}

आज का UPESSC 2026 Test — 10 मिनट में LIVE!

🔴 Subject: ${ctx.subject}
🔴 Unit: ${ctx.unit_title}
🔴 Test: ${ctx.test_title}
🔴 Time: ${ctx.start_time}
🔴 MCQs: 50 | Duration: 20 Min

Direct Link 👉 ${ctx.testmoz_url}

${closing}`,
  ]
  return pick(variations)
}

function genTestLive(ctx: TestContext): string {
  const opener = pick(LIVE_OPENERS)
  const closing = pick(CLOSINGS)
  const variations = [
    `${opener}

UPESSC 2026 Free Test Series

📝 ${ctx.test_title}
📚 ${ctx.subject}
📖 ${ctx.unit_title}

🎯 50 MCQs  |  ⏱️ 20 Minutes
🕖 TEST IS LIVE NOW!

अपना Test अभी शुरू करें:
🔗 ${ctx.testmoz_url}

${closing}`,

    `${opener}

UPESSC 2026 — Test Window Open!

📚 Subject: ${ctx.subject}
📖 Unit: ${ctx.unit_title}
📝 ${ctx.test_title}

✅ 50 Questions  ✅ 20 Minutes
🕖 ${ctx.start_time} – ${ctx.end_time}

🔗 Click to Start:
${ctx.testmoz_url}

All the Best! 💪🎯`,

    `${opener}

🏁 UPESSC 2026 Test Series — Live Now!

📝 ${ctx.test_title}
📚 ${ctx.subject}  |  📖 ${ctx.unit_title}

Format:
• 50 MCQs
• 20 Minutes
• Testmoz Platform

जो देना है — अभी दें! Link open है:
🔗 ${ctx.testmoz_url}

${closing}`,

    `${opener}

Test का इंतजार खत्म!

UPESSC 2026 Free Test:
📚 ${ctx.subject}
📖 ${ctx.unit_title}
📝 ${ctx.test_title}

🎯 50 MCQs in 20 Minutes
🔗 Join Now: ${ctx.testmoz_url}

आज का test आज ही दें — कल का wait न करें!`,

    `${opener}

आज का UPESSC Test LIVE है!

📝 ${ctx.test_title}
📚 ${ctx.subject} — ${ctx.unit_title}
⏱️ 20 मिनट | 50 MCQs

अभी link खोलें और test शुरू करें:
👉 ${ctx.testmoz_url}

${closing}`,
  ]
  return pick(variations)
}

function gen5MinWarning(ctx: TestContext): string {
  const opener = pick(FIVE_MIN_OPENERS)
  const closing = pick(CLOSINGS)
  const variations = [
    `${opener}

UPESSC 2026 aspirants — अगर अभी तक test शुरू नहीं किया, तो जल्दी करें!

📝 ${ctx.test_title}
📚 ${ctx.subject}  |  📖 ${ctx.unit_title}
⏱️ 5 Minutes Left  |  🕖 Ends: ${ctx.end_time}

🔗 ${ctx.testmoz_url}

Hurry Up! ⚡`,

    `${opener}

UPESSC 2026 Test — Last 5 Minutes!

जो candidates अभी test दे रहे हैं:
✅ Answers check करें
✅ Blank MCQs fill करें
✅ Submit button ready रखें

📝 ${ctx.test_title}
🔗 ${ctx.testmoz_url}

${closing}`,

    `${opener}

⏰ Slot ends at: ${ctx.end_time}

अगर आपने test शुरू नहीं किया:
👉 ${ctx.testmoz_url}

📚 ${ctx.subject} | 📖 ${ctx.unit_title}
🎯 50 MCQs | ⏱️ 20 Min

Time is running out! ⚡`,
  ]
  return pick(variations)
}

function genSlotComplete(ctx: TestContext): string {
  const opener = pick(SLOT_COMPLETE_OPENERS)
  const slotLabel = ctx.slot === 'Slot 1' ? 'Slot 1 (7:00 PM – 7:30 PM)' : 'Slot 2 (8:00 PM – 8:30 PM)'
  const variations = [
    `${opener}

UPESSC 2026 Free Test Series

📝 ${ctx.test_title}
📚 ${ctx.subject}  |  📖 ${ctx.unit_title}
🕖 ${slotLabel}

इस slot का time पूरा हुआ।
जिन्होंने test दिया — बहुत अच्छा! 👏

अगला test schedule: drvimalsingh.in/online-test`,

    `${opener}

📝 ${ctx.test_title}
📚 ${ctx.subject}
🕖 ${slotLabel} — COMPLETE

Test session समाप्त हुआ।
Results जल्द आएंगे।

Stay consistent! कल का test miss मत करना। 🎯`,
  ]
  return pick(variations)
}

function gen11PMFinal(ctx: TestContext, extendedUntil = '00:00'): string {
  const opener = pick(ELEVEN_PM_OPENERS)
  const closing = pick(CLOSINGS)
  const variations = [
    `${opener}

UPESSC 2026 — Test अभी भी available है!

📝 ${ctx.test_title}
📚 ${ctx.subject}  |  📖 ${ctx.unit_title}

🌙 Test Window Open Till: ${extendedUntil === '00:00' ? 'Midnight (12:00 AM)' : extendedUntil}

अगर आज नहीं दिया तो यह आखिरी मौका है:
🔗 ${ctx.testmoz_url}

${closing}`,

    `${opener}

आज के निर्धारित समय में Test नहीं दे पाए?
अब Test Window रात ${extendedUntil === '00:00' ? '12:00 बजे' : extendedUntil} तक खुली है।

📝 ${ctx.test_title}
📚 ${ctx.subject}
📖 ${ctx.unit_title}

अभी join करें:
🔗 ${ctx.testmoz_url}

${closing}`,

    `${opener}

11 PM पर भी test link active है!

📚 ${ctx.subject} — ${ctx.unit_title}
📝 ${ctx.test_title}

यह आज का final chance है।
Link: 🔗 ${ctx.testmoz_url}

${closing}`,
  ]
  return pick(variations)
}

function gen12AMClosed(ctx: TestContext): string {
  const opener = pick(TWELVE_AM_OPENERS)
  const variations = [
    `${opener}

UPESSC 2026 — ${ctx.test_title}

📚 ${ctx.subject}  |  📖 ${ctx.unit_title}
🗓️ ${ctx.date_formatted}

आज का test session समाप्त हो गया।

जिन्होंने participate किया — बहुत बढ़िया! 👏
जो miss हो गया — कल तैयार रहें! 💪

Schedule देखें: drvimalsingh.in/online-test`,

    `${opener}

UPESSC 2026 Test Session Closed.

📝 ${ctx.test_title}
📚 ${ctx.subject}
🗓️ ${ctx.date_formatted}

आज के लिए test window बंद।
Rest करें और कल के test की preparation शुरू करें।

See you tomorrow! 🌅`,
  ]
  return pick(variations)
}

// ── Main export ───────────────────────────────────────────────
export function generateMessage(ctx: TestContext, messageType: MessageType, extendedUntil?: string): string {
  switch (messageType) {
    case '30_MIN_REMINDER':  return gen30MinReminder(ctx)
    case '10_MIN_ALERT':     return gen10MinAlert(ctx)
    case 'TEST_LIVE':        return genTestLive(ctx)
    case '5_MIN_WARNING':    return gen5MinWarning(ctx)
    case 'SLOT_COMPLETE':    return genSlotComplete(ctx)
    case '11PM_FINAL':       return gen11PMFinal(ctx, extendedUntil)
    case '12AM_CLOSED':      return gen12AMClosed(ctx)
    default:                 return genTestLive(ctx)
  }
}
