import React from "react";

function Button({ size, weigth, link, text, paddingX }) {
	return (
		<a
			className={`py-2 ${paddingX} w-fit bg-black rounded-3xl text- text-white ${size} ${weigth} `}
			href={link}>
			{text}
		</a>
	);
}

Button.defaultProps = {
	link: "#",
	size: "text-xl",
	weigth: "font-reg",
	paddingX: "px-10",
};

export default Button;
