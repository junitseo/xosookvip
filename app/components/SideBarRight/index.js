import React, { useState } from 'react'
import stylesCss from './styles.module.css'
import DatePicker, { registerLocale  } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import vi from "date-fns/locale/vi";
registerLocale("vi", vi); // re
function SideBarRight() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={stylesCss['wrapper']}>
       <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
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
              <td className={stylesCss['title-2']}>Miền bắc</td>
              <td className={stylesCss['title-2']}>Miền Nam</td>
              <td className={stylesCss['title-2']}>Miền Trung</td>
            </tr>
            <tr className="">
              <td className="">
                {" "}
                <a title="xổ số miền bắc thứ 2" href="">
                  XSMB thứ 2
                </a>
              </td>
              <td className="LMT_2N">
                <a title="Xổ số Cà Mau" href="">
                  Cà Mau
                </a>
                <br />
                <a
                  title="Xổ số Hồ Chí Minh"
                  href=""
                >
                  Hồ Chí Minh
                </a>
                <br />
                <a title="Xổ số Đồng Tháp" href="">
                  Đồng Tháp
                </a>
                <br />
                <a title="xổ số miền nam thứ 2" href="">
                  XSMN thứ 2
                </a>
              </td>
              <td className="LMT_2N">
                <a title="Xổ số Phú Yên" href="">
                  Phú Yên
                </a>
                <br />
                <a
                  title="Xổ số ThừaThiênHuế"
                  href="h"
                >
                  ThừaThiênHuế
                </a>
                <br />
                <a title="xổ số miền trung thứ 2" href="">
                  XSMT thứ 2
                </a>
              </td>
            </tr>
            <tr className="">
              <td className="">
                {" "}
                <a title="xổ số miền bắc thứ 3" href="">
                  XSMB thứ 3
                </a>
              </td>
              <td className="LMT_2N">
                <a title="Xổ số Bạc Liêu" href="">
                  Bạc Liêu
                </a>
                <br />
                <a title="Xổ số Bến Tre" href="">
                  Bến Tre
                </a>
                <br />
                <a title="Xổ số Vũng Tàu" href="">
                  Vũng Tàu
                </a>
                <br />
                <a title="xổ số miền nam thứ 3" href="">
                  XSMN thứ 3
                </a>
              </td>
              <td className="LMT_2N">
                <a title="Xổ số DakLak" href="">
                  DakLak
                </a>
                <br />
                <a title="Xổ số Quảng Nam" href="">
                  Quảng Nam
                </a>
                <br />
                <a title="xổ số miền trung thứ 3" href="">
                  XSMT thứ 3
                </a>
              </td>
            </tr>
            <tr className="">
              <td className="">
                {" "}
                <a title="xổ số miền bắc thứ 4" href="">
                  XSMB thứ 4
                </a>
              </td>
              <td className="LMT_2N">
                <a title="Xổ số Cần Thơ" href="">
                  Cần Thơ
                </a>
                <br />
                <a title="Xổ số Sóc Trăng" href="">
                  Sóc Trăng
                </a>
                <br />
                <a title="Xổ số Đồng Nai" href="">
                  Đồng Nai
                </a>
                <br />
                <a title="xổ số miền nam thứ 4" href="">
                  XSMN thứ 4
                </a>
              </td>
              <td className="LMT_2N">
                <a title="Xổ số Khánh Hòa" href="">
                  Khánh Hòa
                </a>
                <br />
                <a title="Xổ số Đà Nẵng" href="h">
                  Đà Nẵng
                </a>
                <br />
                <a title="xổ số miền trung thứ 4" href="">
                  XSMT thứ 4
                </a>
              </td>
            </tr>
            <tr className="">
              <td className="">
                {" "}
                <a title="xổ số miền bắc thứ 5" href="">
                  XSMB thứ 5
                </a>
              </td>
              <td className="LMT_2N">
                <a title="Xổ số An Giang" href="">
                  An Giang
                </a>
                <br />
                <a title="Xổ số Bình Thuận" href="h">
                  Bình Thuận
                </a>
                <br />
                <a title="Xổ số Tây Ninh" href="">
                  Tây Ninh
                </a>
                <br />
                <a title="xổ số miền nam thứ 5" href="">
                  XSMN thứ 5
                </a>
              </td>
              <td className="LMT_2N">
                <a title="Xổ số Bình Định" href="h">
                  Bình Định
                </a>
                <br />
                <a title="Xổ số Quảng Bình" href="">
                  Quảng Bình
                </a>
                <br />
                <a title="Xổ số Quảng Trị" href="">
                  Quảng Trị
                </a>
                <br />
                <a title="xổ số miền trung thứ 5" href="">
                  XSMT thứ 5
                </a>
              </td>
            </tr>
            <tr className="">
              <td className="">
                {" "}
                <a title="xổ số miền bắc thứ 6" href="">
                  XSMB thứ 6
                </a>
              </td>
              <td className="LMT_2N">
                <a title="Xổ số Bình Dương" href="">
                  Bình Dương
                </a>
                <br />
                <a title="Xổ số Trà Vinh" href="">
                  Trà Vinh
                </a>
                <br />
                <a title="Xổ số Vĩnh Long" href="">
                  Vĩnh Long
                </a>
                <br />
                <a title="xổ số miền nam thứ 6" href="">
                  XSMN thứ 6
                </a>
              </td>
              <td className="LMT_2N">
                <a title="Xổ số Gia Lai" href="">
                  Gia Lai
                </a>
                <br />
                <a title="Xổ số Ninh Thuận" href="">
                  Ninh Thuận
                </a>
                <br />
                <a title="xổ số miền trung thứ 6" href="">
                  XSMT thứ 6
                </a>
              </td>
            </tr>
            <tr className="">
              <td className="">
                {" "}
                <a title="xổ số miền bắc thứ 7" href="">
                  XSMB thứ 7
                </a>
              </td>
              <td className="LMT_2N">
                <a title="Xổ số Bình Phước" href="">
                  Bình Phước
                </a>
                <br />
                <a title="Xổ số Hậu Giang" href="">
                  Hậu Giang
                </a>
                <br />
                <a
                  title="Xổ số Hồ Chí Minh"
                  href=""
                >
                  Hồ Chí Minh
                </a>
                <br />
                <a title="Xổ số Long An" href="">
                  Long An
                </a>
                <br />
                <a title="xổ số miền nam thứ 7" href="">
                  XSMN thứ 7
                </a>
              </td>
              <td className="LMT_2N">
                <a title="Xổ số Quảng Ngãi" href="">
                  Quảng Ngãi
                </a>
                <br />
                <a title="Xổ số Đà Nẵng" href="">
                  Đà Nẵng
                </a>
                <br />
                <a title="Xổ số Đắc Nông" href="">
                  Đắc Nông
                </a>
                <br />
                <a title="xổ số miền trung thứ 7" href="">
                  XSMT thứ 7
                </a>
              </td>
            </tr>
            <tr className="">
              <td className="">
                <a
                  title="xổ số miền bắc chủ nhật"
                  href=""
                >
                  XSMB CN
                </a>
              </td>
              <td className="LMT_2N">
                <a title="Xổ số Kiên Giang" href="">
                  Kiên Giang
                </a>
                <br />
                <a title="Xổ số Tiền Giang" href="">
                  Tiền Giang
                </a>
                <br />
                <a title="Xổ số Đà Lạt" href="">
                  Đà Lạt
                </a>
                <br />
                <a
                  title="xổ số miền nam chủ nhật"
                  href=""
                >
                  XSMN CN
                </a>
              </td>
              <td className="LMT_2N">
                <a title="Xổ số Khánh Hòa" href="">
                  Khánh Hòa
                </a>
                <br />
                <a title="Xổ số Kon Tum" href="">
                  Kon Tum
                </a>
                <br />
                <a
                  title="Xổ số ThừaThiênHuế"
                  href="h"
                >
                  ThừaThiênHuế
                </a>
                <br />
                <a
                  title="xổ số miền bắc chủ nhật"
                  href=""
                >
                  XSMT CN
                </a>
              </td>
            </tr>
          </tbody>
        </table>

    </div>
  )
}

export default SideBarRight;
