import React, { useMemo, useState } from 'react'
import BlockResultSX from 'components/BlockResultSX'
import BlockResultSXLoading from 'components/BlockResultSXLoading'
import BlockResultSX2 from 'components/BlockResultSX2'
import BlockResultLoto from 'components/BlockResultLoto'
import SideBarRight from 'components/SideBarRight'
import SideBarLeft from 'components/SideBarLeft'
import stylesCss from '../styles/ThreeRegionLottery.module.css'
import Meta from "app/components/Meta"
import { getKqxsMb, getKqxsMn, getKqxsMt } from 'app/api/kqxsApi'
import moment from 'moment'
import { getDayOfWeek } from 'app/utils/getDayOfWeek'
import { useRouter } from 'next/router'
import { getPosts } from 'api/postApi';
function Home({dataMb, dataMn, dataMt, dateMb, dateMn, dateMt, isQueryDate, dataPost}) {
  const router = useRouter();
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
    return dataMt.map((item) => (
      {resultHead: item.resultHead, resultEnd: item.resultEnd, provinceName: item.provinceName}
    ))
  },[dataMt])

 
  const dayofWeek = useMemo(() => getDayOfWeek(dateMb))
  const dateFormat = useMemo(() => dateMb.replace(/-/g, '/'))
  const dayofWeekMn = useMemo(() => getDayOfWeek(dateMn))
  const dateFormatMn = useMemo(() => dateMn.replace(/-/g, '/'))
  const dayofWeekMt = useMemo(() => getDayOfWeek(dateMt))
  const dateFormatMt = useMemo(() => dateMt.replace(/-/g, '/'))


  const handleChangeDateOfWeek = (value) => {
    const toDay = new Date().getDay()
    const diff = toDay - value
    let haveResultDate = 0
    if (diff < 0) {
        haveResultDate = 7
    }
    const dateToGetData = new Date(
        new Date().setDate(new Date().getDate() - diff - haveResultDate)
    )
    const date = moment(dateToGetData).format("DD-MM-YYYY");
    router.push(`/?date=${date}`)
  }
  return (
    <>
      <Meta title="Xổ Số Hôm Nay - Kết Quả Xổ Số 3 Miền - KQXS - XS - XSKT Xổ số OKVIP™ - XSMN - XSMB - XSMT"/>
      <div className={stylesCss['wrapper']}>
      <SideBarLeft dataPost={dataPost} />
      <div style={{flex: 1}}>
        <h2 className={stylesCss['title']}>KẾT QUẢ XỔ SỐ {isQueryDate?`NGÀY ${dateFormat}`: "HÔM NAY"}</h2>
           <ul className={stylesCss['tab_select']}>
           <li>
             <div onClick={() => handleChangeDateOfWeek(1)}>
               <span>Thứ hai</span>
             </div>
           </li>
           <li>
             <div onClick={() => handleChangeDateOfWeek(2)}>
               <span>Thứ ba</span>
             </div>
           </li>
           <li>
             <div onClick={() => handleChangeDateOfWeek(3)}>
               <span>Thứ tư</span>
             </div>
           </li>
           <li>
             <div onClick={() => handleChangeDateOfWeek(4)}>
               <span>Thứ năm</span>
             </div>
           </li>
           <li>
             <div onClick={() => handleChangeDateOfWeek(5)}>
               <span>Thứ sáu</span>
             </div>
           </li>
           <li>
             <div onClick={() => handleChangeDateOfWeek(6)}>
               <span>Thứ bảy</span>
             </div>
           </li>
           <li>
             <div onClick={() => handleChangeDateOfWeek(0)}>
               <span>Chủ nhật</span>
             </div>
           </li>
          </ul>
         
          {dataMn && dataMn.length > 0 ?
            <>
                <BlockResultSX data={dataMn} title={`xsmn ${dayofWeekMn}, xsmn ngày ${dateFormatMn}`} />
                <BlockResultLoto dataLoto={dataLotoMn} title={`Bảng Loto xổ số Miền Nam -  ${dateFormatMn}`}/>
            </>
            : <BlockResultSXLoading title={`xsmn ${dayofWeekMn}, xsmn ngày ${dateFormatMn}`} />
          }
        
          {dataMb && 
            <>
                  <div style={{marginTop: 20}}></div>
                  <BlockResultSX2 data={dataMb} title={`xsmb ${dayofWeek}, xsmb ngày ${dateFormat}`} />
                  <BlockResultLoto dataLoto={dataLotoMb} title={`Bảng Loto xổ số Miền Bắc -  ${dateFormat}`}/>
            </>
          }
          {dataMt && dataMt.length >0 && 
            <>
                  <div style={{marginTop: 20}}></div>
                  <BlockResultSX data={dataMt} title={`xsmt ${dayofWeekMt}, xsmt ngày ${dateFormatMt}`} />
                  <BlockResultLoto dataLoto={dataLotoMt} title={`Bảng Loto xổ số Miền Trung -  ${dateFormatMt}`}/>
            </>
          }
      </div>
      <SideBarRight />
    </div>
    </>
  )
}

export default Home
export const getServerSideProps = async ({query}) => {
  const dateNow = moment();
  let dateMb = ""
  let dateMn = ""
  let dateMt = ""
  let isQueryDate = false;
  if(query.date && moment(query.date, 'DD-MM-YYYY', true).isValid()){
    dateMb = dateMn = dateMt = query.date;
    isQueryDate = true;
  }else {
    if(dateNow - moment().hours(18).minutes(45) > 0){
      dateMb = moment().format("DD-MM-YYYY");
    }else {
      dateMb = moment().subtract(1, 'days').format("DD-MM-YYYY");
    }
    if(dateNow - moment().hours(16).minutes(45) > 0){
      dateMn = moment().format("DD-MM-YYYY");
    }else {
      dateMn = moment().subtract(1, 'days').format("DD-MM-YYYY");
    }
    if(dateNow - moment().hours(17).minutes(45) > 0){
      dateMt = moment().format("DD-MM-YYYY");
    }else {
      dateMt = moment().subtract(1, 'days').format("DD-MM-YYYY");
    }
  }
 
  const [dataMb, dataMn, dataMt, dataPost] = await Promise.all([
    getKqxsMb(dateMb),
    getKqxsMn(dateMn),
    getKqxsMt(dateMt),
    getPosts()
  ])
  // console.log(dataMb)
  return {
    props: {
      dataMt,
      dataMb,
      dataMn,
      dateMb,
      dateMn,
      dateMt,
      isQueryDate,
      dataPost
    }
  }
}