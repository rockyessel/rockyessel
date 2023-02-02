import { CommentUserDisplay } from '.';
import { CommentUserProps } from '@/interface';

const CommentDisplay = ({ data }: CommentUserProps) => {
  return (
    <section
      className={`px-10 py-5 w-full border border-black bg-rose-800 rounded-md h-auto ${ !data?.length && 'flex justify-center items-center'}`}>
      {!data?.length ? (
        <span className='font-medium'>Be the first to leave a comment</span>
      ) : (
        data?.map((user_data, index) => (
          <CommentUserDisplay key={index} data={user_data} />
        ))
      )}
    </section>
  );
};

export default CommentDisplay;
