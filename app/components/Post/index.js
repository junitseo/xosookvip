import Link from "next/link";
import stylesCss from "../../../styles/InterpretTheDreams.module.css";
import { useState } from "react";
import Image from "next/image";
import { getPosts } from "../../../stores/post";

const Post = (props) => {
    const [data, setData] = useState(props.data);
    const [skip, setSkip] = useState(0);

    const handleLoadMore = async () => {
        setSkip(skip + 1);
        skip++;
        const res = await getPosts(5, skip);
        if (res.datas) {
            let resData = data.concat(res.datas);
            setData(resData);
        }
    }

    return (
        <section className={stylesCss["section"]}>
            <div className={stylesCss["section-content"]}>
                <div className={stylesCss["article-list"]}>
                    <Link className={stylesCss["thumb"]} href={`tin-tuc/${data[0]?.post_slug}`} title={data[0]?.post_title}>
                        <Image
                            className={stylesCss["image"]}
                            alt={data[0]?.post_title}
                            src={data[0]?.post_image}
                            width={1600}
                            height={1142}
                            loading="lazy"
                        />
                    </Link>
                    <div>
                        <h2 className={stylesCss["article-title-first-news"]}>
                            <Link href={`tin-tuc/${data[0]?.post_slug}`} title="">{data[0]?.post_title}</Link>
                        </h2>
                        <div className={stylesCss["article-summary"]} dangerouslySetInnerHTML={{ __html: data ? data[0]?.post_description : "" }}></div>
                    </div>
                </div>
                {
                    data?.map((item, index) => {
                        return (
                            <div key={index} className={stylesCss["article-list"]}>
                                <div>
                                    <h2 className={stylesCss["article-title"]}>
                                        <Link href={`tin-tuc/${item?.post_slug}`} title={item?.post_title}>
                                            {item?.post_title}
                                        </Link>
                                    </h2>
                                </div>
                                <div className={stylesCss["thumb-item"]}>
                                    <Link href={`tin-tuc/${item?.post_slug}`} title={item?.post_title}>
                                        <Image
                                            className={stylesCss["image-lazy"]}
                                            alt={item?.post_title}
                                            src={item?.post_image}
                                            width={1600}
                                            height={1142}
                                            loading="lazy"
                                        />
                                    </Link>
                                </div>
                                <div className={stylesCss["article-summary"]} dangerouslySetInnerHTML={{ __html: data ? item?.post_description : "" }}></div>
                            </div>
                        )
                    })
                }
                <div className={stylesCss["load-more"]}>
                    <span className={stylesCss["more"]} onClick={() => handleLoadMore()}>Xem thêm</span>
                </div>
            </div>
        </section>
    );
}

export default Post;