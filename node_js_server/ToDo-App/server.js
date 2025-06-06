const http = require('http');
const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, './db/ToDo.json');

const server = http.createServer((req, res) => {
  // create a todo
  if (req.url === '/todos' && req.method === 'GET') {
    try {
      const data = fs.readFileSync(filePath, { encoding: 'utf-8' });
      res.writeHead(200, {
        'content-type': 'application/json',
      });
      res.end(data);
    } catch (err) {
      console.error('Error reading ToDo.json:', err);
      res.statusCode = 500;
      res.end('Internal server error');
    }

    // evabeo data pathono jbe
    // res.setHeader('content-type', 'text/plain');
    // res.setHeader('email', 'neela@gmial.com');
    // res.statusCode = 201;

    // post a todo
  } else if (req.url === '/todos/create-todo' && req.method === 'POST') {
    let data = '';

    req.on('data', chunk => {
      data = data + chunk;
    });

    req.on('end', () => {
      try {
        // console.log(data);
        const { title, body } = JSON.parse(data);
        console.log({ title, body });

        const createAt = new Date().toLocaleString();

        const allTodos = fs.readFileSync(filePath, { encoding: 'utf-8' });

        const parseData = JSON.parse(allTodos);

        parseData.push({ title, body, createAt });

        fs.writeFileSync(filePath, JSON.stringify(parseData, null, 2), {
          encoding: 'utf-8',
        });

        res.end(JSON.stringify({ title, body, createAt }, null, 2));
      } catch (err) {
        console.error('Invalid JSON received:', err.message);
        res.statusCode = 400;
        res.end('Invalid Json');
      }
    });
  } else {
    res.end('Route not found');
  }
});

server.listen(5000, '127.0.0.1', () => {
  console.log('A server listening to post 5000');
});

/***
 * todos --> Get - All todos
 * /todos/create-todo POST Create ToDo
 */
