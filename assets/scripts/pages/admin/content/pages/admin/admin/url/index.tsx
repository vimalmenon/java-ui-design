import * as React from "react";

import {Card} from "dumb-components";

import {apiList} from "const";
import {ApiCaller} from "utility";

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
    				{urls.map((url:any, key) => {
    					return (
    						<div key={key}>
    							{url.id} {url.url} {url.method}
    						</div>
    					);
    				})}
    			</div>
    		</Card.Body>
    	</Card>
	);
};

export default Url;