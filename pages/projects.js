import Container from '../components/container';
import Intro from '../components/intro';
import Layout from '../components/layout';
import Head from 'next/head';
import Project from '../components/project';

export default function Projects() {
  return (
    <>
      <Layout>
        <Head>
          <title>Projects</title>
        </Head>
        <Container>
          <Intro />
          <section className='mb-6 md:mb-12 lg:mb-24 sm:mt-20'>
            <h2 className='text-2xl font-bold leading-tight tracking-tighter'>
              Projects
            </h2>
            <div className='h-[5px] bg-gray-900 w-10 mb-8' />
            <div className='grid w-full max-w-5xl gap-16 mt-6 xl:gap-0 xl:grid-flow-col sm:mt-24'>
              <Project
                img='url(/assets/camoscio.png)'
                name='Il Camoscio'
                desc='Poker Web App'
                link='https://csh.vercel.app'
                cta='View'
              />
              <Project
                img='url(/assets/bestfive.png)'
                name='BestFiveBcn'
                desc='Tourism Web App'
                link='/posts/bestfive'
                cta='Read'
              />
            </div>
          </section>

          {/*  <section className='mb-6 md:mb-12 lg:mb-24 sm:mt-20'>
            <h2 className='text-2xl font-bold leading-tight tracking-tighter'>
              Personal Projects
            </h2>
            <div className='h-[5px] bg-gray-900 w-10 mb-8' />
            <div className='grid w-full grid-flow-col mt-6 sm:mt-24'>
              {' '}
              <Project
                img='url(/assets/bestfive.png)'
                name='BestFiveBcn'
                desc='Tourism Web App'
              />
            </div>
          </section> */}
        </Container>
      </Layout>
    </>
  );
}

/* export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt']);

  return {
    props: { allPosts },
  };
}
 */
