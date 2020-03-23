import * as React from "react";

import {Card} from "dumb-components";

import Button from '@material-ui/core/Button';

import {apiList} from "const";
import {ApiCaller} from "utility";
import ShowDialog from "./show-dialog";

const {UploadDatabase, ListDatabases, RestoreDatabase} = apiList;


const Database = () => {
	const [showDialog, setShowDialog] = React.useState(false);
	const [databaseList, setDatabaseList] = React.useState([]);
	const onUploadDatabase = () => {
		new ApiCaller(new UploadDatabase())
	}
	const onRestoreDatabase = () => {
		new ApiCaller(new ListDatabases())
			.success((data: any) => {
				setShowDialog(true);
				setDatabaseList(data);
			});
	}
	const onShowDialogSelect = (selectedDatabase) => {
		new ApiCaller(new RestoreDatabase(selectedDatabase))
			.success(() => {
				setShowDialog(false);
			});
		
	};
	return (
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
				onShowDialogSelect={onShowDialogSelect}
				databaseList={databaseList} />
		</div>
	);
};

export default Database;