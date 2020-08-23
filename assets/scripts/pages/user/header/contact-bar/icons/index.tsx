import * as React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const icons = [
	{
		name : "YouTube",
		title: "YouTube",
		Icon : YouTubeIcon,
		link : "https://material-ui.com/customization/spacing"
	},
	{
		name : "GitHub",
		title: "GitHub",
		Icon : GitHubIcon,
		link : "https://material-ui.com/customization/spacing"
	},
	{
		name : "Instagram",
		title: "Instagram",
		Icon : InstagramIcon,
		link : "https://material-ui.com/customization/spacing"
	},
];
const Icons = () => {
	return (
		<div>
			{icons.map((item, key) => {
				const {Icon, title, name} = item;
				return (
					<Tooltip title={title} aria-label={name} key={key}>
						<IconButton color="inherit">
							<Icon/> 
						</IconButton>
					</Tooltip>
				);
			})}
		</div>
	);
};


export default Icons;