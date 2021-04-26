import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>A Dev Blog</title>
        </Head>
        <Container>
          <Intro />
          <section className='mb-6 md:mb-12 lg:mb-24 sm:mt-20'>
            <h2 className='text-2xl font-bold leading-tight tracking-tighter text-gray-400'>
              Latest
            </h2>
            <div className='h-[5px] bg-gray-400 w-10 mb-8' />
            <PostPreview
              title={heroPost.title}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          </section>

          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt']);

  return {
    props: { allPosts },
  };
}
