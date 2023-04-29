import { MessageOutlined, StarOutlined, CalendarOutlined } from '@ant-design/icons'
import { List, Avatar, Button } from 'antd'
import { useGetNewsListQuery } from 'src/store/api/api'
import { INews } from 'src/store/types'
import { convertDate } from 'src/utils/convertDate'
import { Link } from 'react-router-dom'
import Loader from '../loader/Loader'
import IconText from '../icon-text/IconText'


const {Item} = List;
export default function ListNews() {
  const { data, isLoading, error, refetch, isFetching } = useGetNewsListQuery('topstories')
  if (isLoading || isFetching) {
    return <Loader/>
  }

  if (error) {
    return <div>Error:</div>
  }
  if (!data) {
    return null
  }
  return (
    <div>
      <List
    itemLayout="horizontal"
    size="large"
    pagination={{
      pageSize: 3,
      showSizeChanger: false
    }}
    dataSource={data}
    renderItem={(item: INews) => (
      <Item
        key={item.id}
        actions={[
          <IconText icon={StarOutlined} text={item.score} key="list-vertical-star-o" />,
          <IconText icon={MessageOutlined} text={item.descendants} key="list-vertical-like-o" />,
          <IconText icon={CalendarOutlined} text={convertDate(item.time)} key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <Item.Meta
          avatar={<Avatar size={64} shape="square">{item.by}</Avatar>}
          title={<Link to={`/news/${item.id}`}>{item.title}</Link>}
          description={<a href={item.url} target="_blank" rel="noreferrer">{item.url}</a>}
        />
      </Item>
    )}
  />
  <Button onClick={refetch} type="primary" style={{width: '100%', margin: '20px 0'}}>Refetch</Button>
    </div>
  )
}
