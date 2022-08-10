import React from "react";
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
					{attributes.tag.data.attributes.title}
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
