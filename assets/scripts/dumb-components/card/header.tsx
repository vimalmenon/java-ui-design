import * as React from "react";


import CardHeader from '@material-ui/core/CardHeader';

import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const Header = (props: any) => {
	const {children, showAction, ...rest} = props;
	const actions = showAction ? (<IconButton aria-label="actions"><MoreVertIcon /></IconButton>) : null;
	return (
      <CardHeader
        action={actions}
        title={children}
        {...rest}/>
	)
};


export default Header;