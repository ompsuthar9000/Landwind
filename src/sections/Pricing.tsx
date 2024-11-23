import { PricingData } from "../constants/data";
import PricingCard from "../components/PricingCard";
const Pricing = () => {
	return (
		<section className="container flex flex-col justify-center items-center py-10 gap-5">
			<h1 className="text-gray-900 leading-tight text-4xl font-extrabold">
				Pay as you grow
			</h1>
			<p className="text-gray-500 font-normal text-center max-w-[45rem]">
				Here at flowbite we focus on markets where technology, innovation, and
				capital can unlock long-term value and drive economic growth.
			</p>
			<div className="flex justify-between  gap-5 md:flex-row flex-col">
				{PricingData.map((item) => {
					return <PricingCard key={item.id} {...item} />;
				})}
			</div>
		</section>
	);
};

export default Pricing;
