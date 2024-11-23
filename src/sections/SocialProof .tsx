import SocialCard from "../components/SocialCard";
import { SocialCardData } from "../constants/data";

const SocialProof = () => {
	return (
		<section className="container flex md:flex-row flex-col justify-between py-10 gap-5">
			<article className="flex flex-col justify-center items-start gap-5">
				<p className="leading-none text-lg font-medium text-purple-600">
					Trusted Worldwide
				</p>
				<h1 className="text-gray-900 max-w-[40rem] leading-tight text-4xl font-extrabold">
					Trusted by over 600 million users and 10,000 teams
				</h1>
				<p className="max-w-[40rem] font-light text-xl">
					Our rigorous security and compliance standards are at the heart of all
					we do. We work tirelessly to protect you and your customers.
				</p>
				<div className="flex flex-col justify-start items-start *:flex *:justify-center *:items-center *:gap-2 gap-3">
					{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
					<a href="#">
						{" "}
						<img src="/vectors/arrow-right.png" alt="vector" />
						Explore Legality Guide
					</a>
					{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
					<a href="#">
						{" "}
						<img src="/vectors/arrow-right.png" alt="vector" />
						Visit the Trust Center
					</a>
				</div>
			</article>

			<div className="grid grid-cols-2 grid-flow-row gap-5 max-sm:grid-cols-1">
				{SocialCardData.map((item) => {
					return <SocialCard {...item} key={item.id} />;
				})}
			</div>
			
		</section>
	);
};

export default SocialProof;
