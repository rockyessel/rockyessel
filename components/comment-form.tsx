import { AddComment } from '@/utils/api-request';
import { useRouter } from 'next/router';
import React, { ChangeEvent } from 'react';

interface FormDataProps {
  name: string;
  profile: string;
  email: string;
  comment: string;
  _id: string;
}

interface THOUGHT_ID_PROPS {
  url: string;
  _id: string;
  close: () => void;
}

const CommentForm = (props: any) => {
  const initialData = {
    name: '',
    profile: '',
    email: '',
    comment: '',
    _id: props?.data?._id,
  };

  const [formData, setFormData] = React.useState<FormDataProps>(initialData);

  const router = useRouter();

  const handleUpdates = ( event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const updatedForm = {
      ...formData,
      [event.target.name]: event.target.value,
    };

    setFormData(updatedForm);
  };

  const handleSubmission = (event: React.SyntheticEvent) => {
    try {
      event.preventDefault();

      const { name, profile, email, comment } = formData;

      if (!name || !profile || !email || !comment) return;

      AddComment(formData);

      router.replace(router.asPath);
    } catch (error) {
      console.error({
        message: 'Failed and did not send data',
        status: 500,
      });
    }
  };

  return (
    <section className='px-10 py-5 w-full border border-black bg-rose-800 rounded-md h-auto'>
      <form onSubmit={handleSubmission}>
        <section className='flex flex-col'>
          <label className={`text-lg `} title={`Full name`}>
            Full name:
          </label>
          <input
            type='text'
            placeholder='Rocky Essel'
            className='bg-[#0e141b] outline-none px-4 py-2 focus:ring-2 focus:ring-blue-400  placeholder:text-white placeholder:text-opacity-[0.2] rounded placeholder:text-sm'
            onChange={handleUpdates}
            name={`name`}
            value={formData.name}
          />
        </section>

        <section className='flex flex-col'>
          {' '}
          <label className={`text-lg `} title={`Full name`}>
            Profile URL:
          </label>
          <input
            type='url'
            placeholder='https://images2.imgbox.com/23/d8/lb7uBVSN_o.jpg'
            className='bg-[#0e141b] outline-none px-4 py-2 focus:ring-2 focus:ring-blue-400  placeholder:text-white placeholder:text-opacity-[0.2] rounded placeholder:text-sm'
            onChange={handleUpdates}
            name={`profile`}
            value={formData.profile}
          />
        </section>

        <section className='flex flex-col'>
          <label className={`text-lg `} title={`Full name`}>
            Email:
          </label>
          <input
            type='text'
            placeholder='rockyessel74@gmail.com'
            className='bg-[#0e141b] outline-none px-4 py-2 focus:ring-2 focus:ring-blue-400  placeholder:text-white placeholder:text-opacity-[0.2] rounded placeholder:text-sm'
            onChange={handleUpdates}
            name={`email`}
            value={formData.email}
          />
        </section>

        <section className='flex flex-col'>
          <label className={`text-lg `} title={`Full name`}>
            Comment:
          </label>
          <textarea
            placeholder='rockyessel74@gmail.com'
            className='bg-[#0e141b] h-[10rem] resize-none outline-none px-4 py-2 focus:ring-2 focus:ring-blue-400 placeholder:text-white placeholder:text-opacity-[0.2] rounded placeholder:text-sm'
            onChange={handleUpdates}
            name={`comment`}
            value={formData.comment}
          />
        </section>

        <section className='flex items-center gap-5'>
          <button
            type={'submit'}
            className=' inline-flex items-center px-3 py-2 font-medium  text-center text-gray-200  bg-gradient-to-b from-rose-800 via-rose-700 to-rose-900 rounded-lg   '
          >
            Submit comment
          </button>
          <button
            onClick={props.close}
            type={'button'}
            className=' inline-flex items-center px-3 py-2 font-medium  text-center  text-gray-200 bg-gray-700 rounded-lg   '
          >
            Cancel
          </button>
        </section>
      </form>
    </section>
  );
};

export default CommentForm;
