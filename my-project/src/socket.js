module.exports = function(io) {
  io.on('connection', (socket) => {
      console.log('New client connected');

      socket.on('locationData', async (locationRecord) => {
        console.log('Location data received: ', locationRecord);
      });

      socket.on('disconnect', () => console.log('Client disconnected'));
    });
}