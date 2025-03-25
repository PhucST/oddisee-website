import "./CardStyles.css";
import { MenuHotel } from "./MenuHotel";
import CardData from "./CardData";
import { ratio } from "fuzzball"; // Sửa import: sử dụng named import

function Card({ searchData }) {
  const filteredHotels = MenuHotel.filter((trip) => {
    // Lọc theo địa điểm (sử dụng fuzzy search)
    let matchesLocation = true;
    if (searchData.location !== "") {
      // Chuẩn hóa chuỗi: loại bỏ dấu tiếng Việt và chuyển thành chữ thường
      const normalizeString = (str) => {
        return str
          .normalize("NFD") // Chuẩn hóa Unicode (tách dấu)
          .replace(/[\u0300-\u036f]/g, "") // Loại bỏ dấu
          .toLowerCase();
      };

      const normalizedSearchLocation = normalizeString(searchData.location);
      const normalizedTripLocation = normalizeString(trip.location);

      // Tính độ tương đồng bằng fuzzball
      const similarityScore = ratio(
        normalizedSearchLocation,
        normalizedTripLocation
      );

      // Nếu độ tương đồng >= 70, coi như khớp
      matchesLocation = similarityScore >= 55;
    }

    // Lọc theo số lượng khách
    const guestCount = parseInt(searchData.guests.split(" ")[0]); // Lấy số từ "1 guest", "2 guests", v.v.
    const maxGuests = parseInt(trip.guests.split(" ")[0]); // Lấy số từ "4 guests", v.v.
    const matchesGuests = guestCount <= maxGuests;

    // Lọc theo đánh giá tối thiểu
    const matchesReview = parseFloat(trip.review) >= parseFloat(searchData.minReview);

    // Trả về true nếu tất cả tiêu chí đều khớp
    return matchesLocation && matchesGuests && matchesReview;
  });

  return (
    <div className="card">
      <div className="chilcard">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((trip, index) => (
            <CardData
              key={index}
              image={trip.image}
              heading={trip.nameHotel}
              text={trip.overView}
              price={trip.price}
              location={trip.location}
              review={trip.review}
              textReview={trip.textReview}
              numReview={trip.numReview}
              detailLocation={trip.detailLocation}
              url={trip.url}
            />
          ))
        ) : (
          <p>No hotels found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}

export default Card;