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

import {
	Theme,
	makeStyles,
	createStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme:Theme) => {
	return createStyles({
		root: {
			display: "flex",
			flexDirection:"column",
			flex:"1 1 100%"
		},
	});
});

const {GetContent, PostContent, DeleteContent} = apiList;

const Content = () => {
	const [contents, setContents] = React.useState<any>([{}]);
	const [selectedIndex, setSelectedIndex] = React.useState(0);
	const classes = useStyles();
	React.useEffect(() => {
		new ApiCaller(new GetContent())
			.success((content) => {
				setContents([...content, {}]);
			});
	},[]);
	const updateContent = (e:any, key:any)=> {
		const{name, value}= e.target;
		let newContent=contents[key]||{};
		newContent = {...newContent,[name]:value};
		contents[key]= newContent;
		setContents([...contents]);
	};
	const onSave = (data) => {
		new ApiCaller(new PostContent(data))
			.success((content) => {
				setContents(content);
			});
	};
	const onDelete = (data) => {
		new ApiCaller(new DeleteContent(data))
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
							<Typography component="div" className={classes.root}>
								<TextField 
									color="secondary"
									label="Name"
									name="name"
									value={(content.name) ||""}
									fullWidth={true}
									onChange={(e)=>updateContent(e, key)} />
								<TextField 
									color="secondary"
									label="Content"
									name="content"
									multiline={true}
									rows={10}
									value={content.content ||""}
									fullWidth={true}
									onChange={(e)=>updateContent(e, key)} />
								<div>
									<Button variant="contained" color="secondary" onClick={() =>onSave(content)}>
										Save
									</Button>
									{content.id? 
										<Button variant="contained" color="secondary" onClick={() =>onDelete(content)}>
											Delete
										</Button>
										: null
									}
								</div>
							</Typography>
						</AccordionDetails>
					</Accordion>
				);
			})}
		</div>
	);
};


export default Content;