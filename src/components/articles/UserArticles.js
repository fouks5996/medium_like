import React from "react";
import { Link } from "react-router-dom";
import ArticleInfo from "../atoms/ArticleInfo";

function UserArticles({ articles }) {
	return (
		<div className='flex flex-col gap-8 mt-10'>
			{articles.data.attributes.articles.data.map((article) => (
				<div className='flex justify-between border-b border-gray_light pb-10 pt-4'>
					<div className='max-w-[600px]'>
						<Link to={"/article/" + article.id}>
							<h1 className='font-bold text-[1.40rem] mt-1'>
								{article.attributes.title}
							</h1>
						</Link>
						<p className='mb-4 font-reg text-base'>
							{" "}
							{article.attributes.description}{" "}
						</p>
						<ArticleInfo attributes={article.attributes} allowTag={true} />
					</div>
					<img
						alt='cover'
						className='w-28 h-28 object-cover'
						src={
							"http://localhost:1337" +
							article.attributes.thumbnail.data.attributes.url
						}
					/>
				</div>
			))}
		</div>
	);
}

export default UserArticles;
