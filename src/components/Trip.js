import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/japan.jpg";
import Trip2 from "../assets/frn.webp";
import Trip3 from "../assets/italy.jpg";
import Kebab from "../assets/kebab4.jpg";
import BanhMi from "../assets/banh-mi.jpg";
import Shawama from "../assets/shawarma.jpg";

function Trip() {
  return (
    <>
      <div className="trip">
        <h1>Other Trips</h1>
        <p>You can discover unique destinations using Google Maps.</p>
        <div className="tripcard">
          <TripData
            image={Trip1}
            heading="Japan"
            text="Nhật Bản là sự kết hợp hài hòa giữa hiện đại và truyền thống. Hành trình bắt đầu tại Tokyo, một trong những thành phố sầm uất bậc nhất thế giới, nơi có những tòa nhà chọc trời, công nghệ tiên tiến và nền văn hóa anime đầy màu sắc. Du khách có thể trải nghiệm khu mua sắm sôi động ở Shibuya hay thưởng thức sushi tươi ngon tại chợ cá Toyosu. Buổi tối, một chuyến tham quan Akihabara sẽ mang đến thế giới của game, manga và công nghệ."
          />
          <TripData
            image={Trip2}
            heading="France"
            text="Pháp luôn là điểm đến mơ ước của những tâm hồn yêu thích sự lãng mạn và nghệ thuật. Hành trình khởi đầu tại Paris, kinh đô ánh sáng với những công trình kiến trúc tráng lệ như Tháp Eiffel, Nhà thờ Đức Bà, và Bảo tàng Louvre – nơi lưu giữ bức tranh Mona Lisa huyền thoại. Dạo bước trên đại lộ Champs-Élysées, nhâm nhi một ly cà phê tại những quán nhỏ ven đường và thưởng thức bánh sừng bò chính hiệu là trải nghiệm không thể bỏ qua."
          />
          <TripData
            image={Trip3}
            heading="Italy"
            text="Ý là cái nôi của nền văn minh La Mã và nghệ thuật Phục Hưng, mang đến một hành trình đậm chất lịch sử và nghệ thuật. Bắt đầu từ Rome, du khách có thể tham quan Đấu trường Colosseum, nơi từng diễn ra những trận đấu sinh tử của các đấu sĩ, hay ghé thăm Vatican, trung tâm của Giáo hội Công giáo với Nhà nguyện Sistine nổi tiếng bởi bức tranh trần của Michelangelo. Không thể bỏ qua Đài phun nước Trevi, nơi du khách có thể ném một đồng xu để cầu may mắn."
          />
        </div>
      </div>
      <div className="trip">
        <h1 className="foodH1">Local Specialties</h1>
        {/* <p>You can discover unique destinations using Google Maps.</p> */}
        <div className="tripcard">
          <TripData
            image={Kebab}
            heading="Kebab (Turkey)"
            text="Xiên thịt nướng thơm lừng, thường được ăn kèm bánh mì hoặc cơm, với sốt yogurt và rau sống, tạo nên một món ăn đường phố đậm chất Trung Đông."
          />
          <TripData
            image={BanhMi}
            heading="Bánh Mì (Vietnam)"
            text="Ổ bánh mì giòn rụm kẹp thịt nguội, pate, chả lụa, rau thơm và nước sốt đặc biệt, mang đến hương vị cân bằng giữa béo, chua, cay và mặn."
          />
          <TripData
            image={Shawama}
            heading="Shawarma (Middle East)"
            text="Thịt cắt lát từ xiên quay, cuốn trong bánh pita cùng rau sống, sốt tỏi hoặc sốt tahini, tạo nên một món ăn đường phố thơm ngon và tiện lợi."
          />
        </div>
      </div>
    </>
  );
}

export default Trip;
