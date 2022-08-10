import React from "react";
import useFetch from "../../hooks/useFetch";

function TagHome() {
	const [loading, tags] = useFetch(
		"http://localhost:1337/api/tags?fields=title"
	);

	return (
		<div className='w-1/3 sticky h-fit top-28'>
			<p className='font-bold text-xs tracking-widest text-black_dark mb-4'>
				DISCOVER MORE OF WHAT MATTERS TO YOU
			</p>
			<div className='flex gap-3 flex-wrap'>
				{!loading &&
					tags.data.map((tag) => (
						<p className='border-gray_light text-[13px] text-gray border w-fit py-2 px-5 rounded'>
							{" "}
							{tag.attributes.title}{" "}
						</p>
					))}
			</div>
		</div>
	);
}

export default TagHome;
