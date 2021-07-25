const express = require('express');
const socket = require('socket.io');

const port = process.env.PORT || 19999;
const app = express();

const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`);
});

app.use('/blackboard', express.static('blackboard'));

app.get('/', (req, res) => {
  res.send('i ❤️ maxim');
})

const io = socket(server);
io.sockets.on('connection', (socket) => {
  console.log('new connection: ' + socket.id);
  socket.on('mouse', (data) => {
    socket.broadcast.emit('mouse', data);
  });
});




