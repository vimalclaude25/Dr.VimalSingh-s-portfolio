export interface TestItem {
  id: string
  subject: 'GK' | 'Education'
  unit: number
  unitTitle: string
  testNumber: number
  title: string
  date: string // YYYY-MM-DD
  day: string
  slot: 'Slot 1' | 'Slot 2'
  startTime: string
  endTime: string
  duration: number // in minutes
  questionCount: number
  difficulty: 'Standard' | 'Moderate' | 'Advanced'
  type: string
  testmozUrl: string
  status: 'available' | 'coming-soon' | 'completed'
}

export interface UnitInfo {
  unit: number
  subject: 'GK' | 'Education'
  title: string
  description?: string
  totalTests: number
}

export interface CalendarDaySchedule {
  date: string // YYYY-MM-DD
  formattedDate: string // e.g., 16 September 2026
  day: string
  dayNumber?: number // 1 to 40 for test days
  isTestDay: boolean
  isRevisionDay: boolean
  isExamDay: boolean
  slot1Test?: TestItem
  slot2Test?: TestItem
  note?: string
}

export const GK_UNITS: UnitInfo[] = [
  { unit: 1, subject: 'GK', title: 'Current Affairs', totalTests: 5 },
  { unit: 2, subject: 'GK', title: 'Teaching and Research Aptitude', totalTests: 5 },
  { unit: 3, subject: 'GK', title: 'Information and Communication Technology (ICT)', totalTests: 5 },
  { unit: 4, subject: 'GK', title: 'People and Environment', totalTests: 5 },
  { unit: 5, subject: 'GK', title: 'Indian History and Geography', totalTests: 5 },
  { unit: 6, subject: 'GK', title: 'Indian Constitution and Economy', totalTests: 5 },
]

export const EDUCATION_UNITS: UnitInfo[] = [
  { unit: 1, subject: 'Education', title: 'Philosophical Foundation of Education', totalTests: 5 },
  { unit: 2, subject: 'Education', title: 'Sociological Foundations of Education', totalTests: 5 },
  { unit: 3, subject: 'Education', title: 'Psychological Foundations of Education', totalTests: 5 },
  { unit: 4, subject: 'Education', title: 'Educational Research', totalTests: 5 },
  { unit: 5, subject: 'Education', title: 'Educational Administration & Management', totalTests: 5 },
  { unit: 6, subject: 'Education', title: 'Measurement and Evaluation in Education', totalTests: 5 },
  { unit: 7, subject: 'Education', title: 'Educational Technology', totalTests: 5 },
  { unit: 8, subject: 'Education', title: 'Inclusive Education', totalTests: 5 },
  { unit: 9, subject: 'Education', title: 'History, Politics and Economics of Education', totalTests: 5 },
  { unit: 10, subject: 'Education', title: 'Curriculum Studies', totalTests: 5 },
]

export interface DailySlotPair {
  dayNumber: number
  date: string
  dayName: string
  slot1: { subject: 'GK' | 'Education'; unit: number; testNumber: number }
  slot2: { subject: 'GK' | 'Education'; unit: number; testNumber: number }
}

export const TEST_DAYS_MAPPING: DailySlotPair[] = [
  // Days 1-5 (GK U1 & Edu U1)
  { dayNumber: 1, date: '2026-09-16', dayName: 'Wednesday', slot1: { subject: 'GK', unit: 1, testNumber: 1 }, slot2: { subject: 'Education', unit: 1, testNumber: 1 } },
  { dayNumber: 2, date: '2026-09-18', dayName: 'Friday', slot1: { subject: 'GK', unit: 1, testNumber: 2 }, slot2: { subject: 'Education', unit: 1, testNumber: 2 } },
  { dayNumber: 3, date: '2026-09-19', dayName: 'Saturday', slot1: { subject: 'GK', unit: 1, testNumber: 3 }, slot2: { subject: 'Education', unit: 1, testNumber: 3 } },
  { dayNumber: 4, date: '2026-09-21', dayName: 'Monday', slot1: { subject: 'GK', unit: 1, testNumber: 4 }, slot2: { subject: 'Education', unit: 1, testNumber: 4 } },
  { dayNumber: 5, date: '2026-09-22', dayName: 'Tuesday', slot1: { subject: 'GK', unit: 1, testNumber: 5 }, slot2: { subject: 'Education', unit: 1, testNumber: 5 } },

  // Days 6-10 (GK U2 & Edu U2)
  { dayNumber: 6, date: '2026-09-24', dayName: 'Thursday', slot1: { subject: 'GK', unit: 2, testNumber: 1 }, slot2: { subject: 'Education', unit: 2, testNumber: 1 } },
  { dayNumber: 7, date: '2026-09-26', dayName: 'Saturday', slot1: { subject: 'GK', unit: 2, testNumber: 2 }, slot2: { subject: 'Education', unit: 2, testNumber: 2 } },
  { dayNumber: 8, date: '2026-09-27', dayName: 'Sunday', slot1: { subject: 'GK', unit: 2, testNumber: 3 }, slot2: { subject: 'Education', unit: 2, testNumber: 3 } },
  { dayNumber: 9, date: '2026-09-29', dayName: 'Tuesday', slot1: { subject: 'GK', unit: 2, testNumber: 4 }, slot2: { subject: 'Education', unit: 2, testNumber: 4 } },
  { dayNumber: 10, date: '2026-09-30', dayName: 'Wednesday', slot1: { subject: 'GK', unit: 2, testNumber: 5 }, slot2: { subject: 'Education', unit: 2, testNumber: 5 } },

  // Days 11-15 (GK U3 & Edu U3)
  { dayNumber: 11, date: '2026-10-02', dayName: 'Friday', slot1: { subject: 'GK', unit: 3, testNumber: 1 }, slot2: { subject: 'Education', unit: 3, testNumber: 1 } },
  { dayNumber: 12, date: '2026-10-03', dayName: 'Saturday', slot1: { subject: 'GK', unit: 3, testNumber: 2 }, slot2: { subject: 'Education', unit: 3, testNumber: 2 } },
  { dayNumber: 13, date: '2026-10-05', dayName: 'Monday', slot1: { subject: 'GK', unit: 3, testNumber: 3 }, slot2: { subject: 'Education', unit: 3, testNumber: 3 } },
  { dayNumber: 14, date: '2026-10-07', dayName: 'Wednesday', slot1: { subject: 'GK', unit: 3, testNumber: 4 }, slot2: { subject: 'Education', unit: 3, testNumber: 4 } },
  { dayNumber: 15, date: '2026-10-08', dayName: 'Thursday', slot1: { subject: 'GK', unit: 3, testNumber: 5 }, slot2: { subject: 'Education', unit: 3, testNumber: 5 } },

  // Days 16-20 (GK U4 & Edu U4)
  { dayNumber: 16, date: '2026-10-10', dayName: 'Saturday', slot1: { subject: 'GK', unit: 4, testNumber: 1 }, slot2: { subject: 'Education', unit: 4, testNumber: 1 } },
  { dayNumber: 17, date: '2026-10-11', dayName: 'Sunday', slot1: { subject: 'GK', unit: 4, testNumber: 2 }, slot2: { subject: 'Education', unit: 4, testNumber: 2 } },
  { dayNumber: 18, date: '2026-10-13', dayName: 'Tuesday', slot1: { subject: 'GK', unit: 4, testNumber: 3 }, slot2: { subject: 'Education', unit: 4, testNumber: 3 } },
  { dayNumber: 19, date: '2026-10-15', dayName: 'Thursday', slot1: { subject: 'GK', unit: 4, testNumber: 4 }, slot2: { subject: 'Education', unit: 4, testNumber: 4 } },
  { dayNumber: 20, date: '2026-10-16', dayName: 'Friday', slot1: { subject: 'GK', unit: 4, testNumber: 5 }, slot2: { subject: 'Education', unit: 4, testNumber: 5 } },

  // Days 21-25 (GK U5 & Edu U5)
  { dayNumber: 21, date: '2026-10-18', dayName: 'Sunday', slot1: { subject: 'GK', unit: 5, testNumber: 1 }, slot2: { subject: 'Education', unit: 5, testNumber: 1 } },
  { dayNumber: 22, date: '2026-10-19', dayName: 'Monday', slot1: { subject: 'GK', unit: 5, testNumber: 2 }, slot2: { subject: 'Education', unit: 5, testNumber: 2 } },
  { dayNumber: 23, date: '2026-10-21', dayName: 'Wednesday', slot1: { subject: 'GK', unit: 5, testNumber: 3 }, slot2: { subject: 'Education', unit: 5, testNumber: 3 } },
  { dayNumber: 24, date: '2026-10-23', dayName: 'Friday', slot1: { subject: 'GK', unit: 5, testNumber: 4 }, slot2: { subject: 'Education', unit: 5, testNumber: 4 } },
  { dayNumber: 25, date: '2026-10-24', dayName: 'Saturday', slot1: { subject: 'GK', unit: 5, testNumber: 5 }, slot2: { subject: 'Education', unit: 5, testNumber: 5 } },

  // Days 26-30 (GK U6 & Edu U6)
  { dayNumber: 26, date: '2026-10-26', dayName: 'Monday', slot1: { subject: 'GK', unit: 6, testNumber: 1 }, slot2: { subject: 'Education', unit: 6, testNumber: 1 } },
  { dayNumber: 27, date: '2026-10-27', dayName: 'Tuesday', slot1: { subject: 'GK', unit: 6, testNumber: 2 }, slot2: { subject: 'Education', unit: 6, testNumber: 2 } },
  { dayNumber: 28, date: '2026-10-29', dayName: 'Thursday', slot1: { subject: 'GK', unit: 6, testNumber: 3 }, slot2: { subject: 'Education', unit: 6, testNumber: 3 } },
  { dayNumber: 29, date: '2026-10-31', dayName: 'Saturday', slot1: { subject: 'GK', unit: 6, testNumber: 4 }, slot2: { subject: 'Education', unit: 6, testNumber: 4 } },
  { dayNumber: 30, date: '2026-11-01', dayName: 'Sunday', slot1: { subject: 'GK', unit: 6, testNumber: 5 }, slot2: { subject: 'Education', unit: 6, testNumber: 5 } },

  // Days 31-40 (Education U7 - U10)
  { dayNumber: 31, date: '2026-11-03', dayName: 'Tuesday', slot1: { subject: 'Education', unit: 7, testNumber: 1 }, slot2: { subject: 'Education', unit: 7, testNumber: 2 } },
  { dayNumber: 32, date: '2026-11-04', dayName: 'Wednesday', slot1: { subject: 'Education', unit: 7, testNumber: 3 }, slot2: { subject: 'Education', unit: 7, testNumber: 4 } },
  { dayNumber: 33, date: '2026-11-06', dayName: 'Friday', slot1: { subject: 'Education', unit: 7, testNumber: 5 }, slot2: { subject: 'Education', unit: 8, testNumber: 1 } },
  { dayNumber: 34, date: '2026-11-07', dayName: 'Saturday', slot1: { subject: 'Education', unit: 8, testNumber: 2 }, slot2: { subject: 'Education', unit: 8, testNumber: 3 } },
  { dayNumber: 35, date: '2026-11-09', dayName: 'Monday', slot1: { subject: 'Education', unit: 8, testNumber: 4 }, slot2: { subject: 'Education', unit: 8, testNumber: 5 } },
  { dayNumber: 36, date: '2026-11-11', dayName: 'Wednesday', slot1: { subject: 'Education', unit: 9, testNumber: 1 }, slot2: { subject: 'Education', unit: 9, testNumber: 2 } },
  { dayNumber: 37, date: '2026-11-12', dayName: 'Thursday', slot1: { subject: 'Education', unit: 9, testNumber: 3 }, slot2: { subject: 'Education', unit: 9, testNumber: 4 } },
  { dayNumber: 38, date: '2026-11-14', dayName: 'Saturday', slot1: { subject: 'Education', unit: 9, testNumber: 5 }, slot2: { subject: 'Education', unit: 10, testNumber: 1 } },
  { dayNumber: 39, date: '2026-11-15', dayName: 'Sunday', slot1: { subject: 'Education', unit: 10, testNumber: 2 }, slot2: { subject: 'Education', unit: 10, testNumber: 3 } },
  { dayNumber: 40, date: '2026-11-17', dayName: 'Tuesday', slot1: { subject: 'Education', unit: 10, testNumber: 4 }, slot2: { subject: 'Education', unit: 10, testNumber: 5 } },
]

// Helper to get unit title
export function getUnitTitle(subject: 'GK' | 'Education', unit: number): string {
  if (subject === 'GK') {
    const u = GK_UNITS.find((item) => item.unit === unit)
    return u ? u.title : `GK Unit ${unit}`
  } else {
    const u = EDUCATION_UNITS.find((item) => item.unit === unit)
    return u ? u.title : `Education Unit ${unit}`
  }
}

// Centralized registry for active Testmoz URLs keyed by Test ID
export const TESTMOZ_URL_MAP: Record<string, string> = {
  'gk-u1-t1': 'https://testmoz.com/q/15637736',
  'education-u1-t1': 'https://testmoz.com/q/15637846',
  'gk-u1-t2': 'https://testmoz.com/q/15638702',
  'education-u1-t2': 'https://testmoz.com/q/15638676',
  'gk-u1-t3': 'https://testmoz.com/q/15638828',
  'education-u1-t3': 'https://testmoz.com/q/15638940',
  'gk-u1-t4': 'https://testmoz.com/q/15644610',
  'education-u1-t4': 'https://testmoz.com/q/15644602',
  'gk-u1-t5': 'https://testmoz.com/q/15646386',
  'education-u1-t5': 'https://testmoz.com/q/15646388',
  'gk-u2-t1': 'https://testmoz.com/q/15653214',
  'education-u2-t1': 'https://testmoz.com/q/15653256',
  'gk-u2-t2': 'https://testmoz.com/q/15654594',
  'education-u2-t2': 'https://testmoz.com/q/15654608',
  'gk-u2-t3': 'https://testmoz.com/q/15662686',
  'education-u2-t3': 'https://testmoz.com/q/15662660',
  'gk-u2-t4': 'https://testmoz.com/q/15664222',
  'education-u2-t4': 'https://testmoz.com/q/15664242',
  'gk-u2-t5': 'https://testmoz.com/q/15664274',
  'education-u2-t5': 'https://testmoz.com/q/15664308',
  'gk-u3-t1': 'https://testmoz.com/q/15675318',
  'education-u3-t1': 'https://testmoz.com/q/15675346',
  'gk-u3-t2': 'https://testmoz.com/q/15675394',
  'education-u3-t2': 'https://testmoz.com/q/15675378',
  'gk-u3-t3': 'https://testmoz.com/q/15679168',
  'education-u3-t3': 'https://testmoz.com/q/15679190',
  'gk-u3-t4': 'https://testmoz.com/q/15679768',
  'education-u3-t4': 'https://testmoz.com/q/15679776',
  'gk-u3-t5': 'https://testmoz.com/q/15680582',
  'education-u3-t5': 'https://testmoz.com/q/15680598',
}

// Generate the 80 individual test items programmatically from the authoritative TEST_DAYS_MAPPING
export function generateTestSeriesData(): TestItem[] {
  const tests: TestItem[] = []

  TEST_DAYS_MAPPING.forEach((mapping) => {
    // Slot 1
    const s1UnitTitle = getUnitTitle(mapping.slot1.subject, mapping.slot1.unit)
    const s1Id = `${mapping.slot1.subject.toLowerCase()}-u${mapping.slot1.unit}-t${mapping.slot1.testNumber}`
    const s1TestmozUrl = TESTMOZ_URL_MAP[s1Id] || ''
    tests.push({
      id: s1Id,
      subject: mapping.slot1.subject,
      unit: mapping.slot1.unit,
      unitTitle: s1UnitTitle,
      testNumber: mapping.slot1.testNumber,
      title: `${mapping.slot1.subject} Unit ${mapping.slot1.unit} – ${s1UnitTitle} – Test ${mapping.slot1.testNumber}`,
      date: mapping.date,
      day: mapping.dayName,
      slot: 'Slot 1',
      startTime: '7:00 PM',
      endTime: '7:30 PM',
      duration: 20,
      questionCount: 50,
      difficulty: 'Moderate',
      type: 'MCQ',
      testmozUrl: s1TestmozUrl,
      status: s1TestmozUrl ? 'available' : 'coming-soon',
    })

    // Slot 2
    const s2UnitTitle = getUnitTitle(mapping.slot2.subject, mapping.slot2.unit)
    const s2Id = `${mapping.slot2.subject.toLowerCase()}-u${mapping.slot2.unit}-t${mapping.slot2.testNumber}`
    const s2TestmozUrl = TESTMOZ_URL_MAP[s2Id] || ''
    tests.push({
      id: s2Id,
      subject: mapping.slot2.subject,
      unit: mapping.slot2.unit,
      unitTitle: s2UnitTitle,
      testNumber: mapping.slot2.testNumber,
      title: `${mapping.slot2.subject} Unit ${mapping.slot2.unit} – ${s2UnitTitle} – Test ${mapping.slot2.testNumber}`,
      date: mapping.date,
      day: mapping.dayName,
      slot: 'Slot 2',
      startTime: '8:00 PM',
      endTime: '8:30 PM',
      duration: 20,
      questionCount: 50,
      difficulty: 'Moderate',
      type: 'MCQ',
      testmozUrl: s2TestmozUrl,
      status: s2TestmozUrl ? 'available' : 'coming-soon',
    })
  })

  return tests
}

export const testSeriesData: TestItem[] = generateTestSeriesData()

// Generate comprehensive master schedule (16 Sep 2026 to 19 Nov 2026)
export function getMasterCalendarSchedule(): CalendarDaySchedule[] {
  const calendar: CalendarDaySchedule[] = []
  const startDate = new Date('2026-09-16T00:00:00')
  const endDate = new Date('2026-11-19T00:00:00')

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  const testDaysMap = new Map<string, DailySlotPair>()
  TEST_DAYS_MAPPING.forEach((td) => testDaysMap.set(td.date, td))

  const curr = new Date(startDate)

  while (curr <= endDate) {
    const year = curr.getFullYear()
    const month = String(curr.getMonth() + 1).padStart(2, '0')
    const day = String(curr.getDate()).padStart(2, '0')
    const dateStr = `${year}-${month}-${day}`
    const formattedDate = `${curr.getDate()} ${monthNames[curr.getMonth()]} ${year}`
    const dayName = dayNames[curr.getDay()]

    if (dateStr === '2026-11-18' || dateStr === '2026-11-19') {
      calendar.push({
        date: dateStr,
        formattedDate,
        day: dayName,
        isTestDay: false,
        isRevisionDay: false,
        isExamDay: true,
        note: 'UPESSC ASSISTANT PROFESSOR EXAMINATION 2026 (No Unit Test Scheduled)',
      })
    } else if (testDaysMap.has(dateStr)) {
      const tdMap = testDaysMap.get(dateStr)!
      const slot1Test = testSeriesData.find(
        (t) => t.date === dateStr && t.slot === 'Slot 1'
      )
      const slot2Test = testSeriesData.find(
        (t) => t.date === dateStr && t.slot === 'Slot 2'
      )

      calendar.push({
        date: dateStr,
        formattedDate,
        day: dayName,
        dayNumber: tdMap.dayNumber,
        isTestDay: true,
        isRevisionDay: false,
        isExamDay: false,
        slot1Test,
        slot2Test,
      })
    } else {
      calendar.push({
        date: dateStr,
        formattedDate,
        day: dayName,
        isTestDay: false,
        isRevisionDay: true,
        isExamDay: false,
        note: "REVISION DAY — Revise today's completed units and prepare for the next test.",
      })
    }

    curr.setDate(curr.getDate() + 1)
  }

  return calendar
}

// PROGRAMMATIC QA VALIDATION UTILITY
export interface QAValidationReport {
  isValid: boolean
  totalTests: number
  gkTestsCount: number
  eduTestsCount: number
  totalTestDays: number
  firstDate: string
  lastDate: string
  errors: string[]
  logs: string[]
}

export function validateTestSeriesData(): QAValidationReport {
  const errors: string[] = []
  const logs: string[] = []

  // 1. Total tests = 80
  const total = testSeriesData.length
  if (total !== 80) errors.push(`Expected 80 tests, got ${total}`)

  // 2. GK tests = 30
  const gkTests = testSeriesData.filter((t) => t.subject === 'GK')
  if (gkTests.length !== 30) errors.push(`Expected 30 GK tests, got ${gkTests.length}`)

  // 3. Education tests = 50
  const eduTests = testSeriesData.filter((t) => t.subject === 'Education')
  if (eduTests.length !== 50) errors.push(`Expected 50 Education tests, got ${eduTests.length}`)

  // 4. Each GK unit has 5 tests
  for (let u = 1; u <= 6; u++) {
    const count = gkTests.filter((t) => t.unit === u).length
    if (count !== 5) errors.push(`GK Unit ${u} has ${count} tests, expected 5`)
  }

  // 5. Each Education unit has 5 tests
  for (let u = 1; u <= 10; u++) {
    const count = eduTests.filter((t) => t.unit === u).length
    if (count !== 5) errors.push(`Education Unit ${u} has ${count} tests, expected 5`)
  }

  // 6. Total test days = 40
  if (TEST_DAYS_MAPPING.length !== 40) {
    errors.push(`Expected 40 test days in mapping, got ${TEST_DAYS_MAPPING.length}`)
  }

  // 7 & 8. Questions = 50, Duration = 20
  testSeriesData.forEach((t) => {
    if (t.questionCount !== 50) errors.push(`Test ${t.id} questionCount is ${t.questionCount}, expected 50`)
    if (t.duration !== 20) errors.push(`Test ${t.id} duration is ${t.duration}, expected 20`)
  })

  // 9 & 10. Slots
  testSeriesData.forEach((t) => {
    if (t.slot === 'Slot 1' && (t.startTime !== '7:00 PM' || t.endTime !== '7:30 PM')) {
      errors.push(`Test ${t.id} Slot 1 time mismatch: ${t.startTime} - ${t.endTime}`)
    }
    if (t.slot === 'Slot 2' && (t.startTime !== '8:00 PM' || t.endTime !== '8:30 PM')) {
      errors.push(`Test ${t.id} Slot 2 time mismatch: ${t.startTime} - ${t.endTime}`)
    }
  })

  // 11 & 12. Dates range
  const dates = TEST_DAYS_MAPPING.map((d) => d.date).sort()
  const firstDate = dates[0]
  const lastDate = dates[dates.length - 1]

  if (firstDate !== '2026-09-16') errors.push(`First test date is ${firstDate}, expected 2026-09-16`)
  if (lastDate !== '2026-11-17') errors.push(`Last test date is ${lastDate}, expected 2026-11-17`)

  // 13. No tests after 17 November 2026
  testSeriesData.forEach((t) => {
    if (t.date > '2026-11-17') errors.push(`Test ${t.id} is scheduled after 2026-11-17: ${t.date}`)
  })

  // 16. No duplicate test IDs
  const idSet = new Set<string>()
  testSeriesData.forEach((t) => {
    if (idSet.has(t.id)) errors.push(`Duplicate test ID found: ${t.id}`)
    idSet.add(t.id)
  })

  // 17. No duplicate test numbers within a unit
  for (let u = 1; u <= 6; u++) {
    const nums = gkTests.filter((t) => t.unit === u).map((t) => t.testNumber)
    if (new Set(nums).size !== nums.length) errors.push(`Duplicate test numbers in GK Unit ${u}`)
  }
  for (let u = 1; u <= 10; u++) {
    const nums = eduTests.filter((t) => t.unit === u).map((t) => t.testNumber)
    if (new Set(nums).size !== nums.length) errors.push(`Duplicate test numbers in Education Unit ${u}`)
  }

  logs.push(`QA Check Complete: ${errors.length === 0 ? 'PASSED ALL QA CHECKS' : 'FAILED'}`)

  return {
    isValid: errors.length === 0,
    totalTests: total,
    gkTestsCount: gkTests.length,
    eduTestsCount: eduTests.length,
    totalTestDays: TEST_DAYS_MAPPING.length,
    firstDate,
    lastDate,
    errors,
    logs,
  }
}
