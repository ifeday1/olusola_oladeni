import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes, FaCommentDots } from "react-icons/fa";
import "./Whatsapp.css";

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
		<div className="whatsapp-container">
			{/* Chat Window */}
			<div className={`whatsapp-chat-window ${isOpen ? "open" : ""}`}>
				<div className="chat-header">
					<div className="chat-header-info">
						<FaWhatsapp className="header-icon" />
						<div>
							<h4>Chat with us</h4>
							<span>We typically reply within minutes</span>
						</div>
					</div>
					<button className="close-btn" onClick={toggleChat}>
						<FaTimes />
					</button>
				</div>
				<div className="chat-body">
					<div className="chat-message received">
						<p>Hello! 👋</p>
						<span>How can we help you today?</span>
					</div>
				</div>
				<div className="chat-footer">
					<button className="start-chat-btn" onClick={goToWhatsapp}>
						<FaCommentDots />
						Start Conversation
					</button>
				</div>
			</div>

			{/* Floating Button */}
			<button
				className={`whatsapp-float-btn ${showPulse ? "pulse" : ""}`}
				onClick={toggleChat}
				aria-label="Open WhatsApp Chat"
			>
				{isOpen ? (
					<FaTimes className="whatsapp-icon" />
				) : (
					<FaWhatsapp className="whatsapp-icon" />
				)}
			</button>

			{/* Tooltip */}
			{!isOpen && (
				<div className="whatsapp-tooltip">
					<span>Questions?</span>
					<div className="tooltip-arrow"></div>
				</div>
			)}
		</div>
	);
};

export default WhatsappChat;
