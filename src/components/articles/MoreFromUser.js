import React from "react";
import { Link } from "react-router-dom";
import shortedString from "../../functions/ShortedString";
import useFetch from "../../hooks/useFetch";
import ArticleInfo from "../atoms/ArticleInfo";

function OtherPost({ articleInfo }) {
	const [loading, articleImage] = useFetch(
		`http://localhost:1337/api/articles/${articleInfo.id}?populate=*`
	);

	return (
		<div>
			{!loading && (
				<div className='flex  gap-10 border-b border-gray_light pb-6 mb-5'>
					<div>
						<Link
							to={"/article/" + articleInfo.id}
							className='font-bold text-[1.40rem] mt-1'>
							{articleInfo.attributes.title}
						</Link>
						<p className='text-gray font-reg'>
							{shortedString(articleInfo.attributes.description, 80)}
						</p>
						<ArticleInfo attributes={articleInfo.attributes} />
					</div>
					<img
						alt='article_cover'
						className='w-56 h-32 object-cover'
						src={
							"http://localhost:1337" +
							articleImage.data.attributes.thumbnail.data.attributes.url
						}
					/>
				</div>
			)}
		</div>
	);
}

export default OtherPost;
