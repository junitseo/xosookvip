import React, { useMemo, useState } from 'react'
import BlockResultSX from 'components/BlockResultSX'
import BlockResultSX2 from 'components/BlockResultSX2'
import BlockResultLoto from 'components/BlockResultLoto'
import SideBarRight from 'components/SideBarRight'
import DetailPost from 'components/DetailPost'
import SideBarLeft from 'components/SideBarLeft'
import stylesCss from '../styles/ThreeRegionLottery.module.css'
import Link from 'next/link'
import Meta from "app/components/Meta"
import { getKqxsMb, getKqxsMn, getKqxsMt } from 'app/api/kqxsApi'
import moment from 'moment'
import { getDayOfWeek } from 'app/utils/getDayOfWeek'
function Home({dataMb, dataMn, dataMt, dateMb, dateMn, dateMt}) {

  const dataLotoMn = useMemo(() => {
    if(!dataMn) return [];
    return dataMn.map((item) => (
      {resultHead: item.resultHead, resultEnd: item.resultEnd, provinceName: item.provinceName}
    ))
  },[dataMn])

  const dataLotoMb = useMemo(() => {
    if(!dataMb) return [];
    return [{resultHead: dataMb.resultHead, resultEnd: dataMb.resultEnd, provinceName: dataMb.provinceName}]
  },[dataMb])
  const dataLotoMt = useMemo(() => {
    if(!dataMt) return [];
    return [{resultHead: dataMt.resultHead, resultEnd: dataMt.resultEnd, provinceName: dataMt.provinceName}]
  },[dataMt])
  const dayofWeek = useMemo(() => getDayOfWeek(dateMb))
  const dateFormat = useMemo(() => moment(dateMb).format("MM/DD/YYYY"))
  const dayofWeekMn = useMemo(() => getDayOfWeek(dateMn))
  const dateFormatMn = useMemo(() => moment(dateMn).format("MM/DD/YYYY"))
  const dayofWeekMt = useMemo(() => getDayOfWeek(dateMt))
  const dateFormatMt = useMemo(() => moment(dateMt).format("MM/DD/YYYY"))
  return (
    <>
      <Meta title="Xổ số ba miền"/>
      <div className={stylesCss['wrapper']}>
      <SideBarLeft />
      <div style={{flex: 1}}>
        <h2 className={stylesCss['title']}>KẾT QUẢ XỔ SỐ HÔM NAY</h2>
          <ul className={stylesCss['tab_select']}>
            <li>
              <Link title="Miền Nam - Xem tất cả" href="">
                <span>Miền Nam </span>
              </Link>
            </li>
            <li>
              <Link title="Thứ hai" href="">
                <span>Thứ hai</span>
              </Link>
            </li>
            <li>
              <Link title="Thứ ba" href="">
                <span>Thứ ba</span>
              </Link>
            </li>
            <li>
              <Link title="Thứ tư" href="">
                <span>Thứ tư</span>
              </Link>
            </li>
            <li>
              <Link title="Thứ năm" href="">
                <span>Thứ năm</span>
              </Link>
            </li>
            <li>
              <Link title="Thứ sáu" href="">
                <span>Thứ sáu</span>
              </Link>
            </li>
            <li>
              <Link title="Thứ bảy" href="">
                <span>Thứ bảy</span>
              </Link>
            </li>
            <li>
              <Link title="Chủ nhật" href="">
                <span>Chủ nhật</span>
              </Link>
            </li>
          </ul>
          <BlockResultSX data={dataMn} title={`xsmn ${dayofWeekMn}, xsmn ngày ${dateFormatMn}`} />
          <BlockResultLoto dataLoto={dataLotoMn} title={`Bảng Loto xổ số Miền Nam -  ${dateFormatMn}`}/>
          <div style={{marginTop: 20}}></div>
          <BlockResultSX2 data={dataMb} title={`xsmb ${dayofWeek}, xsmb ngày ${dateFormat}`} />
          <BlockResultLoto dataLoto={dataLotoMb} title={`Bảng Loto xổ số Miền Bắc -  ${dateFormat}`}/>
          <div style={{marginTop: 20}}></div>
          <BlockResultSX2 data={dataMb} title={`xsmb ${dayofWeekMt}, xsmb ngày ${dateFormatMt}`} />
          <BlockResultLoto dataLoto={dataLotoMt} title={`Bảng Loto xổ số Miền Bắc -  ${dateFormatMt}`}/>
      </div>
      <SideBarRight />
    </div>
    </>
  )
}

export default Home
export const getServerSideProps = async () => {
  const dateNow = moment();
  let dateMb = ""
  if(dateNow - moment().hours(18).minutes(45) > 0){
    dateMb = dateNow.format("DD-MM-YYYY");
  }else {
    dateMb = dateNow.subtract(1, 'days').format("DD-MM-YYYY");
  }
  let dateMn = ""
  if(dateNow - moment().hours(16).minutes(45) > 0){
    dateMn = dateNow.format("DD-MM-YYYY");
  }else {
    dateMn = dateNow.subtract(1, 'days').format("DD-MM-YYYY");
  }
  let dateMt = ""
  if(dateNow - moment().hours(17).minutes(45) > 0){
    dateMt = dateNow.format("DD-MM-YYYY");
  }else {
    dateMt = dateNow.subtract(1, 'days').format("DD-MM-YYYY");
  }
  const [dataMb, dataMn, dataMt] = await Promise.all([
    getKqxsMb(dateMb),
    getKqxsMn(dateMn),
    getKqxsMt(dateMt)
  ])
  return {
    props: {
      dataMt,
      dataMb,
      dataMn,
      dateMb,
      dateMn,
      dateMt
    }
  }
}