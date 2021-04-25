import PostPreview from '../components/post-preview';

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className='mt-16 text-4xl font-bold leading-tight tracking-tighter md:text-5xl'>
        More Articles
      </h2>
      <div className='h-[5px] bg-gray-900 w-10 mb-8' />
      <div className='grid grid-cols-1 mb-32 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32'>
        {posts.map((post) => {
          if (post.slug === 'my-presentation') return;
          if (post.slug === 'bestfive') return;
          return (
            <PostPreview
              key={post.slug}
              title={post.title}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          );
        })}
      </div>
    </section>
  );
}
