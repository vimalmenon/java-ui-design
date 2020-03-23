import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

function a11yProps(index: any, ariaLabel: string) {
	return {
		id: `${ariaLabel}-tab-${index}`,
		"aria-controls": `${ariaLabel}-tabpanel-${index}`,
	};
}
function TabPanel(props: any) {
	const { children, value, index, ariaLabel, ...other } = props;
	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`${ariaLabel}-tabpanel-${index}`}
			aria-labelledby={`${ariaLabel}-tab-${index}`}
			{...other}>
			<React.Fragment>
				{children}
			</React.Fragment>
		</Typography>
	);
}
export default function TabsComponent (props) {
	const {value, items, ariaLabel, onChange} = props;
	return (
		<React.Fragment>
			<AppBar position="static">
				<Tabs value={value} onChange={(event, value) => onChange(value)} aria-label={ariaLabel} centered>
					{items.map((item: any, key: number) => {
						return (<Tab label={item.label} {...a11yProps(key, ariaLabel)} key={key}/>);
					})}
				</Tabs>
			</AppBar>
			{items.map((item: any, key: number) => {
				return (<TabPanel value={value} index={key} key={key} ariaLabel={ariaLabel}><item.Component /></TabPanel>);
			})}
			
		</React.Fragment>
	);
}