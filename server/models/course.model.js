import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
  lectureId: {
    type: String,
    required: true,
  },
  lectureTitle: {
    type: String,
    required: true,
    trim: true,
  },
  lectureDuration: {
    type: Number, // in minutes
    required: true,
    min: 0,
  },
  lectureUrl: {
    type: String,
    required: true,
    trim: true,
  },
  isPreviewFree: {
    type: Boolean,
    default: false,
  },
  lectureOrder: {
    type: Number,
    required: true,
    min: 1,
  },
});

// Each chapter inside courseContent
const chapterSchema = new mongoose.Schema(
  {
    chapterId: {
      type: String,
      required: true,
    },
    chapterOrder: {
      type: Number,
      required: true,
      min: 1,
    },
    chapterTitle: {
      type: String,
      required: true,
      trim: true,
    },
    chapterContent: {
      type: [lectureSchema],
      default: [],
    },
  },
  { _id: false }
);

// Each rating
const ratingSchema = new mongoose.Schema(
  {
    userId: {
      type: String, // Clerk user id
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
  },
  { timestamps: true }
);

/* ---------- Main Course schema ---------- */

const courseSchema = new mongoose.Schema(
  {
    // Mongo _id (ObjectId) is generated automatically
    courseTitle: {
      type: String,
      required: true,
      trim: true,
    },
    courseDescription: {
      type: String, // HTML string
      required: true,
    },
    coursePrice: {
      type: Number,
      required: true,
      min: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    discount: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
      required: true,
    },

    courseContent: {
      type: [chapterSchema],
      default: [],
    },

    educator: {
      type: String,
      ref: "User", // assuming your educators are in User collection
      required: true,
    },

    enrolledStudents: {
      type: [{ type: String, ref: "User" }], // Clerk user IDs
      default: [],
    },

    courseRatings: {
      type: [ratingSchema],
      default: [],
    },

    courseThumbnail: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
    minimize: false,
  }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
