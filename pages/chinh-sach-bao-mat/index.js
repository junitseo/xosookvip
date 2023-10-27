import Link from "next/link";
import stylesCss from "../../styles/PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
    return (
        <div className={stylesCss["container"]}>
            <div>
                <h1 className={stylesCss["title"]}>Chính sách bảo mật</h1>
            </div>
            <div className={stylesCss["content"]}>
                <div className={stylesCss["content-item"]}>
                    <p className={stylesCss["content-privacy-policy"]}>
                        <strong>Chính sách bảo mật</strong>
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        Khi sử dụng trang web, bạn đang chấp nhận những điều được mô tả trong chính sách bảo mật Quý khách vui lòng đọc bản “Chính sách bảo mật” dưới đây để hiểu hơn những cam kết mà chúng tôi thực hiện, nhằm tôn trọng và bảo vệ quyền lợi của người truy cập.
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        &nbsp;
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        <strong>THU THẬP THÔNG TIN CÁ NHÂN CỦA BẠN</strong>
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        Các thông tin thu thập thông qua website https://www.xosookvip.com sẽ giúp chúng tôi:
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        - Hỗ trợ Quý khách khi có nhu cầu cụ thể
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        - Giải đáp thắc mắc của Quý khách
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        - Cung cấp cho bạn thông tin mới nhất trên Website của chúng tôi
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        - Xem xét và nâng cấp nội dung và giao diện của Website
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        - Thực hiện các bản khảo sát khách hàng
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        - Thực hiện các hoạt động quảng bá liên quan đến các sản phẩm và dịch vụ của website.
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        - Để truy cập và sử dụng một số dịch vụ tại https://www.xosookvip.com, quý khách có thể sẽ được yêu cầu đăng ký với chúng tôi thông tin cá nhân (Email, Họ tên, Số ĐT liên lạc…). Mọi thông tin khai báo phải đảm bảo tính chính xác và hợp pháp. Chúng tôi không chịu mọi trách nhiệm liên quan đến pháp luật của thông tin khai báo.
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        - Chúng tôi cũng có thể thu thập thông tin về số lần viếng thăm, bao gồm số trang quý khách xem, số links (liên kết) bạn click và những thông tin khác liên quan đến việc kết nối đến website. Chúng tôi cũng thu thập các thông tin mà trình duyệt Web (Browser) quý khách sử dụng mỗi khi truy cập vào website https://www.xosookvip.com, bao gồm: địa chỉ IP, loại Browser, ngôn ngữ sử dụng, thời gian và những địa chỉ mà Browser truy xuất đến.
                    </p>
                    <p className={stylesCss["content-item-content-add"]}>
                        &nbsp;
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        <strong>SỬ DỤNG THÔNG TIN CÁ NHÂN NHƯ THẾ NÀO</strong>
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        - Website https://www.xosookvip.com&nbsp;thu thập và sử dụng thông tin cá nhân quý khách với mục đích phù hợp và hoàn toàn tuân thủ nội dung của “Chính sách bảo mật” này.
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        - Khi cần thiết, chúng tôi có thể sử dụng những thông tin này để liên hệ trực tiếp với bạn dưới các hình thức như: gởi thư ngỏ, thư cảm ơn, thông tin về kỹ thuật và bảo mật, quý khách có thể nhận được thư định kỳ cung cấp thông tin sản phẩm, dịch vụ mới, thông tin về các sự kiện sắp tới hoặc thông tin tuyển dụng nếu quý khách đăng kí nhận email thông báo.
                    </p>
                    <p className={stylesCss["content-item-content-add"]}>
                        &nbsp;
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        <strong>COOKIE / CÔNG NGHỆ THEO DÕI</strong>
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        - https://www.xosookvip.com&nbsp;dùng "Cookie" để giúp cá nhân hóa và nâng cao tối đa hiệu quả sử dụng thời gian trực tuyến của quý khách.
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        - Một cookie là một file văn bản được đặt trên đĩa cứng của bạn bởi một máy chủ của trang web. Cookie không được dùng để chạy chương trình hay đưa virus vào máy tính của quý khách. Cookie được chỉ định vào máy tính của quý khách và chỉ có thể được đọc bởi một máy chủ trang web trên miền được đưa ra cookie cho quý khách.
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        - Một trong những mục đích của Cookie là cung cấp những tiện ích để tiết kiệm thời gian của quý khách khi truy cập tại website của chúng tôi hoặc viếng thăm website https://www.xosookvip.com&nbsp;lần nữa mà không cần đăng ký lại thông tin sẵn có.
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        - Quý khách có thể chấp nhận hoặc từ chối dùng cookie. Hầu hết những Browser tự động chấp nhận cookie, nhưng quý khách có thể thay đổi những cài đặt để từ chối tất cả những cookie nếu quý khách thích. Tuy nhiên, nếu quý khách chọn từ chối cookie, điều đó có thể gây cản trở và ảnh hưởng không tốt đến một số dịch vụ và tính năng phụ thuộc vào cookie tại website của chúng tôi.
                    </p>
                    <p className={stylesCss["content-item-content-add"]}>
                        &nbsp;
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        <strong>QUY ĐỊNH VỀ “SPAM”</strong>
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        - Chúng tôi thực sự quan ngại đến vấn nạn Spam (thư rác), các Email giả mạo danh tín chúng tôi gởi đi. Do đó, chúng tôi&nbsp; khẳng định chỉ gởi Email đến quý khách khi và chỉ khi quý khách có đăng ký hoặc sử dụng dịch vụ từ hệ thống của chúng tôi.
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        - Chúng tôi cam kết không bán, thuê lại hoặc cho thuê email của quý khách từ bên thứ ba.
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        <strong><br/>
                            THAY ĐỔI VỀ CHÍNH SÁCH</strong>
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        - Chúng tôi hoàn toàn có thể thay đổi nội dung trong trang này mà không cần phải thông báo trước, để phù hợp với các nhu cầu của Website cũng như nhu cầu và sự phản hồi từ khách hàng nếu có. Khi cập nhật nội dung chính sách này, chúng tôi sẽ chỉnh sửa lại thời gian “Cập nhật lần cuối” bên dưới.
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        - Nội dung “Chính sách bảo mật” này chỉ áp dụng tại https://www.xosookvip.com, không bao gồm hoặc liên quan đến các bên thứ ba đặt quảng cáo hay có links tại trang web. Chúng tôi khuyến khích bạn đọc kỹ chính sách An toàn và Bảo mật của các trang web của bên thứ ba trước khi cung cấp thông tin cá nhân cho các trang web đó. Chúng tôi không chịu trách nhiệm dưới bất kỳ hình thức nào về nội dung và tính pháp lý của trang web thuộc bên thứ ba.
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        - Vì vậy, bạn đã đồng ý rằng, khi bạn sử dụng website của chúng tôi sau khi chỉnh sửa nghĩa là bạn đã thừa nhận, đồng ý tuân thủ cũng như tin tưởng vào sự chỉnh sửa này. Do đó, chúng tôi đề nghị bạn nên xem trước nội dung trang này trước khi truy cập các nội dung khác trên website cũng như bạn nên đọc và t ham khảo kỹ nội dung “Chính sách bảo mật” của từng website mà bạn đang truy cập.
                    </p>
                    <p className={stylesCss["content-item-content-add"]}>
                        &nbsp;
                    </p>
                    <p className={stylesCss["content-item-content"]}>
                        <strong>THÔNG TIN LIÊN HỆ</strong>
                    </p>
                    <p className={stylesCss["content-item-end"]}>
                        <font face="Helvetica Neue" size="2">- Chúng tôi luôn hoan nghênh các ý kiến đóng góp, liên hệ và phản hồi thông tin từ bạn về “Chính sách bảo mật” này. Nếu bạn có những thắc mắc liên quan xin vui lòng liên hệ theo địa chỉ Email:&nbsp;</font>
                        <Link href="mailto:xosookvip@okvip.com" target="_blank">
                            <span className={stylesCss["link"]}>xosookvip@okvip.com</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;