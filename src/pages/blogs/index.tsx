import Image from "next/image";
import Link from "next/link";
import styles from "./blogs.module.scss";
export interface Props {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/posts?limit=9");
  const data = await res.json();
  return {
    props: {
      posts: data.posts,
      total: data.total,
      skip: data.skip,
      limit: data.limit,
    },
  };
}

export default function BlogsPage({ posts }: Props) {
  return (
    <>
      <h1>Blogs</h1>
      <div className={styles.blog_wrapper}>
        {posts.map((post, key: number) => {
          return (
            <div key={key} className={styles.blog}>
              <Link href={`/blogs/${post.id}`}>
              <h2>
                {post.id}. {post.title}
              </h2>
              <p className={styles.body}>{post.body}</p>
              <div className={styles.footer}>
                <div className={styles.tags}>
                  {post.tags.map((tag, key) => {
                    return <p key={key}>{tag}</p>;
                  })}
                </div>
                <div className={styles.reactions}>
                    <Image src={"/images/heart.png"} alt="reactions" width={20} height={20} ></Image>
                    <p>{post.reactions}</p>
                </div>
              </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
