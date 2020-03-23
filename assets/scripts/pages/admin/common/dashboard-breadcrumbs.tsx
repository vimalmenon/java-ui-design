import * as React from "react";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		link: {
			display: "flex",
		},
		icon: {
			marginRight: theme.spacing(0.5),
			width: 20,
			height: 20,
		},
	}),
);

const DashboardBreadcrumbs = (props) => {
	const classes = useStyles();
	const {common, history} = props;
	const {selectedNavigation}= common;
	const {breadcrumbs} = selectedNavigation;
	if (!breadcrumbs) {
		return null;
	}
	return (
		<Breadcrumbs aria-label="breadcrumb">
			{breadcrumbs.map((breadcrumb, key) => {
				const {Icon} = breadcrumb;
				return (
					<Link color="inherit" onClick={() => history.push(breadcrumb.link)} className={classes.link} key={key}>
						<Icon className={classes.icon}/>
						{breadcrumb.name}
					</Link>
				);
			})}
		</Breadcrumbs>
	);
};

const mapStateToProps = (state : any) => {
	return {      
		common : state.common
	};
};

export default connect(
	mapStateToProps
)(withRouter(DashboardBreadcrumbs));