import * as React from "react";

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Panel from "./panel";

function a11yProps(index: any, ariaLabel: string) {
	return {
		id: `${ariaLabel}-tab-${index}`,
		'aria-controls': `${ariaLabel}-tabpanel-${index}`,
	};
}
const TabComponent = (props: any) => {
	const {children, ariaLabel, items} = props;
	const [selectedTab, setSelectedTab] = React.useState(0);
	const tab = React.Children.map(children, (child, index) =>{
		return React.cloneElement(child, {index: index, selectedTab: selectedTab, ariaLabel});
	});
	return (
		<React.Fragment>
			<AppBar position="static">
				<Tabs value={selectedTab} onChange={(event, value) => setSelectedTab(value)} aria-label={ariaLabel} centered>
					{items.map((item: any, key: number) => {
						return (<Tab label={item.label} {...a11yProps(key, item.ariaLabel)} key={key}/>);
					})}
				</Tabs>
			</AppBar>
			{tab}
		</React.Fragment>
	);
};

TabComponent.Panel = Panel;
export default TabComponent;