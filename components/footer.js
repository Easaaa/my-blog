import { useState } from 'react';
import Container from './container';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const [toggleMsg, setToggleMsg] = useState(false);
  return (
    <footer className='border-t bg-accent-1 border-accent-2'>
      <Container>
        <div className='flex flex-col items-center lg:flex-row'>
          <div class='max-w-3xl px-6 py-16 mx-auto text-left'>
            <h1 class='text-3xl font-semibold text-gray-800'>
              Subscribe to my spammy newsletter
            </h1>
            <p class='max-w-md mt-5 text-gray-500'>
              Get emails from me about web development, tech, articles and some
              other interesting stuff.
            </p>

            <div class='flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:space-x-4'>
              <input
                id='email'
                type='text'
                class='px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                placeholder='Email Address'
              />

              <button
                onClick={() => setToggleMsg(!toggleMsg)}
                class='px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700'>
                Let's Roll
              </button>
            </div>
            {toggleMsg && (
              <div className='p-2 mt-4 bg-green-300 rounded-md'>
                Sorry, I'm lazy, is not active yet and
                <br /> the footer design is cooler with the form 😆.
              </div>
            )}
          </div>

          <div className='flex flex-row w-1/2 place-content-center lg:justify-end lg:pl-4'>
            <a
              href={`https://twitter.com/_Easaaa_`}
              target='_blank'
              className='mx-3 mb-6 font-bold text-[#1da1f2]  transition duration-200 transform rounded-lg hover:scale-110 lg:px-8 lg:mb-0'>
              <FaTwitter className='text-3xl' />
            </a>
            <a
              href={`https://www.linkedin.com/in/leonardo-tononi/`}
              target='_blank'
              className='mx-3 font-bold hover:underline'>
              <FaLinkedinIn className='text-3xl' />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
