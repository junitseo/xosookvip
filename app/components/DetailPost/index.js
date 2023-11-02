import React from 'react'
import stylesCss from '../../../styles/DetailPost.module.css'

function DetailPost({data}) {
  return (
    <div>
      <div className={stylesCss['title']}>{data.title}</div>
      <div className={stylesCss['day']}>Thứ Hai, 30/10/2023</div>
      <div className={stylesCss['content']} dangerouslySetInnerHTML={{__html: data.content}}></div>
    </div>
  )
}

export default DetailPost