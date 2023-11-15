import React, { useMemo, useState } from 'react'
import BlockResultSX from 'components/BlockResultSX'
import BlockResultLoto from 'components/BlockResultLoto'
import SideBarRight from 'components/SideBarRight'
import SideBarLeft from 'components/SideBarLeft'
import stylesCss from '../../styles/ThreeRegionLottery.module.css'
import Meta from "app/components/Meta"
import { getKqxsMn } from 'app/api/kqxsApi'
import { getDayOfWeek } from 'app/utils/getDayOfWeek'
import moment from 'moment'
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
      <Meta title="Xố Số miền Nam - KQXS - XS - XSMN - XSKT - Xổ số OKVIP"/>
      <div className={stylesCss['wrapper']}>
      <SideBarLeft dataPost={dataPost} />
      <div style={{flex: 1}}>
        <h2 className={stylesCss['title']}>KẾT QUẢ XỔ SỐ MiỀN NAM</h2>
        <BlockResultSX data={data} title={`xsmn ${dayofWeek}, xsmn ngày ${dateFormat}`} />
        <BlockResultLoto dataLoto={dataLoto} title={`Bảng Loto xổ số Miền Nam -  ${dateFormat}`}/>
      </div>
      <SideBarRight />
    </div>
    </>
  
  )
}

export default SouthernLottery
export const getServerSideProps = async () => {
  const dateNow = moment();
  let date = ""
  if(dateNow - moment().hours(16).minutes(45) > 0){
    date = dateNow.format("DD-MM-YYYY");
  }else {
    date = dateNow.subtract(1, 'days').format("DD-MM-YYYY");
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
