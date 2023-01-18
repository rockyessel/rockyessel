import React from 'react';
import Link from 'next/link';
import {
  AiOutlineComment,
  AiOutlineEye,
  AiOutlineFieldTime,
} from 'react-icons/ai';
import moment from 'moment';

const ViewsCommentCount = ({ data }: any) => {
  return (
    <div className={`flex gap-2 font-medium`}>
      <Link
        passHref
        className={`inline-flex items-center rounded-md gap-2`}
        href={`#comment`}
      >
        <AiOutlineComment className={`text-[1.3rem]`} /> {data?.comment?.length}
      </Link>

      <span className={`inline-flex items-center rounded-md gap-2`}>
        <AiOutlineEye className={`text-[1.3rem]`} /> {data?.viewCount}
      </span>

      <span className={`inline-flex items-center rounded-md gap-2`}>
        <AiOutlineFieldTime className={`text-[1.3rem]`} />
        <span>•</span>
        {moment(data?.publishedAt).format('LT')}
      </span>
    </div>
  );
};

export default ViewsCommentCount;
