import { Typography, Divider } from 'antd'
import { MessageOutlined, StarOutlined, CalendarOutlined } from '@ant-design/icons'
import { convertDate } from 'src/utils/convertDate'
import IconText from '../icon-text/IconText'
import { INews } from 'src/store/types'


const { Title } = Typography;
interface PropsType {
  news: INews
}
export default function NewsInfo({news}: PropsType) {
  return (
    <div style={{textAlign: 'center'}}>
      <Divider/>
      <Title>
        {news.title}
      </Title>
      <Divider/>
      <Title level={3}>
          Author: {news.by}
      </Title>
      <div style={{ display: 'flex', gridGap: '20px', justifyContent: 'center'}}>
        <IconText icon={StarOutlined} text={news.score} key="list-vertical-star-o" />
        <IconText icon={MessageOutlined} text={news.descendants} key="list-vertical-like-o" />
        <IconText icon={CalendarOutlined} text={convertDate(news.time)} key="list-vertical-message" />
      </div>
      <Title level={3} type="secondary" copyable>
        {news.url}
      </Title>
    </div>
  )
}
