const moment = require("moment");

export const FormatDate = (timestamp) => {
    const x = moment(new Date(timestamp));
    const dd = x.format("DD");
    const mm = x.format("MM");
    const yyyy = x.format("YYYY");
    const result = dd + "/" + (mm > 9 ? mm : "0" + mm) + "/" + yyyy;
    return result;
};

export const FormatDateCalendar = (timestamp) => {
    const x = moment(new Date(timestamp));
    const dd = x.format("DD");
    const mm = x.format("MM");
    const yyyy = x.format("YYYY");
    const result = dd + "-" + (mm > 9 ? mm : "0" + mm) + "-" + yyyy;
    return result;
};