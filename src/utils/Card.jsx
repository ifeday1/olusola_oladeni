import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ data }) => {
	const { image, description, price, buttonLabel, link, previewLink } = data;

	return (
		<div className="book-card">
			<div className="book-card-image">
				<img src={image} alt={description} />
			</div>

			<div className="book-card-content">
				<div>
					<p className="book-card-title">{description}</p>
					<p className="book-card-price">{price}</p>
				</div>

				<div className="book-card-actions">
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="book-card-btn"
					>
						{buttonLabel}
					</a>
					{previewLink && (
						<Link to={previewLink} className="book-preview-btn">
							Preview Sample
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default Card;
