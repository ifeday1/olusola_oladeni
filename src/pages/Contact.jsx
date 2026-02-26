import { React, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useForm, ValidationError } from "@formspree/react";
import {
	FaPhone,
	FaEnvelope,
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaTiktok,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import WhatsappChat from "../components/Whatsapp/Index";
import "./Contact.css";

const Contact = () => {
	const toast = useToast();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const showToast = () => {
		if (!formData.name || !formData.email || !formData.message) {
			toast({
				title: "Fill empty fields",
				status: "warning",
				duration: 3000,
				isClosable: true,
			});
		} else {
			toast({
				title: "Sent",
				description: "Your message has been sent successfully.",
				status: "success",
				duration: 5000,
				isClosable: true,
			});
		}
	};
	const [state, handleSubmit] = useForm("xbjvqnvz");
	if (state.succeeded) {
	}

	return (
		<>
			<Navbar />
			<div className="contact-page">
				<div className="contact-hero">
					{/* Overlay */}
					<div className="contact-overlay"></div>

					{/* Content */}
					<div className="contact-content">
						{/* Header */}
						<div className="contact-header">
							<h1 className="contact-title">CONTACT US</h1>
						</div>

						{/* Grid */}
						<div className="contact-grid">
							{/* Contact Info */}
							<div className="contact-info-box">
								<h2 className="contact-info-title">
									I WOULD LOVE TO HEAR FROM YOU
								</h2>
								<p className="contact-info-text">
									Welcome to my contact information page. If you
									would like to send me a message, you can use
									the form. God bless you.
								</p>

								<div className="contact-details">
									<p className="contact-details-title">
										REACH ME THROUGH
									</p>
									<div className="contact-btn-group">
										<div className="contact-btn-item">
											<button
												className="contact-icon-btn"
												onClick={() =>
													window.open("tel:+2348034498307")
												}
												aria-label="Phone"
											>
												<FaPhone />
											</button>
											<span className="contact-btn-text">
												08034498307
											</span>
										</div>
										<div className="contact-btn-item">
											<button
												className="contact-icon-btn"
												onClick={() =>
													window.open(
														"mailto:oladeni2008@yahoo.com"
													)
												}
												aria-label="Email"
											>
												<FaEnvelope />
											</button>
											<span className="contact-btn-text">
												oladeni2008@yahoo.com
											</span>
										</div>
									</div>
								</div>

								{/* Social Networks */}
								<p className="social-section-title">
									SOCIAL NETWORKS
								</p>
								<div className="social-links">
									<a
										href="https://www.facebook.com"
										target="_blank"
										rel="noopener noreferrer"
										className="social-link"
										aria-label="Facebook"
									>
										<FaFacebook />
									</a>
									<a
										href="https://www.instagram.com"
										target="_blank"
										rel="noopener noreferrer"
										className="social-link"
										aria-label="Instagram"
									>
										<FaInstagram />
									</a>
									<a
										href="https://twitter.com"
										target="_blank"
										rel="noopener noreferrer"
										className="social-link"
										aria-label="Twitter"
									>
										<FaTwitter />
									</a>
									<a
										href="https://www.tiktok.com"
										target="_blank"
										rel="noopener noreferrer"
										className="social-link"
										aria-label="TikTok"
									>
										<FaTiktok />
									</a>
								</div>
							</div>

							{/* Contact Form */}
							<div className="contact-form-box">
								<h2 className="contact-form-title">
									Send Us A Message
								</h2>
								<form
									className="contact-form"
									action="https://formspree.io/f/xbjvqnvz"
									method="POST"
									onSubmit={handleSubmit}
									onClick={showToast}
								>
									<div className="form-field">
										<label className="form-label">
											Name
										</label>
										<input
											type="text"
											name="name"
											value={formData.name}
											onChange={handleChange}
											className="form-input"
											placeholder="Your name"
										/>
									</div>
									<ValidationError
										prefix="Email"
										field="email"
										errors={state.errors}
									/>
									<div className="form-field">
										<label className="form-label">
											Email
										</label>
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											className="form-input"
											placeholder="Your email"
										/>
									</div>
									<div className="form-field">
										<label className="form-label">
											Phone Number
										</label>
										<input
											type="tel"
											name="phone"
											value={formData.phone}
											onChange={handleChange}
											className="form-input"
											placeholder="Your phone number"
										/>
									</div>
									<div className="form-field">
										<label className="form-label">
											Message (Testimony, Prayer
											request...)
										</label>
										<textarea
											name="message"
											value={formData.message}
											onChange={handleChange}
											className="form-textarea"
											placeholder="Your message"
										/>
									</div>
									<button
										type="submit"
										className="btn-submit"
										disabled={state.submitting}
									>
										Submit
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<WhatsappChat />
			<Footer />
		</>
	);
};

export default Contact;
