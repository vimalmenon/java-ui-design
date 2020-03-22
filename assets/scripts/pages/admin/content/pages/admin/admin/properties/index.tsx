import * as React from "react";


import {Card} from "dumb-components";

import {apiList} from "const";
import {ApiCaller} from "utility";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const {GetProperties, SaveProperties, DeleteProperties} = apiList;

const Properties = () => {
	const [properties, setProperties] = React.useState([]);
	React.useEffect(() => {
		new ApiCaller(new GetProperties())
		.success((data) => {
			setProperties(data);
		});
	}, []);
	return (
		<Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            	<TableContainer component={Paper}>
                    <Table>
                      	<TableHead>
	                      <TableRow>
	                        <TableCell colSpan={5}>Properties</TableCell>
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
        </Grid>
	);
};

export default Properties;