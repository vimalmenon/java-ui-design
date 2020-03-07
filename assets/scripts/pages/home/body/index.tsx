import * as React from "react";


import {
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => {
    return createStyles({
      root: {
        display: "flex",
      }
	});
});


const Body =() => {
	const classes = useStyles();
	return (
		<section className={classes.root}>
			this is body
		</section>
	)
};

export default Body;