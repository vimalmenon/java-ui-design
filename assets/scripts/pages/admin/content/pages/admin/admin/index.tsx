import * as React from 'react';

import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

import {apiList} from "const";
import {ApiCaller} from "utility";

import {Card, Layout} from "dumb-components";

import Url from "./url";
import Component from "./component";
import Group from "./group";
import ShowDialog from "./show-dialog";

const {UploadDatabase, ListDatabases, GetGroups} = apiList;


const AdminHome = () => {
	const [slide, setSlide] = React.useState(true);
	const [showDialog, setShowDialog] = React.useState(false);
	const [databaseList, setDatabaseList] = React.useState([]);
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
	const onUploadDatabase = () => {
		new ApiCaller(new UploadDatabase())
		.success((data: any) => {
			console.log("this is called")
		});
	}
	const onRestoreDatabase = () => {
		new ApiCaller(new ListDatabases())
		.success((data: any) => {
			setShowDialog(true);
			setDatabaseList(data);
		});
	}
	return (
		<Slide direction="right" in={slide} mountOnEnter unmountOnExit>
			<div>
				<Card>
		    		<Card.Header showAction={false}>
		    			<span>
		    				Database Manager
		    			</span>
		    		</Card.Header>
		    		<Card.Body>
		    			<div>
		    				<Button variant="contained" color="primary" onClick={onUploadDatabase}>
						       Upload Database
						    </Button>
					    </div>
					    <div>
						    <Button variant="contained" color="primary" onClick={onRestoreDatabase}>
						       Restore Database
						    </Button>
		    			</div>
		    		</Card.Body>
		    	</Card>
				<ShowDialog 
					showDialog={showDialog}
					setShowDialog={setShowDialog}
					databaseList={databaseList} />
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

		    </div>
		</Slide>
	);
};


export default AdminHome;