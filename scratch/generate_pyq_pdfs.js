const fs = require('fs');
const path = require('path');

// Helper to escape PDF string literal
function escapePdf(text) {
  if (!text) return '';
  return text
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
    .replace(/[\r\n]+/g, ' ');
}

// Function to split text into lines of max character length
function wordWrap(text, maxChars = 75) {
  if (!text) return [];
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  words.forEach(word => {
    if ((currentLine + ' ' + word).trim().length <= maxChars) {
      currentLine = (currentLine + ' ' + word).trim();
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  });
  if (currentLine) lines.push(currentLine);
  return lines;
}

function buildPdfDocument(docHeader, sections) {
  let pages = [];
  let currentPageCommands = [];
  let y = 780;

  function checkPageBreak(neededSpace = 30) {
    if (y - neededSpace < 50) {
      pages.push(currentPageCommands);
      currentPageCommands = [];
      y = 780;
    }
  }

  // Header on Page 1
  currentPageCommands.push(`BT /F2 14 Tf 50 ${y} Td (${escapePdf(docHeader.department)}) Tj ET`);
  y -= 20;
  currentPageCommands.push(`BT /F2 16 Tf 50 ${y} Td (${escapePdf(docHeader.examName)}) Tj ET`);
  y -= 22;
  currentPageCommands.push(`BT /F1 12 Tf 50 ${y} Td (${escapePdf(docHeader.semester + ' | ' + docHeader.session)}) Tj ET`);
  y -= 18;
  currentPageCommands.push(`BT /F2 11 Tf 50 ${y} Td (${escapePdf(docHeader.paperTitle)}) Tj ET`);
  y -= 20;
  currentPageCommands.push(`BT /F1 10 Tf 50 ${y} Td (${escapePdf('Max Time: ' + docHeader.maxTime + '    Max Marks: ' + docHeader.maxMarks + ' Marks')}) Tj ET`);
  y -= 16;
  currentPageCommands.push(`BT /F1 10 Tf 50 ${y} Td (${escapePdf('Note: ' + docHeader.note)}) Tj ET`);
  y -= 12;
  currentPageCommands.push(`50 ${y} m 545 ${y} l S`); // Horizontal line
  y -= 25;

  // Process Sections
  sections.forEach(sec => {
    checkPageBreak(40);
    currentPageCommands.push(`BT /F2 12 Tf 50 ${y} Td (${escapePdf(sec.title + ' -- ' + sec.marks)}) Tj ET`);
    y -= 16;
    if (sec.instructions) {
      currentPageCommands.push(`BT /F1 10 Tf 50 ${y} Td (${escapePdf(sec.instructions)}) Tj ET`);
      y -= 20;
    }

    sec.questions.forEach(q => {
      checkPageBreak(35);
      
      // Question Header / Number
      if (q.qNum) {
        currentPageCommands.push(`BT /F2 10 Tf 50 ${y} Td (${escapePdf(q.qNum)}) Tj ET`);
      }

      // English Question Text
      if (q.textEn) {
        const linesEn = wordWrap(q.textEn, 80);
        linesEn.forEach((line, idx) => {
          checkPageBreak(16);
          const xOffset = q.qNum && idx === 0 ? 80 : 50;
          currentPageCommands.push(`BT /F1 9 Tf ${xOffset} ${y} Td (${escapePdf(line)}) Tj ET`);
          y -= 14;
        });
      }

      // Statements if present
      if (q.statements && q.statements.length > 0) {
        y -= 4;
        q.statements.forEach(st => {
          const stText = `${st.num}. ${st.textEn}`;
          const linesSt = wordWrap(stText, 85);
          linesSt.forEach((line, sIdx) => {
            checkPageBreak(14);
            const xPos = sIdx === 0 ? 65 : 80;
            currentPageCommands.push(`BT /F1 8.5 Tf ${xPos} ${y} Td (${escapePdf(line)}) Tj ET`);
            y -= 13;
          });
        });
      }

      // Matching table if present
      if (q.matchingTable) {
        y -= 6;
        checkPageBreak(30);
        currentPageCommands.push(`BT /F2 9 Tf 65 ${y} Td (${escapePdf(q.matchingTable.col1Title + '    ' + q.matchingTable.col2Title)}) Tj ET`);
        y -= 15;
        q.matchingTable.rows.forEach(r => {
          checkPageBreak(25);
          const line1 = wordWrap(r.col1, 40);
          const line2 = wordWrap(r.col2, 45);
          currentPageCommands.push(`BT /F1 8 Tf 65 ${y} Td (${escapePdf(line1[0] || '')}) Tj ET`);
          currentPageCommands.push(`BT /F1 8 Tf 260 ${y} Td (${escapePdf(line2[0] || '')}) Tj ET`);
          y -= 13;
          if (line2[1]) {
            currentPageCommands.push(`BT /F1 8 Tf 260 ${y} Td (${escapePdf(line2[1])}) Tj ET`);
            y -= 13;
          }
        });
      }

      // Options if present
      if (q.options && q.options.length > 0) {
        y -= 4;
        q.options.forEach(opt => {
          checkPageBreak(14);
          const optLabel = opt.code ? `${opt.code}) ` : '';
          const optText = `${optLabel}${opt.textEn || opt.text || ''}`;
          currentPageCommands.push(`BT /F1 8.5 Tf 70 ${y} Td (${escapePdf(optText)}) Tj ET`);
          y -= 13;
        });
      }

      y -= 10;
    });

    y -= 15;
  });

  if (currentPageCommands.length > 0) {
    pages.push(currentPageCommands);
  }

  // Construct valid multi-page PDF structure
  let pdfObjects = [];
  pdfObjects.push('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n');

  let pageObjRefs = pages.map((_, i) => `${4 + i * 2} 0 R`).join(' ');
  pdfObjects.push(`2 0 obj\n<< /Type /Pages /Kids [ ${pageObjRefs} ] /Count ${pages.length} >>\nendobj\n`);

  pdfObjects.push(`3 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n`);
  pdfObjects.push(`31 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n`);

  let currentObjId = 4;
  let pageStreams = [];

  pages.forEach((pageCmds, index) => {
    const streamContent = pageCmds.join('\n');
    const streamLength = Buffer.byteLength(streamContent, 'utf-8');
    const contentObjId = currentObjId + 1;

    pdfObjects.push(`${currentObjId} 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R /F2 31 0 R >> >> /Contents ${contentObjId} 0 R >>\nendobj\n`);
    pdfObjects.push(`${contentObjId} 0 obj\n<< /Length ${streamLength} >>\nstream\n${streamContent}\nendstream\nendobj\n`);

    currentObjId += 2;
  });

  // Calculate xref
  let pdfHeader = '%PDF-1.4\n';
  let body = pdfObjects.join('');
  
  // Quick assembly
  let fullPdf = pdfHeader + body;
  let xrefPos = fullPdf.length;
  
  let xref = `xref\n0 ${currentObjId}\n0000000000 65535 f \n`;
  let offset = pdfHeader.length;
  
  pdfObjects.forEach(obj => {
    let strOffset = offset.toString().padStart(10, '0');
    xref += `${strOffset} 00000 n \n`;
    offset += Buffer.byteLength(obj, 'utf-8');
  });

  let trailer = `trailer\n<< /Size ${currentObjId} /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF`;

  return pdfHeader + body + xref + trailer;
}

// Write PDFs
const outDir = path.join(__dirname, '../public/course-materials');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const { med104PaperData, med305PaperData } = require('../lib/med-papers-data.ts');

const pdf104 = buildPdfDocument(
  {
    department: med104PaperData.department,
    examName: med104PaperData.examName,
    semester: med104PaperData.semester,
    session: med104PaperData.session,
    paperTitle: `PAPER IV - ${med104PaperData.title.toUpperCase()} (${med104PaperData.courseCode})`,
    maxTime: med104PaperData.maxTime,
    maxMarks: med104PaperData.maxMarks,
    note: med104PaperData.note
  },
  med104PaperData.sections
);
fs.writeFileSync(path.join(outDir, 'pyq-med104-midterm-2026.pdf'), pdf104);

const pdf305 = buildPdfDocument(
  {
    department: med305PaperData.department,
    examName: med305PaperData.examName,
    semester: med305PaperData.semester,
    session: med305PaperData.session,
    paperTitle: `${med305PaperData.title.toUpperCase()} (${med305PaperData.courseCode})`,
    maxTime: med305PaperData.maxTime,
    maxMarks: med305PaperData.maxMarks,
    note: med305PaperData.note
  },
  med305PaperData.sections
);
fs.writeFileSync(path.join(outDir, 'pyq-med305-midterm-2025.pdf'), pdf305);

console.log('Successfully generated full MED104 & MED305 examination PDF files!');
