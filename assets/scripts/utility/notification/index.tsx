interface INotification {
	text : String;
}
let notification;

const setNotification = (toast) => {
	notification = toast;
};
const notifySuccess = (message:INotification) => {
	notification(message.text, { appearance: "success" });
};
const notifyError = (message:INotification) => {
	notification(message.text, { appearance: "error" });
};
const notifyInfo = (message:INotification) => {
	notification(message.text, { appearance: "info" });
};
const notifyWarning = (message:INotification) => {
	notification(message.text, { appearance: "warning" });
};
export default {
	setNotification,
	notifySuccess,
	notifyWarning,
	notifyError,
	notifyInfo
};