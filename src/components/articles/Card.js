import React from "react";
import UserPic from "../users/UserPic";
import shortedString from "../../functions/ShortedString";
import { Link } from "react-router-dom";
import ArticleInfo from "../atoms/ArticleInfo";

function Card({ attributes, id, writers, allowTag }) {
	const filtered = writers.data.find((writer) => {
		return writer.id === attributes.author.data.id;
	});

	const userAvatar = filtered.attributes.picture.data.attributes.url;

	return (
		<div
			key={id}
			className='flex justify-between border-b pb-8 border-gray_light'>
			<div>
				<UserPic
					picture={userAvatar}
					name={attributes.author.data.attributes.name}
					familyName={attributes.author.data.attributes.familyName}
					id={attributes.author.data.id}
				/>
				<Link to={"/article/" + id}>
					<h1 className='font-bold text-[1.40rem] mt-1'>{attributes.title}</h1>
				</Link>

				<p className='text-gray font-reg mb-3 max-w-lg'>
					{shortedString(attributes.description, 120)}
				</p>

				<ArticleInfo attributes={attributes} allowTag={allowTag} />
			</div>
			<img
				className='w-56 h-32 object-cover '
				alt='name'
				src={"http://localhost:1337" + attributes.thumbnail.data.attributes.url}
			/>
		</div>
	);
}

export default Card;
