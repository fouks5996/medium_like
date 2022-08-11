import React from "react";
import Button from "./Button";

function WrappedButton(props) {
	return (
		<div className='flex items-center gap-5'>
			<Button link='#' text='Get Started' size='text-sm' paddingX='px-20' />
			<p className='text-blueBtn'> Sign in </p>
		</div>
	);
}

export default WrappedButton;
