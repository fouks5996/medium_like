import React from "react";
import { useParams } from "react-router-dom";
import UserArticles from "../components/articles/UserArticles";
import CurrentNavbar from "../components/navigation/CurrentNavbar";
import UserSideBar from "../components/users/UserSideBar";
import useFetch from "../hooks/useFetch";
function User(props) {
	const { id } = useParams();

	const [loading, user] = useFetch(
		`http://localhost:1337/api/writers/${id}?populate=*`
	);

	const [loading1, articleData] = useFetch(
		`http://localhost:1337/api/writers/${id}?populate=articles.thumbnail,articles.tag`
	);

	return (
		<div>
			{!loading && !loading1 && (
				<div className='flex justify-center my-0 mx-auto max-w-[1550px]'>
					<div className='w-[7.8%]'>
						<CurrentNavbar />
					</div>

					<div className='w-5/6 '>
						<div className='w-full h-44 bg-yellow'></div>
						<div className='px-32 py-14 relative'>
							<h1 className="text-5xl font-bold  mb-3'">
								{user.data.attributes.name} {user.data.attributes.familyName}
							</h1>

							<UserArticles articles={articleData} />
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
		</div>
	);
}

export default User;
