import DateFormatter from '../components/date-formatter';
import Link from 'next/link';

export default function HeroPost({ title, date, excerpt, slug }) {
  return (
    <section className='grid gap-4 lg:gap-x-32'>
      <div className='grid mb-20 md:gap-x-16 lg:gap-x-12 md:mb-28 place-content-start'>
        <div>
          <h3 className='mb-4 text-4xl leading-tight lg:text-6xl'>
            <Link as={`/posts/${slug}`} href='/posts/[slug]'>
              <a className='hover:underline'>{title}</a>
            </Link>
          </h3>
        </div>
        <div className='mb-4 text-lg md:mb-0'>
          <DateFormatter dateString={date} />
        </div>
        <div>
          <p className='mb-4 text-lg leading-relaxed'>{excerpt}</p>
        </div>
      </div>
    </section>
  );
}
