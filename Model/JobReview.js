import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const applicationReviewSchema = new Schema({
  employer: {
    type: Schema.Types.ObjectId,
    ref: 'Employer',
    required: true
  },
  jobApplication: {
    type: Schema.Types.ObjectId,
    ref: 'JobApplication',
    required: true
  },
  reviewMessage: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Accepted', 'Rejected'],
    default: 'Pending'
  },
  dateReviewed: {
    type: Date,
    default: Date.now
  }
});

const ApplicationReview = mongoose.model('ApplicationReview', applicationReviewSchema);

export default ApplicationReview;