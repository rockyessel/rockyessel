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
    <div className={`flex gap-2 font-medium max_screen:text-sm text-[1.3rem]`}>
      <Link
        passHref
        className={`inline-flex items-center rounded-md gap-2`}
        href={`#comment`}
      >
        <AiOutlineComment className={``} /> {data?.comment?.length}
      </Link>

      <div className={`inline-flex items-center rounded-md gap-2`}>
        <AiOutlineEye className={`text-[1.3rem]`} /> {data?.viewCount}
      </div>

      <div className={`inline-flex items-center rounded-md gap-2`}>
        <AiOutlineFieldTime className={`text-[1.3rem]`} />
        <span>•</span>
        {moment(data?.publishedAt).format('LT')}
      </div>
    </div>
  );
};

export default ViewsCommentCount;
