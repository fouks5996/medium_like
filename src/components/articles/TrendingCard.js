import React from "react";
import useFetch from "../../hooks/useFetch";
import UserPic from "../users/UserPic";
import TrendingIcon from "../../svg/TrendingIcon";
import ArticleInfo from "../atoms/ArticleInfo";
import { Link } from "react-router-dom";

function TrendingCard(props) {
	const [confirm, articles] = useFetch(
		"http://localhost:1337/api/articles?populate=author.picture,tag&sort=likes:desc&pagination[page]=1&pagination[pageSize]=6"
	);

	return (
		<div className='max-w-[1250px] w-full py-14 '>
			<div className='flex items-center gap-2 mb-4'>
				<TrendingIcon />
				<p className='text-xs font-bold tracking-widest text-black_dark'>
					{" "}
					TRENDING ON MEDIUM{" "}
				</p>{" "}
			</div>
			<div className='grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3'>
				{!confirm &&
					articles.data.map((article, index) => (
						<div key={index} className='flex items-start gap-3'>
							<p className='text-3xl text-gray_light font-sbold'>
								0{index + 1}
							</p>
							<div className='flex flex-col gap-1 pt-2'>
								<UserPic
									picture={
										article.attributes.author.data.attributes.picture.data
											.attributes.url
									}
									name={article.attributes.author.data.attributes.name}
									familyName={
										article.attributes.author.data.attributes.familyName
									}
									id={article.attributes.author.data.id}
								/>
								<Link to={"article/" + article.id}>
									<h2 className='font-bold text-base w-fit'>
										{article.attributes.title}
									</h2>
								</Link>

								<ArticleInfo attributes={article.attributes} />
							</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default TrendingCard;
