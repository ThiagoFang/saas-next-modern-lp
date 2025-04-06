import InstaIcon from "../assets/icons/insta.svg";
import XSocialIcon from "../assets/icons/x-social.svg";
import TikTokIcon from "../assets/icons/tiktok.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";

export const Footer = () => {
	return (
		<footer className="bg-black border-t border-white/20 text-white/60 py-5">
			<div className="container">
				<div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
					<div className="text-center">
						2024 Your Company, Inc. All rights reserved.
					</div>
					<ul className="flex justify-center gap-2.5">
						<li>
							<XSocialIcon />
						</li>
						<li>
							<InstaIcon />
						</li>
						<li>
							<TikTokIcon />
						</li>
						<li>
							<YoutubeIcon />
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};
