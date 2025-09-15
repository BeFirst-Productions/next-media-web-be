import Subscription from '../models/subscription.js';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const subscribeEmail = async (req, res) => {
  const { email } = req.body;
  console.log(req.body);
  
  try {
    const existing = await Subscription.findOne({ email });
    if (existing) return res.status(400).json({ success: false, message: 'Already subscribed.' });

    const subscription = new Subscription({ email });
    await subscription.save();



    res.status(200).json({ success: true, message: 'Subscribed successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
