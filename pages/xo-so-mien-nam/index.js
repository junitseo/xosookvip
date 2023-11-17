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

import HeaderCalendar from "app/components/HeaderCalendar"

function SouthernLottery({data, arrayOfDate, dataPost}) {

  const mapData = useMemo(() => {
    if(!data) return [];
    return data.map((item, index) => {
      return {
        lotos: item.map(i => ({resultHead: i.resultHead, resultEnd: i.resultEnd, provinceName: i.provinceName})),
        dataItem: item,
        dayofWeek: getDayOfWeek(arrayOfDate[index]),
        dateFormat: arrayOfDate[index].replace(/-/g, '/')
      }
    })
  },[data])
  return (
    <>
      <Meta title="Xố Số miền Nam - KQXS - XS - XSMN - XSKT - Xổ số OKVIP"/>
      <div className={stylesCss['wrapper']}>
      <SideBarLeft dataPost={dataPost} />
      <div style={{flex: 1}}>
        <h2 className="title-heading">KẾT QUẢ XỔ SỐ MiỀN NAM</h2>
        <HeaderCalendar />

        {mapData.map(item => {
          return (
            <div key={item.dateFormat} style={{marginBottom: 15}}>
              <BlockResultSX data={item.dataItem} title={`xsmn ${item.dayofWeek}, xsmn ngày ${item.dateFormat}`} />
              <BlockResultLoto dataLoto={item.lotos} title={`Bảng Loto xổ số Miền Nam -  ${item.dateFormat}`}/>
            </div>
          )
        })}
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
  const arrayOfDate = [];
  let i = 0;
  while (i <= 6) {
    arrayOfDate.push(moment(date, "DD-MM-YYYY").subtract(i, "days").format("DD-MM-YYYY"))
    i++;
  }
  const dataPromises = arrayOfDate.map(async (d) => {
      return getKqxsMn(d);
  });
  const [data, dataPost] = await Promise.all([
    Promise.all(dataPromises),
    getPosts()
  ])
  return {
    props: { 
      data,
      arrayOfDate,
      dataPost
    }
  }
}
