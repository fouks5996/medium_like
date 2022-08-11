import React from "react";
import { useParams } from "react-router-dom";

function Tag(props) {
	const { id } = useParams();
	return (
		<div>
			<h1> Hello {id} </h1>
		</div>
	);
}

export default Tag;
