import React from "react";
import { Link } from "react-router-dom";

function UserPic({ picture, name, familyName, id }) {
	return (
		<Link to={"/user/" + id}>
			<div className='flex items-center gap-2'>
				<img
					className='w-5 h-5 object-cover rounded-full'
					alt={"Picture of" + name}
					src={"http://localhost:1337" + picture}
				/>
				<p className='font-sbold text-[13px] text-black_light'>
					{name} {familyName}
				</p>
			</div>
		</Link>
	);
}

export default UserPic;
