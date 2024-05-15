import express from 'express';
import {
    createJob,
    getJobs,
    getJobById,
    updateJob,
    deleteJob
} 
from '../Controllers/JobController.js';

router.post('/jobs', createJob);

router.get('/jobs', getJobs);

router.get('/jobs/:id', getJobById);

router.put('/jobs/:id', updateJob);

router.delete('/jobs/:id', deleteJob);

export default router;
