import React from 'react'
import stylesCss from '../../../styles/ComponentCSS/SideBarLeft.module.css'

function SideBarLeft({setDataPost}) {
  return (
    <div className={stylesCss['wrapper']}>
      <div className={stylesCss['title']}>
        Tin Tức Mới Nhất
      </div>
      <div className={stylesCss['list']}>
        {dataPost.map(item => (
          <div key={item.title} onClick={() => setDataPost(item)}className={stylesCss['item']}>
              <img src={item.thumb} alt="" />
              <div>{item.title}</div>
          </div>
        ))}

      </div>
      <div style={{marginTop: 15}} className={stylesCss['title']}>
        Kết quả xổ số Hôm Nay
      </div>
      <div className={stylesCss['list-1']}>
        <div className={stylesCss['title-1']}>
          Kết quả xổ Số Miền Nam
        </div>
        <div className={stylesCss['title-2']}>
          Kết quả xổ Số Đồng Nai
        </div>
        <div className={stylesCss['title-1']}>
          Kết quả xổ Số Miền Bắc
        </div>
        <div className={stylesCss['title-2']}>
          Kết quả xổ Số Miền Bắc
        </div>
        <div className={stylesCss['title-1']}>
          Kết quả xổ Số Miền Trung
        </div>
        <div className={stylesCss['title-2']}>
          Kết quả xổ Số Khách Hòa
        </div>
      </div>
      <div className={stylesCss['title']}>
        Miền Bắc
      </div>
      <div className={stylesCss['list-1']}>
        <div className={stylesCss['title-2']}>
          Xổ Số Miền Bắc
        </div>
      </div>
      <div className={stylesCss['title']}>
        Miền Trung
      </div>
      <div className={stylesCss['list-1']}>
        {sxMT.map(item => (
          <div key={item} className={stylesCss['title-2']}>
            {item}
          </div>
        ))}
      </div>
      <div className={stylesCss['title']}>
        Miền Nam
      </div>
      <div className={stylesCss['list-1']}>
        {sxMN.map(item => (
          <div key={item} className={stylesCss['title-2']}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideBarLeft;

const dataPost = [
  {
    title: 'Cổ động viên đội tuyển Việt Nam - cánh tay đồng hành của Đội tuyển',
    thumb: 'https://api.luongson.news/4bd7fcf7-f70e-4670-9540-39776a080d46/6.png',
    content: `<span class="text-body-1 keovip-content text-justify keovip-content"><h2 id="h2_0">Giới thiệu về cổ động viên đội tuyển Việt Nam và vai trò quan trọng của họ</h2><img src="https://api.luongson.news/4bd7fcf7-f70e-4670-9540-39776a080d46/6.png" alt="cổ động viên đội tuyển việt nam "><p><a href="https://luongson.news/co-dong-vien-doi-tuyen-viet-nam-canh-tay-dong-hanh-cua-doi-tuyen-quoc-gia"><strong>Cổ động viên đội tuyển Việt Nam</strong></a> đã trở thành một phần không thể thiếu trong hành trình của Đội tuyển quốc gia. Với sự đam mê và tình yêu bóng đá, họ không chỉ là những người hâm mộ đơn thuần mà còn là những cánh tay đồng hành quan trọng, đóng góp tích cực vào thành công và tinh thần của Đội tuyển.</p><p>Với quy mô đông đảo và sức ảnh hưởng lớn, cổ động viên Việt Nam tạo nên một không khí sôi động và nhiệt huyết trong các trận đấu. Họ tạo ra những tràng cổ vũ, hò reo và những trận sóng đỏ nổi bật trên khán đài, tạo nên một sức ép lớn đối với đối thủ và cung cấp một nguồn động lực cần thiết cho Đội tuyển.</p><p>Tuy nhiên, vai trò của cổ động viên Việt Nam không chỉ giới hạn trong sân vận động. Sự ủng hộ và tình yêu của họ còn có tầm ảnh hưởng đến tinh thần và phong độ của các cầu thủ. Khi nhìn thấy hàng ngàn người hâm mộ đứng sau lưng, cổ động viên đã trở thành nguồn động viên tinh thần, giúp các cầu thủ tự tin hơn và tập trung vào trận đấu. Điều này đặc biệt quan trọng trong những trận đấu quan trọng, khi áp lực và căng thẳng là không thể tránh khỏi.</p><p>Điều thú vị là cổ động viên Việt Nam không chỉ hiện diện trong sân vận động, mà còn tham gia vào nhiều hoạt động xã hội. Họ thường tham gia các hoạt động từ thiện, gây quỹ và các sự kiện xã hội khác, để tạo niềm vui và lan tỏa tinh thần yêu nước. Điều này thể hiện tình yêu và sự tự hào dân tộc của cổ động viên, và đồng thời truyền cảm hứng cho cộng đồng.</p><p>Trên hết, cổ động viên Việt Nam đã trở thành một cánh tay đồng hành không thể thiếu của Đội tuyển quốc gia. Sự ủng hộ và đam mê của họ không chỉ góp phần vào thành công của đội bóng mà còn tạo ra một tinh thần yêu nước và niềm tin vững chắc trong lòng người hâm mộ. Với vai trò quan trọng của mình, cổ động viên Việt Nam đóng góp một phần không thể thiếu trong việc đưa Đội tuyển quốc gia tiến xa trên con đường đạt được những thành công lớn.</p><p>Xem thêm cùng&nbsp;<a href="https://luongson.news/"><strong>Luongson TV</strong></a></p><p><a href="https://luongson.news/danh-muc/truc-tiep-bong-da-asian-cup"><strong>Trực tiếp Bóng đá Asian Cup</strong></a></p><p><a href="https://luongson.news/danh-muc/truc-tiep-bong-da-concacaf-gold-cup"><strong>Trực tiếp Bóng đá CONCACAF Gold Cup</strong></a></p><h2 id="h2_1">Hoạt động và tác động của cổ động viên Việt Nam</h2><figure class="image"><img src="https://api.luongson.news/4bd7fcf7-f70e-4670-9540-39776a080d46/2.png" alt="cổ động viên đội tuyển việt nam "></figure><p>Cổ động viên Việt Nam thể hiện sự ủng hộ và tình yêu bằng cách tham gia vào nhiều hoạt động và tạo ra những tác động tích cực đối với Đội tuyển quốc gia. Dưới đây là một số hoạt động và tác động đáng chú ý của cổ động viên Việt Nam:</p><p>Hiện diện trong sân vận động: Cổ động viên Việt Nam thường xuyên có mặt trong sân vận động để cổ vũ và tạo không khí nhiệt huyết trong các trận đấu. Họ điều chỉnh các khẩu hiệu, hò reo và biểu ngữ để khích lệ Đội tuyển và tạo ra một không gian hâm mộ sôi động.</p><p>Tạo ra không gian cổ vũ độc đáo: Cổ động viên Việt Nam sáng tạo ra những bài hát và điệu nhảy đặc trưng, tạo nên một không gian cổ vũ độc đáo và khác biệt. Những tràng cổ vũ và những trận sóng đỏ nổi bật trên khán đài đã trở thành biểu tượng của cổ động viên Việt Nam và tạo nên một tinh thần đoàn kết và đồng lòng.</p><p>Lan tỏa tinh thần yêu nước: Cổ động viên Việt Nam không chỉ tạo ra sự ảnh hưởng tích cực trong sân vận động mà còn lan tỏa tinh thần yêu nước. Họ thường tham gia vào các hoạt động xã hội, gây quỹ và các sự kiện tình nguyện để tạo niềm vui và lan tỏa tinh thần yêu nước đến cộng đồng.</p><p>Tác động tích cực đến tinh thần cầu thủ: Sự ủng hộ và sự chắp cánh từ cổ động viên Việt Nam có tác động lớn đến tinh thần cầu thủ trong Đội tuyển quốc gia. Khi nhìn thấy hàng ngàn người hâm mộ đứng sau lưng, các cầu thủ nhận được sự động viên và cổ vũ đầy đủ để tạo ra sự tự tin và tập trung cao độ trong các trận đấu.</p><figure class="image"><img src="https://api.luongson.news/4bd7fcf7-f70e-4670-9540-39776a080d46/3.png" alt="cổ động viên đội tuyển việt nam "></figure><p>Tạo niềm tin và động viên: Cổ động viên Việt Nam là nguồn động viên tinh thần cho Đội tuyển quốc gia khi gặp khó khăn. Những lời cổ vũ và sự ủng hộ không ngừng từ cổ động viên giúp đội bóng vượt qua những thử thách và tạo ra niềm tin vững chắc trong mục tiêu chiến thắng.</p><p>Với sự tham gia tích cực và tác động đáng kể của cổ động viên Việt Nam, Đội tuyển quốc gia đã nhận được một lực lượng hỗ trợ mạnh mẽ từ người hâm mộ. Sự ủng hộ và đam mê của họ không chỉ tạo ra một không khí sôi động trong sân vận động mà còn tạo ra một tinh thần yêu nước và niềm tin vững chắc trong lòng người hâm mộ.</p><h2 id="h2_2">Đóng góp của cổ động viên Việt Nam vào thành công của Đội tuyển quốc gia</h2><figure class="image"><img src="https://api.luongson.news/4bd7fcf7-f70e-4670-9540-39776a080d46/4.png" alt="cổ động viên đội tuyển việt nam "></figure><p>Cổ động viên Việt Nam đóng góp một phần quan trọng vào thành công của Đội tuyển quốc gia thông qua nhiều cách khác nhau.&nbsp;</p><p>Tạo không khí ủng hộ và tinh thần đoàn kết: Cổ động viên Việt Nam tạo ra một không khí sôi động và nhiệt huyết trong sân vận động. Bằng cách hò reo, cổ vũ và tạo ra những trận sóng đỏ, họ tạo ra sự đoàn kết và sự ủng hộ mạnh mẽ cho Đội tuyển quốc gia. Điều này không chỉ tạo ra một môi trường tích cực cho các cầu thủ, mà còn tạo ra sức ép lớn đối với đối thủ.</p><p>Truyền cảm hứng và niềm tin: Cổ động viên Việt Nam truyền cảm hứng và niềm tin cho Đội tuyển quốc gia. Sự ủng hộ và sự tin tưởng không ngừng từ người hâm mộ giúp cầu thủ tập trung vào mục tiêu, vượt qua khó khăn và nỗ lực để đạt được thành công. Cổ động viên Việt Nam là một nguồn động lực quan trọng, thúc đẩy các cầu thủ vươn tới những thành tích tốt nhất.</p><figure class="image"><img src="https://api.luongson.news/4bd7fcf7-f70e-4670-9540-39776a080d46/5.png" alt="cổ động viên đội tuyển việt nam "></figure><p>Sự góp phần trong tạo ra một sân khấu ấn tượng: Cổ động viên Việt Nam tạo ra một sân khấu ấn tượng cho Đội tuyển quốc gia để thể hiện tài năng và kỹ năng của mình. Sự ủng hộ và sự quan tâm từ cổ động viên đã thúc đẩy việc cải thiện chất lượng sân vận động, cung cấp một môi trường tốt hơn cho các trận đấu quốc tế và thu hút sự quan tâm của các đối tác quốc tế.</p><p>Lan tỏa hình ảnh tích cực về bóng đá Việt Nam: Cổ động viên Việt Nam chơi một vai trò quan trọng trong việc lan tỏa hình ảnh tích cực về bóng đá Việt Nam đến cộng đồng quốc tế. Thông qua sự đoàn kết và sự nhiệt huyết của họ, hình ảnh về cổ động viên Việt Nam đang trở thành một biểu tượng tích cực trong cộng đồng bóng đá quốc tế.</p><p>Gây quỹ và hỗ trợ tài chính: Cổ động viên Việt Nam thường tham gia vào các hoạt động gây quỹ và hỗ trợ tài chính cho Đội tuyển quốc gia. Họ đóng góp tiền, mua vé và các sản phẩm liên quan để hỗ trợ đội bóng và đảm bảo sự phát triển và duy trì của Đội tuyển.</p><p>Tóm lại, cổ động viên Việt Nam không chỉ là những người hâm mộ đơn thuần mà còn là những cánh tay đồng hành quan trọng của Đội tuyển quốc gia Việt Nam. Sự ủng hộ, tinh thần đoàn kết và sự đóng góp của họ đã góp phần quan trọng vào thành công và phát triển của đội bóng. Cổ động viên Việt Nam đã trở thành một biểu tượng tích cực trong cộng đồng bóng đá quốc tế và tiếp tục lan tỏa tình yêu và niềm tự hào về bóng đá Việt Nam trên toàn thế giới.</p></span>`
  }
]
const sxMT = [
  'Xổ Số Bình Định',
  'Xổ Số DakLak',
  'Xổ Số Gia Lai',
  'Xổ Số Khánh Hòa',
  'Xổ Số Kon Tum',
  'Xổ Số Ninh Thuận',
  'Xổ Số Phú Yên',
  'Xổ Số Quảng Bình',
  'Xố Số Quảng Nam',
  'Xố Số Quảng Ngãi',
  'Xố Số Quảng Trị',
  'Xố Số Thừa Thiên Huế',
  'Xố Số Thừa Đà Nẵng',
  'Xố Số Đắc Nông',
]
const sxMN = [
  'Xổ Số An Giang',
  'Xổ Số Bình Dương',
  'Xổ Số Bình Phước',
  'Xổ Số Bình Thuận',
  'Xổ Số Bạc Liêu',
  'Xổ Số Bến Tre',
  'Xổ Số Cà Mau',
  'Xổ Số Cần Thơ',
  'Xổ Số Hậu Giang',
  'Xổ Số Hồ Chí Minh',
  'Xổ Số Kiên Giang',
  'Xổ Số Long An',
  'Xổ Số Sóc Trăng',
  'Xổ Số Tiền Giang',
  'Xổ Số Trà Vinh',
  'Xổ Số Tây Ninh',
  'Xổ Số Vinh Long',
  'Xổ Số Vũng Tàu',
  'Xổ Số Đà Lạt',
  'Xổ Số Đồng Nai',
  'Xổ Số Đồng Tháp',
]