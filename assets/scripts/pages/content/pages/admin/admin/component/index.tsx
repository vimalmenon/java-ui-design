import * as React from "react";

import {Card} from "dumb-components";
import {apiList} from "const";
import {ApiCaller} from "utility";

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
    				{components.map((component:any, key) => {
    					return (
    						<div key={key}>
    							{component.id} {component.name}
    						</div>
    					);
    				})}
    			</div>
    		</Card.Body>
    	</Card>
	);
};

export default Component;