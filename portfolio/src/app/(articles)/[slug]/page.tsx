import ScriptJsonLDArticle from '@/components/common/json-ld-article';
import {
  countWordsInStructure,
  descendantToText,
} from '@/components/editor/lib/helpers';
import PostDetailsLayout from '@/components/layout/post-details-layout';
import { getPostBySlug } from '@/lib/actions/convex_/posts';
import { calculateReadTime, createOgImage } from '@/lib/utils/helpers';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';
import { TextEditor as RenderEditor } from '@/components/editor';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Bookmark,
  Calendar,
  Clock,
  Eye,
  Headphones,
  Heart,
  Share2,
} from 'lucide-react';
import { postSEO } from '@/lib/actions/helpers';
import moment from 'moment';

interface Props {
  params: { slug: string };
}

const tagColors = {
  Blockchain: 'blue',
  'Vara Network': 'green',
  'Actor Model': 'purple',
  'Parallel Computing': 'yellow',
  Scalability: 'red',
  Cryptocurrency: 'indigo',
  DeFi: 'pink',
  'Smart Contracts': 'orange',
} as const;

type TagColor = keyof typeof tagColors;

function getTagColor(tag: string): TagColor {
  return (tagColors[tag as TagColor] || 'gray') as TagColor;
}
const tags = [
  'Blockchain',
  'Vara Network',
  'Actor Model',
  'Parallel Computing',
  'Scalability',
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();
  return await postSEO(post);
}

const ArticleDynamicPage = async ({ params }: Props) => {
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();
  const ogImage = createOgImage({
    meta: ['rockyessel.me', ...post?.tags!.slice(0, 3)].join(' • ') || '',
    title: String(post?.title),
  });

  const content = descendantToText(post?.content || '');

  return (
    <Fragment>
      <ScriptJsonLDArticle
        publishedAt={post?.publishedAt || new Date().toISOString()}
        updatedAt={post?.updatedAt || ''}
        title={post?.title || ''}
        slug={post?.slug || ''}
        description={post?.description || ''}
        ogImage={[ogImage]}
        content={content}
        lang={''}
        category={post?.category || ''}
        audioURL={''}
        keywords={post?.seoKeywords || post?.tags || []}
        comment={{
          name: '',
          content: '',
          updatedAt: '',
        }}
      />
      <PostDetailsLayout post={post}>
        <section className='w-full max-w-3xl mx-auto px-4 py-8'>
          <header>
            <Separator className='my-2' />
            <div className='flex justify-between items-center'>
              <div className='flex items-center space-x-4'>
                <Badge variant='secondary' className='px-3 py-1'>
                  {post?.isPublished ? 'Published' : 'Preview'}
                </Badge>
                <span className='text-sm text-gray-400 flex items-center'>
                  <Calendar className='w-4 h-4 mr-1' />
                  {moment(post?.publishedAt || post?.createdAt).format(
                    'MMM Do YYYY'
                  )}
                </span>
                <span className='text-sm text-gray-400 flex items-center'>
                  <Clock className='w-4 h-4 mr-1' />
                  {/* 15 min read */}
                  {calculateReadTime(countWordsInStructure(post?.content))}
                </span>
                <span className='text-sm text-gray-400 flex items-center'>
                  <Eye className='w-4 h-4 mr-1' />
                  1.2k views
                </span>
              </div>
              <div className='flex items-center space-x-2'>
                <Button variant='ghost' size='icon'>
                  <Bookmark className='w-5 h-5' />
                </Button>
                <Button variant='ghost' size='icon'>
                  <Heart className='w-5 h-5' />
                </Button>
              </div>
            </div>
            <Separator className='my-2' />
            <h1 className='article-header text-4xl font-bold mb-6 leading-tight'>
              {post?.title}
            </h1>
            <Separator className='my-2' />
            <div className='w-full flex items-center justify-between'>
              <div className='flex items-center gap-1.5'>
                {tags.map((tag) => {
                  const color = getTagColor(tag);
                  return (
                    <Badge
                      key={tag}
                      variant='outline'
                      className={`text-${color}-400 border-${color}-400`}
                    >
                      {tag}
                    </Badge>
                  );
                })}
              </div>
              <Button variant='outline' size='sm' className='flex items-center'>
                <Headphones className='w-4 h-4 mr-2' />
                Listen to Article
              </Button>
            </div>
            <Separator className='w-full my-2' />
          </header>
          {/* <img src={ogImage} alt='' /> */}
          <article className='article-section'>
            <div className='sr-only article-summary'>{post?.description}</div>
            <RenderEditor readOnly content={post?.content} />
          </article>

          <Separator className='w-full my-2' />

          <footer>
            <div className='flex flex-col gap-1'>
              <p className='text-lg font-bold'>Tags:</p>
              <div className='flex flex-wrap items-center gap-2.5'>
                {post?.tags?.map((tag, index) => (
                  <Badge className='text-md' key={index}>
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </footer>
        </section>
      </PostDetailsLayout>
    </Fragment>
  );
};

export default ArticleDynamicPage;
