import { useState } from "react";
import { getPerpetualCalendar } from "../../stores/perpetualCalendar";
import stylesCss from "../../styles/PerpetualCalendar.module.css";
import Meta from "app/components/Meta"
import { FormatDateCalendar } from "../../app/@function/formatDate";

const PerpetualCalendar = (props) => {
    const [data, setData] = useState(props.data)

    const dateNow = new Date();
    const dateFrom = dateNow.setDate(dateNow.getDate() - 1);
    const dateTo = dateNow.setDate(dateNow.getDate() + 2);

    const [dateTime, setDateTime] = useState(dateNow);
    const [fromDateTime, setFromDateTime] = useState(dateFrom);
    const [toDateTime, setToDateTime] = useState(dateTo);

    const handleBefore = (date) => {
        const dateBefore = new Date(date).setDate(new Date(date).getDate() - 1);
        const dateAfter = new Date(date).setDate(new Date(date).getDate() + 1);
        
        setFromDateTime(dateBefore);
        setToDateTime(dateAfter);
        setDateTime(new Date(date));

        loadData(new Date(date));
    }

    const handleAfter = (date) => {
        const dateBefore = new Date(date).setDate(new Date(date).getDate() - 1);
        const dateAfter = new Date(date).setDate(new Date(date).getDate() + 1);

        setFromDateTime(dateBefore);
        setToDateTime(dateAfter);
        setDateTime(new Date(date));

        loadData(new Date(date));
    }

    const loadData = async (date) => {
        const dateFormat = FormatDateCalendar(date);
        const res = await getPerpetualCalendar(dateFormat);
        if (res) {
            setData(res);
        }
    }

    return (
        <div>
            <Meta title="Lịch vạn niên" />
            <form className={stylesCss["calendar-form"]}>
                <div className={stylesCss["perpetual-calendar"]}>
                    <div className={stylesCss["calendar-title"]}>
                        <h1 className={stylesCss["calendar-title-title"]}>{data?.title}</h1>
                    </div>
                    <div className={stylesCss["calendar-content"]}>
                        <div className={stylesCss["content-title"]}>{data?.title_calendar}</div>
                        <div className={stylesCss["content-day"]}>
                            <span className={stylesCss["content-day-prev"]} onClick={() => handleBefore(fromDateTime)}></span>
                            <div className={stylesCss["content-day-now"]}>{data?.date_calendar}</div>
                            <span className={stylesCss["content-day-next"]} onClick={() => handleAfter(toDateTime)}></span>
                        </div>
                    </div>
                    <div className={stylesCss["calendar-day-info"]}>{data?.day_info_calendar}</div>
                    <div className={stylesCss["calendar-day-of-week"]}>{data?.calendar_day_of_week}</div>
                    <div className={stylesCss["calendar-day-al"]}>
                        <ul>
                            <li>{data?.number_one}</li>
                            <li className={stylesCss["calendar-number"]}>{data?.number_calendar}</li>
                            <li>{data?.number_two}</li>
                        </ul>
                        <ul>
                            <li>{data?.month_one}</li>
                            <li className={stylesCss["calendar-month"]}>{data?.month_calendar}</li>
                            <li>{data?.month_two}</li>
                        </ul>
                    </div>
                    <div className={stylesCss["qc_mgid"]}>
                    </div>
                    <div className={stylesCss["calendar-day-tho"]}>{data?.calendar_day_tho}</div>
                    <div className={stylesCss["calendar-day-row-title"]}>
                        <h2>{data?.calendar_day_row_title}</h2>
                    </div>
                    <div className={stylesCss["calendar-day-row-desc"]}>
                        <div className={stylesCss["calendar-lich-bold"]}>
                            {data?.calendar_day_row_desc_one}
                        </div>
                        <div className={stylesCss["calendar-lich-bold"]}>
                            {data?.calendar_day_row_desc_two}
                        </div>
                        <div className={stylesCss["calendar-lich-bold"]}>
                            {data?.calendar_day_row_title_three}
                        </div>
                    </div>
                    <div className={stylesCss["calendar-day-row-title-red"]}>
                        <h2>{data?.calendar_day_row_title_xo_so_mb}</h2>
                    </div>
                    <div className={stylesCss["calendar-day-row-desc"]}>
                        {data?.calendar_day_row_desc_xo_so_mb ? data?.calendar_day_row_desc_xo_so_mb : "Đợi quay thưởng ..."}
                    </div>
                    <div className={stylesCss["calendar-day-row-title-red"]}>
                        <h2>{data?.calendar_day_row_title_xo_so_mt}</h2>
                    </div>
                    <div className={stylesCss["calendar-day-row-desc"]}>
                        {
                            data?.calendar_day_row_desc_xo_so_mt_one &&
                                data?.calendar_day_row_desc_xo_so_mt_two &&
                                data?.calendar_day_row_desc_xo_so_mt_three ?
                                <>
                                    <div className={stylesCss["lich-xs-item"]}>
                                        {data?.calendar_day_row_desc_xo_so_mt_one}
                                    </div>
                                    <div className={stylesCss["lich-xs-item"]}>
                                        {data?.calendar_day_row_desc_xo_so_mt_two}
                                    </div>
                                    <div className={stylesCss["lich-xs-item"]}>
                                        {data?.calendar_day_row_desc_xo_so_mt_three}
                                    </div>
                                </>
                                :
                                "Đợi quay thưởng ..."

                        }
                    </div>
                    <div className={stylesCss["calendar-day-row-title-red"]}>
                        <h2>{data?.calendar_day_row_title_xo_so_mn}</h2>
                    </div>
                    <div className={stylesCss["calendar-day-row-desc"]}>
                        {
                            data?.calendar_day_row_desc_xo_so_mn_one &&
                                data?.calendar_day_row_desc_xo_so_mn_two &&
                                data?.calendar_day_row_desc_xo_so_mn_three ?
                                <>
                                    <div className={stylesCss["lich-xs-item"]}>
                                        {data?.calendar_day_row_desc_xo_so_mn_one}
                                    </div>
                                    <div className={stylesCss["lich-xs-item"]}>
                                        {data?.calendar_day_row_desc_xo_so_mn_two}
                                    </div>
                                    <div className={stylesCss["lich-xs-item"]}>
                                        {data?.calendar_day_row_desc_xo_so_mn_three}
                                    </div>
                                </>
                                :
                                "Đợi quay thưởng ..."
                        }
                    </div>
                    <div className={stylesCss["qc_mgid"]}>
                        <div className={stylesCss["M786807ScriptRootC1275180"]}></div>
                    </div>
                    <div className={stylesCss["calendar-day-row-title"]}>
                        <h2>{data?.calendar_day_row_title_time}</h2>
                    </div>
                    <div className={stylesCss["calendar-day-row-desc"]}>
                        {data?.calendar_day_row_desc_time}
                    </div>
                    <div className={stylesCss["calendar-day-row-title"]}>
                        <h2>{data?.life}</h2>
                    </div>
                    <div className={stylesCss["calendar-day-row-desc"]}>
                        {data?.life_desc}
                    </div>
                    <div className={stylesCss["calendar-day-row-title"]}>
                        <h2>{data?.gas_secretion}</h2>
                    </div>
                    <div className={stylesCss["calendar-day-row-desc"]}>
                        {data?.gas_secretion_desc}
                    </div>
                    <div className={stylesCss["calendar-day-row-title"]}>
                        <h2>{data?.direct}</h2>
                    </div>
                    <div className={stylesCss["calendar-day-row-desc"]}>
                        {data?.direct_desc}
                    </div>
                    <div className={stylesCss["calendar-day-row-title"]}>
                        <h2>{data?.conflicting_ages}</h2>
                    </div>
                    <div className={stylesCss["calendar-day-row-desc"]}>
                        {data?.conflicting_ages_desc}
                    </div>
                    <div className={stylesCss["calendar-day-row-title"]}>
                        <h2>{data?.departure_direction}</h2>
                    </div>
                    <div className={stylesCss["calendar-day-row-desc"]}>
                        <div className={stylesCss["calendar-row-item"]}>{data?.departure_direction_desc_winter}</div>
                        <div className={stylesCss["calendar-row-item"]}>{data?.departure_direction_desc_west}</div>
                        <div className={stylesCss["calendar-row-item"]}>{data?.departure_direction_desc_male}</div>
                        <div className={stylesCss["calendar-row-item"]}>{data?.departure_direction_desc_north}</div>
                    </div>
                    <div className={stylesCss["calendar-day-row-title"]}>
                        <h2>{data?.good_stars}</h2>
                    </div>
                    <div class="calendar-day-row-desc">
                        <div>
                            <span class="left-item">{data?.good_stars_desc_one}</span>
                            <span class="left-item">{data?.good_stars_desc_two}</span>
                            <span class="left-item">{data?.good_stars_desc_three}</span>
                            <span class="left-item">{data?.good_stars_desc_four}</span>
                        </div>
                    </div>
                    <div className={stylesCss["calendar-day-row-title"]}>
                        <h2>{data?.bad_stars}</h2>
                    </div>
                    <div className={stylesCss["calendar-day-row-desc"]}>
                        <div>
                            <span class="left-item">{data?.bad_stars_desc_one}</span>
                            <span class="left-item">{data?.bad_stars_desc_two}</span>
                            <span class="left-item">{data?.bad_stars_desc_three}</span>
                            <span class="left-item">{data?.bad_stars_desc_four}</span>
                            <span class="left-item">{data?.bad_stars_desc_five}</span>
                        </div>
                    </div>
                    <div className={stylesCss["calendar-day-row-title"]}>
                        <h2>{data?.twenty_eight_stars}</h2>
                    </div>
                    <div className={stylesCss["calendar-day-row-desc"]}>
                        <div class="lich-row-item">{data?.twenty_eight_stars_desc_one}</div>
                        <div class="lich-row-item">{data?.twenty_eight_stars_desc_two}</div>
                        <div class="lich-row-item">{data?.twenty_eight_stars_desc_three}</div>
                        <div class="lich-row-item">{data?.twenty_eight_stars_desc_four}</div>
                        <div class="lich-row-item">{data?.twenty_eight_stars_desc_five}</div>
                        <div class="lich-row-item">{data?.twenty_eight_stars_desc_six}</div>
                        <div class="lich-row-item">{data?.twenty_eight_stars_desc_seven}</div>
                        <div class="lich-row-item">{data?.twenty_eight_stars_desc_eight}</div>
                        <div class="lich-row-item">{data?.twenty_eight_stars_desc_nine}</div>
                        <div class="lich-row-item">{data?.twenty_eight_stars_desc_ten}</div>
                    </div>
                    <div className={stylesCss["calendar-day-bottom"]}>
                        <div className={stylesCss["calendar-day-prev"]} onClick={() => handleBefore(fromDateTime)}>{FormatDateCalendar(fromDateTime)}</div>
                        <div className={stylesCss["calendar-day-next"]} onClick={() => handleAfter(toDateTime)}>{FormatDateCalendar(toDateTime)}</div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export const getServerSideProps = async () => {
    const dateNow = FormatDateCalendar(new Date());

    const [
        data
    ] = await Promise.all([
        getPerpetualCalendar(dateNow)
    ]);

    return {
        props: {
            data: data || {},
        },
    }
}


export default PerpetualCalendar;