import PostPreview from '../components/post-preview';

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className='text-2xl font-semibold leading-tight tracking-tighter text-gray-600'>
        More Articles
      </h2>
      <div className='h-[3px] bg-gray-600 w-10 mb-8' />
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
