interface NotificationMessage {
	text: string;
}
let notification;

const setNotification = (toast) => {
	notification = toast;
};
const notifySuccess = (message: NotificationMessage) => {
	notification(message.text, { appearance: "success" });
};
const notifyError = (message: NotificationMessage) => {
	notification(message.text, { appearance: "error" });
};
const notifyInfo = (message: NotificationMessage) => {
	notification(message.text, { appearance: "info" });
};
const notifyWarning = (message: NotificationMessage) => {
	notification(message.text, { appearance: "warning" });
};
export default {
	setNotification,
	notifySuccess,
	notifyWarning,
	notifyError,
	notifyInfo
};