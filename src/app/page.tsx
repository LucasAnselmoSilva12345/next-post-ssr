import Link from 'next/link';

export default function Home() {
  return (
    <section>
      <Link href="/posts" className="block bg-violet-400">
        Posts
      </Link>
    </section>
  );
}
