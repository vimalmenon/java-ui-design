import * as React from "react";

import {Card} from "dumb-components";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const Group = (props: any) => {
	const {groups} = props;
	return (
		<Card classes={{}}>
    		<Card.Header showAction={false}>
    			<div>
    				Groups
    			</div>
    		</Card.Header>
    		<Card.Body>
    			<div>
                    <TableContainer component={Paper}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Priority</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {groups.map((group: any, key) => (
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
    			</div>
    		</Card.Body>
    	</Card>
	);
};

export default Group;