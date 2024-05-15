import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import upload from 'express-fileupload';
import connectDB from './database/db.js';
import userRouter from './Routes/User.js';
import ArticleRouter from './Routes/ArticleRoute.js';
import job from './Routes/JobRoutes.js';
import jobApp from './Routes/JobAppRoute.js';
import AppReview from './Routes/AppReviewRoute.js';

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(upload()); // Place the upload middleware before attempting to use it

app.use('/api/job', job);
app.use('/api/jobApp', jobApp);
app.use('/api/AppReview', AppReview);
app.use('/api/user', userRouter);
app.use('/api/article', ArticleRouter);

app.listen(3001);
