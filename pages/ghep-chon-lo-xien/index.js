import React, { useState } from 'react'
import stylesCss from '../../styles/SpecialStagingStatistics.module.css'
function SpecialStagingStatistics() {
  return (
    <div className={stylesCss['wrapper']}>
    <h2 className={stylesCss['title']}>Ghép chọn lô xiên 2,3,4</h2> 
    <div><strong>Chú ý:</strong></div>
    <div>1. Dãy số nhập vào phải là các cặp số khác nhau và cách nhau bởi dấu phẩy (,) - không có khoảng cách trắng giữa 2 cặp số. VD: 02,03,04,05,06,07,08,09</div>
    <div>2. Chương trình tạo các cặp xiên chỉ sử dụng cho 10 cặp số khác nhau. Nếu số cặp số tạo xiên vượt quá 10 thì chương trình tự động lấy 10 cặp số đầu tiên để tạo</div>

3. Là một công cụ sinh các cặp số xiên tự động rất mong giúp các bạn chọn được các cặp xiên đẹp trên dàn số mình dự đoán đưa vào
      <div style={{display: "flex", gap: 15, marginTop: 10}}>
      <table
        >
          <tbody>
  
          </tbody>
        </table>
      </div>
    
   
    </div>
  )
}

export default SpecialStagingStatistics;

