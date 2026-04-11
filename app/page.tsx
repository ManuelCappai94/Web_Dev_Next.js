import Article from "./components/Article";
import ApiPost from "./components/ApiPost";
import { server } from "./config/config";
import style from "./styles/Layuot.module.css"
import { articles } from "@/data";


export default async function Home() {
  const posts :[] = await getPost()
  // const articles:[] = await getPostApi()
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <article>
        <div className={style.ssrCont}>
          <h3>ISR e SSR Posts</h3>
          <p> 
              Questa sezione usa <span className={style.highlighted}>ISR</span> (Incremental Static Regeneration): i post mostrati nella home
              vengono <span className={style.links}>aggiornati periodicamente</span> tramite <span className={style.highlighted}>revalidate</span>. <br/>Cliccando su un post, la <span className={style.links}> pagina
              dedicata </span> viene invece <span className={style.highlighted}>renderizzata dinamicamente</span> in <span className={style.highlighted}>SSR</span> (server-side rendering), così da <span className={style.links}>recuperare i dati
              ad ogni richiesta</span>.
          </p>
        <Article posts={posts} />
        </div>
        <div className={style.ssgCont}>
               <h3>SSG Posts</h3>
      <p>
        Questa sezione usa <span className={style.highlighted}>SSG</span> (Static Site Generation): i post mostrati nella home provengono da <span className={style.links}>dati locali strutturati</span>, mentre le relative <span className={style.links}>pagine dedicate</span> sono <span className={style.highlighted}>pre-generate</span> in fase di build tramite <span className={style.highlighted}>generateStaticParams</span>.
      </p>
        <ApiPost articles={articles} />
        </div>
      </article>
    </div>
  );
}

export const getPost = async () =>  { 
 try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=6",
      {
        next: { revalidate: 60 },
      }
    )

    if (!res.ok) throw new Error("Errore fetch esterna")

    return res.json()
  } catch (error) {
    console.error("Errore getPost", error)
      
  }
}
  


// const getPostApi = async ()=> {
//     try {
//          const res = await fetch(`${server}/api/articles`);

//         if (!res.ok) throw new Error("Errore durante la fetch");

//          return res.json();

//     } catch (error){
//         console.error("Errore getPostApi", error);
//         throw error; 
//     }
// };