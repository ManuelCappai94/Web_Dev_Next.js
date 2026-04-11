import Link from "next/link";
import { server } from "@/app/config/config";
import type { Article } from "../types/article";


async function getArticles(): Promise<Article[]> {
  const res = await fetch(`${server}/api/articles`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Errore durante la fetch della API interna");
  }

  return res.json();
}

export default async function ApiDemoPage() {
  const articles = await getArticles();

  return (
    <main>
      <h1>Internal API Demo</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
        </div>
      ))}
      <Link href="/">Go Back</Link>
    </main>
  );
}