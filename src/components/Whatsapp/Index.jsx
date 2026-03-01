
import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes, FaCommentDots } from "react-icons/fa";

const WhatsappChat = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [showPulse, setShowPulse] = useState(true);

	// Stop pulse animation after first interaction
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowPulse(false);
		}, 5000);
		return () => clearTimeout(timer);
	}, []);

	function goToWhatsapp() {
		var WhatsAppUrl = "https://web.whatsapp.com/send";

		if (
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent,
			)
		) {
			WhatsAppUrl = "https://api.whatsapp.com/send";
		}

		var url = WhatsAppUrl + "?phone=+23408034498307";
		var win = window.open(url, "_blank");
		win.focus();
	}

	const toggleChat = () => {
		setIsOpen(!isOpen);
		setShowPulse(false);
	};

	return (
		<div className="fixed bottom-6 right-6 z-50">
			{/* Chat Window */}
			<div className={`absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 transform ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"}`}>
				<div className="bg-green-500 p-4 flex justify-between items-center">
					<div className="flex items-center gap-3">
						<FaWhatsapp className="text-white text-xl" />
						<div>
							<h4 className="text-white font-semibold text-sm">Chat with us</h4>
							<span className="text-green-100 text-xs">We typically reply within minutes</span>
						</div>
					</div>
					<button className="text-white hover:bg-green-600 p-1 rounded" onClick={toggleChat}>
						<FaTimes />
					</button>
				</div>
				<div className="p-4 bg-gray-50 min-h-[120px]">
					<div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
						<p className="text-gray-800 text-sm">Hello! 👋</p>
						<span className="text-gray-500 text-xs">How can we help you today?</span>
					</div>
				</div>
				<div className="p-3 bg-white border-t">
					<button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors" onClick={goToWhatsapp}>
						<FaCommentDots />
						Start Conversation
					</button>
				</div>
			</div>

			{/* Floating Button */}
			<button
				className={`w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${showPulse ? "animate-pulse" : ""}`}
				onClick={toggleChat}
				aria-label="Open WhatsApp Chat"
			>
				{isOpen ? (
					<FaTimes className="text-xl" />
				) : (
					<FaWhatsapp className="text-xl" />
				)}
			</button>

			{/* Tooltip */}
			{!isOpen && (
				<div className="absolute bottom-16 right-0 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap mb-2">
					<span>Questions?</span>
					<div className="absolute top-full right-4 border-4 border-transparent border-t-gray-800"></div>
				</div>
			)}
		</div>
	);
};


export default WhatsappChat;
export { WhatsappChat };
