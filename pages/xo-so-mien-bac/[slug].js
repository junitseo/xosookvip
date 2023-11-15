import React, { useMemo, useState } from 'react'
import BlockResultSX from 'components/BlockResultSX2'
import BlockResultLoto from 'components/BlockResultLoto'
import SideBarRight from 'components/SideBarRight'
import SideBarLeft from 'components/SideBarLeft'
import stylesCss from '../../styles/ThreeRegionLottery.module.css'
import Meta from "app/components/Meta"
import { getKqxsMb } from 'app/api/kqxsApi'
import moment from 'moment'
import { getDayOfWeek } from 'app/utils/getDayOfWeek'
import { dataDayOfWeek } from 'app/data/dataDayOfWeek'
import { getDateById } from 'app/utils/getDateById'
import BlockResultSXLoading from 'components/BlockResultSXLoading'
import { getPosts } from 'api/postApi';

function NorthernLottery({data, date, dataPost}) {
  const dataLoto = useMemo(() => {
    if(!data) return [];
    return [{resultHead: data.resultHead, resultEnd: data.resultEnd, provinceName: data.provinceName}]
  },[data])
  const dayofWeek = useMemo(() => getDayOfWeek(date))
  const dateFormat = useMemo(() => date.replace(/-/g, '/'))
  return (
    <>
      <Meta title="Xố Số miền Bắc - KQXS - XS - XSMB - XSKT - Xổ số OKVIP"/>
      <div className={stylesCss['wrapper']}>
      <SideBarLeft dataPost={dataPost} />
      <div style={{flex: 1}}>
        <h2 className={stylesCss['title']}>KẾT QUẢ XỔ SỐ MiỀN BẮC</h2>
        {data? 
          <>
              <BlockResultSX data={data} title={`xsmb ${dayofWeek}, xsmb ngày ${dateFormat}`} />
              <BlockResultLoto dataLoto={dataLoto} title={`Bảng Loto xổ số Miền Bắc -  ${dateFormat}`}/>
          </>
          : <BlockResultSXLoading title={`xsmb ${dayofWeek}, xsmb ngày ${dateFormat}`} />
        }
      </div>
      <SideBarRight />
    </div>
    </>

  )
}

export default NorthernLottery
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
    getKqxsMb(date),
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
