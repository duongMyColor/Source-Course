export default function BlogPostPage({ params }) {
  console.log({ params });
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Blog Detail!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <div>{params.slug}</div>
    </main>
  );
}
