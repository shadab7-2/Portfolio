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
        "service_ytf3iit",
        "template_bf7tgd3",
        form.current,
        "usFl_8jBXZja5oMXo"
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
          <a href="tel:+91891385618" target="_blank">
            <FiPhoneCall />
            <div>+91 89213-85618</div>
          </a>
          <a href="mailto:prayashchhetri221@gmail.com" target="_blank">
            <MdEmail />
            <div>prayashchhetri221@gmail.com</div>
          </a>{" "}
          <a href="https://github.com/prayaschhetri1" target="_blank">
            <FaGithub />
            <div>Github</div>
          </a>
          <a
            href="https://www.linkedin.com/in/prayash-chhetri/"
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
