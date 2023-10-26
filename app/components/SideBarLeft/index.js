import React from 'react'
import stylesCss from './styles.module.css'

function SideBarLeft() {
  return (
    <div className={stylesCss['wrapper']}>
      <div className={stylesCss['title']}>
        Tin Tức Mới Nhất
      </div>
      <div className={stylesCss['list']}>
        <div className={stylesCss['item']}>
            <img src="" alt="" />
            <div>Soi cầu xổ số Quảng Bình 26/10/2023 phân tích lô thứ 5</div>
        </div>
        <div className={stylesCss['item']}>
            <img src="" alt="" />
            <div>Soi cầu xổ số Quảng Bình 26/10/2023 phân tích lô thứ 5</div>
        </div>
        <div className={stylesCss['item']}>
            <img src="" alt="" />
            <div>Soi cầu xổ số Quảng Bình 26/10/2023 phân tích lô thứ 5</div>
        </div>
      </div>
      <div style={{marginTop: 15}} className={stylesCss['title']}>
        Kết quả xổ số Hôm Nay
      </div>
      <div className={stylesCss['list-1']}>
        <div className={stylesCss['title-1']}>
          Kết quả xổ Số Miền Nam
        </div>
        <div className={stylesCss['title-2']}>
          Kết quả xổ Số Đồng Nai
        </div>
        <div className={stylesCss['title-1']}>
          Kết quả xổ Số Miền Bắc
        </div>
        <div className={stylesCss['title-2']}>
          Kết quả xổ Số Miền Bắc
        </div>
        <div className={stylesCss['title-1']}>
          Kết quả xổ Số Miền Trung
        </div>
        <div className={stylesCss['title-2']}>
          Kết quả xổ Số Khách Hòa
        </div>
      </div>
      <div className={stylesCss['title']}>
        Miền Bắc
      </div>
      <div className={stylesCss['list-1']}>
        <div className={stylesCss['title-2']}>
          Xổ Số Miền Bắc
        </div>
      </div>
      <div className={stylesCss['title']}>
        Miền Trung
      </div>
      <div className={stylesCss['list-1']}>
        {sxMT.map(item => (
          <div key={item} className={stylesCss['title-2']}>
            {item}
          </div>
        ))}
      </div>
      <div className={stylesCss['title']}>
        Miền Nam
      </div>
      <div className={stylesCss['list-1']}>
        {sxMN.map(item => (
          <div key={item} className={stylesCss['title-2']}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideBarLeft;

const sxMT = [
  'Xổ Số Bình Định',
  'Xổ Số DakLak',
  'Xổ Số Gia Lai',
  'Xổ Số Khánh Hòa',
  'Xổ Số Kon Tum',
  'Xổ Số Ninh Thuận',
  'Xổ Số Phú Yên',
  'Xổ Số Quảng Bình',
  'Xố Số Quảng Nam',
  'Xố Số Quảng Ngãi',
  'Xố Số Quảng Trị',
  'Xố Số Thừa Thiên Huế',
  'Xố Số Thừa Đà Nẵng',
  'Xố Số Đắc Nông',
]
const sxMN = [
  'Xổ Số An Giang',
  'Xổ Số Bình Dương',
  'Xổ Số Bình Phước',
  'Xổ Số Bình Thuận',
  'Xổ Số Bạc Liêu',
  'Xổ Số Bến Tre',
  'Xổ Số Cà Mau',
  'Xổ Số Cần Thơ',
  'Xổ Số Hậu Giang',
  'Xổ Số Hồ Chí Minh',
  'Xổ Số Kiên Giang',
  'Xổ Số Long An',
  'Xổ Số Sóc Trăng',
  'Xổ Số Tiền Giang',
  'Xổ Số Trà Vinh',
  'Xổ Số Tây Ninh',
  'Xổ Số Vinh Long',
  'Xổ Số Vũng Tàu',
  'Xổ Số Đà Lạt',
  'Xổ Số Đồng Nai',
  'Xổ Số Đồng Tháp',
]