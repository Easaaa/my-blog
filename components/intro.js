import Link from 'next/link';

export default function Intro() {
  return (
    <section className='flex flex-col items-center mt-16 mb-16 rounded-2xl md:flex-row md:justify-between md:mb-12'>
      <h1 className='flex text-6xl font-bold leading-tight tracking-tighter text-gray-900 font-nunito place-items-center md:pr-8'>
        Bl
        <img
          src='/assets/leo-emoji.png'
          className='w-12 h-12 mx-1 mt-[2px] bg-gray-900 rounded-full'
        />
        g.
      </h1>
      <nav className='grid grid-flow-col gap-2 mt-5 text-lg text-center md:gap-4 lg:gap-8 md:text-left md:pl-8'>
        {/* <Link href='#'>
          <a>Blog</a>
        </Link> */}
        <Link href='/posts/my-presentation'>
          <a>About</a>
        </Link>

        <Link href='/projects'>
          <a>Projects</a>
        </Link>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </nav>
    </section>
  );
}
