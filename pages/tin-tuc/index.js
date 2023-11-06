import Link from "next/link";
import stylesCss from "../../styles/New.module.css";
import Image from "next/image";
import { useState } from "react";
import { Pagination } from "antd";
import Meta from "app/components/Meta"
import { getPosts } from "../../stores/post";

const New = (props) => {
    const [news, setNew] = useState(props.data.datas);
    const [total, setTotal] = useState(props.data.total);
    const [pageSize, setPageSize] = useState(props.data.pageSize);

    const handlePagination = async (e) => {
        const skip = e === 1 ? 0 : e;
        const res = await getPosts(10, skip)
        console.log(res);
        if(res.datas){
            setNew(res.datas);
        }
    }
    
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
                                        <Link href={`tin-tuc/${item?.post_slug}`}>
                                            <h3 className={stylesCss["title-item"]}>{item?.post_title}</h3>
                                        </Link>
                                    </div>
                                    <div className={stylesCss["content-wm"]}>
                                        <table cellPadding="0" cellSpacing="0" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td valign="top" width="150">
                                                        <Link href={`tin-tuc/${item?.post_slug}`}>
                                                            <Image
                                                                src={item?.post_image}
                                                                className={stylesCss["lazy"]}
                                                                alt={item?.post_title}
                                                                width="600"
                                                                height="728"
                                                                layout="responsive"
                                                            />
                                                        </Link>
                                                    </td>
                                                    <td className={stylesCss["content-add"]}>&nbsp;</td>
                                                    <td valign="top">
                                                        <div className={stylesCss["content-title-title"]}>
                                                            <Link href={`tin-tuc/${item?.post_slug}`}>
                                                                <span className={stylesCss["link"]}>{item.titleItem}</span>
                                                            </Link>
                                                        </div>
                                                        <div className={stylesCss["content-content"]}>
                                                            {item?.post_description}
                                                        </div>
                                                    </td>
                                                </tr>
                                                {/* <tr>
                                                    <td colspan="3">
                                                        <ul className={stylesCss["list"]}>
                                                            {
                                                                item.post_taxid && item.post_taxid?.map((itemTitle, indexTitle) => {
                                                                    return (
                                                                        <li key={indexTitle}>
                                                                            <Link href={`tin-tuc/${itemTitle.tax_slug}`}>
                                                                                <span className={stylesCss["link"]}>{itemTitle?.tax_name}</span>
                                                                            </Link>
                                                                        </li>
                                                                    );
                                                                })
                                                            }
                                                        </ul>
                                                    </td>
                                                </tr> */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className={stylesCss["pagination"]}>
                    <Pagination onChange={(e) => handlePagination(e)} total={total} defaultCurrent={0} pageSize={pageSize}/>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {

    const [
        data
    ] = await Promise.all([
        getPosts()
    ]);

    return {
        props: {
            data: data || [],
        },
    }
}

export default New;