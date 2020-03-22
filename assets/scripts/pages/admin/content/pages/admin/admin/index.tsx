import * as React from 'react';

import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

import {apiList} from "const";
import {ApiCaller} from "utility";

import {Card, Layout} from "dumb-components";

import Url from "./url";
import Component from "./component";
import Group from "./group";
import Properties from "./properties";
import Database from "./database";

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';


const {UploadDatabase, ListDatabases, GetGroups, RestoreDatabase} = apiList;


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
        }
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
				        control={
				        	<Checkbox 
				        		checked={component === "database"} 
				        		onChange={onCheckbox} 
				        		name="database" />}
				        label="Database"/>
				      <FormControlLabel
				        control={
				        	<Checkbox 
				        		checked={component === "url"} 
				        		onChange={onCheckbox} 
				        		name="url" />}
				        label="URL" />
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
				    </FormGroup>
				    {(component === "database") ? <Database />: null}
					{(component === "url") ? <Url />: null}
					{(component === "component") ? <Component />: null}
					{(component === "group") ? <Group groups={groups}/>: null}
					{(component === "properties") ? <Properties/>: null}
				</div>
		    </div>
		</Slide>
	);
};


export default AdminHome;