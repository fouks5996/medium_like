import { React } from "react";
import { Link } from "react-router-dom";
import mediumlogo from "../../images/mediumlogo.png";
import Button from "../atoms/buttons/Button";
import NavItems from "./NavItems";

function Navbar() {
	const navLinks = [
		{ label: "Our Story", href: "/story" },
		{ label: "Membership", href: "/membership" },
		{ label: "Write", href: "/write" },
		{ label: "Sign In", href: "/signIn" },
	];

	return (
		<div className='sticky top-0 h-fit z-50'>
			<nav className='flex justify-center bg-yellow py-3 border-b border-black'>
				<div className='flex mx-10 justify-between items-center w-full max-w-7xl'>
					<Link to='/'>
						{" "}
						<img alt='logo' className='w-52' src={mediumlogo}></img>{" "}
					</Link>

					<div className='flex items-center gap-4'>
						<div className='hidden md:flex'>
							<NavItems navLinks={navLinks} />
						</div>
						<Button
							link='#'
							text='Get Started'
							size='text-sm'
							paddingX='px-5'
						/>
					</div>
				</div>
			</nav>
			<div className='md:hidden py-2 border-b border-black '>
				<NavItems navLinks={navLinks} />
			</div>
		</div>
	);
}

export default Navbar;
