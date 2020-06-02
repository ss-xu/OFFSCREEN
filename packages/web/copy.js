const fs = require('fs');

// destination.txt will be created or overwritten by default.
fs.copyFile('_redirects', 'dist/_redirects', (err) => {
    if (err) throw err;
    console.log('source.txt was copied to _redirects');
});
