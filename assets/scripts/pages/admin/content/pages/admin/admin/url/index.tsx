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

const {GetUrls} = apiList;

const Url = () => {
	const [urls, setUrls] = React.useState([]);
	React.useEffect(() => {
		let caller = new ApiCaller(new GetUrls())
		.success((urls: any) => {
			setUrls(urls)
		});
        return () => {
            caller.abort();
        }
	}, []);
	return (
		<Card classes={{}}>
    		<Card.Header showAction={false}>
    			<div>
    				Url
    			</div>
    		</Card.Header>
    		<Card.Body>
    			<div>
                    <TableContainer component={Paper}>
                      <Table>
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
    			</div>
    		</Card.Body>
    	</Card>
	);
};

export default Url;