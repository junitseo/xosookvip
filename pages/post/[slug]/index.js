import React, { useState } from 'react'
import SideBarRight from 'components/SideBarRight'
import DetailPost from 'components/DetailPost'
import SideBarLeft from 'components/SideBarLeft'
import stylesCss from '../../../styles/ThreeRegionLottery.module.css'
import Meta from "app/components/Meta"
import { getPostBySlug, getPosts } from 'api/postApi';

function ThreeRegionLottery({data, dataPost}) {
  return (
    <>
      <Meta title="Xổ số ba miền"/>
      <div className={stylesCss['wrapper']}>
      <SideBarLeft dataPost={dataPost} />
        <div style={{flex: 1, width: "5%"}}>
          <DetailPost data={data}/>
        </div>
      <SideBarRight />
    </div>
    </>
  )
}

export default ThreeRegionLottery
export const getServerSideProps = async ({query}) => {
  const [data, dataPost] = await Promise.all([
    getPostBySlug(query.slug),
    getPosts()
  ])
  if(data && data._id){
    return {
      props: { 
        data,
        dataPost
      }
    }
  }else {
    return {
      notFound: true,
    }
  }
 
}
