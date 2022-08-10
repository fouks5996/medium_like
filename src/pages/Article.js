import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OtherPost from "../components/articles/MoreFromUser";
import UserButton from "../components/atoms/buttons/UserButton";
import UserPicArticle from "../components/users/UserPicArticle";
import CurrentNavbar from "../components/navigation/CurrentNavbar";
import UserSideBar from "../components/users/UserSideBar";
import useFetch from "../hooks/useFetch";
import EmailIcon from "../svg/EmailIcon";

function Article() {
	let { id } = useParams();
	const [user, setUser] = useState();
	const [article, setArticle] = useState();
	const [go, setGo] = useState(false);
	const [loading, articleData] = useFetch(
		`http://localhost:1337/api/articles/${id}?populate=author.picture,tag,author.articles`
	);

	const [loading2, articleImg] = useFetch(
		`http://localhost:1337/api/articles/${id}?populate=*`
	);

	useEffect(() => {
		if (!loading && !loading2) {
			setUser(articleData.data.attributes.author.data.attributes);
			setArticle(articleData.data.attributes);
			setGo(true);
		}
	}, [loading, articleImg, loading2]);

	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});

	return (
		<div>
			{go && (
				<div className='flex justify-center my-0 mx-auto max-w-[1550px]'>
					<div className='w-1/12'>
						<CurrentNavbar />
					</div>

					<div className='w-5/6 '>
						<div className='px-32 py-14'>
							<UserPicArticle
								userInfo={user}
								articleInfo={article}
								id={articleData.data.attributes.author.data.id}
							/>
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
										More from {user.name} {user.familyName}
									</h1>
									<p className='font-md text-sm text-gray'> {user.bio} </p>
								</div>
								<div className='flex items-center gap-3'>
									<UserButton text='follow' size='text-sm' paddingX='px-5' />
									<UserButton text={<EmailIcon />} paddingX='px-2' />
								</div>
							</div>
							<div className='mt-6'>
								{user.articles.data.map((article) => (
									<OtherPost articleInfo={article} />
								))}
							</div>
						</div>
					</div>
					<div className='w-2/6 border-l border-gray_light'>
						<UserSideBar
							userInfo={user}
							articleId={articleImg.data.id}
							userId={articleData.data.attributes.author.data.id}
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default Article;
