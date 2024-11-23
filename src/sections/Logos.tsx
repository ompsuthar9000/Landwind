const Logos = () => {
	return (
		<section className=" container grid md:grid-rows-1 grid-rows-3 grid-flow-col items-center justify-between gap-5 py-5">
			<img
				src="/logos/Airbnb.png"
				alt="Airbnb"
				width="102px"
				height="31px"
				className="object-contain"
				loading="eager"
			/>
			<img
				src="/logos/Google.png"
				alt="Google"
				width='128px'
				height='41px'
				className="object-contain"
				loading="eager"
			/>
			<img
				src="/logos/Microsoft.png"
				alt="Microsoft"
				width='150px'
				height='32px'
				className="object-contain"
				loading="eager"
			/>
			<img
				src="/logos/Spotify.png"
				alt="Spotify"
				width='123px'
				height='37px'
				className="object-contain"
				loading="eager"
			/>
			<img
				src="/logos/Mailchimp.png"
				alt="Mailchimp"
				width="136px"
				height="37px"
				className="object-contain"
				loading="eager"
			/>
			<img
				src="/logos/uber.png"
				alt="uber"
				className="object-contain"
				width='131px'
				height='27px'
				loading="eager"
			/>
		</section>
	);
};

export default Logos;
