import * as React from "react";

import {apiList} from "const";
import {ApiCaller} from "utility";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const {GetComponents} = apiList;

const Component = () => {
	const [components, setComponents] = React.useState([]);
	React.useEffect(() => {
		const caller = new ApiCaller(new GetComponents())
			.success((components: any) => {
				setComponents(components);
			});
		return () => {
			caller.abort();
		};
	}, []);
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} sm={6}>
				<TableContainer component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell colSpan={2}>Component</TableCell>
							</TableRow>
						</TableHead>
						<TableHead>
							<TableRow>
								<TableCell>Name</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{components.map((compoent: any, key) => (
								<TableRow key={key}>
									<TableCell>
										{compoent.name}
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

export default Component;