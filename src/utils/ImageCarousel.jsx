import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Text } from "@chakra-ui/react";

import Pre1 from "../assets/p1.webp";
import Pre2 from "../assets/p2.webp";
import Pre3 from "../assets/p3.webp";
import Pre4 from "../assets/p4.webp";
import Feb1 from "../assets/feb1.jpg";
import Feb3 from "../assets/feb3.jpg";
import Feb4 from "../assets/feb4.jpg";

const ImageCarousel = () => {
	const settings = {
		centerMode: true,
		centerPadding: "0",
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 7000,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<div className="w-full bg-gradient-to-r from-green-800 to-purple-800 py-10">
			<div className="w-full max-w-7xl mx-auto">
				<Text
					align="center"
					fontWeight="bold"
					fontSize={{ base: "2xl", md: "4xl" }}
					fontStyle="italic"
					mt={{ base: "20px", md: "40px" }}
					mb="20px"
					color="white"
				>
					Premarital and Marital Matters
				</Text>

				<Slider {...settings}>
					<div className="px-2 outline-none">
						<img src={Pre1} alt="prep" className="h-64 w-full object-cover rounded-lg" />
					</div>
					<div className="px-2 outline-none">
						<img src={Pre2} alt="prep1" className="h-64 w-full object-cover rounded-lg" />
					</div>
					<div className="px-2 outline-none">
						<img src={Pre3} alt="prep2" className="h-64 w-full object-cover rounded-lg" />
					</div>
					<div className="px-2 outline-none">
						<img src={Pre4} alt="prep3" className="h-64 w-full object-cover rounded-lg" />
					</div>
					<div className="px-2 outline-none">
						<img src={Feb1} alt="prep3" className="h-64 w-full object-cover rounded-lg" />
					</div>
					<div className="px-2 outline-none">
						<img src={Feb3} alt="prep3" className="h-64 w-full object-cover rounded-lg" />
					</div>
					<div className="px-2 outline-none">
						<img src={Feb4} alt="prep3" className="h-64 w-full object-cover rounded-lg" />
					</div>
				</Slider>
			</div>
		</div>
	);
};

export default ImageCarousel;
