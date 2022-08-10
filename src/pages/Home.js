import React from "react";
import Cards from "../components/articles/Cards";
import TrendingCard from "../components/articles/TrendingCard";
import Button from "../components/atoms/buttons/Button";
import TagHome from "../components/tags/TagHome";
import hero from "../images/hero.png";
import Navbar from "../components/navigation/Navbar";

function Home() {
	return (
		<div>
			<Navbar />
			<div className='flex justify-center items-center h-[50vh] bg-yellow relative border-b'>
				<div className='max-w-[1250px] flex justify-between w-full'>
					<div className='flex flex-col gap-3 mt-[-60px]'>
						<h1 className='text-[6.626rem] font-GTsuper'> Stay curious.</h1>
						<h3 className='text-2xl font-reg mb-6 max-w-sm'>
							Discover stories, thinking, and expertise from writers on any
							topic.
						</h3>
						<Button text='Start Reading' />
					</div>
					<img
						alt='hero'
						className='absolute w-[36rem] top-0 right-1 '
						src={hero}
					/>
				</div>
			</div>
			<div className='w-full flex justify-center border-t-black border-b border-b-gray_light px-7'>
				<TrendingCard />
			</div>
			<div className='w-full flex justify-center border-t-black border-b border-b-gray_light px-7'>
				<div className='flex justify-between max-w-[1250px] w-full py-16 static'>
					<Cards />
					<TagHome />
				</div>
			</div>
		</div>
	);
}

export default Home;
