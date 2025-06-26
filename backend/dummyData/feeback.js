require("dotenv").config({ path: "../.env" });
const mongoose = require('mongoose');
const Feedback=require("../model/feedback");

// Dummy data
const dummyData = [
  {
    name: 'Sumant',
    email: 'sumantyadav@gmail.com',
    feedbackType: 'Bug Report',
    message: 'Your UI is not good',
    createdAt: new Date('2025-06-26T07:53:51.009Z'),
    updatedAt: new Date('2025-06-26T07:53:51.009Z')
  },
  {
    name: 'Anjali',
    email: 'anjali.sharma@gmail.com',
    feedbackType: 'Feature Request',
    message: 'Add dark mode support',
    createdAt: new Date('2025-06-25T10:12:31.100Z'),
    updatedAt: new Date('2025-06-25T10:12:31.100Z')
  },
  {
    name: 'Ravi',
    email: 'ravi123@gmail.com',
    feedbackType: 'Bug Report',
    message: 'Page crashes on clicking submit',
    createdAt: new Date('2025-06-24T14:18:45.210Z'),
    updatedAt: new Date('2025-06-24T14:18:45.210Z')
  },
  {
    name: 'Meera',
    email: 'meera.kapoor@yahoo.com',
    feedbackType: 'Other',
    message: 'The app is easy to use and intuitive',
    createdAt: new Date('2025-06-24T09:00:00.000Z'),
    updatedAt: new Date('2025-06-24T09:00:00.000Z')
  },
  {
    name: 'Akash',
    email: 'akash.dev@gmail.com',
    feedbackType: 'Feature Request',
    message: 'Support for exporting data to Excel',
    createdAt: new Date('2025-06-23T16:45:00.000Z'),
    updatedAt: new Date('2025-06-23T16:45:00.000Z')
  },
  {
    name: 'Pooja',
    email: 'pooja.k@outlook.com',
    feedbackType: 'Bug Report',
    message: 'Slow performance on mobile devices',
    createdAt: new Date('2025-06-23T08:22:14.501Z'),
    updatedAt: new Date('2025-06-23T08:22:14.501Z')
  },
  {
    name: 'Rohan',
    email: 'rohan.mishra@gmail.com',
    feedbackType: 'Other',
    message: 'Very helpful and clean design',
    createdAt: new Date('2025-06-22T18:33:41.180Z'),
    updatedAt: new Date('2025-06-22T18:33:41.180Z')
  },
  {
    name: 'Neha',
    email: 'neha.singh@gmail.com',
    feedbackType: 'Bug Report',
    message: 'Form validation is not working',
    createdAt: new Date('2025-06-21T22:10:02.000Z'),
    updatedAt: new Date('2025-06-21T22:10:02.000Z')
  },
  {
    name: 'Vikash',
    email: 'vikash.m@gmail.com',
    feedbackType: 'Feature Request',
    message: 'Add multi-language support',
    createdAt: new Date('2025-06-20T06:45:30.999Z'),
    updatedAt: new Date('2025-06-20T06:45:30.999Z')
  },
  {
    name: 'Nikita',
    email: 'nikita.jain@gmail.com',
    feedbackType: 'Other',
    message: 'Great customer support experience',
    createdAt: new Date('2025-06-19T12:59:59.001Z'),
    updatedAt: new Date('2025-06-19T12:59:59.001Z')
  }
];

mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB connected!");
    return Feedback.insertMany(dummyData);
  })
  .then(() => {
    console.log("Dummy data inserted successfully!");
    mongoose.disconnect();
  })
  .catch(err => {
    console.error("Error:", err);
  });
