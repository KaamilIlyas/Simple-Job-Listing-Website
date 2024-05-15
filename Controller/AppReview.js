import ApplicationReview from '../Models/ApplicationReview.js';

async function createApplicationReview(employerId, jobApplicationId, reviewMessage) {
  try {
    const newReview = new ApplicationReview({
      employer: employerId,
      jobApplication: jobApplicationId,
      reviewMessage,
      status: 'Pending'
    });
    const savedReview = await newReview.save();
    return savedReview;
  }
   catch (err) {
    throw err;
  }
}

async function getApplicationReviews() {
  try {
    const reviews = await ApplicationReview.find().populate('employer jobApplication');
    return reviews;
  } 
  catch (err) {
    throw err;
  }
}

async function getApplicationReviewById(reviewId) {
  try {
    const review = await ApplicationReview.findById(reviewId).populate('employer jobApplication');
    return review;
  } 
  catch (err) {
    throw err;
  }
}

async function updateApplicationReview(reviewId, reviewMessage, status) {
  try {
    const updatedReview = await ApplicationReview.findByIdAndUpdate(
      reviewId,
      { $set: { reviewMessage, status } },
      { new: true }
    );
    return updatedReview;
  }
   catch (err) {
    throw err;
  }
}

async function deleteApplicationReview(reviewId) {
  try {
    const deletedReview = await ApplicationReview.findByIdAndDelete(reviewId);
    return deletedReview;
  } catch (err) {
    throw err;
  }
}

export default {

    createApplicationReview,
    getApplicationReviews,
    getApplicationReviewById,
    updateApplicationReview,
    deleteApplicationReview
}