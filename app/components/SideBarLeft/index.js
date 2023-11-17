import React, { useEffect, useState } from 'react'
import stylesCss from '../../../styles/ComponentCSS/SideBarLeft.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { provincesMN, provincesMT } from 'data/provinces';
import Image from 'next/image';


function SideBarLeft({dataPost = []}) {
  const router = useRouter();

  return (
    <div className={stylesCss['wrapper']}>
      <div className={stylesCss['title']}>
        Tin Tức Mới Nhất
      </div>
      <div className={stylesCss['list']}>
        {dataPost.map((item, idx) => (
          <Link href={`/post/${item.post_slug}`} key={idx} >
            {/* <div className={stylesCss['item']}>
              <img src={item.post_image} alt="" />
              <div>{item.post_title}</div>
            </div> */}
            <div style={{display: "flex"}}>
              <div style={{width: "30%"}}>
                <Image 
                  src={item.post_image ?? "/no-image.jpg"} 
                  alt=""
                  width={52}
                  height={52}
                />
              </div>
              <div className={stylesCss["post-title"]} style={{width: "70%", fontSize: "14px", fontWeight: "500"}}>{item.post_title}</div>
            </div>
          </Link>
        ))}

      </div>
      {/* <div style={{marginTop: 15}} className={stylesCss['title']}>
        Kết quả xổ số Hôm Nay
      </div> */}
      {/* <div className={stylesCss['list-1']}>
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
      </div> */}
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
        {provincesMT.map(item => (
          <Link href={`/kqxs/${item.slug}`} key={item.name}>
            <div className={stylesCss['title-2']}>
              Xổ Số {item.name}
            </div>
          </Link>
        ))}
      </div>
      <div className={stylesCss['title']}>
        Miền Nam
      </div>
      <div className={stylesCss['list-1']}>
        {provincesMN.map(item => (
          <Link href={`/kqxs/${item.slug}`} key={item.name}>
            <div className={stylesCss['title-2']}>
              Xổ Số {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SideBarLeft;


