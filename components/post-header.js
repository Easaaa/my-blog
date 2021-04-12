import Avatar from '../components/avatar';
import DateFormatter from '../components/date-formatter';
import CoverImage from '../components/cover-image';
import PostTitle from '../components/post-title';

export default function PostHeader({ title, date }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className='hidden md:block md:mb-12'></div>
      <div className='max-w-2xl mx-auto mb-6 text-right'>
        <DateFormatter dateString={date} />
      </div>
    </>
  );
}
