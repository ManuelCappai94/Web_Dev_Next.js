import React from 'react'
import { Post } from '../types/post'
import articleStyle from "../styles/Article.module.css"
import Link from 'next/link'

type ArticleItemProps = {
  post: Post;
};

const ArticleItem = ({post}: ArticleItemProps) => {
  return (
    <Link href={`/article/${post.id}`}className={articleStyle.card}>
            <h3>SSR :{post.title} &rarr;</h3>     
    </Link>
  )
}

export default ArticleItem
