import * as React from "react";

import {Card} from "dumb-components";


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
    				{groups.map((group, key) => {
    					return (
	    					<div key={key}>
	    						{group.id} {group.name} {group.priority}
	    					</div>
    					);
    				})}
    			</div>
    		</Card.Body>
    	</Card>
	);
};

export default Group;