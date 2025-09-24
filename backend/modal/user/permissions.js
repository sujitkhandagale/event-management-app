import mongoose from 'mongoose';

const { Schema } = mongoose;

const PermissionsSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },
    permission: {
      type: String,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Permissions = mongoose.model('permissions', PermissionsSchema);
export default Permissions;
