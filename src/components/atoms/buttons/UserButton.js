import React from "react";

function UserButton({ size, weigth, link, text, paddingX }) {
	return (
		<a
			className={`py-2 ${paddingX} w-fit bg-blueBtn rounded-3xl text- text-white ${size} ${weigth} `}
			href={link}>
			{text}
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
