import Link from "next/link";
import stylesCss from "../../../styles/InterpretTheDreams.module.css";

const Post = () => {
    return (
        <section className={stylesCss["section"]}>
            <div className={stylesCss["section-content"]}>
                <div className={stylesCss["article-list"]}>
                    <Link className={stylesCss["thumb"]} href={"#"} title="">
                        <img className={stylesCss["image"]} alt="Lễ trao thưởng 2 giải Jackpot của Xổ số Vietlott Power 6/55" src="https://static.xoso.com.vn/medias/standard/2023/11/16/trung-27-ty----1611113953.jpg" />
                    </Link>
                    <div>
                        <h2 className={stylesCss["article-title-first-news"]}>
                            <Link href={"#"} title="">Lễ trao thưởng 2 giải Jackpot của Xổ số Vietlott Power 6/55</Link>
                        </h2>
                        <div className={stylesCss["article-summary"]}>Chiều ngày 10/11, Công ty Xổ số điện toán Việt Nam (Vietlott) đã tiến hành Lễ trao thưởng 2 giải Jackpot của sản phẩm Power 6/55 trong kỳ quay số mở thưởng 31/10/2023 vừa qua.</div>
                    </div>
                </div>
                <div className={stylesCss["article-list"]}>
                    <div>
                        <h2 className={stylesCss["article-title"]}>
                            <Link href={"#"} title="">
                                Trúng JACKPOT 1 trị giá 35 tỷ đồng khi mua Power 6/55 tại HCM
                            </Link>
                        </h2>
                    </div>
                    <div className={stylesCss["thumb-item"]}>
                        <Link href={"#"} title="">
                            <img className={stylesCss["image-lazy"]} src="https://static.xoso.com.vn/medias/standard/2023/11/16/trung-27-ty----1611113953.jpg" />
                        </Link>
                    </div>
                    <div className={stylesCss["article-summary"]}>Ngay sau khi công bố kết quả xổ số điện toán Power 6/55 ngày 7/11, Vietlott đã tìm thấy 01 khách hàng TRÚNG giải Jackpot 1 trị giá hơn 35 tỷ đồng tại Quận 9, TP. Hồ Chí Minh.</div>
                </div>
                <div className={stylesCss["article-list"]}>
                    <div>
                        <h2 className={stylesCss["article-title"]}>
                            <Link href={"#"} title="">
                                Trúng JACKPOT 1 trị giá 35 tỷ đồng khi mua Power 6/55 tại HCM
                            </Link>
                        </h2>
                    </div>
                    <div className={stylesCss["thumb-item"]}>
                        <Link href={"#"} title="">
                            <img className={stylesCss["image-lazy"]} src="https://static.xoso.com.vn/medias/standard/2023/11/16/trung-27-ty----1611113953.jpg" />
                        </Link>
                    </div>
                    <div className={stylesCss["article-summary"]}>Ngay sau khi công bố kết quả xổ số điện toán Power 6/55 ngày 7/11, Vietlott đã tìm thấy 01 khách hàng TRÚNG giải Jackpot 1 trị giá hơn 35 tỷ đồng tại Quận 9, TP. Hồ Chí Minh.</div>
                </div>
                <div className={stylesCss["article-list"]}>
                    <div>
                        <h2 className={stylesCss["article-title"]}>
                            <Link href={"#"} title="">
                                Trúng JACKPOT 1 trị giá 35 tỷ đồng khi mua Power 6/55 tại HCM
                            </Link>
                        </h2>
                    </div>
                    <div className={stylesCss["thumb-item"]}>
                        <Link href={"#"} title="">
                            <img className={stylesCss["image-lazy"]} src="https://static.xoso.com.vn/medias/standard/2023/11/16/trung-27-ty----1611113953.jpg" />
                        </Link>
                    </div>
                    <div className={stylesCss["article-summary"]}>Ngay sau khi công bố kết quả xổ số điện toán Power 6/55 ngày 7/11, Vietlott đã tìm thấy 01 khách hàng TRÚNG giải Jackpot 1 trị giá hơn 35 tỷ đồng tại Quận 9, TP. Hồ Chí Minh.</div>
                </div>
                <div className={stylesCss["load-more"]}>
                    <Link href="#" >
                        <span className={stylesCss["more"]}>Xem thêm</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Post;