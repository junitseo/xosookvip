import Link from "next/link";
import stylesCss from "../../styles/New.module.css";
import Image from "next/image";
import Meta from "app/components/Meta"
import { getPostBySlug, getPosts } from "../../stores/post";
import { FormatDate } from "../../app/@function/formatDate";

const NewDetail = (props) => {
    const { data, dataPost } = props;

    return (
        <div className={stylesCss["container-detail"]}>
            <Meta title="Chi tiết Tin tức" />
            <div className={stylesCss["panel-default"]}>
                <div className={stylesCss["panel-heading"]}>
                    <h1>{data?.post_title}</h1>
                </div>
                <div className={stylesCss["panel-body"]}>
                    <div className={stylesCss["dataTable-wrapper"]}>
                        {
                            data?.createdAt ?
                                <div>

                                    Đăng: {FormatDate(data?.createdAt)}
                                    <div className={stylesCss["fb-root"]}></div>
                                    <div className={stylesCss["fb-like"]}></div>
                                </div>
                                :
                                <></>
                        }
                        <div className={stylesCss["news-detail"]}>
                            <div className={stylesCss["knc-content"]} dangerouslySetInnerHTML={{ __html: data?.post_content }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={stylesCss["panel-default"]}>
                <div className={stylesCss["panel-heading"]}>Tin khác</div>
                <div className={stylesCss["panel-body"]}>
                    <ul className={stylesCss["list-panel"]} >
                        {
                            dataPost.datas?.map((item, index) => {
                                return (
                                    <li key={index} className={stylesCss["list-panel-item"]}>
                                        <Link
                                            href={item?.post_slug}
                                            className={stylesCss["list-panel-link"]}
                                        >
                                            <Image
                                                src={item?.post_image ?? "https://api.xosoaladin.com/xoso/kqxs-mt-27-10-2023.png"}
                                                alt="xosoaladin"
                                                width="150"
                                                height="150"
                                            />
                                        </Link>
                                        <Link href={item?.post_slug} className={stylesCss["list-panel-title"]}>
                                            <span className={stylesCss["link-item"]}>{item?.post_title}</span>
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export const getServerSideProps = async ({ params }) => {
    const slug = params.slug;

    const [
        data,
        dataPost
    ] = await Promise.all([
        getPostBySlug(slug),
        getPosts()
    ]);

    return {
        props: {
            data: data || {},
            dataPost: dataPost || [],
        },
    }
};

export default NewDetail;