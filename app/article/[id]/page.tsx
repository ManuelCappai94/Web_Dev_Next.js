import React from 'react'
import { Post } from '@/app/types/post'
import Link from 'next/link'
//metodo SSR - SSR (moderno) → real-time data

export async function generateMetadata( { params }: { params: Promise <{ id: string }> }){
  const {id} = await params;
  const post = await getPost(id)
return {
     title: {
      default:  `${post.title}`,
      templat: "%s | My Next App",
     },
      description: post.body.slice(0, 50)
}
}


const getPost = async (slug: string)  => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, { cache: "no-store" })
    // console.log("Faccio la fetch con id:", slug);
    // console.log("Response:", res.status, res.ok);
    return res.json()
}

const article = async ({params}: {params: Promise <{id:string}> }) => {
    const { id } = await params; // params in questo caso è una Promise, quindi seguendo le istruzioni dell'errore che mi ritornava, ho wrappato params, in modo tale che il valore di id mi venga ritornato quando la Promisa è pronta. Il che mi ha portato ja usare un generico per indicare il type di params, devo approfondire questo, per capire se è la soluzione corretta.
  const post = await getPost(id);
  return (
    <>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    <br />
    <Link href="/">Go Back</Link>
    </>
  )
}


export default article
