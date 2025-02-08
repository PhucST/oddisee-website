import DestionationData from "./DestinationData";
import "./DestinationStyles.css";
import DaNang1 from "../assets/can_tho_1.jpg";
import DaNang2 from "../assets/can_tho_2.jpg";
import Mountain3 from "../assets/ca_mau_1.jpg";
import Mountain4 from "../assets/ca_mau_2.png";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      <DestionationData
        className="first-des"
        heading="Cần Thơ, Việt Nam"
        text="Cần Thơ – trái tim của miền Tây sông nước, nổi tiếng với chợ nổi Cái Răng, nơi du khách có thể trải nghiệm không gian mua bán trên sông và thưởng thức đặc sản miền Tây. Bến Ninh Kiều là địa điểm lý tưởng để ngắm cảnh sông Hậu và tận hưởng không khí yên bình. Thành phố còn có nhà cổ Bình Thủy với kiến trúc Đông – Tây hài hòa và làng du lịch Mỹ Khánh, nơi du khách có thể tham quan vườn trái cây, chèo xuồng ba lá và thưởng thức các món ăn dân dã như bánh tét lá cẩm và vịt nấu chao."
        img1={DaNang1}
        img2={DaNang2}
      />

      <DestionationData
        className="first-des-reverse"
        heading="Cà Mau, Việt Nam"
        text="Cà Mau – mảnh đất tận cùng của Tổ quốc, nổi tiếng với cảnh quan thiên nhiên hoang sơ và hệ sinh thái rừng ngập mặn rộng lớn. Biểu tượng của vùng đất này là Mũi Cà Mau, nơi du khách có thể đặt chân lên cột mốc tọa độ quốc gia và chiêm ngưỡng khung cảnh biển trời bao la. Ngoài ra, vườn quốc gia U Minh Hạ cũng là điểm đến hấp dẫn với hệ sinh thái rừng tràm phong phú, thích hợp cho những ai yêu thiên nhiên và thích khám phá. Thành phố Cà Mau còn có hòn Đá Bạc, một cụm đảo đá granit kỳ thú giữa biển, gắn liền với nhiều truyền thuyết dân gian. Đến Cà Mau, du khách không thể bỏ qua các món đặc sản như ba khía muối, lẩu mắm U Minh và cua Cà Mau, nổi tiếng với thịt chắc, ngọt đậm đà."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
