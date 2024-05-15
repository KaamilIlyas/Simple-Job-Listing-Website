import express from 'express';
import {
  createApplicationReview,
  getApplicationReviewById,
  getApplicationReviews,
  updateApplicationReview,
} from '../controllers/applicationReviewController.js';

const router = express.Router();

router.post('/', async (req, res) => {
  // Your route handling logic...
});

router.get('/', async (req, res) => {
  // Your route handling logic...
});

router.get('/:reviewId', async (req, res) => {
  // Your route handling logic...
});

router.patch('/:reviewId', async (req, res) => {
  // Your route handling logic...
});

router.delete('/:reviewId', async (req, res) => {
  // Your route handling logic...
});

export default router;
