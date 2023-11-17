import React, { useMemo, useState } from 'react'
import BlockResultSX from 'components/BlockResultSX'
import BlockResultLoto from 'components/BlockResultLoto'
import SideBarRight from 'components/SideBarRight'
import SideBarLeft from 'components/SideBarLeft'
import stylesCss from '../../../styles/ThreeRegionLottery.module.css'
import Link from 'next/link'
import Meta from "app/components/Meta"
import { useRouter } from 'next/router'
import { provincesMN, provincesMT } from 'app/data/provinces';
import { getKqxsProvince } from 'app/api/kqxsApi'
import { getDayOfWeek } from 'app/utils/getDayOfWeek'
import { getPosts } from 'api/postApi';

function ThreeRegionLottery({data, province, date, dataPost}) {
  const router = useRouter();

  const dataLoto = useMemo(() => {
    if(!data) return;
    return data.map((item) => (
      {resultHead: item.resultHead, resultEnd: item.resultEnd, provinceName: item.provinceName}
    ))
  },[data])

  const dayofWeek = useMemo(() => getDayOfWeek(date))
  const dateFormat = useMemo(() => date.replace(/-/g, '/'))


  return (
    <>
      <Meta title={`Xổ số ${province.name} - KQXS - XS - XS3M - XSKT - Xổ số OKVIP`}/>
      <div className={stylesCss['wrapper']}>
      <SideBarLeft dataPost={dataPost} />
      <div style={{flex: 1}}>
        <h2 className="title-heading">KẾT QUẢ XỔ SỐ {province.name}</h2>
        {data && 
        <>
            <BlockResultSX data={data} title={`xsmt ${dayofWeek}, xsmt ngày ${dateFormat}`} />
            <BlockResultLoto dataLoto={dataLoto} title={`Bảng Loto xổ số Miền Trung -  ${dateFormat}`}/>
        </>

        }
         
      </div>
      <SideBarRight />
    </div>
    </>
  )
}

export default ThreeRegionLottery

export const getServerSideProps = async ({query, params}) => {
  let province = null; 
  province = provincesMN.find(item => query.slug == item.slug)
  if(!province){
  province = provincesMT.find(item => query.slug == item.slug)
  }
  if(!province){
    return {
      notFound: true,
    }
  }
 
  let [data, dataPost] = await Promise.all([
    getKqxsProvince(province._id),
    getPosts()
  ])
  let date = ""
  if(data && Array.isArray(data)){
    date = data[0].listXSTT[0].dayPrize;
  }else {
    data = null;
  }
  return {
    props: { 
      data,
      province,
      date,
      dataPost
    }
  }
}
