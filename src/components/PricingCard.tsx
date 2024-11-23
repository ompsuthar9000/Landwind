interface ExtraProps {
	featuresList: string[];
}

interface Props extends ExtraProps {
	title: string;
	paragraph: string;
	price: number;
}
const PricingCard = ({ title, paragraph, price, featuresList }: Props) => {
	return (
		<section className="max-w-[20rem]  p-3 flex justify-center items-center flex-col border gap-5">
			<h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
			<p className="text-gray text-center">{paragraph}</p>
			<div className="flex justify-center items-end">
				<span className="leading-none text-4xl font-extrabold">${price}</span>{" "}
				<span className="text-sm font-medium text-gray-500">/month</span>
			</div>
			<ul className="flex flex-col justify-start items-start gap-3">
				<li className="flex justify- items-start gap-3 text-sm">
					<img src="/vectors/check.png" alt="check" /> 
					Individual configuration
				</li>
				<li className="flex justify-start items-start gap-3 text-sm">
					<img src="/vectors/check.png" alt="check" /> 
					No setup, monthly, or hidden fees
				</li>
				{featuresList.map((item, i) => {
					return (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<li key={i} className="flex justify-start items-start gap-3 text-sm">
							<img src="/vectors/check.png" alt="check" /> {item}
						</li>
					);
				})}
			</ul>
			<button
				className="btn btn-active btn-primary w-[80%] h-[41px]"
				type="button"
			>
				Get started
			</button>
		</section>
	);
};

export default PricingCard;
