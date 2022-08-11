import React, { useState } from "react";
import { useParams } from "react-router-dom";
import UserArticles from "../components/articles/UserArticles";
import Toggle from "../components/atoms/Toggle";
import Layout from "../components/layout/Layout";
import CurrentNavbar from "../components/navigation/CurrentNavbar";
import UserSideBar from "../components/users/UserSideBar";
import useFetch from "../hooks/useFetch";

function User(props) {
	const { id } = useParams();

	const [toggle, setToggle] = useState(false);

	const [loading, user] = useFetch(
		`http://localhost:1337/api/writers/${id}?populate=*`
	);

	const [loading1, articleData] = useFetch(
		`http://localhost:1337/api/writers/${id}?populate=articles.thumbnail,articles.tag`
	);

	return (
		<Layout>
			{!loading && !loading1 && (
				<div className={`flex justify-center `}>
					<div className='w-5/6 ml-20'>
						<div className={`w-full h-44`}>
							<img
								alt='cover'
								className='w-full h-full object-cover object-middle'
								src={
									"http://localhost:1337" +
									user.data.attributes.cover.data.attributes.url
								}
							/>
						</div>
						<div className='px-32 py-14 relative'>
							<h1 className='text-5xl font-bold  mb-3'>
								{user.data.attributes.name} {user.data.attributes.familyName}
							</h1>

							<Toggle
								toggle={toggle}
								setToggle={setToggle}
								tabName1='Home'
								tabName2='About'
							/>

							{!toggle ? (
								<UserArticles articles={articleData} />
							) : (
								<p className='mt-16'> BIO : {user.data.attributes.bio} </p>
							)}
						</div>
					</div>
					<div className='w-2/6 h-screen border-l border-gray_light'>
						<UserSideBar
							userInfo={user.data.attributes}
							userId={id}
							show={false}
						/>
					</div>
				</div>
			)}
		</Layout>
	);
}

export default User;
