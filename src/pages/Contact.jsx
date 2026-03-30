import { React, useState } from "react";
import { useToast } from "@chakra-ui/react";
import {
	FaPhone,
	FaEnvelope,
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaMapMarker,
	FaPaperPlane,
	FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import WhatsappChat from "../components/Whatsapp/Index";

const Contact = () => {
	const toast = useToast();
	const [isSubmitting, setIsSubmitting] = useState(false);
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

		setIsSubmitting(true);

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (data.success) {
				toast({
					title: "Message Sent!",
					description: "Thank you for contacting us. We'll get back to you soon.",
					status: "success",
					duration: 5000,
					isClosable: true,
				});
				// Reset form
				setFormData({
					name: "",
					email: "",
					phone: "",
					subject: "",
					message: "",
				});
			} else {
				toast({
					title: "Error",
					description: data.error || "Failed to send message. Please try again.",
					status: "error",
					duration: 5000,
					isClosable: true,
				});
			}
		} catch (error) {
			console.error('Error sending message:', error);
			toast({
				title: "Error",
				description: "Failed to send message. Please try again later.",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			<Navbar />
			
			{/* Main Content */}
			<div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
				<section className="relative bg-gradient-to-r from-green-800 to-purple-800 py-20 px-4">
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
					<div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"></div>
					<div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
				</div>
				<div className="max-w-4xl mx-auto text-center relative z-10">
					<h1 className="text-4xl md:text-6xl font-bold text-white my-4">
						Let's Start a <span className="text-green-300">Conversation</span>
					</h1>
					<p className="text-xl text-white/90 max-w-2xl mx-auto">
						We'd love to hear from you. Send us a message and we'll respond as soon as possible.
					</p>
				</div>
			</section>
				

				{/* Contact Section */}
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 -mt-12">
					<div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
						
						{/* Contact Info Cards - Second on mobile, left side on desktop */}
						<div className="lg:col-span-2 space-y-5 order-2 lg:order-1">
							{/* Phone Card */}
							<div className="group bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl hover:border-emerald-200 transition-all duration-500 hover:-translate-y-1">
								<div className="flex items-start gap-4">
									<div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
										<FaPhone className="text-white text-lg" />
									</div>
									<div className="flex-1">
										<h3 className="font-bold text-gray-900 text-lg mb-1">Phone</h3>
										<p className="text-gray-500 text-sm mb-3">Mon-Fri from 8am to 5pm</p>
										<a href="tel:+2348034498307" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors inline-flex items-center gap-1 group-hover:gap-2">
											+234 803 4498 307
											<span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
										</a>
									</div>
								</div>
							</div>

							{/* Email Card */}
							<div className="group bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl hover:border-purple-200 transition-all duration-500 hover:-translate-y-1">
								<div className="flex items-start gap-4">
									<div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
										<FaEnvelope className="text-white text-lg" />
									</div>
									<div className="flex-1">
										<h3 className="font-bold text-gray-900 text-lg mb-1">Email</h3>
										<p className="text-gray-500 text-sm mb-3">We'd love to hear from you</p>
										<a href="mailto:oladeni2008@yahoo.com" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors inline-flex items-center gap-1 group-hover:gap-2">
											oladeni2008@yahoo.com
											<span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
										</a>
									</div>
								</div>
							</div>

							{/* WhatsApp Card */}
							<div className="group bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl hover:border-green-200 transition-all duration-500 hover:-translate-y-1">
								<div className="flex items-start gap-4">
									<div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
										<FaWhatsapp className="text-white text-lg" />
									</div>
									<div className="flex-1">
										<h3 className="font-bold text-gray-900 text-lg mb-1">WhatsApp</h3>
										<p className="text-gray-500 text-sm mb-3">Quick chat anytime</p>
										<a 
											href="https://wa.me/2348034498307" 
											target="_blank"
											rel="noopener noreferrer"
											className="text-green-600 font-semibold hover:text-green-700 transition-colors inline-flex items-center gap-1 group-hover:gap-2"
										>
											Chat on WhatsApp
											<span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
										</a>
									</div>
								</div>
							</div>

							{/* Location Card */}
							<div className="group bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl hover:border-slate-200 transition-all duration-500 hover:-translate-y-1">
								<div className="flex items-start gap-4">
									<div className="w-14 h-14 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-slate-500/30 group-hover:scale-110 transition-transform duration-300">
										<FaMapMarker className="text-white text-lg" />
									</div>
									<div className="flex-1">
										<h3 className="font-bold text-gray-900 text-lg mb-1">Office</h3>
										<p className="text-gray-500 text-sm leading-relaxed">
											5, Adebayo Adekoya Street,<br />
											New Garage Bariga,<br />
											Lagos, Nigeria
										</p>
									</div>
								</div>
							</div>

							{/* Social Links */}
							<div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
								<h3 className="font-bold text-gray-900 text-lg mb-5">Follow Us</h3>
								<div className="flex gap-3">
									<a
										href="https://web.facebook.com/olusolaoladeniministries"
										target="_blank"
										rel="noopener noreferrer"
										className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1"
										aria-label="Facebook"
									>
										<FaFacebook className="text-lg" />
									</a>
									<a
										href="https://instagram.com/olusolaoladeni"
										target="_blank"
										rel="noopener noreferrer"
										className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-xl flex items-center justify-center hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 hover:-translate-y-1"
										aria-label="Instagram"
									>
										<FaInstagram className="text-lg" />
									</a>
									<a
										href="https://twitter.com/oladenisola"
										target="_blank"
										rel="noopener noreferrer"
										className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-500 text-white rounded-xl flex items-center justify-center hover:from-sky-500 hover:to-sky-600 transition-all duration-300 shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 hover:-translate-y-1"
										aria-label="Twitter"
									>
										<FaTwitter className="text-lg" />
									</a>
									<a
										href="https://wa.me/2348034498307"
										target="_blank"
										rel="noopener noreferrer"
										className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-xl flex items-center justify-center hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:-translate-y-1"
										aria-label="WhatsApp"
									>
										<FaWhatsapp className="text-lg" />
									</a>
								</div>
							</div>
						</div>

						{/* Contact Form - First on mobile, right side on desktop */}
						<div className="lg:col-span-3 order-1 lg:order-2">
							<div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 relative overflow-hidden">
								{/* Decorative corner */}
								<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-bl-full"></div>
								<div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-tr-full"></div>
								
								<div className="relative">
									<div className="mb-8">
										<h2 className="text-3xl font-bold text-gray-900 mb-3">Send us a Message</h2>
										<p className="text-gray-500 text-lg">Fill out the form below and we'll get back to you within 24 hours.</p>
									</div>
									
									<form onSubmit={handleSubmit} className="space-y-6">
										<div className="grid md:grid-cols-2 gap-6">
											{/* Name */}
											<div className="group">
												<label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-emerald-600 transition-colors">
													Full Name <span className="text-red-500">*</span>
												</label>
												<input
													type="text"
													id="name"
													name="name"
													value={formData.name}
													onChange={handleChange}
													required
													className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300"
													placeholder="John Doe"
												/>
											</div>

											{/* Email */}
											<div className="group">
												<label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-emerald-600 transition-colors">
													Email Address <span className="text-red-500">*</span>
												</label>
												<input
													type="email"
													id="email"
													name="email"
													value={formData.email}
													onChange={handleChange}
													required
													className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300"
													placeholder="john@example.com"
												/>
											</div>
										</div>

										<div className="grid md:grid-cols-2 gap-6">
											{/* Phone */}
											<div className="group">
												<label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-emerald-600 transition-colors">
													Phone Number
												</label>
												<input
													type="tel"
													id="phone"
													name="phone"
													value={formData.phone}
													onChange={handleChange}
													className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300"
													placeholder="+234 800 000 0000"
												/>
											</div>

											{/* Subject */}
											<div className="group">
												<label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-emerald-600 transition-colors">
													Subject
												</label>
												<select
													id="subject"
													name="subject"
													value={formData.subject}
													onChange={handleChange}
													className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 appearance-none cursor-pointer"
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
										<div className="group">
											<label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-emerald-600 transition-colors">
												Message <span className="text-red-500">*</span>
											</label>
											<textarea
												id="message"
												name="message"
												value={formData.message}
												onChange={handleChange}
												required
												rows={6}
												className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-gray-300 resize-none"
												placeholder="Tell us how we can help you..."
											/>
										</div>

										{/* Submit Button */}
										<button
											type="submit"
											disabled={isSubmitting}
											className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
										>
											<FaPaperPlane className="text-lg" />
											{isSubmitting ? 'Sending...' : 'Send Message'}
										</button>
									</form>
								</div>
							</div>

							{/* Quick Actions */}
							<div className="mt-10 grid sm:grid-cols-2 gap-6">
								<Link
									to="/books"
									className="group relative bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 hover:from-purple-700 hover:via-purple-800 hover:to-pink-700 text-white p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
								>
									<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
									<div className="relative">
										<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
											<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
											</svg>
										</div>
										<h3 className="font-bold text-xl mb-2">Browse Our Books</h3>
										<p className="text-purple-100 text-sm leading-relaxed">Discover transformative books for your marriage and spiritual growth.</p>
									</div>
								</Link>
								<Link
									to="/articles"
									className="group relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
								>
									<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
									<div className="relative">
										<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
											<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
											</svg>
										</div>
										<h3 className="font-bold text-xl mb-2">Read Our Articles</h3>
										<p className="text-emerald-100 text-sm leading-relaxed">Explore insightful articles on marriage, relationships, and purpose.</p>
									</div>
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
