import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function TagHome({ text, width }) {
	const [loading, tags] = useFetch(
		"http://localhost:1337/api/tags?fields=title"
	);

	return (
		<div className={`${width} sticky h-fit top-28`}>
			<p className='font-bold text-xs tracking-widest text-black_dark mb-4'>
				{text}
			</p>
			<div className='flex gap-3 flex-wrap'>
				{!loading &&
					tags.data.map((tag) => (
						<Link to={"/tag/" + tag.id}>
							<p className='border-gray_light text-[13px] text-gray border w-fit py-2 px-5 rounded'>
								{tag.attributes.title}
							</p>
						</Link>
					))}
			</div>
		</div>
	);
}

TagHome.defaultProps = {
	width: "w-1/3",
};

export default TagHome;
