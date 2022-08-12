import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OtherPost from "../components/articles/MoreFromUser";
import UserButton from "../components/atoms/buttons/UserButton";
import UserPicArticle from "../components/users/UserPicArticle";
import UserSideBar from "../components/users/UserSideBar";
import useFetch from "../hooks/useFetch";
import Layout from "../components/layout/Layout";
import Likes from "../components/articles/Likes";

function Article() {
	let { id } = useParams();
	const [liked, setLiked] = useState(0);

	const [loading, articleData] = useFetch(
		`http://localhost:1337/api/articles/${id}?populate=author.picture,tag,author.articles`
	);
	const [loading2, articleImg] = useFetch(
		`http://localhost:1337/api/articles/${id}?populate=*`
	);

	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});

	return (
		<Layout>
			{!loading && !loading2 && (
				<div className='flex justify-center'>
					<div className='w-5/6 ml-20'>
						<div className='px-8 xs:px-16 lg:px-32 py-14'>
							<div className='flex justify-between items-center'>
								<UserPicArticle
									userInfo={articleData.data.attributes.author.data.attributes}
									articleInfo={articleData.data.attributes}
									id={articleData.data.attributes.author.data.id}
								/>{" "}
								<Likes
									articleId={articleData.data.id}
									liked={liked}
									number={articleData.data.attributes.likes}
								/>
							</div>

							<h1 className='text-4xl font-bold mt-10 mb-3'>
								{articleImg.data.attributes.title}
							</h1>
							<p className='text-xl text-gray font-md'>
								{articleImg.data.attributes.description}
							</p>
							<img
								className='w-full h-128 object-cover  my-7'
								alt='article-cover'
								src={
									"http://localhost:1337" +
									articleImg.data.attributes.thumbnail.data.attributes.url
								}
							/>
							<p>{articleImg.data.attributes.body}</p>
						</div>
						<div className='bg-[#EDF3F6] px-32 py-6'>
							<div className='flex justify-between py-6'>
								<div>
									<h1 className='font-sbold text-xl text-black_light mb-2'>
										More from{" "}
										{articleData.data.attributes.author.data.attributes.name}{" "}
										{
											articleData.data.attributes.author.data.attributes
												.familyName
										}
									</h1>
									<p className='font-md text-sm text-gray'>
										{" "}
										{
											articleData.data.attributes.author.data.attributes.bio
										}{" "}
									</p>
								</div>
								<div className='flex items-center gap-3'>
									<UserButton text='follow' size='text-sm' paddingX='px-5' />
								</div>
							</div>
							<div className='mt-6'>
								{articleData.data.attributes.author.data.attributes.articles
									.data.length === 1 ? (
									<p className='mb-10 font-reg'>
										{articleData.data.attributes.author.data.attributes.name}{" "}
										n'a pas écrit d'autres articles
									</p>
								) : (
									articleData.data.attributes.author.data.attributes.articles.data
										.filter((article) => article.id !== parseInt(id))
										.map((article) => <OtherPost articleInfo={article} />)
								)}
							</div>
						</div>
					</div>
					<div className='w-2/6 border-l border-gray_light'>
						<UserSideBar
							userInfo={articleData.data.attributes.author.data.attributes}
							articleId={articleImg.data.id}
							userId={articleData.data.attributes.author.data.id}
						/>
					</div>
				</div>
			)}
		</Layout>
	);
}

export default Article;
