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

function NorthernLottery({data, date}) {

  const dataLoto = useMemo(() => {
    if(!data) return [];
    return [{resultHead: data.resultHead, resultEnd: data.resultEnd, provinceName: data.provinceName}]
  },[data])
  const dayofWeek = useMemo(() => getDayOfWeek(date))
  const dateFormat = useMemo(() => date.replace(/-/g, '/'))
  return (
    <>
      <Meta title="Xổ số miền bắc"/>
      <div className={stylesCss['wrapper']}>
      <SideBarLeft />
      <div style={{flex: 1}}>
        <h2 className={stylesCss['title']}>KẾT QUẢ XỔ SỐ MiỀN BẮC</h2>
        <BlockResultSX data={data} title={`xsmb ${dayofWeek}, xsmb ngày ${dateFormat}`} />
        <BlockResultLoto dataLoto={dataLoto} title={`Bảng Loto xổ số Miền Bắc -  ${dateFormat}`}/>
      </div>
      <SideBarRight />
    </div>
    </>

  )
}

export default NorthernLottery
export const getServerSideProps = async () => {
  const dateNow = moment();
  let date = ""
  if(dateNow - moment().hours(18).minutes(45) > 0){
    date = dateNow.format("DD-MM-YYYY");
  }else {
    date = dateNow.subtract(1, 'days').format("DD-MM-YYYY");
  }

  const data = await getKqxsMb(date);
  return {
    props: { 
      data,
      date
    }
  }
}
