import { socket } from '../server.js';
import { handleSocket } from '../controller/socket/socketHandler.js';

socket.on('connection', async socket => {
  console.log(`✅ User connected: ${socket.id}`);

  socket.on('message', data => {
    handleSocket({
      data,
      socket,
    });
  });

  socket.on('disconnect', () => {
    console.log(`❌ User disconnected: ${socket.id}`);
  });
});
