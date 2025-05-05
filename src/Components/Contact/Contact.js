import React from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_c4z132r',  // Buraya kendi Service ID'nizi girin
      'template_s5ay9yu', // Buraya kendi Template ID'nizi girin
      e.target,
      'RSOxcYxtWvRHAznrN'      // Buraya kendi User ID'nizi (API key) girin
    ).then((result) => {
      console.log(result.text);
      alert('Mesaj başarıyla gönderildi!');
    }, (error) => {
      console.log(error.text);
      alert('Mesaj gönderilirken bir hata oluştu.');
    });

    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <h2>İletişim</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <i className="fas fa-user"></i>
          <input type="text" id="name" name="name" placeholder="Adınız" required />
        </div>
        
        <div className="form-field">
          <i className="fas fa-envelope"></i>
          <input type="email" id="email" name="email" placeholder="E-posta adresiniz" required />
        </div>
        
        <div className="form-field">
          <i className="fas fa-comment-alt"></i>
          <textarea id="message" name="message" rows="4" placeholder="Mesajınızı yazın" required></textarea>
        </div>
        
        <button type="submit">Gönder</button>
      </form>
    </section>
  );
}

export default Contact;
