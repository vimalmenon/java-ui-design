import {
	GET,
	PUT,
	POST,
	DELETE
} from "./methods";
import {used} from "utility";


class Api implements IApi{
	public name;
	public method;
	public url;
	public data;
	public failureMessage;
	public successMessage;
	constructor (name: string, method:string, url:string) {
		this.name = name;
		this.method = method;
		this.url = url;
		this.failureMessage = false;
		this.successMessage = false;
		used(PUT);
	}
	public setApiData (data) {
		this.data = JSON.stringify(data);
	}
	public setFailureMessage (failureMessage: boolean) {
		this.failureMessage = failureMessage;
	}
	public setSuccessMessage (successMessage: boolean) {
		this.successMessage = successMessage;
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
		super("admin", GET, "/api/admin");
	}
}
class Login extends Api {
	constructor (data) {
		super("login", POST, "/api/log_in");
		this.setApiData(data);
		this.setFailureMessage(true);
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
		this.setSuccessMessage(true);
		this.setFailureMessage(true);
	}
}
class GetYoutubeScript extends Api {
	constructor () {
		super("getYoutubeScript", GET, "/api/admin/youtube_script");
	}
}
class SaveYoutubeScript extends Api {
	constructor (data) {
		super("saveYoutubeScript", POST, "/api/admin/youtube_script");
		this.setApiData(data);
	}
}
class DeleteYoutubeScript extends Api {
	constructor (data) {
		super("deleteYoutubeScript", DELETE, "/api/admin/youtube_script");
		this.setApiData(data);
	}
}
class RestoreDatabase extends Api {
	constructor (data) {
		super("restoreDatabase", POST, "/api/admin/google_drive/restore_database");
		this.setApiData(data);
		this.setSuccessMessage(true);
		this.setFailureMessage(true);
	}
}
class ApiSaveContact extends Api {
	constructor(data) {
		super("saveContact", POST, "/api/save_contact");
		this.setApiData(data);
	}
}

class GetAdminContact extends Api {
	constructor () {
		super("getAdminContact", GET, "/api/admin/contact");
	}
}

class SaveAdminContact extends Api {
	constructor(data) {
		super("saveAdminContact", POST, "/api/admin/contact");
		this.setApiData(data);
	}
}
class DeleteAdminContact extends Api {
	constructor(data) {
		super("deleteAdminContact", DELETE, "/api/admin/contact");
		this.setApiData(data);
	}
}
class GetProperties extends Api {
	constructor () {
		super("getProperties", GET, "/api/admin/property");
	}
}
class SaveProperties extends Api {
	constructor(data) {
		super("saveProperties", POST, "/api/admin/property");
		this.setApiData(data);
	}
}
class DeleteProperties extends Api {
	constructor(data) {
		super("deleteProperties", DELETE, "/api/admin/property");
		this.setApiData(data);
	}
}
class GetLinks extends Api {
	constructor() {
		super("getLink", GET, "/api/admin/link");
	}
}
class PostLinks extends Api {
	constructor(data) {
		super("postLink", POST, "/api/admin/link");
		this.setApiData(data);
	}
}
class DeleteLinks extends Api {
	constructor(data) {
		super("deleteLinks", DELETE, "/api/admin/link");
		this.setApiData(data);
	}
}
export default {
	Admin,
	Login,
	ComponentEntitlement,
	GetAdminContact,
	SaveAdminContact,
	DeleteAdminContact,
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
	ApiSaveContact,
	GetGroups,
	GetUrls,
	RestoreDatabase,
	GetYoutubeScript,
	SaveYoutubeScript,
	DeleteYoutubeScript,
	GetProperties,
	SaveProperties,
	DeleteProperties,
	GetLinks,
	PostLinks,
	DeleteLinks
};