import Link from 'next/link';
export default function Project({ img, name, desc, cta, link }) {
  return (
    <div class='flex flex-col items-center justify-center max-w-xs'>
      <div
        class='w-full h-40 bg-gray-300 bg-center bg-cover rounded-lg shadow-md'
        style={{
          backgroundImage: img,
        }}></div>

      <div class='w-full overflow-hidden rounded mt-2 dark:bg-gray-800'>
        <h3 class='py-2 font-bold tracking-wide text-center text-gray-900 uppercase dark:text-white border-b border-gray-300'>
          {name}
        </h3>

        <div class='flex items-center justify-between px-3 py-2 bg-white dark:bg-gray-700'>
          <span class='text-gray-800 dark:text-gray-200'>{desc}</span>
          <Link href={link}>
            <a
              target='_blank'
              class='px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none'>
              {cta}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
