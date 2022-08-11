import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "./Card";

function Cards() {
	const url = "http://localhost:1337/api/articles?populate=*";
	const [loading, articles] = useFetch(url);

	const url1 = "http://localhost:1337/api/writers?populate=*";
	const [loading2, writers] = useFetch(url1);

	return (
		<div className='w-3/5 flex flex-col gap-10 '>
			{!loading &&
				!loading2 &&
				articles.data.map(({ id, attributes }) => (
					<Card
						attributes={attributes}
						writers={writers}
						id={id}
						allowTag={true}
					/>
				))}
		</div>
	);
}

export default Cards;
