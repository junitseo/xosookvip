import React, { useMemo, useState } from 'react'
import BlockResultSX from 'components/BlockResultSX'
import BlockResultLoto from 'components/BlockResultLoto'
import SideBarRight from 'components/SideBarRight'
import SideBarLeft from 'components/SideBarLeft'
import stylesCss from '../../styles/ThreeRegionLottery.module.css'
import Meta from "app/components/Meta"
import { getKqxsMn } from 'app/api/kqxsApi'
import { getDayOfWeek } from 'app/utils/getDayOfWeek'
import { dataDayOfWeek } from 'app/data/dataDayOfWeek'
import { getDateById } from 'app/utils/getDateById'
import BlockResultSXLoading from 'components/BlockResultSXLoading'
import { getPosts } from 'api/postApi';


function SouthernLottery({data, date, dataPost}) {
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
      <Meta title="Xổ số miền nam"/>
      <div className={stylesCss['wrapper']}>
      <SideBarLeft dataPost={dataPost} />
      <div style={{flex: 1}}>
        <h2 className={stylesCss['title']}>KẾT QUẢ XỔ SỐ MiỀN NAM</h2>
        {data && data.length > 0 ?
          <>
            <BlockResultSX data={data} title={`xsmn ${dayofWeek}, xsmn ngày ${dateFormat}`} />
            <BlockResultLoto dataLoto={dataLoto} title={`Bảng Loto xổ số Miền Nam -  ${dateFormat}`}/>
          </>
          :
          <BlockResultSXLoading title={`xsmn ${dayofWeek}, xsmn ngày ${dateFormat}`} />
        }

      </div>
      <SideBarRight />
    </div>
    </>
  
  )
}

export default SouthernLottery
export const getServerSideProps = async ({params}) => {
  let date = ""
  const item = dataDayOfWeek.find(i => i.name == params.slug);
  if(item){
    date = getDateById(item.value)
  }else {
    return {
      notFound: true,
    }
  }
  const [data, dataPost] = await Promise.all([
    getKqxsMn(date),
    getPosts()
  ])
  return {
    props: { 
      data,
      date,
      dataPost
    }
  }
}
