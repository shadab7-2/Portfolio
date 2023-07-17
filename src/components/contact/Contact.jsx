import React from "react";
import "./Contact.css";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const [emailForm, setEmailForm] = useState({
    user_name: "",
    user_email: "",
    message: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailForm({ ...emailForm, [name]: value });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(form.current)
    notify();
    emailjs
      .sendForm(
        "service_tk3xamf",
        "template_egflj0c",
        form.current,
        "-nqSAXNzirnYsrj3b"
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
          setEmailForm({
            user_name: "",
            user_email: "",
            message: "",
            subject: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const notify = () => toast("Thank You! for your valuable message🤗");

  return (
    <div id="contact" className="cnt-main-cont">
      <div className="skl-cont-header">contact</div>
      <div className="cnt-main-inner-cont">
        <div className="cnt-main-inner-flx-cont cnt-left-inner">
          <form
            action=""
            className="cnt-main-inner-form-cont"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              value={emailForm.user_name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              value={emailForm.user_email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={emailForm.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="8"
              placeholder="Message..."
              value={emailForm.message}
              onChange={handleChange}
              required
            ></textarea>
            <input type="submit" className="btn form-btn" />
          <ToastContainer />
          </form>

        </div>

        <div className="cnt-main-inner-flx-cont cnt-right-inner">
          <a href="tel:+7860629374" target="_blank">
            <FiPhoneCall />
            <div>+91 7860629374</div>
          </a>
          <a href="mailto:sahdabansari972@gmail.com" target="_blank">
            <MdEmail />
            <div>sahdabansari972@gmail.com</div>
          </a>{" "}
          <a href="https://github.com/shadab7-2" target="_blank">
            <FaGithub />
            <div>Github</div>
          </a>
          <a
            href="http://linkedin.com/in/sahdabansari972"
            target="_blank"
          >
            <FaLinkedin />
            <div>LinkedIn</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
