import CommentReviewData from "./CommentReviewData";
import AvatarBoy from "../assets/AvatarPNG.png";
import AvatarGirl from "../assets/AvatarPNGGirl.png";
import AvatarWoman from "../assets/AvatarPNGWoman.png";
import AvatarMan from "../assets/AvatarPNGMan.png";
import "./CommentReviewStyles.css";

function CommentReview() {
  const commentData = [
    {
      image: AvatarBoy,
      review: "5.0 - Very Good",
      name: "Trường Phúc",
      text: "Cơ sở vật chất hiện đại, có nét riêng đăng trưng của khách sạn La Mer. Tiện nghi thì khỏi bàn, đầy đủ hết mọi thứ mình cần, có cả bồn tắm bên cửa sổ view biển quá là ưng. Đồ tắm khăn tắm được chuẩn bị đầy đủ, sạch sẽ, trước đây mình hay tự mang khăn tắm ở nhà đi nhưng đến đây thấy khăn tắm khách sạn chuẩn bị thơm tho mềm mại nên cũng dùng luôn. Lại được thay mới giặt ngày hôm sau. Không gian thoáng đãng, sạch sẽ, mình thâý các cô các chị rất chú ý dọn vệ sinh thường xuyên. Nhân viên lễ tân thì dễ thương, thân thiện, mình checkin sáng sớm vẫn thoải mái tiếp đón.",
    },
    {
      image: AvatarGirl,
      review: "4.0 - Good",
      name: "Cẩm Hoa",
      text: "Vị trí ks trên con dốc lên cáp treo, kế bến xe rất thuận lợi. Phòng ốc cổ điển, cảnh quan tuyệt vời. Tôn trọng sự riêng tư. Thoải mái. Tiện nghi sinh hoạt chỉ cơ bản nhưng không thành vấn đề. Giá cả khá hợp lý.",
    },
    {
      image: AvatarWoman,
      review: "2.9 - Average",
      name: "Phạm Tiên",
      text: "Phòng rất thoải mái, sạch sẽ và đầy đủ tiện nghi, chú bảo vệ rất thân thiện và nhiệt tình. Xung quanh nhiều quán ăn, và cũng khá gần chợ.",
    },
    {
      image: AvatarMan,
      review: "1.8 - Poor",
      name: "Minh Trần",
      text: "Mình có trải nghiệm ko tốt từ phía chủ cho thuê, lúc mình đặt báo phụ phí thêm 1 tiếng là 30k, mà tới lúc mình checkin rồi thì lại báo giá 50k 1 tiếng, lại còn là thứ 2 đầu tuần :( . Mong anh chủ nhất quán 1 giá nhé ạ!",
    },
    {
      image: AvatarBoy,
      review: "4.8 - Very Good",
      name: "Hòa Phát",
      text: "Gần chợ, con đường ăn uống phòng sạch sẽ, thơm tho, mùa lạnh có chăn bông thêm, đầy đủ vật dụng vệ sinh, đối với mình là ok an ninh tốt chủ cho thuê hướng dẫn đầy đủ chi tiết.",
    },
  ];

  return (
    <div>
      <div>
        {commentData.map((comment, index) => (
          <CommentReviewData
            key={index}
            image={comment.image}
            review={comment.review}
            name={comment.name}
            text={comment.text}
          />
        ))}
      </div>
    </div>
  );
}

export default CommentReview;
