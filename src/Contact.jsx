import "./Contact.css"
function ContactMen() {
  return (
<div className="contact-container">
      <h2 className="contact-title">📞 Aloqa</h2>
      <p className="contact-subtitle">Savollaringiz bo'lsa, bog'lanishingiz mumkin</p>

      <div className="contact-links">
        <a href="mailto:mirzobek@gmail.com" className="contact-item">
          <span>📧</span> Email: mirzobek@gmail.com
        </a>
        
        <a href="https://t.me/rzmtv_m" target="_blank" rel="noreferrer" className="contact-item">
          <span>✈️</span> Telegram:Mirzobek
        </a>

        <a href="tel:+998901234567" className="contact-item">
          <span>📞</span> Telefon: +998 90 123 45 67
        </a>
      </div>

      <div className="contact-footer">
        📍 O'zbekiston, Xorazm
      </div>
    </div>
  );
}

export default ContactMen;