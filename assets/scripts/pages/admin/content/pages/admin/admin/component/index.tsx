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

const {GetComponents} = apiList;

const Component = () => {
	const [components, setComponents] = React.useState([]);
	React.useEffect(() => {
		let caller = new ApiCaller(new GetComponents())
		.success((components: any) => {
			setComponents(components)
		});
        return () => {
            caller.abort();
        };
	}, []);
	return (
		<Card classes={{}}>
    		<Card.Header showAction={false}>
    			<span>
    				Component
    			</span>
    		</Card.Header>
    		<Card.Body>
    			<div>
                    <TableContainer component={Paper}>
                      <Table>
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
    			</div>
    		</Card.Body>
    	</Card>
	);
};

export default Component;