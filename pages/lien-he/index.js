import stylesCss from "../../styles/Contact.module.css";
import { FaComments, FaMailBulk, FaPhone, FaTelegram, FaUser } from 'react-icons/fa';
import Meta from "app/components/Meta"

const Contact = () => {
    return (
        <div className={stylesCss["contact-form"]}>
            <Meta title="Liên hệ"/>
            <div className={stylesCss["container-form"]}>
                <form>
                    <div className={stylesCss["form-contact-twocolm"]}>
                        <div className={stylesCss["info-left"]}>
                            <p>
                                <span className={stylesCss["form-control-wrap"]}>
                                    <input size="40" className={stylesCss["form-control"]} placeholder="Họ tên *" value="" type="text" name="your-name" />
                                </span>
                                <i className={stylesCss["icon-user"]}>
                                    <FaUser />
                                </i>
                            </p>
                        </div>
                        <div className={stylesCss["info-right"]}>
                            <p>
                                <span className={stylesCss["form-control-wrap"]}>
                                    <input size="40" className={stylesCss["form-control"]} placeholder="Di động *" value="" type="tel" name="your-number" />
                                </span>
                                <i className={stylesCss["icon-phone"]}>
                                    <FaPhone />
                                </i>
                            </p>
                        </div>
                    </div>
                    <p className={stylesCss["form-control-mail"]}>
                        <span className={stylesCss["form-control-wrap"]}>
                            <input size="40" className={stylesCss["form-control"]} placeholder="Email" value="" type="email" name="your-email" />
                        </span>
                        <i className={stylesCss["icon-envelop"]}>
                            <FaMailBulk />
                        </i>
                    </p>
                    <p className={stylesCss["form-control-tele"]}>
                        <span className={stylesCss["form-control-wrap"]}>
                            <input size="40" className={stylesCss["form-control"]} placeholder="Tiêu đề email" value="" type="text" name="your-subject" />
                        </span>
                        <i className={stylesCss["fa-paper-plane"]}>
                            <FaTelegram />
                        </i>
                    </p>

                    <p className={stylesCss["form-control-comment"]}>
                        <span className={stylesCss["form-control-wrap"]}>
                            <textarea cols="40" rows="10" className={stylesCss["form-control-textarea"]} placeholder="Nội dung email..." name="your-message"></textarea>
                        </span>
                        <i className={stylesCss["comments"]}>
                            <FaComments />
                        </i>
                    </p>
                    <p className={stylesCss["form-control-submit"]}>
                        <input className={stylesCss["form-control-wrap-submit"]} type="submit" value="Gửi Đi" />
                    </p>
                </form>
            </div>
            {/* <span>Họ và tên</span>
                    <input></input> */}
        </div>
    );
}

export default Contact;