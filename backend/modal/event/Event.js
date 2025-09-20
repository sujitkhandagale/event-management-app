import mongoose from 'mongoose';

const { Schema } = mongoose;

const EventSchema = new Schema(
  {
    eventId: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    startDate: {
      type: Date,
      default: null, // not scheduled yet.
    },
    endDate: {
      type: Date,
      default: null, // null for unlimited
    },
    slots: {
      type: Number,
      default: null, // null for unlimited
    },
    status: {
      type: String,
      default: 0, // 0 for draft, 1 for visible, 2 for hidden
    },
    publishedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

const Event = mongoose.model('event', EventSchema);
export default Event;
