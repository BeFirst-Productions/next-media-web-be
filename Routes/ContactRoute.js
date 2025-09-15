import express from 'express';
import { submitContactForm } from '../Controller/ContactController.js';
import { subscribeEmail } from '../Controller/subscriptionController.js';

const router = express.Router();

router.post('/contact', submitContactForm);
router.post('/subscribe', subscribeEmail);

export default router;
