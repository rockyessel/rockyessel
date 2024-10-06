'use client'


import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import InfoHoverCard from '@/components/common/info-card';
import ValueSelector from '@/components/common/value-selector';
import DateTimePicker from '@/components/common/datetime-picker';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Props {
    article:any
}

const WritingSettingsGeneral = ({article}:Props) => {



    return (
        <div className=''>
            <div className='space-y-4 px-4'>
              <div className='space-y-2'>
                <Label htmlFor='slug'>Slug</Label>
                <p className='text-sm text-gray-500'>
                  {`The URL-friendly version of the article title. This is used
                    in the article's URL.`}
                </p>
                <Input name='slug' id='slug' placeholder='article-slug' />
              </div>
              <div className='space-y-2'>
                <div className='grid gap-2'>
                  <Label className='text-gray-300' htmlFor='subcategory'>
                    Category
                  </Label>
                  <p className='text-sm text-muted-foreground'>
                    {`Choose a more specific subcategory to further define your
                      blog's focus.`}
                  </p>
                  <Select required>
                    <SelectTrigger className='px-2 text-lime-600 border-zinc-700/40'>
                      <SelectValue placeholder='Select a subcategory' />
                    </SelectTrigger>
                    <SelectContent>
                      {/* {blog &&
                    CATEGORIES[blog.category as CategoryKeysType].map(
                      (subcategory) => (
                        <SelectItem key={subcategory} value={subcategory}>
                          {subcategory}
                        </SelectItem>
                      )
                    )} */}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='tags'>Tags</Label>
                <p className='text-sm text-gray-500'>
                  Add relevant tags to categorize your article and make it more
                  discoverable.
                </p>
                <ValueSelector<string>
                  limit={8}
                  initialValues={[]}
                  placeholder='Type tags...'
                />
              </div>
            </div>

            <div className='space-y-4 px-4'>
              <div className='space-y-2'>
                <Label htmlFor='description'>Description</Label>
                <p className='text-sm text-gray-500'>
                  A brief summary of your article. This may appear in search
                  results or social media shares.
                </p>
                <Textarea
                  id='description'
                  name='description'
                  placeholder='Article description'
                  className='min-h-[100px]'
                />
              </div>
            </div>
             
            {/* Dates */}
            <div className='space-y-4 border-y border-zinc-700/40 py-4 my-4'>
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

              {/* {dateMode !== "backdate" && ( */}
              <div className='space-y-2 flex flex-col px-4'>
                <Label className='inline-flex items-center justify-between'>
                  <span className='inline-flex items-center gap-2'>
                    Schedule your article{' '}
                    <InfoHoverCard>
                      <span>
                        {`You'll still have to pay gas fee. For now everything is
                            handled in the client-side`}
                      </span>
                    </InfoHoverCard>
                  </span>
                  <span className='text-gray-500'>(Optional)</span>
                </Label>
                <p className='text-sm text-gray-500'>
                  Set a future date and time for your article to be
                  automatically published.
                </p>
                <DateTimePicker
                  disablePastDates={true}
                  // onDateTimeChange={(date) => {
                  //   setDateMode("schedule");
                  //   updateArticle("publishedDate", date?.toISOString());
                  // }}
                />
              </div>
              {/* // )} */}

              {/* {dateMode !== "schedule" && ( */}
              <div className='space-y-2 flex flex-col px-4'>
                <Label className='inline-flex items-center justify-between'>
                  <span className='inline-flex items-center gap-2'>
                    Publish on a backdate
                    <InfoHoverCard>
                      <span>
                        {`This field is optional. With choosing, it uses the current date and time.`}
                      </span>
                    </InfoHoverCard>
                  </span>
                  <span className='text-gray-500'>(Optional)</span>
                </Label>
                <p className='text-sm text-gray-500'>
                  Set a past date for your article. This can be useful for
                  maintaining chronological order in your blog.
                </p>
                <DateTimePicker
                  initialFocus={false}
                  disableFutureDates={true}
                  // onDateTimeChange={(date) => {
                  //   setDateMode("backdate");
                  //   updateArticle("publishedDate", date?.toISOString());
                  // }}
                />
              </div>
              {/* )} */}
            </div>

            {/* TODO Test Comments */}
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
                {/* ? "Anyone can comment, no moderation required." */}:
                Comments must be reviewed before publishing.
              </p>
            </div>
          </div>
)




}


export default WritingSettingsGeneral;
