import React from 'react'
import ArticleStyle from "../styles/Article.module.css"
import { Post } from '../types/post'
import ArticleItem from './ArticleItem'


type ArticleList = {
    posts : Post[]
}

const Article = ({posts}: ArticleList)=> {
  return (
    <div className={ArticleStyle.grid}>
      {
        posts.map((post)=>(
          <ArticleItem key={post.id} post={post} />
        ))
      }
    </div>
  )
}

export default Article
