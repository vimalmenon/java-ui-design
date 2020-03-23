import * as React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";


const Navigation = (props: any) => {
	const {selectedNavigation, history, classes, navigationEntitlement, navigations} = props;
	const onClick = (navigation: any) => {
		navigation.open = !navigation.open;
		history.push(navigation.link);
	};
	return (
		<List className={classes.navigation}>
			{navigations.map((navigation: any, index) => {
				if ((navigation.checkEntitlement && navigationEntitlement[navigation.name]) || !navigation.checkEntitlement)  {
					const {Icon} = navigation;
					return (
						<React.Fragment key={index} >
							<ListItem 
								button 
								selected={(navigation.name === selectedNavigation.name)}
								onClick={() => onClick(navigation)}>
								<ListItemIcon>
									<Icon />
								</ListItemIcon>
								<ListItemText primary={navigation.name} />
								{navigation.navigations ? navigation.open ? <ExpandLess /> : <ExpandMore />: null}
							</ListItem>
							{navigation.navigations  ?
								<Collapse in={navigation.open} timeout="auto" unmountOnExit >
									{navigation.navigations.map((navigation, key) => {
										const {Icon} = navigation;
										return (
											<List component="div" disablePadding key={key}>
												<ListItem 
													button 
													className={classes.nested} 
													onClick={() => onClick(navigation)}
													selected={(navigation.name === selectedNavigation.name)}>
													<ListItemIcon>
														<Icon />
													</ListItemIcon>
													<ListItemText primary={navigation.name} />
												</ListItem>
											</List>
										);
									})}
								</Collapse> : 
								null
							}
						</React.Fragment>
					);
				}
			})}
		</List>
	);
};

export default Navigation;