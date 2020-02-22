import * as React from "react";

import {Dialog} from "dumb-components";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const DialogGroups = (props: any) => {
	const {onClose, open, groups, onSwitchAccount, session} = props;
	return (
		<Dialog onClose={onClose} open={open}>
        <Dialog.Header>Switch Account</Dialog.Header>
        <List>
          {groups.map((group, key) => (
            <ListItem button onClick={() => {onClose(); onSwitchAccount(group)}} key={key} selected={session.group === group.name}>
              <ListItemText primary={group.name} />
            </ListItem>
          ))}
        </List>
      </Dialog>
	);
};

export default DialogGroups;