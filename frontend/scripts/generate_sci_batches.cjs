const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/data/pyqs/class9/science');
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

// Helper to escape backticks and quotes
function sanitize(str) {
  return str.replace(/`/g, '\\`').replace(/\${/g, '\\${');
}

console.log('Generating Science Batches for Class 9...');
