const fs = require('fs');
const file = fs.createWriteStream('./sample2.txt');
const server = require('http').createServer();

for(let i=0; i<= 5000; i++) {
  file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
}

file.end();


server.on('request', (req, res) => {
  fs.readFile('./sample2.txt', (err, data) => {
    if (err) throw err;
  
    res.end(data);
  });
});

server.listen(3000, () => console.log('server started'));