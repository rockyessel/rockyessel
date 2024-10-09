import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Twitter, Youtube, Facebook, Instagram, Globe, BookOpen } from 'lucide-react';




import { getPageSEO } from '@/lib/actions/helpers';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return await getPageSEO('links');
}




const LinksPage = () => {
  return (
    <div className='flex items-center justify-center p-4'>
      <Card className='bg-zinc-800/50 text-gray-300 w-full max-w-md'>
        <CardContent className='p-6 space-y-6'>
          <div className='text-center space-y-2'>
            <img
              src='/placeholder.svg?height=100&width=100'
              alt='Profile'
              className='w-24 h-24 rounded-full mx-auto'
            />
            <h1 className='text-2xl font-bold'>Rocky Essel</h1>
            <p className='text-muted-foreground'>
              Web Developer | Writer | Learner
            </p>
          </div>

          <div className='space-y-4'>
            <h2 className='text-lg font-semibold'>freeCodeCamp</h2>
            <Button variant='outline' className='w-full justify-start' asChild>
              <a
                href='https://www.freecodecamp.org/yourusername'
                target='_blank'
                rel='noopener noreferrer'
              >
                <BookOpen className='mr-2 h-4 w-4' />
                freeCodeCamp Profile
              </a>
            </Button>
          </div>

          <div className='space-y-4'>
            <h2 className='text-lg font-semibold'>Social Media</h2>
            <div className='grid grid-cols-2 gap-4'>
              <Button
                variant='outline'
                className='w-full justify-start'
                asChild
              >
                <a
                  href='https://github.com/yourusername'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Github className='mr-2 h-4 w-4' />
                  GitHub
                </a>
              </Button>
              <Button
                variant='outline'
                className='w-full justify-start'
                asChild
              >
                <a
                  href='https://linkedin.com/in/yourusername'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Linkedin className='mr-2 h-4 w-4' />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant='outline'
                className='w-full justify-start'
                asChild
              >
                <a
                  href='https://twitter.com/yourusername'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Twitter className='mr-2 h-4 w-4' />
                  Twitter
                </a>
              </Button>
              <Button
                variant='outline'
                className='w-full justify-start'
                asChild
              >
                <a
                  href='https://youtube.com/@yourusername'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Youtube className='mr-2 h-4 w-4' />
                  YouTube
                </a>
              </Button>
              <Button
                variant='outline'
                className='w-full justify-start'
                asChild
              >
                <a
                  href='https://facebook.com/yourusername'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Facebook className='mr-2 h-4 w-4' />
                  Facebook
                </a>
              </Button>
              <Button
                variant='outline'
                className='w-full justify-start'
                asChild
              >
                <a
                  href='https://instagram.com/yourusername'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Instagram className='mr-2 h-4 w-4' />
                  Instagram
                </a>
              </Button>
            </div>
          </div>

          <div className='space-y-4'>
            <h2 className='text-lg font-semibold'>Writing Platforms</h2>
            <Button variant='outline' className='w-full justify-start' asChild>
              <a
                href='https://medium.com/@yourusername'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Globe className='mr-2 h-4 w-4' />
                Medium
              </a>
            </Button>
            <Button variant='outline' className='w-full justify-start' asChild>
              <a
                href='https://dev.to/yourusername'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Globe className='mr-2 h-4 w-4' />
                DEV Community
              </a>
            </Button>
            <Button variant='outline' className='w-full justify-start' asChild>
              <a
                href='https://hashnode.com/@yourusername'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Globe className='mr-2 h-4 w-4' />
                Hashnode
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LinksPage;
