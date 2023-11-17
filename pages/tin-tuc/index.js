import stylesCss from "../../styles/New.module.css";
import { useState } from "react";
import Meta from "app/components/Meta"
import { getPosts } from "../../stores/post";
import Post from "../../app/components/Post";
import MenuRight from "../../app/components/MenuRight"

const New = (props) => {
    const [news, setNew] = useState(props.data.datas);

    return (
        <div className={stylesCss["page-wrapper"]}>
            <Meta title="Tin tức" description="Kết Quả Xổ Số Miền Bắc - KQXS - XS - XSMB - XSKT - Xổ số OKVIP" keywords="xsmb,sxmb,kqxsmb,xstd,xổ số miền bắc,ket qua xsmb,xo so mien bac,xsmb hom nay,kết quả xổ số miền bắc,tin tuc,tin tức,tin mới,news" />
            <div className={stylesCss["container"]}>
                <div className={stylesCss["panel-heading"]}>
                    <h1>Tin tức hàng ngày</h1>
                </div>
                <div className={stylesCss["container-post"]}>
                    <div className={stylesCss["content"]}>
                        <Post data={news} />
                    </div>
                    <div className={stylesCss["menu-right"]}>
                        <MenuRight />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const [
        data
    ] = await Promise.all([
        getPosts(5, 0)
    ]);

    return {
        props: {
            data: data || [],
        },
    }
}

export default New;