import { Client } from '@/utils';
import type { NextApiRequest, NextApiResponse } from 'next';

const AddComment = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { name, email, comment, _id, profile } = JSON.parse(req.body);
      const data = await Client.create({
        _type: 'comment',
        thought: {
          _type: 'reference',
          _ref: _id,
        },
        name,
        email,
        comment,
        profile,
      });
      res.status(201).json({ message: 'Comment created', data });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: `Couldn't submit comment`,
      });
    }
  }
};

export default AddComment;
