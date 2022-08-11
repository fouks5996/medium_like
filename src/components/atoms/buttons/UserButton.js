import React, { useState } from "react";

function UserButton({ size, weigth, link, text, paddingX }) {
	const [checked, setChecked] = useState(false);

	return (
		<a
			onClick={() => setChecked((checked) => !checked)}
			className={`py-2 ${paddingX} w-fit ${
				checked ? "bg-emerald-800" : "bg-blueBtn"
			} rounded-3xl text- text-white ${size} ${weigth} `}
			href={link}>
			{checked ? "Followed" : "Follow"}
		</a>
	);
}

UserButton.defaultProps = {
	link: "#",
	size: "text-xl",
	weigth: "font-reg",
	paddingX: "px-10",
};

export default UserButton;
