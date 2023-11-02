import React from 'react'
import stylesCss from '../../../styles/ComponentCSS/SideBarLeft.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';

function SideBarLeft() {
  const router = useRouter();
  return (
    <div className={stylesCss['wrapper']}>
      <div className={stylesCss['title']}>
        Tin Tức Mới Nhất
      </div>
      <div className={stylesCss['list']}>
        {dataPost.map(item => (
          <Link href={`/post/${item.slug}`} key={item.title} >
            <div className={stylesCss['item']}>
              <img src={item.thumb} alt="" />
              <div>{item.title}</div>
            </div>
          </Link>
        ))}

      </div>
      <div style={{marginTop: 15}} className={stylesCss['title']}>
        Kết quả xổ số Hôm Nay
      </div>
      <div className={stylesCss['list-1']}>
        <div className={stylesCss['title-1']}>
          Kết quả xổ Số Miền Nam
        </div>
        <Link href="/kqxs/dong-nai">
          <div className={stylesCss['title-2']}>
            Kết quả xổ Số Đồng Nai
          </div>
        </Link>
        <div className={stylesCss['title-1']}>
          Kết quả xổ Số Miền Bắc
        </div>
        <Link href="/xo-so-mien-bac">
          <div className={stylesCss['title-2']}>
            Kết quả xổ Số Miền Bắc
          </div>
        </Link>
        <div className={stylesCss['title-1']}>
          Kết quả xổ Số Miền Trung
        </div>
        <Link href="/kqxs/khanh-hoa">
        <div className={stylesCss['title-2']}>
          Kết quả xổ Số Khách Hòa
        </div>
        </Link>
      </div>
      <div className={stylesCss['title']}>
        Miền Bắc
      </div>
      <div className={stylesCss['list-1']}>
        <Link href="/xo-so-mien-bac">
          <div className={stylesCss['title-2']}>
            Xổ Số Miền Bắc
          </div>
        </Link>
      </div>
      <div className={stylesCss['title']}>
        Miền Trung
      </div>
      <div className={stylesCss['list-1']}>
        {sxMT.map(item => (
          <Link href={`/kqxs/${item.slug}`} key={item.name}>
            <div className={stylesCss['title-2']}>
              {item.name}
            </div>
          </Link>
        ))}
      </div>
      <div className={stylesCss['title']}>
        Miền Nam
      </div>
      <div className={stylesCss['list-1']}>
        {sxMN.map(item => (
          <Link href={`/kqxs/${item.slug}`} key={item.name}>
            <div className={stylesCss['title-2']}>
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SideBarLeft;

const dataPost = [
  {
    title: 'Cổ động viên đội tuyển Việt Nam - cánh tay đồng hành của Đội tuyển',
    slug: 'co-dong-vien-doi-tuyen-viet-nam',
    thumb: 'https://api.luongson.news/4bd7fcf7-f70e-4670-9540-39776a080d46/6.png',
  },
]
const sxMT = [
  { name: 'Xổ Số Bình Định', slug: 'binh-dinh' },
  { name: 'Xổ Số DakLak', slug: 'daklak' },
  { name: 'Xổ Số Gia Lai', slug: 'gia-lai' },
  { name: 'Xổ Số Khánh Hòa', slug: 'khanh-hoa' },
  { name: 'Xổ Số Kon Tum', slug: 'kon-tum' },
  { name: 'Xổ Số Ninh Thuận', slug: 'ninh-thuan' },
  { name: 'Xổ Số Phú Yên', slug: 'phu-yen' },
  { name: 'Xổ Số Quảng Bình', slug: 'quang-binh' },
  { name: 'Xố Số Quảng Nam', slug: 'quang-nam' },
  { name: 'Xố Số Quảng Ngãi', slug: 'quang-ngai' },
  { name: 'Xố Số Quảng Trị', slug: 'quang-tri' },
  { name: 'Xố Số Thừa Thiên Huế', slug: 'thua-thien-hue' },
  { name: 'Xố Số Đà Nẵng', slug: 'da-nang' },
  { name: 'Xố Số Đắc Nông', slug: 'dac-nong' }
]
const sxMN = [
  { name: 'Xổ Số An Giang', slug: 'an-giang' },
  { name: 'Xổ Số Bình Dương', slug: 'binh-duonng' },
  { name: 'Xổ Số Bình Phước', slug: 'binh-phuoc' },
  { name: 'Xổ Số Bình Thuận', slug: 'binh-thuan' },
  { name: 'Xổ Số Bạc Liêu', slug: 'bac-lieu' },
  { name: 'Xổ Số Bến Tre', slug: 'ben-tre' },
  { name: 'Xổ Số Cà Mau', slug: 'ca-mau' },
  { name: 'Xổ Số Cần Thơ', slug: 'can-tho' },
  { name: 'Xổ Số Hậu Giang', slug: 'hau-giang' },
  { name: 'Xổ Số Hồ Chí Minh', slug: 'ho-chi-minh' },
  { name: 'Xổ Số Kiên Giang', slug: 'kien-giang' },
  { name: 'Xổ Số Long An', slug: 'long-an' },
  { name: 'Xổ Số Sóc Trăng', slug: 'soc-trang' },
  { name: 'Xổ Số Tiền Giang', slug: 'tien-giang' },
  { name: 'Xổ Số Trà Vinh', slug: 'tra-vinh' },
  { name: 'Xổ Số Tây Ninh', slug: 'tay-ninh' },
  { name: 'Xổ Số Vinh Long', slug: 'vinh-long' },
  { name: 'Xổ Số Vũng Tàu', slug: 'vung-tau' },
  { name: 'Xổ Số Đà Lạt', slug: 'da-lat' },
  { name: 'Xổ Số Đồng Nai', slug: 'dong-nai' },
  { name: 'Xổ Số Đồng Tháp', slug: 'dong-thap' }
]
