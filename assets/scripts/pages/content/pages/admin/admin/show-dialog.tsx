import * as React from "react";


import {Dialog} from "dumb-components";

import Button from '@material-ui/core/Button';

const ShowDialog = (props) => {
	const {showDialog, setShowDialog, databaseList} = props;
	return (
		<Dialog
	        open={showDialog}
	        onClose={() => {setShowDialog(false)}}>
	        <Dialog.Header>
	        	Select a database to restore
        	</Dialog.Header>
	        <Dialog.Body>
	            {databaseList.map((data: any, key) => {
	            	return (
	            		<span key={key}>
	            			{data.name}
	        			</span>
	        		);
	            })}
	        </Dialog.Body>
	        <Dialog.Footer>
	          <Button variant="contained" onClick={() => {setShowDialog(false)}} color="primary">
	            Select
	          </Button>
	          <Button variant="contained" onClick={() => {setShowDialog(false)}} color="primary">
	            Cancel
	          </Button>
	        </Dialog.Footer>
  		</Dialog>
	);
};

export default ShowDialog;