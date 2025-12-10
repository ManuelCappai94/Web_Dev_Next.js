import Image from "next/image";
import Head from "next/head";
import Article from "./components/Article";
import ApiPost from "./components/ApiPost";
import { server } from "./config/config";


export default async function Home() {
  const posts :[] = await getPost()
  const articles:[] = await getPostApi()
  console.log(articles)
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <article>
        <Article posts={posts} />
        <ApiPost articles={articles} />
      </article>
    </div>
  );
}

export const getPost = async () =>  { 
  const res: Response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6", {
     next: {revalidate: 60} // il next si inserisce dentro il fetch
  }); 
  return res.json() 
  
}

const getPostApi = async ()=> {
    try {
         const res = await fetch(`${server}/api/articles`);

        if (!res.ok) throw new Error("Errore durante la fetch");

         return res.json();

    } catch (error){
        console.error("Errore getPost", error);
        throw error; // questo qua lo propaga dentro next.js, cosi che lo gestisce con il fallback automatico, o error.tsx
    }
};