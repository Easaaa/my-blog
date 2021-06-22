import DateFormatter from '../components/date-formatter';

import Link from 'next/link';

export default function PostPreview({ title, date, excerpt, slug }) {
  return (
    <div>
      <h3 className='text-3xl leading-snug'>
        <Link as={`/posts/${slug}`} href='/posts/[slug]'>
          <a className='font-semibold hover:underline'>{title}</a>
        </Link>
      </h3>
      <div className='mb-4 text-sm'>
        <DateFormatter dateString={date} />
      </div>
      <p className='mb-4 text-lg leading-tight text-gray-700'>{excerpt}</p>
    </div>
  );
}
