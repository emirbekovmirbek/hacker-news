import { useState } from 'react'
import { Collapse, Typography } from 'antd'
import { IComment } from 'src/store/types'
import IconText from '../icon-text/IconText'
import { convertDate } from 'src/utils/convertDate'
import { CalendarOutlined } from '@ant-design/icons'
import { useFetchComments } from 'src/hooks/useFetchComments'


const {Panel} = Collapse
export default function ItemComment({text, by, kids, id, time }: IComment) {
  const {commentList, getComments} = useFetchComments(kids);
  const [fetchedComments, setFetchedComments] = useState<number []>([])

  const handleClick = () => {
    if(!!fetchedComments.includes(id)) {      
      return
    }
    setFetchedComments((prev) => [...prev, id]);
    getComments()
  }
  return (
    <Collapse onChange={handleClick} collapsible={kids?.length ? 'icon': 'disabled'}>
      <Panel header={
        <div>
          <Typography.Text>Author: {by}</Typography.Text>
          <div dangerouslySetInnerHTML={{ __html: text }}/>
          <IconText text={convertDate(time)} icon={CalendarOutlined}/>
        </div>}
          key={id} showArrow={!!kids?.length}>
      {kids?.length && commentList.map((childComment) => 
        <ItemComment
          text={childComment.text}
          by={childComment.by}
          time={childComment.time}
          kids={childComment.kids} key={childComment.id}
          id={childComment.id}
        />)}
    </Panel>
  </Collapse>
  )
}
