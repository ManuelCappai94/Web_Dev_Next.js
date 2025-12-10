import Link from "next/link";
import type { Article } from "@/app/types/article";
import {server} from "@/app/config/config"
//SSG (moderno) → 

export async function generateMetadata( { params }: { params: Promise <{ id: string }> }){
  const {id} = await params;
  const post = await getPostApi(id)
return {
     title: {
      default:  `${post.title}`,
      templat: "%s | My Next App",
     },
      description: post.body.slice(0, 50)
}
}

export async function generateStaticParams() {
    const res = await fetch(`${server}/api/articles`)
    const article = await res.json()

    return article.map((art: Article) => ({id: art.id.toString()}))
}


const getPostApi = async (id: string): Promise<Article> => {
    try {
         const res = await fetch(`${server}/api/articles/${id}`);

        if (!res.ok) throw new Error("Errore durante la fetch");

         return res.json();

    } catch (error){
        console.error("Errore getPost", error);
        throw error; // questo qua lo propaga dentro next.js, cosi che lo gestisce con il fallback automatico, o error.tsx
    }
};


export default async function SSGArticlePage({params }: {params: Promise <{ id:string}>}){
    const { id } = await params; //stesso problema ho dovuto aggiungere await per farlo funzionare e la funzione deve prendere paramas come genrico
  const post = await getPostApi(id);

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