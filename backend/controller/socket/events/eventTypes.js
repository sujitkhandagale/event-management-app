export const JoinEventRoom = async ({ socket, message }) => {
  try {
    const { eventId } = message || {};
    if (!eventId) {
      return socket.emit('joinEventRoom', {
        status: 400,
        message: 'Event ID is required',
      });
    }
    socket.join(eventId);
    return socket.emit('leaveEventRoom', {
      status: 200,
      message: 'Joined event room',
    });
  } catch (e) {
    socket.emit('joinEventRoom', {
      status: 501,
      message: 'Failed to join event room',
    });
  }
};
export const LeaveEventRoom = async ({ socket, message }) => {
  try {
    const { eventId } = message || {};
    if (!eventId) {
      return socket.emit('joinEventRoom', {
        status: 400,
        message: 'Event ID is required',
      });
    }
    socket.leave(eventId);
    return socket.emit('leaveEventRoom', {
      status: 200,
      message: 'Left event room',
    });
  } catch (e) {
    return socket.emit('leaveEventRoom', {
      status: 501,
      message: 'Failed to leave event room',
    });
  }
};

export const eventParticipants = async ({ socket, message }) => {};
