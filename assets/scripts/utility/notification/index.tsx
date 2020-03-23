interface INotification {
	title: String;
	text : String;
}
let notification;

const setNotification = (toast) => {
	notification = toast;
};
const notify = (message:INotification) => {
	notification(message.text, { appearance: "error" });
};


export default {
	setNotification,
	notify
};