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

const About = () => {
	const classes = useStyles();
	return (
		<section>
			this is about
		</section>
	);
};


export default About;