import * as React from "react";

import {ApiCaller} from "utility";
import {apiList} from "const";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const {GetAdminContact, SaveAdminContact, DeleteAdminContact} = apiList;

const Message = () => {
	const [contacts, setContacts] = React.useState([]);
	const [selected, setSelected] = React.useState(null);
	const onExpand = (key) => {
		if (selected === key) {
			setSelected(null);
		} else {
			setSelected(key);
		}
	};
	const onDelete = (contact) => {
		new ApiCaller(new DeleteAdminContact([contact]))
		.success((data) => {
			setContacts(data);
		});
	};
	React.useEffect(() => {
		new ApiCaller(new GetAdminContact())
		.success((data) => {
			setContacts(data);
		});
	}, []);
	return (
		<div>
			<TableContainer component={Paper}>
		      <Table>
		        <TableHead>
		          <TableRow>
		            <TableCell>Name</TableCell>
		            <TableCell>Email Address</TableCell>
		            <TableCell>Subject</TableCell>
		            <TableCell>Date</TableCell>
		            <TableCell>Action</TableCell>
		          </TableRow>
		        </TableHead>
		        <TableBody>
		          {contacts.map((contact:any, key) => (
		          	<React.Fragment key={key}>
			            <TableRow>
			              <TableCell>{contact.name}</TableCell>
			              <TableCell>{contact.emailAddress}</TableCell>
			              <TableCell>{contact.subject}</TableCell>
			              <TableCell>{contact.timeDate}</TableCell>
			              <TableCell>
			              	<span onClick={() => onDelete(contact)}><DeleteIcon /></span> 
			              	<span onClick={() => onExpand(key)}>{(selected ===key) ? <KeyboardArrowRightIcon /> : <KeyboardArrowDownIcon />}</span>
			              </TableCell>
			            </TableRow>
			            {(selected === key) ? 
			            <TableRow>
			            	<TableCell colSpan={5}>{contact.message}</TableCell>
			            </TableRow> : null}
		            </React.Fragment>
		          ))}
		        </TableBody>
		      </Table>
		    </TableContainer>
		</div>
	);
};

export default Message;