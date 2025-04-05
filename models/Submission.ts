import mongoose from "mongoose";

const SubmissionSchema = new mongoose.Schema({
  firstname: String,
  secondname: String,
  email: String,
  contact: String,
  whatsappnumber: String,
  place: String,
  course: String,
  classType: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Submission ||
  mongoose.model("Submission", SubmissionSchema);
