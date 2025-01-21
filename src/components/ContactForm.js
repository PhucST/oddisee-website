import { useState } from "react";
import "./ContactFormStyles.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Xử lý khi người dùng nhập vào input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Xử lý khi người dùng gửi form
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Send successfully!");
    console.log("Dữ liệu đã gửi:", formData);
    
    // Reset form sau khi gửi
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="from-container">
      <h1>Send a message to us!</h1>
      <form onSubmit={handleSubmit}>
        <input 
          name="name"
          placeholder="Name" 
          value={formData.name} 
          onChange={handleChange}
        />
        <input 
          name="email"
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange}
        />
        <input 
          name="subject"
          placeholder="Subject" 
          value={formData.subject} 
          onChange={handleChange}
        />
        <textarea 
          name="message"
          placeholder="Message" 
          rows="4" 
          value={formData.message} 
          onChange={handleChange}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
