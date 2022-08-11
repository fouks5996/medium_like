import React from "react";
import { Link } from "react-router-dom";
import dataParsed from "../../functions/DataParsed";
import getTimeToRead from "../../functions/GetTimeToRead";

function ArticleInfo({ attributes, size, allowTag }) {
	return (
		<p className={`text-${size} text-gray font-reg`}>
			{dataParsed(attributes.createdAt, "short")} -
			<span> {getTimeToRead(attributes.body)} </span>
			<span> min read </span>
			{allowTag && (
				<span className='px-2 py-1 ml-1 bg-gray_light rounded-xl'>
					<Link to={"/tag/" + attributes.tag.data.id}>
						{" "}
						{attributes.tag.data.attributes.title}{" "}
					</Link>
				</span>
			)}
		</p>
	);
}

ArticleInfo.defaultProps = {
	size: "[13px]",
	allowTag: false,
};

export default ArticleInfo;
