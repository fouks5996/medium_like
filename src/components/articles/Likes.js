import React, { useEffect, useState } from "react";
import LikeIcon from "../../svg/LikeIcon";

function Likes({ number, articleId }) {
	const [like, setLike] = useState(0);

	useEffect(() => {
		setLike((like) => like === 0);
	}, [number]);

	const addLikes = () => {
		setLike((like) => like + 1);
		const requestOptions = {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				data: {
					likes: number + 1,
				},
			}),
		};
		fetch(`http://localhost:1337/api/articles/${articleId}`, requestOptions)
			.then((response) => response.json())
			.then((res) => res);
	};

	if (like > 1) {
		setLike((like) => like - 1);
	}

	return (
		<>
			<p
				className='cursor-pointer flex gap-1 justify-start font-reg items-center text-sm'
				onClick={addLikes}>
				<LikeIcon /> <span className='min-w-[25px] '> {number + like} </span>
			</p>
		</>
	);
}

export default Likes;
