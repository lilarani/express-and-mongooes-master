const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req, res);
  // res.end('Welcome to ToDo server');

  if (req.url === '/todos' && req.method === 'GET') {
    res.end('All Todos');
  } else if (req.url === '/todos/create/todo' && req.method === 'POST') {
    res.end('ToDo Created');
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
