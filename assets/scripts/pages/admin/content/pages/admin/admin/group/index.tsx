import * as React from "react";

import {Card} from "dumb-components";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Group = (props: any) => {
	const {groups} = props;
	return (
         <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell colSpan={5}>Groups</TableCell>
                      </TableRow>
                    </TableHead>
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
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper>
                
              </Paper>
            </Grid>
        </Grid>
		
	);
};

export default Group;