import Link from "next/link";
import stylesCss from "../../styles/New.module.css";
import Image from "next/image";
import { listMenu } from "../../app/data/new";
import { useState } from "react";

const NewDetail = ({data}) => {
    const [news, setNew] = useState(data);

    return (
        <div className={stylesCss["container-detail"]}>
            <div className={stylesCss["panel-default"]}>
                <div className={stylesCss["panel-heading"]}>
                    <h1>Bên ngoài lịch lãm - về nhà đảm đang: “biệt đội trai đảm” trình làng khiến hội chị em không tiếc lời khen</h1>
                </div>
                <div className={stylesCss["panel-body"]}>
                    <div className={stylesCss["dataTable-wrapper"]}>
                        <div>
                            Đăng: 22/10/2023
                            <div className={stylesCss["fb-root"]}></div>
                            <div className={stylesCss["fb-like"]}></div>
                        </div>
                        <div className={stylesCss["news-detail"]}>
                            <div className={stylesCss["knc-content"]}>
                                <p>
                                    <span>
                                        Cũng chính vì vậy mà "biệt đội trai đảm" Huy Trần, Quốc Cơ - Quốc Nghiệp và Quốc Trường ghi điểm đậm với hội chị em bằng hình tượng "bên ngoài lịch lãm - về nhà đảm đang" và câu chuyện "việc nhà không khó".
                                    </span>
                                    <br />
                                </p>
                                <p>
                                    Đã qua rồi cái thời phân định đàn ông là trụ cột kinh tế, phụ nữ đảm đương việc nhà với danh xưng "nội trợ". Bởi nhà là nhà của chung, do cả 2 cùng chung tay vun vén nên việc phân định rạch ròi việc nào của ai chưa hẳn đã phù hợp trong bối cảnh chung của nhiều gia đình hiện đại thời nay. Với tinh thần việc nhà không của riêng ai, chỉ cần tinh thần sẵn sàng sẻ chia và có trong tay "bí quyết" riêng như của "biệt đội trai đảm" vừa lộ diện mới đây thì quý ông nào dù đã lập gia đình hay vẫn còn độc thân đều có thể xắn tay xử gọn việc nhà.
                                </p>
                                <p>
                                    Thành công ở mảng kinh doanh F&amp;B, giữ phong cách chất lừ vừa phong trần, quyến rũ nhưng cũng rất ấm áp, ân cần, từ khoá về Huy Trần luôn khiến các chị em "xao xuyến" không chỉ bởi ngoại hình lịch lãm mà còn ở tinh thần luôn sẵn lòng chăm lo cho gia đình nhỏ của mình. Huy Trần nổi tiếng trong giới chị em khi luôn dành thời gian nấu những món ăn ngon cho vợ và đặc biệt chăm lo cho việc nhà từ A đến Z. Anh cũng thẳng thắn bày tỏ về quan điểm "anh thuộc trường phái đàn ông đảm việc nhà".
                                </p>
                                <div className={stylesCss["noCaption"]}>
                                    <div>
                                        <Image
                                            src="https://api.xosoaladin.com/xoso/kqxs-mt-27-10-2023.png"
                                            alt="xosoaladin"
                                            width="1280"
                                            height="1707"
                                            layout="responsive"
                                        />
                                    </div>
                                </div>
                                <p>
                                    Ai cũng biết đến Huy Trần qua những video clip sáng tạo những món ăn ngon cho vợ tại nhà, và sau những món ngon "đẹp mắt bắt miệng", anh cũng chính là "máy dọn dẹp bằng cơm" vô cùng năng suất. Anh cho biết, "vũ khí" của mình chính là bộ sản phẩm tẩy rửa gia dụng Power100 bao gồm nước lau kính, lau sàn, nước rửa chén… với công dụng tẩy rửa vượt trội và thành phần lành tính vừa đánh bay vết bẩn sạch nhanh sáng bóng, vừa đem lại mùi hương dễ chịu, dịu nhẹ cho da tay.
                                </p>
                                <p>
                                    Cùng chung tinh thần "việc nhà không khó - đã có anh đây" với Huy Trần, hai nghệ sĩ xiếc Quốc Cơ - Quốc Nghiệp cũng sở hữu những "phẩm chất quý ông" đáng ngưỡng mộ. Dù mạnh mẽ, oai phong trên mọi sân khấu từ Âu đến Á, nhưng khi trở về nhà, hai "hoàng tử xiếc" vẫn sẵn lòng vào vai "Tấm" khi xung phong "cân tất" việc nhà cho vợ.
                                </p>
                                <p>
                                    <em>"Có một sự thật đó là sau khoảng thời gian luyện tập hàng ngày, hai anh em lại khá thích làm các công việc nhà. Với Cơ và Nghiệp, đây giống như một hình thức giúp giải tỏa căng thẳng, áp lực; cũng là cách chia sẻ thiết thực với nửa kia, để những người phụ nữ của mình có thêm thời gian, an tâm để theo đuổi đam mê sự nghiệp ngoài xã hội bởi việc nhà không khó - để đó anh lo, vì anh đã có… bí kíp trong tay rồi.", </em>
                                    Quốc Cơ, Quốc Nghiệp vui vẻ tâm sự.
                                </p>
                                <div className={stylesCss["noCaption"]} >
                                    <div>
                                        <Image
                                            src="https://api.xosoaladin.com/xoso/kqxs-mt-27-10-2023.png"
                                            alt="xosoaladin"
                                            width="1280"
                                            height="1707"
                                            layout="responsive"
                                        />
                                    </div>
                                </div>
                                <p>
                                    Hai nghệ sĩ xiếc quốc tế cũng tâm sự, khi tự tay mình làm việc nhà rồi mới thấy "việc nhà khó lắm, phải đâu chuyện đùa", nhất là khoản rửa chén, lau nhà, chà toilet và cả lau kính, cứ hễ làm qua loa 1 cái là bị mấy bà xã phát hiện ra ngay. Mãi đến khi 2 anh em tìm ra được bộ sản phẩm tẩy rửa gia dụng Power100 này thì lúc đó mới thật sự thở phào "việc nhà không khó". Ưu điểm của bộ sản phẩm này là đa dạng sản phẩm mà sản phẩm nào cũng khả năng "dẹp sạch" các vết bẩn cứng đầu nhất mà vẫn lưu lại hương thơm rất dịu nhẹ, nên tự nhiên thích làm việc nhà hồi nào không hay; và vui nhất là mấy "nóc nhà" ưng bụng lắm.
                                </p>
                                <p>
                                    Một trong những điều đặc biệt của "Biệt đội trai đảm" khi ra mắt hội chị em là không chỉ bao gồm những quý ông đã "yên bề gia thất" mà còn có hẳn một thành viên của hội "nhà đang chờ nóc". Vốn là người ấy "trong mơ" của các cô gái với ngoại hình soái ca cùng sự nghiệp diễn xuất và kinh doanh thành công rực rỡ, nam diễn viên còn khiến các chị em tha hồ "ôm tim" khi tiết lộ mình còn là "trai đảm thứ thiệt" vì tự tay làm hết việc nhà. Quốc Trường không ngần ngại "flex" bí kíp của mình chính là bộ sản phẩm tẩy rửa gia dụng từ thương hiệu Power100. Với sức mạnh tẩy rửa vượt trội, sản phẩm nhanh chóng "vượt ải" của trai đảm thứ thiệt ngay từ lần dùng thử đầu tiên
                                </p>
                                <p>
                                    Quốc Trường tự nhận là người kỹ tính nên loạt công việc lau chùi nhà cửa, dọn dẹp phòng ốc, nấu nướng, rửa chén đĩa trong bếp luôn được chính tay Quốc Trường xắn tay áo "xử gọn". Anh cực kỳ tâm đắc với sản phẩm nước rửa chén Power 100 Green trong bộ sản phẩm vì có công dụng tẩy rửa vượt trội, giúp chén đĩa sạch nhanh sáng bóng, vừa đem lại mùi hương dễ chịu với tinh dầu bưởi tây, vừa dịu nhẹ cho da tay vì có thành phần lành tính.</p>
                                <div className={stylesCss["noCaption"]}>
                                    <div>
                                        <Image
                                            src="https://api.xosoaladin.com/xoso/kqxs-mt-27-10-2023.png"
                                            alt=""
                                            width="1280"
                                            height="1707"
                                            layout="responsive"
                                        />
                                    </div>
                                </div>
                                <p>
                                    Không phải hoa, chẳng phải quà nhưng có lẽ tinh thần sẻ chia cùng quan điểm "Việc nhà không khó - có Power100" của "biệt đội trai đảm" Huy Trần - Quốc Cơ - Quốc Phượng - Quốc Trường chính là điều sẽ được các chị em tích cực hưởng ứng và chia sẻ để cùng lan tỏa đến nửa kia</p>
                            </div>
                            <div>
                                <b>Tin sưu tầm</b>: https://kenh14.vn/ben-ngoai-lich...
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
                            news?.map((item, index) => {
                                return (
                                    <li key={index} className={stylesCss["list-panel-item"]}>
                                        <Link
                                            href={`tin-tuc/${item.slug}`}
                                            className={stylesCss["list-panel-link"]}
                                        >
                                            <Image
                                                src={"https://api.xosoaladin.com/xoso/kqxs-mt-27-10-2023.png"}
                                                alt="xosoaladin"
                                                width="150"
                                                height="150"
                                            />
                                        </Link>
                                        <Link href={`tin-tuc/${item.slug}`} className={stylesCss["list-panel-title"]}>
                                            <span className={stylesCss["link-item"]}>{item?.titleItem}</span>
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
    const data = listMenu;
    
    return {
        props: {
            data: data || [],
        },
      };
};

export default NewDetail;