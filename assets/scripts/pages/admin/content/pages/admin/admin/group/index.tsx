import * as React from "react";


import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableContainer from "@material-ui/core/TableContainer";


const Group = (props: any) => {
	const {groups} = props;
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} sm={6}>
				<TableContainer component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell colSpan={2}>Group</TableCell>
							</TableRow>
						</TableHead>
						<TableHead>
							<TableRow>
								<TableCell>Name</TableCell>
								<TableCell>Priority</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{groups.map((group: any, key:number) => (
								<TableRow key={key}>
									<TableCell>
										{group.name}
									</TableCell>
									<TableCell>
										{group.priority}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
		</Grid>
	);
};

export default Group;