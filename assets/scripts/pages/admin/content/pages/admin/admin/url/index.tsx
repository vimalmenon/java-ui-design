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


const {GetUrls} = apiList;

const Url = () => {
	const [urls, setUrls] = React.useState([]);
	React.useEffect(() => {
		const caller = new ApiCaller(new GetUrls())
			.success((urls: any) => {
				setUrls(urls);
			});
		return () => caller.abort();
	}, []);
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} sm={6}>
				<TableContainer component={Paper}>
					<Table stickyHeader>
						<TableHead>
							<TableRow>
								<TableCell colSpan={2}>Url</TableCell>
							</TableRow>
						</TableHead>
						<TableHead>
							<TableRow>
								<TableCell>Name</TableCell>
								<TableCell>Method</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{urls.map((url: any, key) => (
								<TableRow key={key}>
									<TableCell>
										{url.url}
									</TableCell>
									<TableCell>
										{url.method}
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

export default Url;