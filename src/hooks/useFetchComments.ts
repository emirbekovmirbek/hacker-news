import { useState } from "react"
import { IComment } from "src/store/types"


export const useFetchComments = (commentsIds: number[] | undefined) => {
  const [commentList, setCommentList] = useState<IComment[]>([])
  const [loading, setLoading] = useState(true);
  const getComments = async () => {
    if(!!commentsIds?.length) {
      const result = await Promise.all(commentsIds.map(async (id) => {
        const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        const data = await res.json()
        return data;
      }))
      const data = result as IComment[];
      setCommentList(data);
      setLoading(false)
    }
    return;
  };
  return { loading, getComments, commentList}
}