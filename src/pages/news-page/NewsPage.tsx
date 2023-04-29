import { useParams } from 'react-router-dom'
import { useGetNewsQuery } from 'src/store/api/api'
import NewsInfo from 'src/components/news-info/NewsInfo'
import CommentList from 'src/components/commment-list/CommentList'
import Loader from 'src/components/loader/Loader'


export default function NewsPage() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetNewsQuery(id);
  if (error) {
    return <div>Error:</div>
  }
  if (isLoading || data === undefined) {
    return <Loader/>
  }
  return (
    <>
      <NewsInfo news={data}/>
      <CommentList commentsIds={data.kids}/>
    </>
  )
}
