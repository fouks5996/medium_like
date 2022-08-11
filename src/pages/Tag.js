import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/articles/Card";
import Button from "../components/atoms/buttons/Button";
import UserButton from "../components/atoms/buttons/UserButton";
import WrappedButton from "../components/atoms/buttons/WrappedButton";
import SearchBar from "../components/atoms/form/SearchBar";
import Toggle from "../components/atoms/Toggle";
import Layout from "../components/layout/Layout";
import CurrentNavbar from "../components/navigation/CurrentNavbar";
import TagHome from "../components/tags/TagHome";
import useFetch from "../hooks/useFetch";
import TagIcon from "../svg/TagIcon";

function Tag(props) {
	const { id } = useParams();
	const [toggle, setToggle] = useState(false);
	const [userNb, setUserNb] = useState([]);

	const [loading, tag] = useFetch(
		`http://localhost:1337/api/tags/${id}?populate=articles.thumbnail,articles.author,writers,articles.author.picture`
	);

	const [loading1, tag1] = useFetch(
		`http://localhost:1337/api/tags/${id}?populate=articles.thumbnail,articles.author`
	);

	const url1 = "http://localhost:1337/api/writers?populate=*";
	const [loading2, writers] = useFetch(url1);

	setTimeout(() => {
		var element = document.getElementById("myElement");
		element = element.textContent.split("");
		let uniqueChars = [...new Set(element)];
		setUserNb(uniqueChars.length);
	}, "100");

	return (
		<Layout>
			{!loading && !loading1 && !loading2 && (
				<div className={`flex justify-center `}>
					<div className='w-5/6 ml-20'>
						<div className='px-32 py-14 '>
							<div className='flex gap-4 items-center mb-6'>
								<div className='bg-gray_light p-1 rounded-full'>
									<TagIcon />
								</div>
								<h1 className='text-4xl font-bold '>
									{tag.data.attributes.title}
								</h1>
							</div>
							<UserButton
								text='Follow'
								size='text-sm'
								paddingX='px-5'
								textFinal='Followed'
							/>
							<Toggle
								toggle={toggle}
								setToggle={setToggle}
								tabName1='Trending'
								tabName2='Latest'
							/>

							{!toggle ? (
								<div className='flex flex-col gap-10 mt-16 '>
									{tag.data.attributes.articles.data.map(
										({ attributes, id }) => (
											<Card attributes={attributes} writers={writers} id={id} />
										)
									)}
								</div>
							) : (
								<div className='flex flex-col gap-10 mt-16'>
									{tag1.data.attributes.articles.data
										.sort((a, b) => b.id - a.id)
										.map(({ attributes, id }) => (
											<Card attributes={attributes} writers={writers} id={id} />
										))}
								</div>
							)}
						</div>
					</div>

					<div className='w-2/6 h-screen border-l border-gray_light'>
						<div className='fixed p-8'>
							<WrappedButton />
							<SearchBar />
							<div className='flex gap-24'>
								<div>
									<p className='font-bold text-2xl'>
										{" "}
										{tag.data.attributes.articles.data.length}{" "}
									</p>
									<p className='font-reg'> Stories </p>
								</div>
								<div id='myElement' className='hidden'>
									{tag.data.attributes.articles.data.map((article) => (
										<p>{article.attributes.author.data.id}</p>
									))}
								</div>
								<div>
									<p className='font-bold text-2xl'> {userNb} </p>
									<p className='font-reg'> Writers </p>
								</div>
							</div>
							<div className='flex items-center mt-6' id='container_images'>
								{tag.data.attributes.articles.data.map((article) => (
									<img
										id={article.attributes.author.data.id}
										alt=''
										className='rounded-full h-9 w-9 object-cover mr-[-10px] border-2 border-gray_light'
										src={
											"http://localhost:1337" +
											article.attributes.author.data.attributes.picture.data
												.attributes.url
										}
									/>
								))}
							</div>
							<div className='max-w-[330px] mt-10'>
								<TagHome text='Others Topics' width='w-full' />
							</div>
						</div>
					</div>
				</div>
			)}
		</Layout>
	);
}

export default Tag;
