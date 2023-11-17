import React, { useState } from 'react'
import stylesCss from '../../../styles/ComponentCSS/SideBarRight.module.css'
import DatePicker, { registerLocale  } from "react-datepicker";
import vi from "date-fns/locale/vi";
import { useRouter } from 'next/router';
import moment from 'moment';
import Link from 'next/link';
registerLocale("vi", vi); // re
function SideBarRight() {
  const [startDate, setStartDate] = useState(new Date());
  const router = useRouter();
  const handleChangeDate = (date) => {
    setStartDate(date);
    const day = moment(date).format("DD-MM-YYYY");
    router.push(`/?date=${day}`)
  }
  return (
    <div className={stylesCss['wrapper']}>
       <DatePicker
          className={stylesCss['wrapper']}
          selected={startDate}
          onChange={(date) => handleChangeDate(date)}
          locale={vi}
          inline
        />
      <div className={stylesCss['title']}>
        Lịch mở thưởng Xổ Số
      </div>
      <table
          width="100%"
          cellSpacing={0}
          cellPadding={0}
          border={0}
        >
          <tbody>
            <tr className="">
              <td className={stylesCss['title-2']}>Miền Bắc</td>
              <td className={stylesCss['title-2']}>Miền Nam</td>
              <td className={stylesCss['title-2']}>Miền Trung</td>
            </tr>
            <tr className="">
              <td className="">
                {" "}
                <Link title="xổ số miền bắc thứ 2" href="/xo-so-mien-bac/thu-2">
                  XSMB thứ 2
                </Link>
              </td>
              <td className="LMT_2N">
                <Link title="Xổ số Cà Mau" href="/kqxs/ca-mau">
                  Cà Mau
                </Link>
                <br />
                <Link
                  title="Xổ số Hồ Chí Minh"
                  href="/kqxs/hcm"
                >
                  Hồ Chí Minh
                </Link>
                <br />
                <Link title="Xổ số Đồng Tháp" href="/kqxs/dong-thap">
                  Đồng Tháp
                </Link>
                <br />
                <Link title="xổ số miền nam thứ 2" href="/xo-so-mien-nam/thu-2">
                  XSMN thứ 2
                </Link>
              </td>
              <td className="LMT_2N">
                <Link title="Xổ số Phú Yên" href="/kqxs/phu-yen">
                  Phú Yên
                </Link>
                <br />
                <Link
                  title="Xổ số ThừaThiênHuế"
                  href="/kqxs/hue"
                >
                  ThừaThiênHuế
                </Link>
                <br />
                <Link title="xổ số miền trung thứ 2" href="/xo-so-mien-trung/thu-2">
                  XSMT thứ 2
                </Link>
              </td>
            </tr>
            <tr className="">
              <td className="">
                {" "}
                <Link title="xổ số miền bắc thứ 3" href="/xo-so-mien-bac/thu-3">
                  XSMB thứ 3
                </Link>
              </td>
              <td className="LMT_2N">
                <Link title="Xổ số Bạc Liêu" href="/kqxs/bac-lieu">
                  Bạc Liêu
                </Link>
                <br />
                <Link title="Xổ số Bến Tre" href="/kqxs/ben-tre">
                  Bến Tre
                </Link>
                <br />
                <Link title="Xổ số Vũng Tàu" href="/kqxs/vung-tau">
                  Vũng Tàu
                </Link>
                <br />
                <Link title="xổ số miền nam thứ 3" href="/xo-so-mien-nam/thu-3">
                  XSMN thứ 3
                </Link>
              </td>
              <td className="LMT_2N">
                <Link title="Xổ số DakLak" href="/kqxs/dak-lak">
                  DakLak
                </Link>
                <br />
                <Link title="Xổ số Quảng Nam" href="/kqxs/quang-nam">
                  Quảng Nam
                </Link>
                <br />
                <Link title="xổ số miền trung thứ 3" href="/xo-so-mien-trung/thu-3">
                  XSMT thứ 3
                </Link>
              </td>
            </tr>
            <tr className="">
              <td className="">
                {" "}
                <Link title="xổ số miền bắc thứ 4" href="/xo-so-mien-bac/thu-4">
                  XSMB thứ 4
                </Link>
              </td>
              <td className="LMT_2N">
                <Link title="Xổ số Cần Thơ" href="/kqxs/can-tho">
                  Cần Thơ
                </Link>
                <br />
                <Link title="Xổ số Sóc Trăng" href="/kqxs/soc-trang">
                  Sóc Trăng
                </Link>
                <br />
                <Link title="Xổ số Đồng Nai" href="/kqxs/dong-nai">
                  Đồng Nai
                </Link>
                <br />
                <Link title="xổ số miền nam thứ 4" href="/xo-so-mien-nam/thu-4">
                  XSMN thứ 4
                </Link>
              </td>
              <td className="LMT_2N">
                <Link title="Xổ số Khánh Hòa" href="/kqxs/khanh-hoa">
                  Khánh Hòa
                </Link>
                <br />
                <Link title="Xổ số Đà Nẵng" href="/kqxs/da-nang">
                  Đà Nẵng
                </Link>
                <br />
                <Link title="xổ số miền trung thứ 4" href="/xo-so-mien-trung/thu-4">
                  XSMT thứ 4
                </Link>
              </td>
            </tr>
            <tr className="">
              <td className="">
                {" "}
                <Link title="xổ số miền bắc thứ 5" href="/xo-so-mien-bac/thu-5">
                  XSMB thứ 5
                </Link>
              </td>
              <td className="LMT_2N">
                <Link title="Xổ số An Giang" href="/kqxs/an-giang">
                  An Giang
                </Link>
                <br />
                <Link title="Xổ số Bình Thuận" href="/kqxs/binh-thuan">
                  Bình Thuận
                </Link>
                <br />
                <Link title="Xổ số Tây Ninh" href="/kqxs/tay-ninh">
                  Tây Ninh
                </Link>
                <br />
                <Link title="xổ số miền nam thứ 5" href="/xo-so-mien-nam/thu-5">
                  XSMN thứ 5
                </Link>
              </td>
              <td className="LMT_2N">
                <Link title="Xổ số Bình Định" href="/kqxs/binh-dinh">
                  Bình Định
                </Link>
                <br />
                <Link title="Xổ số Quảng Bình" href="/kqxs/quang-binh">
                  Quảng Bình
                </Link>
                <br />
                <Link title="Xổ số Quảng Trị" href="/kqxs/quang-tri">
                  Quảng Trị
                </Link>
                <br />
                <Link title="xổ số miền trung thứ 5" href="/xo-so-mien-trung/thu-5">
                  XSMT thứ 5
                </Link>
              </td>
            </tr>
            <tr className="">
              <td className="">
                {" "}
                <Link title="xổ số miền bắc thứ 6" href="/xo-so-mien-bac/thu-6">
                  XSMB thứ 6
                </Link>
              </td>
              <td className="LMT_2N">
                <Link title="Xổ số Bình Dương" href="/kqxs/binh-duong">
                  Bình Dương
                </Link>
                <br />
                <Link title="Xổ số Trà Vinh" href="/kqxs/tra-vinh">
                  Trà Vinh
                </Link>
                <br />
                <Link title="Xổ số Vĩnh Long" href="/kqxs/vinh-long">
                  Vĩnh Long
                </Link>
                <br />
                <Link title="xổ số miền nam thứ 6" href="/xo-so-mien-nam/thu-6">
                  XSMN thứ 6
                </Link>
              </td>
              <td className="LMT_2N">
                <Link title="Xổ số Gia Lai" href="/kqxs/gia-lai">
                  Gia Lai
                </Link>
                <br />
                <Link title="Xổ số Ninh Thuận" href="/kqxs/ninh-thuan">
                  Ninh Thuận
                </Link>
                <br />
                <Link title="xổ số miền trung thứ 6" href="/xo-so-mien-trung/thu-6">
                  XSMT thứ 6
                </Link>
              </td>
            </tr>
            <tr className="">
              <td className="">
                {" "}
                <Link title="xổ số miền bắc thứ 7" href="/xo-so-mien-bac/thu-7">
                  XSMB thứ 7
                </Link>
              </td>
              <td className="LMT_2N">
                <Link title="Xổ số Bình Phước" href="/kqxs/binh-phuoc">
                  Bình Phước
                </Link>
                <br />
                <Link title="Xổ số Hậu Giang" href="/kqxs/hau-giang">
                  Hậu Giang
                </Link>
                <br />
                <Link
                  title="Xổ số Hồ Chí Minh"
                  href="/kqxs/hcm"
                >
                  Hồ Chí Minh
                </Link>
                <br />
                <Link title="Xổ số Long An" href="/kqxs/long-an">
                  Long An
                </Link>
                <br />
                <Link title="xổ số miền nam thứ 7" href="/xo-so-mien-nam/thu-7">
                  XSMN thứ 7
                </Link>
              </td>
              <td className="LMT_2N">
                <Link title="Xổ số Quảng Ngãi" href="/kqxs/quang-ngai">
                  Quảng Ngãi
                </Link>
                <br />
                <Link title="Xổ số Đà Nẵng" href="/kqxs/da-nang">
                  Đà Nẵng
                </Link>
                <br />
                <Link title="Xổ số Đắc Nông" href="/kqxs/dak-nong">
                  Đắc Nông
                </Link>
                <br />
                <Link title="xổ số miền trung thứ 7" href="/xo-so-mien-trung/thu-7">
                  XSMT thứ 7
                </Link>
              </td>
            </tr>
            <tr className="">
              <td className="">
                <Link
                  title="xổ số miền bắc chủ nhật"
                  href="/xo-so-mien-bac/chu-nhat"
                >
                  XSMB CN
                </Link>
              </td>
              <td className="LMT_2N">
                <Link title="Xổ số Kiên Giang" href="/kqxs/kien-giang">
                  Kiên Giang
                </Link>
                <br />
                <Link title="Xổ số Tiền Giang" href="/kqxs/tien-giang">
                  Tiền Giang
                </Link>
                <br />
                <Link title="Xổ số Đà Lạt" href="/kqxs/da-lat">
                  Đà Lạt
                </Link>
                <br />
                <Link
                  title="xổ số miền nam chủ nhật"
                  href="/xo-so-mien-nam/chu-nhat"
                >
                  XSMN CN
                </Link>
              </td>
              <td className="LMT_2N">
                <Link title="Xổ số Khánh Hòa" href="/kqxs/khanh-hoa">
                  Khánh Hòa
                </Link>
                <br />
                <Link title="Xổ số Kon Tum" href="/kqxs/kon-tum">
                  Kon Tum
                </Link>
                <br />
                <Link
                  title="Xổ số ThừaThiênHuế"
                  href="/kqxs/hue"
                >
                  ThừaThiênHuế
                </Link>
                <br />
                <Link
                  title="xổ số miền trung chủ nhật"
                  href="/xo-so-mien-trung/chu-nhat"
                >
                  XSMT CN
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

    </div>
  )
}

export default SideBarRight;
