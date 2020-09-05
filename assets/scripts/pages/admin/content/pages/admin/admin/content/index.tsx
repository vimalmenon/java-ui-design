import * as React from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";


import {ApiCaller} from "utility";
import {apiList} from "const";

const {GetContent, PostContent} = apiList;

const Content = () => {
	const [contents, setContents]= React.useState<any>([]);
	const [newContent, setNewContent] = React.useState<any>({});
	const [selectedIndex, setSelectedIndex] = React.useState(0);
	React.useEffect(() => {
		new ApiCaller(new GetContent())
			.success((content) => {
				setContents(content);
			});
	},[]);
	const updateContent = (e)=> {
		const{name, value}= e.target;
		setNewContent({...newContent,[name]:value});
	};
	const onSave = () => {
		new ApiCaller(new PostContent(newContent))
			.success((content) => {
				setContents(content);
			});
	};
	return (
		<div>
			{contents.map((content, key) => {
				return (
					<Accordion expanded={selectedIndex===key} onChange={()=>setSelectedIndex(key)} key={key}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}>
							<div>
								{content.name}
							</div>	
						</AccordionSummary>
						<AccordionDetails>
							<div>
								{content.content}
							</div>
						</AccordionDetails>
					</Accordion>
				);
			})}
			<Accordion expanded={contents.length ===selectedIndex} onChange={()=>setSelectedIndex(contents.length)}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}>
					<Typography component="div">
						Add Content
					</Typography>	
				</AccordionSummary>
				<AccordionDetails>
					<Typography component="div">
						<TextField 
							color="secondary"
							label="Name"
							name="name"
							value={newContent.name ||""}
							fullWidth={true}
							onChange={updateContent} />
						<TextField 
							color="secondary"
							label="Content"
							name="content"
							multiline={true}
							rows={5}
							value={newContent.content ||""}
							fullWidth={true}
							onChange={updateContent} />
						<div>
							<Button variant="contained" color="secondary" onClick={onSave}>
								Save
							</Button>
						</div>
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};


export default Content;