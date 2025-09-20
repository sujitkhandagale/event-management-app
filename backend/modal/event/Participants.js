import mongoose from 'mongoose';

const { Schema } = mongoose;

const ParticipantsSchema = new Schema(
  {
    slotId: {
      type: Number,
    },
    eventId: {
      type: String,
    },
    userId: {
      type: String,
    },
    joinedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

const Participants = mongoose.model('participants', ParticipantsSchema);
export default Participants;
