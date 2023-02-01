import nodemailer from 'nodemailer';

const { NEXT_PUBLIC_EMAIL, NEXT_PUBLIC_EMAIL_PASS } = process.env;

const email = process.env.NEXT_PUBLIC_EMAIL;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASS;


export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
