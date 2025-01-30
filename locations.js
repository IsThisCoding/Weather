const fs = require('fs');

// Path to the JSON file
const filePath = './worldcities.json';

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    // Parse the JSON string into an object
    const jsonData = JSON.parse(data);
    console.log(jsonData);
});
