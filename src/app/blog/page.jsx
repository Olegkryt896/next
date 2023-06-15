import Link from "next/link";

export const metadata = {
  title: "Blog",
};

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });
  return response.json();
}

export default async function Blog() {
  const posts = await getData();
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <h1>Block page</h1>
    </>
  );
}
