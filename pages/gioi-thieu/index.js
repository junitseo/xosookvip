import Link from "next/link";
import stylesCss from "../../styles/Introduce.module.css";
import Meta from "app/components/Meta"

const Introduce = () => {

    return (
        <div className={stylesCss["container"]}>
            <Meta title="Giới thiệu"/>
            <div className={stylesCss["title"]}>
                <h1>Giới thiệu về chúng tôi</h1>
            </div>
            <div className={stylesCss["content"]}>
                <div className={stylesCss["content-item"]}>
                    <Link href="/">
                        <span className={stylesCss["link"]}>xosookvip.com</span>
                    </Link>&nbsp;là trang tin chuyên tổng hợp thông tin liên tục về kết quả xổ số kiến thiết Miền Bắc, Miền Trung, Miền Nam hoàn toàn miễn phí.
                    <div>
                        <br />
                    </div>
                    <div>
                        Dữ liệu được tổng hợp từ năm 2000 tới nay với nhiều công cụ hỗ trợ cho bạn tham khảo.
                    </div>
                    <div>
                        <br />
                    </div>
                    <div>
                        Trong quá trình tổng hợp từ nhiều nguồn từ internet nên có thể có sai sót không tránh khỏi do yếu tố khách quan do vậy các thông tin trên trang chỉ mang tính tham khảo và&nbsp;<span style={{textAlign: 'justify'}}>https://www.xosookvip.com</span>&nbsp;không chịu trách nhiệm về những thông tin này.
                    </div>
                    <div>
                        <br />
                    </div>
                    <div>
                        Mọi thông tin phản ánh vui lòng gửi vào hòm mail&nbsp;
                        <Link href="mailto:xosookvip@okvip.com" target="_blank">
                            <span className={stylesCss["link"]}>xosookvip@okvip.com</span>
                        </Link>
                    </div>
                    <div>
                        <br />
                    </div>
                    <div>
                        Trân trọng,
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Introduce;