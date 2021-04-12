import { parseISO, format } from 'date-fns';

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className='italic text-gray-600'>
      {format(date, 'LLLL	d, yyyy')}
    </time>
  );
}
