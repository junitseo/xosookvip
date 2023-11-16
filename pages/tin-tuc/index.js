import Link from "next/link";
import stylesCss from "../../styles/New.module.css";
import { useState } from "react";
import Meta from "app/components/Meta"
import { getPosts } from "../../stores/post";
import Post from "../../app/components/Post";
import MenuRight from "../../app/components/MenuRight"

const New = (props) => {
    const [news, setNew] = useState(props.data.datas);
    const [total, setTotal] = useState(props.data.total);
    const [pageSize, setPageSize] = useState(props.data?.pageSize ?? 0);

    const handlePagination = async (e) => {
        const skip = e === 1 ? 0 : e;
        const res = await getPosts(10, skip)
        if (res.datas) {
            setNew(res.datas);
        }
    }

    return (
        <div className={stylesCss["container"]}>
            <Meta title="Tin tức" description="Kết Quả Xổ Số Miền Bắc - KQXS - XS - XSMB - XSKT - Xổ số OKVIP" keywords="xsmb,sxmb,kqxsmb,xstd,xổ số miền bắc,ket qua xsmb,xo so mien bac,xsmb hom nay,kết quả xổ số miền bắc,tin tuc,tin tức,tin mới,news" />
            <div>
                <h1 className={stylesCss["title"]}>TIN TỨC HÀNG NGÀY</h1>
            </div>
            <div className={stylesCss["container-post"]}>
                <div className={stylesCss["content"]}>
                    <Post />
                    {/* <div className={stylesCss["content-item"]}>
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
                                                        <td valign="top" width="200">
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
                    </div> */}
                </div>
                <div className={stylesCss["menu-right"]}>
                  <MenuRight/>
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