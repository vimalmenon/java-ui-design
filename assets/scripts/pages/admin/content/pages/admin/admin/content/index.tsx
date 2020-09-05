import * as React from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const Content = () => {
	React.useEffect(() => {
	},[]);
	return (
		<div>
			<Accordion expanded={false}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header">
					<div>
						This is header
					</div>	
				</AccordionSummary>
				<AccordionDetails>
					<div>
						This is body
					</div>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={true}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header">
					<div>
						This is header
					</div>	
				</AccordionSummary>
				<AccordionDetails>
					<div>
						This is body
					</div>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};


export default Content;