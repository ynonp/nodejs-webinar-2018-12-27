const fs = require('fs');


/**
 * Async
 */
function readFileAndPrintIt() {
  fs.readFile('./indexxxx.js', 'utf8', function(err, data) {
    if (err) throw err;

    console.log(data);
  });
}

/**
 * Promises
 */
function readFileAndPrintIt2() {
  return new Promise((resolve, reject) => {
    fs.readFile('./indexxxx.js', 'utf8', function(err, data) {
      if (err) reject(err);

      console.log(data);
      resolve(data);
    });
  });
}



/**
 * Sync
 */
const content = fs.readFileSync('/etc/shells', 'utf8');
console.log(content);

/**
 * I don't like this:
  readFileAndPrintIt2().then(function() {
  }).catch(function() {
  });

*/

const fsp = fs.promises;

async function main() {
  try {
    const data = await fsp.readFile('./index.js', 'utf8');
    console.log(data);
  } catch(err) {
    console.log('error: ', err);
  }

  console.log('the end');
}

main();

