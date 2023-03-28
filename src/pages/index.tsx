import Button from "@/components/Button";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()
  const handleOnClick = () =>{
    router.push("/blogs");
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Button onClick={handleOnClick}>Go to Blogs</Button>
      </div>
    </>
  );
}
