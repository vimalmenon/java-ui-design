import * as React from "react";


import {Card} from "dumb-components";

const Properties = () => {
	return (
		<Card classes={{}}>
    		<Card.Header showAction={false}>
    			<div>
    				Properties
    			</div>
    		</Card.Header>
    		<Card.Body>
    			<div>
                    {/*<TableContainer component={Paper}>
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
                    </TableContainer>*/}
    			</div>
    		</Card.Body>
    	</Card>
	);
};

export default Properties;