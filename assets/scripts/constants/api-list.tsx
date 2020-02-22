import {
	GET,
	PUT,
	POST,
	DELETE
} from "./methods";


class Api implements IApi{
	public name;
	public method;
	public url;
	public data;
	constructor (name, method, url) {
		this.name = name;
		this.method = method;
		this.url = url;
	}
	public setApiData (data) {
		this.data = JSON.stringify(data);
	}
	
}

class SavePreferences extends Api {
	constructor (data) {
		super("savePreferences", POST, "/api/admin/preferences");
		this.setApiData(data);
	}
}
class ComponentEntitlement extends Api {
	constructor (data) {
		super("componentEntitlement", POST, "/api/component_entitlement");
		this.setApiData(data);
	}
}
class Admin extends Api {
	constructor () {
		super("s", GET, "/api/admin");
	}
}
class Login extends Api {
	constructor (data) {
		super("login", POST, "/api/log_in");
		this.setApiData(data);
	}
}
class GetUrls extends Api {
	constructor () {
		super("getUrls", GET, "/api/admin/url");
	}
}
class GetGroups extends Api {
	constructor () {
		super("getGroups", GET, "/api/admin/group");
	}
}
class GetComponents extends Api {
	constructor () {
		super("getComponents", GET, "/api/admin/component");
	}
}
class LogOut extends Api {
	constructor () {
		super("logOut", POST, "/api/admin/log_out");
	}
}
class SwitchAccount extends Api {
	constructor (data) {
		super("switchAccount", POST, "/api/admin/switch_account");
		this.setApiData(data);
	}
}
class GetNotes extends Api {
	constructor () {
		super("getNotes", GET, "/api/admin/notes");
	}
}
class SaveNotes extends Api {
	constructor (data) {
		super("saveNotes", POST, "/api/admin/notes");
		this.setApiData(data);
	}
}
class DeleteNotes extends Api {
	constructor (data) {
		super("deleteNotes", DELETE, "/api/admin/notes");
		this.setApiData(data);
	}
}
class GetProfile extends Api {
	constructor () {
		super("getProfile", GET, "/api/admin/profile");
	}
}
class SaveProfile extends Api {
	constructor (data) {
		super("saveProfile", POST, "/api/admin/profile");
		this.setApiData(data);
	}
}
class ListDatabases extends Api {
	constructor () {
		super("listDatabases", GET, "/api/admin/google_drive/list_databases");
	}
}
class UploadDatabase extends Api {
	constructor () {
		super("uploadDatabase", GET, "/api/admin/google_drive/upload_database");
	}
}


export default {
	SavePreferences,
	Admin,
	Login,
	ComponentEntitlement,
	LogOut,
	SwitchAccount,
	GetNotes,
	SaveNotes,
	DeleteNotes,
	GetProfile,
	SaveProfile,
	UploadDatabase,
	ListDatabases,
	GetComponents,
	GetGroups,
	GetUrls
};