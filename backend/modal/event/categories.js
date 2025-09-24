import mongoose from 'mongoose';

const { Schema } = mongoose;

const CategorySchema = new Schema(
  {
    name: {
      type: String,
    },
    slug: {
      type: String,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      default: 'active',
      enum: ['active', 'inactive', 'upcoming', 'maintenance'],
    },
  },
  {
    timestamps: true,
  },
);

const Category = mongoose.model('category', CategorySchema);
export default Category;
