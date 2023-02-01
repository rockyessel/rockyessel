// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const AddViewCount = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { _id } = JSON.parse(req.body);



    const mutations = [{"patch": {"id": `${_id}`, "inc": {"viewCount": 1}, "params":{"id": `${_id}`}}}];



    const resData = await fetch(
      `https://40to7ztv.api.sanity.io/v2022-12-25/data/mutate/production`,

      {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer skqUSFBrvggO4ptbXjbw0M474YH5sxG7KUEHd2gowXDV99KROXa79DX7hSwbome58RHwnARpjARbInB1AtjA3dHiXw3fTaPDkjfbKfooH4PJv3w0ZqmuQPHz7SETiBOxONn05daKqPhoTooQf07Q3Z2FxlvYyAc1EqYn9rSCP7P4RoSt6nnh`,
        },
        body: JSON.stringify({ mutations }),
      }
    );

    const data = await resData.json();

    res.status(201).json(data);
  }
};

export default AddViewCount;