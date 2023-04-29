import { useEffect } from 'react'
import ItemComment from '../comment/ItemComment'
import { Spin, Divider, Button, Typography } from 'antd'
import { useFetchComments } from 'src/hooks/useFetchComments'
import { useNavigate } from 'react-router-dom'


interface PropsType {
  commentsIds: number[]
}

export default function CommentList({commentsIds}: PropsType) {
  const {loading, commentList, getComments} = useFetchComments(commentsIds)
  const navigate = useNavigate();

  useEffect(() => {
    getComments()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if(loading) {
    return <Spin/>
  }
  return (
    <div>
      <Divider/>
      <Typography.Title level={3} style={{ textAlign: 'center'}}>
        All Comments
      </Typography.Title>
      {commentList.map((comment) => 
      <ItemComment key={comment.id}
        text={comment.text}
        by={comment.by}
        time={comment.time}
        kids={comment.kids}
        id={comment.id}
      />)}
      <Divider/>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%', margin: '0 auto'}}>
        <Button onClick={() => navigate('/')} type="primary" ghost>Back to news</Button>
        <Button onClick={getComments} type="primary">Refetch comments</Button>
      </div>
    </div>
  )
}
