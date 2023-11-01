import Link from "next/link";
import stylesCss from "../../styles/New.module.css";
import Image from "next/image";
import { useState } from "react";
import { listMenu } from "../../app/data/new";
import { Pagination } from "antd";
import Meta from "app/components/Meta"

const New = () => {
    const [news, setNew] = useState(listMenu);
    
    return (
        <div className={stylesCss["container"]}>
            <Meta title="Tin tức" />
            <div>
                <h1 className={stylesCss["title"]}>TIN TỨC HÀNG NGÀY</h1>
            </div>
            <div className={stylesCss["content"]}>
                <div className={stylesCss["content-item"]}>
                    {
                        news?.map((item, index) => {
                            return (
                                <div key={index} className={stylesCss["content-title"]}>
                                    <div className={stylesCss["title-wm"]}>
                                        <Link href={`tin-tuc/${item.slug}`}>
                                            <h3 className={stylesCss["title-item"]}>{item.title}</h3>
                                        </Link>
                                    </div>
                                    <div className={stylesCss["content-wm"]}>
                                        <table cellPadding="0" cellSpacing="0" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td valign="top" width="150">
                                                        <Link href={`tin-tuc/${item.slug}`}>
                                                            <Image
                                                                src={item.img}
                                                                className={stylesCss["lazy"]}
                                                                alt={item.altImg}
                                                                width="600"
                                                                height="728"
                                                                layout="responsive"
                                                            />
                                                        </Link>
                                                    </td>
                                                    <td className={stylesCss["content-add"]}>&nbsp;</td>
                                                    <td valign="top">
                                                        <div className={stylesCss["content-title-title"]}>
                                                            <Link href={`tin-tuc/${item.slug}`}>
                                                                <span className={stylesCss["link"]}>{item.titleItem}</span>
                                                            </Link>
                                                        </div>
                                                        <div className={stylesCss["content-content"]}>
                                                            {item.describe}
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="3">
                                                        <ul className={stylesCss["list"]}>
                                                            {
                                                                item.listDescribe && item.listDescribe?.map((itemTitle, indexTitle) => {
                                                                    return (
                                                                        <li key={indexTitle}>
                                                                            <Link href={`tin-tuc/${itemTitle.slugDescribe}`}>
                                                                                <span className={stylesCss["link"]}>{itemTitle.titleDescribe}</span>
                                                                            </Link>
                                                                        </li>
                                                                    );
                                                                })
                                                            }
                                                        </ul>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className={stylesCss["pagination"]}>
                    <Pagination count={news.count} />
                </div>
            </div>
        </div>
    )
}

export default New;