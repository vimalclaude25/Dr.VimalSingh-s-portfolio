const fs = require('fs');
const path = require('path');

function generatePdf(filename, docTitle, subtitle, metadata, sections) {
  // Build PDF 1.4 text content stream
  let streamContent = `BT
/F1 16 Tf
50 750 Td
(${escapePdf(docTitle)}) Tj
ET

BT
/F1 12 Tf
50 730 Td
(${escapePdf(subtitle)}) Tj
ET

BT
/F1 10 Tf
50 710 Td
(${escapePdf(metadata)}) Tj
ET

`;

  let y = 680;
  sections.forEach((sec) => {
    streamContent += `BT
/F1 11 Tf
50 ${y} Td
(${escapePdf(sec.title)}) Tj
ET

`;
    y -= 20;

    sec.lines.forEach((line) => {
      if (y < 50) return; // simple page bound safety
      streamContent += `BT
/F1 9 Tf
50 ${y} Td
(${escapePdf(line)}) Tj
ET

`;
      y -= 14;
    });
    y -= 10;
  });

  const streamLength = Buffer.byteLength(streamContent, 'utf-8');

  const pdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
5 0 obj
<< /Length ${streamLength} >>
stream
${streamContent}endstream
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000242 00000 n 
0000000319 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
${400 + streamLength}
%%EOF`;

  fs.writeFileSync(filename, pdf, 'utf-8');
}

function escapePdf(text) {
  return text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

const outDir = path.join(__dirname, '../public/course-materials');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Generate MED104 PDF
generatePdf(
  path.join(outDir, 'pyq-med104-midterm-2026.pdf'),
  'DEPARTMENT OF EDUCATION / EDUCATION TRAINING',
  'MID-SEMESTER EXAMINATION 2026-27 (Odd Semester)',
  'M.Ed. I Semester | PAPER IV - RESEARCH METHODS IN EDUCATION (MED104) | Max Marks: 30',
  [
    {
      title: 'SECTION A - Attempt All Questions (9 x 1 = 9 Marks)',
      lines: [
        '1. (a) Identify correct statements on Philosophy, Epistemology, Axiology, Positivism & Research Process.',
        '   (b) Identify correct statements on Practitioner Research, Inquiry, Quasi-Experimental Design & Replication.',
        '   (c) Epistemological Concerns in Research Situations & Educational Phenomenon.',
        '   (d) Analysis of Story Situations: Sources of Knowledge, Deductive/Inductive Reasoning & Scientific Method.',
        '   (e) M.Ed. Student Dialogue Analysis: Philosophy, Information, Intelligence and Wisdom.',
        '   (f) Role of Knowledge, Education and Research in Personal and Social Development.',
        '   (g) Matching Column I & II: Replication, Falsifiability, Precision, Parsimony, Generalization.',
        '   (h) Assertion (A) & Reason (R): The Research Process as a Slow, Steady and Systematic Exploration.',
        '   (i) Research Synthesis, Critical Examination, Knowledge Banks and Generational Transmission.'
      ]
    },
    {
      title: 'SECTION B - Short Answer Questions (Attempt any 3) (3 x 3 = 9 Marks)',
      lines: [
        '2. (a) Identify Basic, Applied and Action Research from three educational scenarios & frame research problems.',
        '   (b) Qualitative Research Approach: Interviews & Observation vs Numerical Scores for Online Learning Hesitation.',
        '   (c) Post-Positivism Approach: Fallibility of Measurement, Alternative Explanations & Research Limitations.',
        '   (d) Fundamental Research: Conceptual Basis of Children Developing Concept of Fairness.'
      ]
    },
    {
      title: 'SECTION C - Long Answer Questions (Attempt any 2) (2 x 6 = 12 Marks)',
      lines: [
        '3. (a) Research Windows: Past (British Period Policies), Present (Digital Learning) & Intervention (Science Achievement).',
        '   (b) Comparative Analysis: Pre-Positivism, Positivism and Post-Positivism (Reality, Knowledge, Researcher Role).',
        '   (c) Research Problem Component Breakdown: Weekly Low-Stakes Quizzes vs Regular Assessment (Population, IV, DV).'
      ]
    }
  ]
);

// Generate MED305 PDF
generatePdf(
  path.join(outDir, 'pyq-med305-midterm-2025.pdf'),
  'DEPARTMENT OF EDUCATION',
  'FIRST MID-SEMESTER EXAMINATION 2025-27 (Odd Semester)',
  'M.Ed. III Semester | Educational Administration & Planning (MED 305) | Max Marks: 30',
  [
    {
      title: 'SECTION A - Attempt All Questions (9 x 1 = 9 Marks)',
      lines: [
        '1. (a) Educational Administration process: Managing resources to achieve educational goals.',
        '   (b) Scope of Educational Administration: Very wide, covering all educational institutions.',
        '   (c) Function check: Indoctrination is NOT a function of educational administration.',
        '   (d) Concept of Educational Management: Efficient use of resources for specific objectives.',
        '   (e) Recruiting, selecting and developing personnel: Personnel Administration.',
        '   (f) Primary goal of Conflict Management: Resolve conflicts constructively for organizational health.',
        '   (g) Organizational Compliance: Adherence to rules, regulations, and policies.',
        '   (h) Decision-making in Educational Administration: Continuous and dynamic process.',
        '   (i) Management of Educational Institution: Managing all human, physical, and financial resources.'
      ]
    },
    {
      title: 'SECTION B - Short Answer Questions (Attempt any 3) (3 x 3 = 9 Marks)',
      lines: [
        '2. (a) Define Educational Administration and mention its two key functions.',
        '   (b) Differentiate between Educational Administration and Educational Management.',
        '   (c) What is the importance of Personnel Administration in an educational institution?',
        '   (d) Write a short note on Organizational Compliance in Educational Settings.'
      ]
    },
    {
      title: 'SECTION C - Long Answer Questions (Attempt any 2) (2 x 6 = 12 Marks)',
      lines: [
        '3. (a) Explain the meaning, nature, and scope of Educational Administration in detail.',
        '   (b) What is Conflict Management? Discuss strategies for managing conflicts in educational settings.',
        '   (c) Discuss decision-making concept and explain steps involved in decision-making process in educational administration.'
      ]
    }
  ]
);

console.log('PDFs generated successfully!');
