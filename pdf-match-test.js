const fs = require('fs');
const { PDFParse } = require('pdf-parse');

const REMOTE_BASE_URL = 'https://www.drvimalsingh.in';

const testDocuments = [
  {
    id: 2,
    author: 'Suraj Gupta',
    pdfPath: '/papers/chatbot-assisted-learning.pdf'
  },
  {
    id: 3,
    author: 'Anjali Devi',
    pdfPath: '/papers/game-based-learning.pdf'
  },
  {
    id: 4,
    author: 'Divya Rajput',
    pdfPath: '/papers/e-resource-satisfaction.pdf'
  },
  {
    id: 5,
    author: 'Rachana Yadav',
    pdfPath: '/papers/nep-locality-gender.pdf'
  }
];

async function downloadPDF(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
  }
  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

async function runTests() {
  for (const doc of testDocuments) {
    const fullUrl = `${REMOTE_BASE_URL}${doc.pdfPath}`;
    console.log(`Document Author: ${doc.author} (${doc.pdfPath})`);

    try {
      const pdfBuffer = await downloadPDF(fullUrl);
      const parser = new PDFParse({ data: new Uint8Array(pdfBuffer) });
      const textResult = await parser.getText();
      const cleanText = textResult.text.replace(/\s+/g, ' ').trim();
      console.log(`Text Sample: "${cleanText.substring(0, 400)}..."`);
      await parser.destroy();
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
    console.log('---------------------------------------------------\n');
  }
}

runTests();
