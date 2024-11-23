const Testimonials = () => {
	return (
		<article className="bg-feature-0 py-10">
			<div className="container flex justify-center flex-col items-center gap-5">
				<img src="/vectors/Vector (4).png" alt="Vector" className="object-contain" />
				<p className="max-w-[48rem] leading-relaxed text-2xl font-semibold text-gray-900 text-center max-sm:text-lg">
					"Flowbite is just awesome. It contains tons of predesigned components
					and pages starting from login screen to complex dashboard. Perfect
					choice for your next SaaS application."
				</p>
				<div className="flex justify-between items-center gap-2 ">
					<img src="/imgs/Avatar.png" alt="Avatar" className="object-contain" />
					<p className="leading-tight font-semibold max-sm:text-sm">Micheal Gough</p>
                    <p className="font-semibold">/</p>
					<p className="text-gray-500 text-sm">CEO at Google</p>
				</div>
			</div>
		</article>
	);
};

export default Testimonials;
