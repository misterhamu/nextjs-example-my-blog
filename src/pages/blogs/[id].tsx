import { useRouter } from "next/router";
import { Post } from ".";

interface Path {
  id: string;
}
interface PathProps {
  params: Path;
}
interface PostDetailProps {
  post: Post;
}

export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/posts?limit=9");
  const data = await res.json();
  const paths = data.posts.map((post: Post) => {
    return {
      params: { id: String(post.id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: PathProps) {
  const id = params?.id;
  console.log(params);
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
}

export default function BlogDetail({ post }: PostDetailProps) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
