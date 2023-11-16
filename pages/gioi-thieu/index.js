import Link from "next/link";
import stylesCss from "../../styles/Introduce.module.css";
import Meta from "app/components/Meta"

const Introduce = () => {

    return (
        <div className={stylesCss["container"]}>
            <Meta title="Giới thiệu" description="Kết Quả Xổ Số Miền Bắc - KQXS - XS - XSMB - XSKT - Xổ số OKVIP" keywords="xsmb,sxmb,kqxsmb,xstd,xổ số miền bắc,ket qua xsmb,xo so mien bac,xsmb hom nay,kết quả xổ số miền bắc,giới thiệu, introduction" />
            <div className={stylesCss["title"]}>
                <h1 className={stylesCss["title"]}>Giới thiệu về chúng tôi</h1>
            </div>
            <div className={stylesCss["content"]}>
                <div className={stylesCss["content-item"]}>
                    <Link href="/">
                        <span className={stylesCss["link"]}>xosookvip.com</span>
                    </Link>&nbsp;là trang tin chuyên tổng hợp thông tin liên tục về kết quả xổ số kiến thiết Miền Bắc, Miền Trung, Miền Nam hoàn toàn miễn phí.
                    <div>
                        Dữ liệu được tổng hợp từ năm 2000 tới nay với nhiều công cụ hỗ trợ cho bạn tham khảo.
                    </div>
                    <div>
                        Trong quá trình tổng hợp từ nhiều nguồn từ internet nên có thể có sai sót không tránh khỏi do yếu tố khách quan do vậy các thông tin trên trang chỉ mang tính tham khảo và&nbsp;<span style={{textAlign: 'justify'}}><Link href={"https://www.xosookvip.com"}>https://www.xosookvip.com</Link></span>&nbsp;không chịu trách nhiệm về những thông tin này.
                    </div>
                    <div>
                        Mọi thông tin phản ánh vui lòng gửi vào hòm mail&nbsp;
                        <Link href="mailto:xosookvip.com@gmail.com" target="_blank">
                            <span className={stylesCss["link"]}>xosookvip.com@gmail.com</span>
                        </Link>
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