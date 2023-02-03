// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mailOptions, transporter } from '@/utils/nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function SendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: '@Portfolio Web App: Someone reached out!! ',
        text: 'This is test message',
        html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script src="https://cdn.tailwindcss.com"></script>
          <title>Email</title>
        </head>
        <body>
          <main class="flex w-[30rem] flex-col gap-5 rounded-md shadow-md px-4 py-2">
            <span class="text-2xl font-bold">rockyessel.com</span>

            <div class="flex flex-col gap-5">
              <p>Hi, from: <span class="font-medium">${name}</span>,</p>

              <p>
                ${message}
              </p>

              <p>Email: <span class="font-medium">${email}</span></p>
            </div>
          </main>
        </body>
      </html>`,
      });

      return res.status(200).json({ msg: 'Sent Successfully' });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ msg: 'Internal Problem In TryAndCatch block' });
    }
  }
  return res.status(400).json({ msg: 'Internal Problem in Entirely' });
}
