import Footer from "../components/Footer";
import { footerData } from "../constants/data";
import { Github, Twitter, Dribbble, Facebook } from "lucide-react";
const FooterSection = () => {
	return (
		<footer className="container flex flex-col justify-center  gap-5">
			<div className=" grid md:grid-rows-1 sm:grid-rows-2 grid-rows-3 grid-flow-col max-sm:justify-around justify-between gap-3 items-start">
				{footerData.map((item) => {
					return <Footer key={item.title} {...item} />;
				})}
			</div>
			<div className="flex flex-col gap-5 py-5">
				<div className="flex justify-center items-center gap-2 text-2xl font-semibold">
					<img src="/logos/mainlogo.svg" alt="Mainlogo" />
					<h1>Landwind</h1>
				</div>
				<p className="text-gray-500 text-center">
					© 2022 Flowbite, Inc. All rights reserved.
				</p>
				<div className="flex justify-center items-center *:size-6 gap-5 *:text-gray-500">
					<Github />
					<Twitter />
					<Dribbble />
					<Facebook />
				</div>
			</div>
		</footer>
	);
};

export default FooterSection;
