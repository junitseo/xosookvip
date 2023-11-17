import Link from "next/link";
import stylesCss from "../../../styles/New.module.css";
import { useState } from "react";
import { listMenu } from "data/menu";

const MenuRight = () => {
    const [menu, setMenu] = useState(listMenu);
    return (
        <div className={stylesCss["aside"]}>
            <div className={stylesCss["widget"]}>
                <div className={stylesCss["widget-title"]}>
                    <h3>Thống kê Loto</h3>
                </div>
                <div className={stylesCss["widget-container"]}>
                    <ul className={stylesCss["link-item"]}>
                        {menu[6].menuChildren?.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link href={`/${item.slug}`} title={item.name}>{item.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className={stylesCss["widget"]}>
                <div className={stylesCss["widget-title"]}>
                    <h3>Xổ số Hôm qua</h3>
                </div>
                <div className={stylesCss["widget-container"]}>
                    <ul className={stylesCss["link-item"]}>
                        <li>
                            <Link href={`/xo-so-mien-bac`} title="Xổ số miền Bắc">XSMB</Link>

                        </li>
                        <li>
                            <Link href={`/kqxs/can-tho`} title="Xổ số Cần Thơ">Cần Thơ</Link>
                        </li>
                        <li>
                            <Link href={`/kqxs/dong-nai`} title="Xổ số Đồng Nai">Đồng Nai</Link>
                        </li>
                        <li>
                            <Link href={`/kqxs/soc-trang`} title="Xổ số Sóc Trăng">Sóc Trăng</Link>
                        </li>
                        <li>
                            <Link href={`/kqxs/da-nang`} title="Xổ số Đà Nẵng">Đà Nẵng</Link>
                        </li>
                        <li>
                            <Link href={`/kqxs/khanh-hoa`} title="Xổ số Khánh Hòa">Khánh Hòa</Link>
                        </li>
                        {/* <li>
                            <Link href={`#`} title="Xổ số Mega 6/45">Mega 6/45</Link>
                        </li>
                        <li>
                            <Link href={`#`} title="Xổ số Điện toán 6x36">Điện toán 6x36</Link>
                        </li>
                        <li>
                            <Link href={`#`} title="Xổ số XS Thần tài">XS Thần tài</Link>
                        </li>
                        <li>
                            <Link href={`#`} title="Xổ số Điện toán 123">Điện toán 123</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
            <div className={stylesCss["widget"]}>
                <div className={stylesCss["widget-title"]}>
                    <h3>Tường thuật Trực tiếp</h3>
                </div>
                <div className={stylesCss["widget-container"]}>
                    <ul className={stylesCss["link-item"]}>
                        <li>
                            <Link href={`/xo-so-mien-bac`} title="Trực tiếp Xổ số miền Bắc">Miền Bắc</Link>
                        </li>
                        <li>
                            <Link href={`/xo-so-mien-trung`} title="Trực tiếp Xổ số miền Trung">Miền Trung</Link>
                        </li>
                        <li>
                            <Link href={`/xo-so-mien-nam`} title="Trực tiếp Xổ số miền Nam">Miền Nam</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={stylesCss["widget"]}>
                <div className={stylesCss["widget-title"]}>
                    <h3>Thống kê giải xổ số</h3>
                </div>
                <div className={stylesCss["widget-container"]}>
                    <ul className={stylesCss["link-item"]}>
                        {
                            menu[4].menuChildren?.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link href={`/${item?.slug}`} title={item.name}>{item?.name}</Link>
                                    </li>

                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className={stylesCss["widget"]}>
                <div className={stylesCss["widget-title"]}>
                    <h3>Thống kê XS Mega</h3>
                </div>
                <div className={stylesCss["widget-container"]}>
                    <ul className={stylesCss["link-item"]}>
                        <li>
                            <Link href={`#`} title="Thống kê 01-45">Thống kê 01-45</Link>
                        </li>
                        <li>
                            <Link href={`#`} title="Thống kê nhiều ít">Thống kê nhiều ít</Link>
                        </li>
                        <li>
                            <Link href={`#`} title="Thống kê chẵn lẻ">Thống kê chẵn lẻ</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MenuRight;