import ArticleStyle from "../styles/Article.module.css"
import { Article } from "../types/article"
import Link from "next/link"

type ArticleList = {
    articles : Article[]
}

//tutta la box sarà il link
const ApiPost = ({articles}: ArticleList) => {
  return (
    <div className={ArticleStyle.grid}>
        {
            articles.map((article, index) =>(
                <Link href={`/ssg/${article.id}`} className = {ArticleStyle.card} key={index}>
                    <h3>SSG: {article.title} &rarr;</h3>
                </Link>)
               
            )
        }
      
    </div>
  )
}

export default ApiPost
