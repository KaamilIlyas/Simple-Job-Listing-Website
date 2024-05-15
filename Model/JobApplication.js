import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const jobApplicationSchema = new Schema({
  applicant: {
    type: Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  jobPosting: {
    type: Schema.Types.ObjectId,
    ref: 'JobPosting',
    required: true
  },
  resumeUrl: {
    type: String,
    required: true
  },
  coverMessage: {
    type: String,
    required: true
  },
  dateApplied: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['Pending', 'Accepted', 'Rejected'],
    default: 'Pending'
  }
});

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

export default JobApplication;
