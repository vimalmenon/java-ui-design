import * as React from "react";

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flex:"1 1 50%",
			flexDirection:"column"
		},
	});
});

const Details = ({aboutMe}) => {
	const classes = useStyles();
	const {detail} = aboutMe;
	return (
		<section className={classes.root}>
			<div>
				{detail.title}
			</div>
			<div>
				{detail.details.map((text, key) => {
					return (
						<div key={key}>
							{text}
						</div>
					);
				})}
			</div>
			This is detailpage
		</section>
	);
};

export default Details;