import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import UserPic from "../users/UserPic";

function MoreFromMedium({ articleId, show }) {
	const [id, setId] = useState([]);

	const [loading, ids] = useFetch(
		"http://localhost:1337/api/articles?fields=id"
	);
	const [confirm, articles] = useFetch(
		`http://localhost:1337/api/articles?filters[id][$in]=${id[0]}&filters[id][$in]=${id[1]}&filters[id][$in]=${id[2]}&populate=author.picture`
	);

	const [confirmImage, images] = useFetch(
		`http://localhost:1337/api/articles?filters[id][$in]=${id[0]}&filters[id][$in]=${id[1]}&filters[id][$in]=${id[2]}&populate=*`
	);

	useEffect(() => {
		if (!loading) {
			let arrayId = ids.data
				.map((id) => id.id)
				.filter((element) => element !== articleId);
			const randomIds = [...arrayId]
				.sort(() => 0.5 - Math.random())
				.slice(0, 3);
			setId(randomIds);
		}
		return;
	}, [articleId, ids.data, loading, setId]);

	return (
		<div className='flex flex-col gap-2 mt-2 '>
			{show && <h1 className='font-md mb-'> More from Medium </h1>}
			{!confirm &&
				show &&
				articles.data.map((article) => (
					<div className='flex py-3 gap-4'>
						<div>
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
							<Link
								to={"/article/" + article.id}
								className='font-bold text-base w-fit '>
								<h1 className='max-w-[220px] mt-2'>
									{" "}
									{article.attributes.title}{" "}
								</h1>
							</Link>
						</div>
						{!confirmImage &&
							images.data
								.filter((image) => image.id === article.id)
								.map((filtered) => (
									<img
										alt='cover'
										className='w-16 h-16 object-cover'
										src={
											"http://localhost:1337" +
											filtered.attributes.thumbnail.data.attributes.url
										}
									/>
								))}
					</div>
				))}
		</div>
	);
}

MoreFromMedium.defaultProps = {
	show: true,
};

export default MoreFromMedium;
