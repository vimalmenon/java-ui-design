import * as React from "react";

import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableContainer from "@material-ui/core/TableContainer";
import Button from "@material-ui/core/Button";

import {ApiCaller} from "utility";
import {apiList, icons} from "const";
import {TextField} from "dumb-components";

const {GetLinks, PostLinks, DeleteLinks} = apiList;
const {Add, Edit, Delete} = icons;

const Link = () => {
	const [links, setLinks] = React.useState([]);
	const [link, setLink] = React.useState({id: null, name: "", link: ""});
	React.useEffect(() => {
		new ApiCaller(new GetLinks())
			.success((data) => {
				setLinks(data);
			});
	}, []);
	const onChange = (e) => {
		const{name, value} = e.target;
		setLink({
			...link,
			[name]:value
		});
	};
	const onSave = () => {
		new ApiCaller(new PostLinks([link]))
			.success((data) => {
				setLinks(data);
			});
	};
	const onDelete = (link) => {
		new ApiCaller(new DeleteLinks([link]))
			.success((data) => {
				setLinks(data);
			});
	};
	const onEdit = (link) => {
		setLink({
			...link
		});
	};
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} sm={6}>
				<TableContainer component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell colSpan={3}>
									Link
									<Add />
								</TableCell>
							</TableRow>
						</TableHead>
						<TableHead>
							<TableRow>
								<TableCell>Name</TableCell>
								<TableCell>Link</TableCell>
								<TableCell>Actions</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{links.map((link: any, key) => (
								<TableRow key={key}>
									<TableCell>
										{link.name}
									</TableCell>
									<TableCell>
										{link.link}
									</TableCell>
									<TableCell>
										<Edit onClick={() => onEdit(link)}/>
										<Delete onClick={() => onDelete(link)} />
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
						label="Name"
						name="name"
						value={link.name ||""}
						onChange={onChange} />
					<TextField
						label="Link"
						name="link"
						value={link.link || ""}
						onChange={onChange} />
					<Button variant="contained" color="primary" onClick={onSave}>
						Save
					</Button>
				</div>
			</Grid>
		</Grid>
	);
};

export default Link;