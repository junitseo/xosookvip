import React from 'react'
import BlockResultSX from 'components/BlockResultSX'
import BlockResultLoto from 'components/BlockResultLoto'
import SideBarRight from 'components/SideBarRight'
import SideBarLeft from 'components/SideBarLeft'
import stylesCss from './styles.module.css'

function Page() {
  return (
    <div className={stylesCss['wrapper']}>
      <SideBarLeft />
      <div style={{flex: 1}}>
        <h2 className={stylesCss['title']}>KẾT QUẢ XỔ SỐ HÔM NAY</h2>
          <ul className={stylesCss['tab_select']}>
            <li>
              <a title="Miền Nam - Xem tất cả" href="">
                <span>Miền Nam </span>
              </a>
            </li>
            <li>
              <a title="Thứ hai" href="">
                <span>Thứ hai</span>
              </a>
            </li>
            <li>
              <a title="Thứ ba" href="">
                <span>Thứ ba</span>
              </a>
            </li>
            <li>
              <a title="Thứ tư" href="">
                <span>Thứ tư</span>
              </a>
            </li>
            <li>
              <a title="Thứ năm" href="">
                <span>Thứ năm</span>
              </a>
            </li>
            <li>
              <a title="Thứ sáu" href="">
                <span>Thứ sáu</span>
              </a>
            </li>
            <li>
              <a title="Thứ bảy" href="">
                <span>Thứ bảy</span>
              </a>
            </li>
            <li>
              <a title="Chủ nhật" href="">
                <span>Chủ nhật</span>
              </a>
            </li>
          </ul>

        <BlockResultSX />
        <BlockResultLoto />
      </div>
      <SideBarRight />
    </div>
  )
}

export default Page
