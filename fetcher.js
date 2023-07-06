
const url = process.argv[2];
const filePath = process.argv[3];

// downloads a webpage with user argument
const pageFetcher = function (url, filePath) {
  // node's http request code with nested async
  const request = require('request');
  setTimeout(() => {
    //node's request code
    request(url, (error, response, body) => {
      printFile(body);
    }, 0);
  });

  // saves file with node's file write code with nested async
  const fs = require('fs');

  const printFile = function (body) {
    const content = body;
    setTimeout(() => {
      // nodes write file code
      fs.writeFile(filePath, content, err => {
        if (err) {
          console.error(err);
        }
        // file size: 1 char = 1 byte
        let size = body.length;
        console.log(`Downloaded and saved ${size} bytes to ${filePath}`);
      }, 0);
    });
  };
};

// calls the function when file is run
const page = pageFetcher(url, filePath);