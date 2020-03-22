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

const {UploadDatabase, ListDatabases, GetGroups, RestoreDatabase} = apiList;


const AdminHome = () => {
	const [slide, setSlide] = React.useState(true);
	const [groups, setGroups] = React.useState([]);
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
	return (
		<Slide direction="right" in={slide} mountOnEnter unmountOnExit>
			<div>
				<div>
					<Database />
				</div>
			    <div>
			    	<Url />
			    </div>
			    <div>
			    	<Component />
			    </div>
			    <div>
			    	<Group 
			    		groups={groups}/>
			    </div>
			    <div>
			    	<Properties />
			    </div>

		    </div>
		</Slide>
	);
};


export default AdminHome;