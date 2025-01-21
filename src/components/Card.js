import "./CardStyles.css";
import CardData from "./CardData";
import KS1 from "../assets/ks1.webp";
import KS2 from "../assets/ks2.jpg";
import KS3 from "../assets/KS3.jpg";
import KS4 from "../assets/KS4.jpg";
import KS5 from "../assets/KS5.jpg";

function Card() {
  const tripData = [
    {
      image: KS1,
      heading: "La Vela Saigon Hotel",
      text: "Nằm ở TP. Hồ Chí Minh, cách Chợ Tân Định 8 phút đi bộ, La Vela Saigon Hotel cung cấp chỗ nghỉ có hồ bơi ngoài trời, chỗ đậu xe riêng miễn phí, trung tâm thể dục và phòng chờ chung. Ngoài Wi-Fi miễn phí, khách sạn 5 sao này còn cung cấp dịch vụ phòng và quầy lễ tân 24 giờ. Khách sạn có sân hiên và nhìn ra thành phố, ngoài ra du khách có thể thưởng thức bữa ăn tại nhà hàng hoặc đồ uống tại quầy bar.",
      price: "219",
      location: "Hồ Chí Minh",
      detailLocation: "280 Nam Ky Khoi Nghia, Ward 8, District 3, Quận 3, TP. Hồ Chí Minh, Việt Nam",
      review: "4.8",
      textReview: "Very Good",
      numReview: "817",
    },
    {
      image: KS2,
      heading: "22 Homestay Đà Lạt",
      text: "Tọa lạc ở Đà Lạt và cách Vườn hoa Đà Lạt 4.4 km, 22 Homestay Đà Lạt - A Member Of Nhà Sói có khu vườn, các phòng không hút thuốc và Wi-Fi miễn phí. Chỗ nghỉ cách Hồ Xuân Hương khoảng 4.8 km, Công viên Yersin 4.8 km và Quảng trường Lâm Viên 5 km. Thiền Viện Trúc Lâm cách khách sạn 11 km và Núi Lang Bian 22 km. Tất cả các căn ở khách sạn được trang bị ấm đun nước. Mỗi phòng đều được thiết kế có điều hòa và TV màn hình phẳng, ngoài ra một số căn tại 22 Homestay Đà Lạt - A Member Of Nhà Sói có ban công. Phòng khách có ga trải giường.",
      price: "120",
      location: "Đà Lạt",
      detailLocation: "22 Đường Nam Hồ, 66100 Đà Lạt, Việt Nam",
      review: "3.7",
      textReview: "Good",
      numReview: "36",
    },
    {
      image: KS3,
      heading: "Nesta Hotel",
      text: "Nằm ở thành phố Cần Thơ, dọc theo Sông Hậu, Nesta Hotel Can Tho có nhà hàng. Truy cập Wi-Fi được cung cấp miễn phí trong toàn bộ khách sạn. Được trang trí độc đáo, mỗi phòng nghỉ ở đây đều có truyền hình cáp màn hình phẳng, máy lạnh và minibar. Ngoài ra còn được trang bị ấm đun nước điện. Phòng tắm riêng đi kèm máy sấy tóc, đồ vệ sinh cá nhân miễn phí và dép. Một số phòng nhìn ra quang cảnh Sông Hậu hoặc thành phố. Nesta Hotel Can Tho có lễ tân 24 giờ, khu vườn và quầy bar. Dịch vụ đặt vé và chỗ để hành lý cũng nằm trong số các tiện ích ở đây. Khách sạn còn cung cấp chỗ đỗ xe miễn phí.",
      price: "199",
      location: "Cần Thơ",
      detailLocation: "9C Tran Phu, Cần Thơ, Việt Nam",
      review: "3.5",
      textReview: "Good",
      numReview: "100",
    },
    {
      image: KS4,
      heading: "Le Pont Mu Waterfall",
      text: "Nằm ở Ải Hạ, Le Pont Mu Waterfall Homestay có khu vườn, nhà hàng, quầy bar, cùng Wi-Fi miễn phí ở toàn bộ chỗ nghỉ. Chỗ nghỉ này cung cấp dịch vụ phòng và quầy lễ tân 24 giờ cho khách. Tất cả các phòng ở khách sạn được trang bị ấm đun nước. Các phòng đều có phòng tắm riêng với vòi xịt/chậu rửa vệ sinh, đồ vệ sinh cá nhân miễn phí và máy sấy tóc. Tại Le Pont Mu Waterfall Homestay, mỗi phòng đều được thiết kế có ga trải giường và khăn tắm. Sân bay gần nhất là Sân bay Thọ Xuân, cách chỗ nghỉ 99 km.",
      price: "139",
      location: "Ải Hạ",
      detailLocation: "Xã Tự Do, huyện Lạc Sơn, tỉnh Hòa Bình, Ải Hạ, Việt Nam",
      review: "4.2",
      textReview: "Very Good",
      numReview: "13",
    },
    {
      image: KS5,
      heading: "Vinpearl Resort & Spa",
      text: "Chào đón du khách với kiến trúc mái ngói đỏ tươi đậm chất Đông Dương và hồ bơi ngoài trời rộng gần 5.000m2 ôm trọn khuôn viên khu nghỉ dưỡng, Vinpearl Resort & Spa Phu Quoc mang đến hành trình trải nghiệm ngập tràn hương sắc thiên nhiên đặc trưng của đảo ngọc. Du khách có thể vừa dạo bước trên bãi biển vừa ngắm “bữa tiệc ánh sáng” rực rỡ phía chân trời, cảm giác sảng khoái và hạ nhiệt ngay lập tức khi đặt chân vào khuôn viên xanh mát nơi đây sau một ngày dài khám phá hay thả mình trên chiếc ghế lười xem một bộ phim yêu thích của gia đình tại rạp chiếu phim trên bãi biển. Những trải nghiệm không thể bỏ qua tại đây bao gồm thưởng thức tiệc buffet hải sản với nhạc sống và ngắm cảnh hoàng hôn tuyệt đẹp tại nhà hàng Pepper bên bờ biển cũng như tận hưởng liệu pháp mát-xa kiểu Bali độc đáo tại túp lều spa giữa khung cảnh yên bình. Vinpearl Resort & Spa Phu Quoc cung cấp chỗ nghỉ hiện đại và sang trọng với Wi-Fi miễn phí trong toàn bộ khuôn viên và hồ bơi ngoài trời cũng như khu vực bãi biển riêng. Chỗ nghỉ này có lễ tân 24 giờ, dịch vụ văn phòng và tiện nghi tổ chức tiệc/hội họp.",
      price: "291",
      location: "Phú Quốc",
      detailLocation: "Bai Dai, Ganh Dau, Ganh Dau, Phú Quốc, Việt Nam",
      review: "4.6",
      textReview: "Very Good",
      numReview: "893",
    },
  ];

  return (
    <div className="trip">
      <div className="tripcard">
        {tripData.map((trip, index) => (
          <CardData
            key={index}
            image={trip.image}
            heading={trip.heading}
            text={trip.text}
            price={trip.price}
            location={trip.location}
            review={trip.review}
            textReview={trip.textReview}
            numReview={trip.numReview}
            detailLocation={trip.detailLocation}
          />
        ))}
      </div>
    </div>
  );
}

export default Card;
