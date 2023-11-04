export const getDayOfWeek = (dateStr) => {
  let dateParts = dateStr.split('-');
  let date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);

  let dayOfWeek = date.getDay();

  let daysOfWeek = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];

  return daysOfWeek[dayOfWeek];
}