import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.jsx';
import Alert from '../components/myComponents/ALert.jsx';
import terminal from '../assets/terminal.png'
import { BsArrowUpRight } from 'react-icons/bs';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_p9enh9g',
        'template_ncopily',
        {
          from_name: form.name,
          to_name: 'srikar mara',
          from_email: form.email,
          to_email: 'srikarmara20@gmail.com',
          message: form.message,
        },
        'KMbL9UK8VALKsx5Eb'
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
      );
  };

  return (
    <section className="con sm:px-16 px-6 mt-20 mb-32 md:mt-20 md:mb-10 2xl:mb-20 bg-[#010103] sm:min-h-[1100px]" id="contact">
      {alert.show && <Alert {...alert} />}
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] sm:px-6 px-6">Contact me</h2>


      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src={terminal} alt="terminal-bg" className="absolute inset-0 min-h-screen max-2xl:min-h-[900px] max-sm:min-h-[950px]" />

        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex.,  srikar "
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex.,    srikar@gmail.com"
              /> 
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <BsArrowUpRight size={17}/>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;