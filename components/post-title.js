export default function PostTitle({ children }) {
  return (
    <h1 className='mb-12 text-6xl font-bold leading-tight tracking-tighter text-center md:leading-none md:mb-6 lg:mb-24'>
      {children}
    </h1>
  );
}
