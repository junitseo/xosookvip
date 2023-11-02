import React, { useState } from 'react'
import BlockResultSX from 'components/BlockResultSX'
import BlockResultLoto from 'components/BlockResultLoto'
import SideBarRight from 'components/SideBarRight'
import SideBarLeft from 'components/SideBarLeft'
import stylesCss from '../../../styles/ThreeRegionLottery.module.css'
import Link from 'next/link'
import Meta from "app/components/Meta"
import { useRouter } from 'next/router'

function ThreeRegionLottery() {
  const router = useRouter();
  console.log(router)
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
          <BlockResultSX title="xsmn thứ 3, xsmn ngày 24/10/2023" />
          <BlockResultLoto />
          <div style={{marginTop: 20}}></div>
          <BlockResultSX title="xsmb thứ 3, xsmn ngày 24/10/2023" />
          <BlockResultLoto />
      </div>
      <SideBarRight />
    </div>
    </>
  )
}

export default ThreeRegionLottery
