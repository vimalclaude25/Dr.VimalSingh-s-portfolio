import { validateTestSeriesData } from './lib/test-series-data'

console.log('Running Programmatic QA Checks for Online Test Portal...\n')
const report = validateTestSeriesData()

console.log('--------------------------------------------------')
console.log('VALIDATION RESULT:', report.isValid ? 'PASSED ✅' : 'FAILED ❌')
console.log('--------------------------------------------------')
console.log('Total Tests:', report.totalTests)
console.log('GK Tests Count:', report.gkTestsCount)
console.log('Education Tests Count:', report.eduTestsCount)
console.log('Total Test Days:', report.totalTestDays)
console.log('First Test Date:', report.firstDate)
console.log('Last Test Date:', report.lastDate)

if (report.errors.length > 0) {
  console.error('\nERRORS FOUND:')
  report.errors.forEach((err, idx) => console.error(`${idx + 1}. ${err}`))
  process.exit(1)
} else {
  console.log('\nAll 20 QA Requirements Successfully Verified!')
}
