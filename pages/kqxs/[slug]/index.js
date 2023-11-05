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
function ThreeRegionLottery({data, province, date}) {
  const router = useRouter();

  const dataLoto = useMemo(() => {
    if(!data) return;
    return data.map((item) => (
      {resultHead: item.resultHead, resultEnd: item.resultEnd, provinceName: item.provinceName}
    ))
  },[data])

  const dayofWeek = useMemo(() => getDayOfWeek(date))
  const dateFormat = useMemo(() => date.replace(/-/g, '/'))

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
      <Meta title="Xổ số ba miền"/>
      <div className={stylesCss['wrapper']}>
      <SideBarLeft />
      <div style={{flex: 1}}>
        <h2 className={stylesCss['title']}>KẾT QUẢ XỔ SỐ {province.name}</h2>
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
 
  let data = await getKqxsProvince(province._id)
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
      date
    }
  }
}
