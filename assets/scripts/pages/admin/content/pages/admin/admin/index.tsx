import * as React from "react";

import {apiList} from "const";
import {ApiCaller} from "utility";

import Url from "./url";
import Group from "./group";
import Database from "./database";
import Component from "./component";
import Properties from "./properties";
import Link from "./link";

import Slide from "@material-ui/core/Slide";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";


const {GetGroups} = apiList;


const AdminHome = () => {
	const [slide, setSlide] = React.useState(true);
	const [groups, setGroups] = React.useState([]);
	const [component, setComponent] = React.useState("database");
	React.useEffect(() => {
		setSlide(true);
		let caller = new ApiCaller(new GetGroups())
			.success((groups: any) => {
				setGroups(groups);
			});
		return () => {
			caller.abort();
			setSlide(false);
		};
	}, []);
	const onCheckbox = (e) => {
		const {name, checked} = e.target;
		if (checked) {
			setComponent(name);
		}
	};
	return (
		<Slide direction="right" in={slide} mountOnEnter unmountOnExit>
			<div>
				<div>
					<FormGroup row>
						<FormControlLabel
							label="Database"
							control={
								<Checkbox 
									checked={component === "database"} 
									onChange={onCheckbox} 
									name="database" />} />
						<FormControlLabel
							label="URL" 
							control={
								<Checkbox 
									checked={component === "url"} 
									onChange={onCheckbox} 
									name="url" />}/>
						<FormControlLabel
							control={ 
								<Checkbox 
									checked={component === "component"} 
									onChange={onCheckbox} 
									name="component" />}
							label="Component"/>
						<FormControlLabel
							control={
								<Checkbox 
									checked={component === "group"} 
									onChange={onCheckbox} 
									name="group" />}
							label="Group"/>
						<FormControlLabel
							control={
								<Checkbox 
									checked={component === "properties"} 
									onChange={onCheckbox} 
									name="properties" />}
							label="Properties"/>
						<FormControlLabel
							control={
								<Checkbox 
									checked={component === "preference"} 
									onChange={onCheckbox} 
									name="preference" />}
							label="Preference"/>
						<FormControlLabel
							control={
								<Checkbox 
									checked={component === "link"} 
									onChange={onCheckbox} 
									name="link" />}
							label="Link"/>
					</FormGroup>

					{(component === "database") ? <Database />: null}
					{(component === "url") ? <Url />: null}
					{(component === "component") ? <Component />: null}
					{(component === "group") ? <Group groups={groups} />: null}
					{(component === "properties") ? <Properties />: null}
					{(component === "link") ? <Link />: null}
				</div>
			</div>
		</Slide>
	);
};


export default AdminHome;