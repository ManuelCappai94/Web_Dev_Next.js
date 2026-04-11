import Link from "next/link";
import type { Article } from "@/app/types/article";
import {articles} from "@/data"

//SSG (moderno) → 

export async function generateMetadata({ 
  params
 }: { 
  params: Promise <{ id: string }>
 }){
  const {id} = await params;
  // const post = await getPostApi(id)
  const post = articles.find(
    (article: Article) => article.id.toString() === id
  )
  if(!post){
    return {
      title: "Post not found",
      description: "This article does not exist.",
    }
  }

return {
     title: {
      default:  `${post.title}`,
      template: "%s | My Next App",
     },
      description: post.body.slice(0, 50)
}
}

export async function generateStaticParams() {
    return articles.map((art) => ({
    id: art.id.toString(),
}))}


// const getPostApi = async (id: string): Promise<Article> => {
//     try {
//          const res = await fetch(`${server}/api/articles/${id}`);

//         if (!res.ok) throw new Error("Errore durante la fetch");

//          return res.json();

//     } catch (error){
//         console.error("Errore getPost", error);
//         throw error; // questo qua lo propaga dentro next.js, cosi che lo gestisce con il fallback automatico, o error.tsx
//     }
// };


export default async function SSGArticlePage({
    params 
}: {
    params: Promise <{ id:string}>
  }){
    const { id } = await params;
    const post = articles.find(
    (article: Article) => article.id.toString() === id
  );
  if (!post) {
    return <h1>Post not found</h1>;
  }
  return (
    <>
      <h1>SSG: {post.title}</h1>
      <p>{post.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
}


// import { notFound } from "next/navigation";

// const post = await getPost(id);
// if (!post?.id) notFound();. 