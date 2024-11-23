import { Menu } from "lucide-react";
import { useState } from "react";
import DropDownMenu from "../components/DropDownMenu";

const Header = () => {
	const [menu, setMenu] = useState(false);
	return (
		<nav className=" container flex justify-between pt-5">
			{menu && <DropDownMenu />}
			<div className="flex gap-2 justify-center items-center">
				<img src="/logos/mainlogo.svg" alt="mainLogo" />
				<h1 className="font-semibold text-xl max-sm:hidden">Landwind</h1>
			</div>
			<ul className="md:flex justify-center items-center gap-5 hidden font-medium text-gray-900 *:cursor-pointer">
				<li>Company</li>
				<li>Marketplace</li>
				<li>Features</li>
				<li>Team</li>
				<li>Contact</li>
			</ul>

			<div className="flex justify-center items-center gap-3">
				<button
					type="button"
					className="bg-transparent font-medium text-sm text-gray-900"
				>
					Log In
				</button>
				<button
					type="button"
					className="w-[6.313rem] h-[2.313rem] bg-primary-0 rounded-md text-white font-medium text-sm"
				>
					Get started
				</button>
			</div>
			<button
				className="btn btn-square btn-outline md:hidden border-primary-0"
				type="button"
				onClick={() => setMenu((prev) => !prev)}
			>
				<Menu className=" text-primary-0" />
			</button>
		</nav>
	);
};

export default Header;
