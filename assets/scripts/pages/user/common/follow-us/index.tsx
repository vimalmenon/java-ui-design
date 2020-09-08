declare var navigator;

import * as React from "react";

import { connect } from "react-redux";
import {icons} from "const";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "@material-ui/core/Link";
import EmailIcon from "@material-ui/icons/Email";
import Snackbar from "@material-ui/core/Snackbar";



const FollowUs = ({common}) => {
	const {socialMedias}=common;
	const copy = (value) => {
		navigator.clipboard.writeText(value);
		console.log(value);
	};
	return (
		<>
			{socialMedias.map(({id, name, title, url}) => {
				const Icon = icons[name];
				return (
					<Tooltip title={title} aria-label={name} key={id}>
						<Link href={url} target="_blank" color="inherit">
							<IconButton color="inherit">
								<Icon/> 
							</IconButton>
						</Link>
					</Tooltip>
				);
			})}
			<Tooltip title={"support@vimalmenon.com"} aria-label={"support@vimalmenon.com"}>
				<IconButton color="inherit" onClick={() => copy("support@vimalmenon.com")}>
					<EmailIcon/> 
				</IconButton>
			</Tooltip>
			<Snackbar
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				open={false}
				autoHideDuration={6000}
				message="Note archived" />
		</>
	);
};

const mapStateToProps = (state:any) => {
	return {
		common: state.common
	};
};

export default connect(
	mapStateToProps
)(FollowUs);