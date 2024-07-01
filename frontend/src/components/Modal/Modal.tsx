// src/components/Modal.tsx
import React, { useState } from 'react';
import './Modal.css';
import axios from 'axios';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailData = {
      to: 'businessowner@example.com', // Replace with the business owner's email
      subject: 'New Message from Website',
      body: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    };
    try {
      await axios.post('http://localhost:5000/send-email', emailData);
      console.log('Email sent successfully');
      onClose();
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        <form className="modal-form" onSubmit={handleSubmit}>
          <h2>Send us a message</h2>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange} required />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
