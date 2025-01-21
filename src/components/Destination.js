import DestionationData from "./DestinationData";
import "./DestinationStyles.css";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
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
        text="Đà Nẵng là trung tâm của 3 di sản văn hóa thế giới là Cố đô Huế, phố
      cổ Hội An và thánh địa Mỹ Sơn. Không chỉ nổi tiếng với các khu du
      lịch văn hóa, Đà Nẵng còn nổi tiếng với các cảnh quan thiên nhiên
      đẹp đẽ và hùng vĩ. Với các bãi biển cùng với các hoạt động trải
      nghiệm như tắm biển, lướt sóng, du thuyền… sẽ đem lại sự thú vị cho
      du khách. Du khách còn có cơ hội thưởng thức các đặc sản như mì
      Quảng, gỏi cuốn Nam Ô…"
        img1={Mountain1}
        img2={Mountain2}
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
