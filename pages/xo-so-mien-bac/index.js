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
import { getPosts } from 'api/postApi';
import HeaderCalendar from "app/components/HeaderCalendar"

function NorthernLottery({data, arrayOfDate, dataPost}) {

  const mapData = useMemo(() => {
    if(!data) return [];
    return data.map((item, index) => {
      return {
        lotos: [{resultHead: item.resultHead, resultEnd: item.resultEnd, provinceName: item.provinceName}],
        dataItem: item,
        dayofWeek: getDayOfWeek(arrayOfDate[index]),
        dateFormat: arrayOfDate[index].replace(/-/g, '/')
      }
    })
  },[data])
  return (
    <>
 
    <Meta title="Xố Số miền Bắc - KQXS - XS - XSMB - XSKT - Xổ số OKVIP"/>
      <div className={stylesCss['wrapper']}>
      <SideBarLeft dataPost={dataPost} />
      <div style={{flex: 1}}>
        <h2 className="title-heading">KẾT QUẢ XỔ SỐ MiỀN BẮC</h2>
        <HeaderCalendar />
        {mapData.map(item => {
          return (
            <div key={item.dateFormat} style={{marginBottom: 15}}>
              <BlockResultSX data={item.dataItem} title={`xsmb ${item.dayofWeek}, xsmb ngày ${item.dateFormat}`} />
              <BlockResultLoto dataLoto={item.lotos} title={`Bảng Loto xổ số Miền Bắc -  ${item.dateFormat}`}/>
            </div>
          )
        })}
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
  const arrayOfDate = [];
  let i = 0;
  while (i <= 6) {
    arrayOfDate.push(moment(date, "DD-MM-YYYY").subtract(i, "days").format("DD-MM-YYYY"))
    i++;
  }
  const dataPromises = arrayOfDate.map(async (d) => {
      return getKqxsMb(d);
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
