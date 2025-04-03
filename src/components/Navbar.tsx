import Image from "next/image";
import logo from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";

export const Navbar = () => {
	return (
		<header className="bg-black">
			<div className="px-4">
				<div className="py-4 flex items-center justify-between">
					<div className="relative">
						<div className="absolute w-full top-2 bottom-0 rainbow-background blur-md" />
						<Image src={logo} alt="Saas logo" className="size-12 relative" />
					</div>
					<button
						type="button"
						className="border border-white/30 size-10 inline-flex justify-center items-center sm:hidden rounded-lg"
					>
						<MenuIcon className="text-white" />
					</button>
					<nav className="hidden items-center sm:flex gap-6">
						<a className="text-white/60 hover:text-white" href="/">
							Features
						</a>
						<a className="text-white/60 hover:text-white" href="/">
							Updates
						</a>
						<a className="text-white/60 hover:text-white" href="/">
							Help
						</a>
						<a className="text-white/60 hover:text-white" href="/">
							Costumers
						</a>
						<button className="bg-white py-2 px-4 rounded-lg" type="button">
							Get for Free
						</button>
					</nav>
				</div>
			</div>
		</header>
	);
};
