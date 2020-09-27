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
import Button from "@material-ui/core/Button";

import {TextField} from "dumb-components";

const {GetProperties, SaveProperties, DeleteProperties} = apiList;

const Properties = () => {
	const [properties, setProperties] = React.useState([]);
	const [property, setProperty] = React.useState({id:null,property: "",value:""});
	React.useEffect(() => {
		new ApiCaller(new GetProperties())
			.success((data) => {
				setProperties(data);
			});
	}, []);
	const onChange = (e) => {
		const {name, value} = e.target;
		setProperty({
			...property,
			[name]: value
		});
	};
	const onSave = () => {
		new ApiCaller(new SaveProperties([property]))
			.success((data) => {
				setProperties(data);
			});
	};
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} sm={6}>
				<TableContainer component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell colSpan={2}>Property</TableCell>
							</TableRow>
						</TableHead>
						<TableHead>
							<TableRow>
								<TableCell>Property</TableCell>
								<TableCell>Value</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{properties.map((property: any, key) => (
								<TableRow key={key}>
									<TableCell>
										{property.property}
									</TableCell>
									<TableCell>
										{property.value}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
			<Grid item xs={12} sm={6}>
				<div>
					<TextField
						label="Property"
						name="property"
						value={property.property}
						onChange={onChange} />
					<TextField
						label="Value"
						name="value"
						value={property.value}
						onChange={onChange} />
					<Button 
						variant="contained" 
						color="primary" 
						onClick={onSave}>
						Save
					</Button>
				</div>
			</Grid>
		</Grid>
	);
};

export default Properties;