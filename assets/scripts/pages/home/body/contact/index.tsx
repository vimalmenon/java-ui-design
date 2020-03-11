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


const Contact = () => {
	const classes = useStyles();
	return (
		<section className={classes.root}>
			This is Contact
		</section>
	);
};

export default Contact;