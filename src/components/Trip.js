import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/soc_trang_1.jpg";
import Trip2 from "../assets/bac_lieu_1.jpg";
import Trip3 from "../assets/dong_thap_1.webp";
import Kebab from "../assets/lau_ca_linh_bong_dien_dien_mien_tay_gonatour.jpg";
import BanhMi from "../assets/banh-tet-tra-cuon-e1684494866497.jpeg";
import Shawama from "../assets/vit-nao-chao-kim-lien.jpg";

function Trip() {
  return (
    <>
      <div className="trip">
        <h1>Other Trips</h1>
        <p>You can discover unique destinations using Google Maps.</p>
        <div className="tripcard">
          <TripData
            image={Trip1}
            heading="Sóc Trăng"
            text="Sóc Trăng – vùng đất mang đậm bản sắc văn hóa của người Khmer, nổi bật với những công trình chùa chiền độc đáo như chùa Dơi, nơi hàng ngàn con dơi trú ngụ, chùa Chén Kiểu với kiến trúc ấn tượng từ chén sứ, và chùa Đất Sét với hàng trăm tượng Phật điêu khắc thủ công. Thành phố còn nổi tiếng với lễ hội Oóc Om Bóc và đua ghe Ngo sôi động. Đặc sản Sóc Trăng gồm bánh pía, bún nước lèo và bò nướng ngói."
          />
          <TripData
            image={Trip2}
            heading="Bạc Liêu"
            text="Bạc Liêu – vùng đất gắn liền với hình tượng Công tử Bạc Liêu, nơi du khách có thể tham quan Nhà công tử Bạc Liêu để tìm hiểu về cuộc sống xa hoa một thời. Bạc Liêu còn nổi bật với cánh đồng quạt gió, địa điểm check-in độc đáo, và nhà thờ Tắc Sậy, nơi an nghỉ của cha Trương Bửu Diệp, thu hút đông đảo khách hành hương. Đến Bạc Liêu, du khách không thể bỏ qua lẩu mắm, bún bò cay và cá kèo nướng muối ớt."
          />
          <TripData
            image={Trip3}
            heading="Đồng Tháp"
            text="Đồng Tháp – vùng đất sen hồng, nổi tiếng với vườn quốc gia Tràm Chim, nơi bảo tồn loài sếu đầu đỏ quý hiếm và hệ sinh thái rừng ngập nước rộng lớn. Làng hoa Sa Đéc rực rỡ quanh năm với hàng trăm loài hoa khoe sắc, là điểm đến không thể bỏ lỡ vào dịp Tết. Đồng Tháp còn có khu di tích Gò Tháp mang giá trị lịch sử, và Lăng cụ Phó bảng Nguyễn Sinh Sắc, thân sinh Chủ tịch Hồ Chí Minh. Đặc sản trứ danh gồm hủ tiếu Sa Đéc, cá lóc nướng trui và nem Lai Vung."
          />
        </div>
      </div>
      <div className="trip">
        <h1 className="foodH1">Local Specialties</h1>
        {/* <p>You can discover unique destinations using Google Maps.</p> */}
        <div className="tripcard">
          <TripData
            image={Kebab}
            heading="Lẩu cá linh bông điên điển (Đồng Tháp)"
            text="Lẩu cá linh bông điên điển là món ăn đặc trưng của mùa nước nổi ở miền Tây, đặc biệt phổ biến tại Đồng Tháp. Cá linh tươi ngon, xương mềm, thịt ngọt được thả vào nồi lẩu chua thanh từ me và thơm, kết hợp với bông điên điển vàng óng, giòn nhẹ, tạo nên hương vị đặc trưng. Khi ăn, thực khách nhúng cá linh vừa chín tới để giữ độ ngọt, ăn kèm với rau sống, bún tươi và chấm nước mắm ớt cay nồng, tạo nên một món ăn dân dã nhưng đậm đà hương vị miền Tây."
          />
          <TripData
            image={BanhMi}
            heading="Bánh tét Trà Cuôn (Trà Vinh)"
            text="Bánh tét Trà Cuôn là đặc sản trứ danh của Trà Vinh, nổi bật với màu sắc bắt mắt và hương vị thơm ngon. Khác với bánh tét thông thường, bánh tét Trà Cuôn có lớp nếp dẻo thơm được trộn nước lá dứa hoặc lá cẩm, tạo màu xanh hoặc tím tự nhiên. Nhân bánh gồm đậu xanh, thịt mỡ, trứng muối, được nêm nếm đậm đà, khi cắt ra từng khoanh, nhân và vỏ hòa quyện đẹp mắt. Nhờ cách gói chặt tay và nấu đúng kỹ thuật, bánh có thể để lâu mà vẫn giữ được độ mềm dẻo, thích hợp làm quà biếu mỗi dịp Tết."
          />
          <TripData
            image={Shawama}
            heading="Vịt nấu chao (Cần Thơ)"
            text="Vịt nấu chao là món đặc sản nổi tiếng của Cần Thơ, với vị béo ngậy và đậm đà khó cưỡng. Vịt xiêm được làm sạch, ướp cùng chao, rượu trắng, gừng để khử mùi tanh, sau đó hầm mềm cùng khoai môn bùi béo. Nước dùng có màu vàng đẹp mắt, sánh nhẹ nhờ chao và khoai môn tan dần trong quá trình nấu. Món ăn thường được ăn kèm với rau muống, cải xanh và bún tươi, chấm với chén chao pha ớt cay để tăng thêm hương vị."
          />
        </div>
      </div>
    </>
  );
}

export default Trip;
