'use client';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import InfoHoverCard from '@/components/common/info-card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const WritingSettingsComments = () => {
  return (
    <div className='w-full flex flex-col gap-10'>
      <div className='flex justify-between items-center px-4'>
        <Label
          htmlFor='toc'
          className='inline-flex flex-col items-start justify-between gap-2'
        >
          <span className='inline-flex items-center gap-2'>
            Comments
            <InfoHoverCard>
              <span>
                {`This field is optional. With choosing, it uses the current date and time.`}
              </span>
            </InfoHoverCard>
          </span>

          <span className='text-sm text-gray-500'>
            Enable this to users to comment on your article.
          </span>
        </Label>
        <Switch id='toc' />
      </div>

      <div className='space-y-4 px-4'>
        <h3 className='text-lg font-medium'>Comments Settings</h3>
        <p className='text-sm text-gray-500'>
          Choose how you want to handle comments on your article.
        </p>
        <RadioGroup
        // value={commentMode}
        // onValueChange={(value: "townhall" | "approval") =>
        //   setCommentMode(value)
        // }
        >
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='townhall' id='townhall' />
            <Label htmlFor='townhall'>Townhall Mode</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='approval' id='approval' />
            <Label htmlFor='approval'>Approval Mode</Label>
          </div>
        </RadioGroup>
        <p className='text-sm text-gray-500'>
          {/* {commentMode === "townhall" */}
          {/* ? "Anyone can comment, no moderation required." */}: Comments must
          be reviewed before publishing.
        </p>
      </div>
    </div>
  );
};

export default WritingSettingsComments;
