import React, { useState } from 'react'
import BlockResultSX from 'components/BlockResultSX'
import BlockResultLoto from 'components/BlockResultLoto'
import SideBarRight from 'components/SideBarRight'
import SideBarLeft from 'components/SideBarLeft'
import stylesCss from '../../styles/ThreeRegionLottery.module.css'
import Meta from "app/components/Meta"
import DetailPost from 'components/DetailPost'

function CentralLottery() {
  const [dataPost, setDataPost] = useState(null)

  return (
    <>
      <Meta title="Xổ số miền trung"/>
      <div className={stylesCss['wrapper']}>
        <SideBarLeft setDataPost={setDataPost} />
        {dataPost?
        <div style={{flex: 1, width: "5%"}}>
          <DetailPost data={dataPost}/>
        </div>
      :
        <div style={{flex: 1}}>
          <h2 className={stylesCss['title']}>KẾT QUẢ XỔ SỐ MiỀN TRUNG</h2>
          <BlockResultSX title="xsmn thứ 3, xsmn ngày 24/10/2023" />
          <BlockResultLoto />
        </div>
        }
        <SideBarRight />
      </div>
    </>
    
  )
}

export default CentralLottery
