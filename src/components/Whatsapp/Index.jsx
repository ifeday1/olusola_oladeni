import React from 'react'

const WhatsappChat = () => {

	function go_to_whatsapp() {

		var WhatsAppUrl = 'https://web.whatsapp.com/send';

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			WhatsAppUrl = 'https://api.whatsapp.com/send';
		}

		var url = WhatsAppUrl + '?phone=+23408034498307';
		var win = window.open(url, '_blank');
		win.focus();
	}

	return (
		// eslint-disable-next-line jsx-a11y/anchor-is-valid
		<a onClick={() => go_to_whatsapp()}>
			<div className="whatsapp_chat_support wcs_fixed_right wcs-effect-1 wcs-show" id="example_4" style={{ display: 'block' }}>
				<div className="wcs_button">
					<span className="fa fa-whatsapp"></span> Questions?
				</div>
			</div>
		</a>
	)
}

export default WhatsappChat;
