import Link from 'next/link';

export default function Header() {
  return (
    <h2 className='mt-8 mb-20 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter'>
      <Link href='/'>
        <a className='flex hover:underline'>
          Bl
          <img
            src='/assets/leo-emoji.png'
            className='w-8 h-8 mx-1 mt-[2px] bg-gray-900 rounded-full'
          />
          g.
        </a>
      </Link>
    </h2>
  );
}
