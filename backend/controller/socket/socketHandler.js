export const handleSocket = async ({ data, socket }) => {
  try {
    const { type, data: message } = data || {};
    if (type === 'joinEventRoom') {
    }
    if (type === 'leaveEventRoom') {
    }
    if (type === 'eventChatAll') {
    }
    if (type === 'sendMessage') {
    } else {
      return socket.emit('error', 'Invalid message type');
    }
  } catch (e) {
    return socket.emit('error', e);
  }
};
