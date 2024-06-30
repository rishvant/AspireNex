import { useRef, useState } from "react";
import "../styles/contact.css";
import Social from "./Social.jsx";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const form = useRef();
    const refName = useRef();
    const refEmail = useRef();
    const refMessage = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        const processingToastId = toast.info('Sending message...', { autoClose: false, closeOnClick: false });

        emailjs.sendForm('service_dzm66xb', 'template_oipbm6r', form.current, 'hKC2B78q_tnwFYM-W')
            .then((result) => {
                if (result.status === 200) {
                    refName.current.value = "";
                    refEmail.current.value = "";
                    refMessage.current.value = "";
                    showToast("Message sent successfully!", 'success');
                }
            })
            .catch((error) => {
                console.log(error.text);
                showToast('Error sending email. Please try again.', 'error');
            })
            .finally(() => {
                toast.dismiss(processingToastId);
                setLoading(false);
            });
    }

    const showToast = (message, type) => {
        toast(message, { type });
    };

    return (
        <>
            <section className="contact">
                <h1>Contact Me</h1>
                <div className="contact-container">
                    <div className="form-container">
                        <form ref={form} onSubmit={sendEmail} className="form">
                            <div className="form-group">
                                <label htmlFor="email">Your Name</label>
                                <input ref={refName} required name="user_name" id="email" type="text" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input ref={refEmail} required name="user_email" id="email" type="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="textarea">Your Message</label>
                                <textarea ref={refMessage} required cols="50" rows="10" id="textarea" name="message"></textarea>
                            </div>
                            <input type="submit" className="form-submit-btn" />
                        </form>
                    </div>
                    <Social></Social>
                </div>
            </section>
        </>
    )
}

export default Contact;