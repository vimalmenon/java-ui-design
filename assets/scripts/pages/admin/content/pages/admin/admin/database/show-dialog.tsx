import * as React from "react";


import {Dialog} from "dumb-components";

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import Button from "@material-ui/core/Button";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableContainer from "@material-ui/core/TableContainer";

import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>{
	return createStyles({
		dbSelected : {
			background: theme.palette.background.default
		}
	});
});

const ShowDialog = (props) => {
	const {showDialog, setShowDialog, databaseList, onShowDialogSelect} = props;
	const [dbSelected, setDbSelected] = React.useState<any>(null);
	const classes = useStyles();
	return (
		<Dialog
			open={showDialog}
			maxWidth={"xl"}
			fullWidth={false}
			onClose={() => setShowDialog(false)}>
			<Dialog.Header>
				Select a database to restore
			</Dialog.Header>
			<Dialog.Body>
				<TableContainer component={Paper}>
					<Table aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Id</TableCell>
								<TableCell>Name</TableCell>
								<TableCell>Date</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{databaseList.map(data => (
								<TableRow key={data.id} onClick={() => setDbSelected(data)} className={(dbSelected && data.id === dbSelected.id) ? classes.dbSelected: ""}>
									<TableCell component="th" scope="row">
										{data.id}
									</TableCell>
									<TableCell component="th" scope="row">
										{data.name}
									</TableCell>
									<TableCell component="th" scope="row">
										{data.createdDate}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Dialog.Body>
			<Dialog.Footer>
				<Button variant="contained" onClick={() => onShowDialogSelect(dbSelected)} color="primary" disabled={dbSelected ? false: true}>
					Select
				</Button>
				<Button variant="contained" onClick={() => setShowDialog(false)} color="primary">
					Cancel
				</Button>
			</Dialog.Footer>
		</Dialog>
	);
};

export default ShowDialog;