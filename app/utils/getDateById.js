import moment from "moment"

export const getDateById = (value) => {
  const toDay = new Date().getDay()
  const diff = toDay - value
  let haveResultDate = 0
  if (diff < 0) {
      haveResultDate = 7
  }
  const dateToGetData = new Date(
      new Date().setDate(new Date().getDate() - diff - haveResultDate)
  )
  return moment(dateToGetData).format("DD-MM-YYYY");
}