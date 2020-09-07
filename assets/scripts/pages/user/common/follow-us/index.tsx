import * as React from "react";

import { connect } from "react-redux";
import {icons} from "const";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "@material-ui/core/Link";


const FollowUs = ({common}) => {
	const {socialMedias}=common;
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