import { React, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useForm, ValidationError } from "@formspree/react";
import {
	FaPhone,
	FaEnvelope,
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaMapMarker,
	FaPaperPlane,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import WhatsappChat from "../components/Whatsapp/Index";

const Contact = () => {
	const toast = useToast();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		// Basic validation
		if (!formData.name || !formData.email || !formData.message) {
			toast({
				title: "Please fill in required fields",
				description: "Name, email and message are required.",
				status: "warning",
				duration: 3000,
				isClosable: true,
			});
			return;
		}

		toast({
			title: "Message Sent!",
			description: "Thank you for contacting us. We'll get back to you soon.",
			status: "success",
			duration: 5000,
			isClosable: true,
		});
	};

	// eslint-disable-next-line no-unused-vars
  const [state, _formSubmit] = useForm("xbjvqnvz");
	if (state.succeeded) {
		toast({
			title: "Thank you!",
			description: "Your message has been sent successfully.",
			status: "success",
			duration: 5000,
			isClosable: true,
		});
	}

	return (
		<>
			<Navbar />
			
			{/* Main Content */}
			<div className="min-h-screen bg-white">
				{/* Page Header */}
				<div className="bg-gradient-to-r from-green-800 to-purple-800 py-20 pb-10 md:pt-25">
					<div className="absolute inset-0 overflow-hidden">
					<div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
					<div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"></div>
					<div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
				</div>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
							Get In Touch
						</h1>
						<p className="text-green-100 text-lg md:text-xl max-w-2xl mx-auto">
							We'd love to hear from you. Send us a message and we'll respond as soon as possible.
						</p>
					</div>
				</div>

				{/* Contact Section */}
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 -mt-8">
					<div className="grid lg:grid-cols-3 gap-8">
						
						{/* Contact Info Cards - Second on mobile, left side on desktop */}
						<div className="lg:col-span-1 space-y-6 order-2 lg:order-1">
							{/* Phone Card */}
							<div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
										<FaPhone className="text-green-600" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
										<p className="text-gray-600 text-sm mb-2">Mon-Fri from 8am to 5pm</p>
										<a href="tel:+2348034498307" className="text-green-600 font-medium hover:text-green-700">
											+234 803 4498 307
										</a>
									</div>
								</div>
							</div>

							{/* Email Card */}
							<div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
										<FaEnvelope className="text-purple-600" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-900 mb-1">Email</h3>
										<p className="text-gray-600 text-sm mb-2">We'd love to hear from you</p>
										<a href="mailto:oladeni2008@yahoo.com" className="text-purple-600 font-medium hover:text-purple-700">
											oladeni2008@yahoo.com
										</a>
									</div>
								</div>
							</div>

							{/* WhatsApp Card */}
							<div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
										<FaPhone className="text-white" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
										<p className="text-gray-600 text-sm mb-2">Quick chat anytime</p>
										<a 
											href="https://wa.me/2348034498307" 
											target="_blank"
											rel="noopener noreferrer"
											className="text-green-600 font-medium hover:text-green-700"
										>
											Chat on WhatsApp
										</a>
									</div>
								</div>
							</div>

							{/* Location Card */}
							<div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
										<FaMapMarker className="text-gray-600" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-900 mb-1">Office</h3>
										<p className="text-gray-600 text-sm">
											5, Adebayo Adekoya Street,<br />
											New Garage Bariga,<br />
											Lagos, Nigeria
										</p>
									</div>
								</div>
							</div>

							{/* Social Links */}
							<div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
								<h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
								<div className="flex gap-3">
									<a
										href="https://web.facebook.com/olusolaoladeniministries"
										target="_blank"
										rel="noopener noreferrer"
										className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
										aria-label="Facebook"
									>
										<FaFacebook />
									</a>
									<a
										href="https://instagram.com/olusola_oladeni"
										target="_blank"
										rel="noopener noreferrer"
										className="w-10 h-10 bg-pink-600 text-white rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors"
										aria-label="Instagram"
									>
										<FaInstagram />
									</a>
									<a
										href="https://twitter.com/olusola_oladeni"
										target="_blank"
										rel="noopener noreferrer"
										className="w-10 h-10 bg-sky-500 text-white rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors"
										aria-label="Twitter"
									>
										<FaTwitter />
									</a>
									<a
										href="https://wa.me/2348034498307"
										target="_blank"
										rel="noopener noreferrer"
										className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
										aria-label="WhatsApp"
									>
										<FaPhone />
									</a>
								</div>
							</div>
						</div>

						{/* Contact Form - First on mobile, right side on desktop */}
						<div className="lg:col-span-2 order-1 lg:order-2">
							<div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
								<h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
								<p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
								
								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid md:grid-cols-2 gap-6">
										{/* Name */}
										<div>
											<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
												Full Name <span className="text-red-500">*</span>
											</label>
											<input
												type="text"
												id="name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												required
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
												placeholder="John Doe"
											/>
										</div>

										{/* Email */}
										<div>
											<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
												Email Address <span className="text-red-500">*</span>
											</label>
											<input
												type="email"
												id="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												required
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
												placeholder="john@example.com"
											/>
											<ValidationError prefix="Email" field="email" errors={state.errors} />
										</div>
									</div>

									<div className="grid md:grid-cols-2 gap-6">
										{/* Phone */}
										<div>
											<label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
												Phone Number
											</label>
											<input
												type="tel"
												id="phone"
												name="phone"
												value={formData.phone}
												onChange={handleChange}
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
												placeholder="+234 800 000 0000"
											/>
										</div>

										{/* Subject */}
										<div>
											<label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
												Subject
											</label>
											<select
												id="subject"
												name="subject"
												value={formData.subject}
												onChange={handleChange}
												className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
											>
												<option value="">Select a subject</option>
												<option value="counseling">Marriage Counseling</option>
												<option value="booking">Book a Session</option>
												<option value="testimony">Share Testimony</option>
												<option value="prayer">Prayer Request</option>
												<option value="partnership">Partnership</option>
												<option value="other">Other</option>
											</select>
										</div>
									</div>

									{/* Message */}
									<div>
										<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
											Message <span className="text-red-500">*</span>
										</label>
										<textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleChange}
											required
											rows={6}
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
											placeholder="Tell us how we can help you..."
										/>
									</div>

									{/* Submit Button */}
									<button
										type="submit"
										disabled={state.submitting}
										className="w-full md:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
									>
										<FaPaperPlane className="text-sm" />
										{state.submitting ? 'Sending...' : 'Send Message'}
									</button>
								</form>
							</div>

							{/* Quick Actions */}
							<div className="mt-8 grid sm:grid-cols-2 gap-4">
								<Link
									to="/books"
									className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
								>
									<h3 className="font-bold text-lg mb-1">Browse Our Books</h3>
									<p className="text-purple-100 text-sm">Discover transformative books for your marriage and spiritual growth.</p>
								</Link>
								<Link
									to="/articles"
									className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
								>
									<h3 className="font-bold text-lg mb-1">Read Our Articles</h3>
									<p className="text-green-100 text-sm">Explore insightful articles on marriage, relationships, and purpose.</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<WhatsappChat />
			<Footer />
		</>
	);

}
export default Contact
