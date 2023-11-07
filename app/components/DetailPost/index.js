import React from 'react'
import stylesCss from '../../../styles/DetailPost.module.css'
import moment from 'moment'
import 'moment/locale/vi'
moment.locale('vi')
function DetailPost({data}) {
  return (
    <div className={stylesCss['wrapper']}>
      <div className={stylesCss['title']}>{data.post_title}</div>
      <div className={stylesCss['day']}>{moment(data.createdAt).format('LLLL')}</div>
      <div className={stylesCss['content']} dangerouslySetInnerHTML={{__html: data.post_content}}></div>
    </div>
  )
}

export default DetailPost