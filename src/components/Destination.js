import DestionationData from "./DestinationData";
import "./DestinationStyles.css";
import DaNang1 from "../assets/Golden-Bridge-Featured.jpg";
import DaNang2 from "../assets/cau-rong-da-nang-2.jpg";
import Mountain3 from "../assets/79591-Tuong-Dai-Chua-Kito-Vua.avif";
import Mountain4 from "../assets/79466-Back-Beach.avif";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      <DestionationData
        className="first-des"
        heading="Đà Nẵng, Việt Nam"
        text="Nằm ở miền Trung Việt Nam, Đà Nẵng là một trong những thành phố du lịch hấp dẫn nhất với sự kết hợp hài hòa giữa thiên nhiên, văn hóa và ẩm thực. Được mệnh danh là 'Thành phố đáng sống nhất Việt Nam', Đà Nẵng thu hút du khách nhờ những bãi biển dài xanh trong, những cây cầu độc đáo và các danh lam thắng cảnh nổi tiếng. Ngoài cảnh đẹp, Đà Nẵng còn có nền ẩm thực phong phú với những món ăn đặc trưng như mì Quảng, bánh tráng cuốn thịt heo, hay hải sản tươi sống tại các quán ven biển. Đặc biệt, từ Đà Nẵng, du khách có thể dễ dàng di chuyển đến Hội An – phố cổ mang vẻ đẹp hoài niệm, hoặc tham quan Cố đô Huế với những công trình kiến trúc triều Nguyễn."
        img1={DaNang1}
        img2={DaNang2}
      />

      <DestionationData
        className="first-des-reverse"
        heading="Vũng Tàu, Việt Nam"
        text="Vũng Tàu là một thành phố biển nổi tiếng gần TP.HCM, thu hút du khách với những bãi biển đẹp như Bãi Sau, Bãi Trước và nhiều điểm tham quan như Tượng Chúa Kitô, Ngọn Hải Đăng và Hồ Mây. Nơi đây còn nổi bật với ẩm thực hấp dẫn như bánh khọt, lẩu cá đuối và hải sản tươi ngon. Du khách có thể tham gia nhiều hoạt động thú vị như tắm biển, chèo SUP, cắm trại hay ngắm hoàng hôn. Với khí hậu ôn hòa, giao thông thuận tiện, Vũng Tàu là điểm đến lý tưởng để nghỉ dưỡng và khám phá."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
