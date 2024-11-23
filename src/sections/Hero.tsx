const Hero = () => {
	return (
		<section className="container flex  justify-between items-center py-10 gap-5">
			<article className="flex flex-col justify-center items-start gap-5 ">
				<h1 className="max-w-[46rem]  text-gray-900 lg:text-5xl md:text-4xl text-5xl leading-none font-black">Building digital products & brands.</h1>
				<p>
					Here at flowbite we focus on markets where technology, innovation, and
					capital can unlock long-term value and drive economic growth.
				</p>
				<div className="flex justify-center sm:w-fit w-full items-center gap-3 sm:flex-row flex-col ">
					<button type="button" className="bg-primary-0 sm:w-[12.75rem] w-full h-[3rem]  rounded-md text-white">
						Start 30 day free trial
					</button>
					
				</div>
			</article>
			<div className="md:flex hidden max-w-[30.25rem]">
				<img
					src="/imgs/heroImg.png"
					alt="heroImg"
					className="object-contain"
					loading="eager"
				/>
			</div>
		</section>
	);
};

export default Hero;
