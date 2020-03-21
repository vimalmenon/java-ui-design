import * as React from "react";

import {ApiCaller} from "utility";
import {apiList} from "const";

const {GetAdminContact, SaveAdminContact,} = apiList;

const Message = () => {
	const [contacts, setContacts] = React.useState([]);
	React.useEffect(() => {
		new ApiCaller(new GetAdminContact())
		.success((data) => {
			console.log(data)
		});
	}, [])
	return (
		<div>
			this is message
		</div>
	);
};

export default Message;