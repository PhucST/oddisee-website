import "./AboutUsStyles.css";
import logo from "../assets/Logo-Oddisee1.png";

function AboutUs() {
  return (
    <div className="about-container">
      <div className="first-content">
        <div className="logo-heading">
          <img alt="logo" src={logo}></img>
          <h1>ODDISEE – Travel and Food</h1>
        </div>
        <p>
          Chúng tôi tin rằng mỗi chuyến đi là một câu chuyện đáng nhớ. ODDISEE
          ra đời với mong muốn mang đến cho bạn những gợi ý du lịch độc đáo, từ
          những điểm đến nổi tiếng đến những nơi ít người biết nhưng đầy thú vị.
          Dù bạn là người yêu thích khám phá thiên nhiên, đam mê ẩm thực hay tìm
          kiếm những trải nghiệm văn hóa mới mẻ, chúng tôi luôn đồng hành cùng
          bạn.
        </p>
      </div>

      <div className="second-content">
        <h1>Giá trị cốt lõi:</h1>
        <div className="second-text">
          <i class="fa-solid fa-earth-americas" style={{ color: "blue" }}></i>
          <h3>Trải nghiệm chân thực</h3>
          <p>– Cung cấp thông tin chính xác, cập nhật từ nguồn đáng tin cậy.</p>
        </div>

        <div className="second-text">
          <i className="fa-solid fa-bullseye" style={{ color: "red" }}></i>
          <h3>Đa dạng & linh hoạt</h3>
          <p>– Gợi ý phù hợp với mọi phong cách du lịch và ngân sách.</p>
        </div>

        <div className="second-text">
          <i class="fa-solid fa-lightbulb"></i>
          <h3>Hữu ích & thực tế</h3>
          <p>
            – Chia sẻ kinh nghiệm, mẹo hay giúp bạn tận hưởng chuyến đi trọn
            vẹn.
          </p>
        </div>
      </div>

      <div className="third-content">
        <p>
          Chúng tôi trân trọng từng khoảnh khắc bạn đồng hành cùng ODDISEE. Cảm
          ơn bạn đã tin tưởng và lựa chọn chúng tôi làm người bạn đồng hành
          trong hành trình khám phá thế giới.
        </p>
        <div>
          <p>
            Hãy kết nối với chúng tôi để cập nhật những địa điểm thú vị và ưu
            đãi hấp dẫn:
          </p>
          <p style={{ color: "#1877F2", fontWeight: "700" }}>
            Facebook:{" "}
            <a href="https://web.facebook.com/oddiseeee">
              https://web.facebook.com/oddiseeee
            </a>
          </p>
        </div>
        <p>
          Hãy bắt đầu chuyến đi tiếp theo ngay hôm nay cùng ODDISEE – nơi cảm
          hứng du lịch của bạn được chắp cánh!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
