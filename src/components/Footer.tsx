type Props = {
	title: string;
	list: string[];
};
const Footer = ({ title, list }: Props) => {
	return (
		<ul className="flex flex-col justify-center items-start gap-3 py-5">
			<li className="text-sm font-semibold text-gray-900">{title}</li>
			{list.map((items) => {
				return <li key={items} className="text-gray-500">{items}</li>;
			})}
		</ul>
	);
};

export default Footer;
