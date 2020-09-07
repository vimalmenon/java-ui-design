import HomeIcon from "@material-ui/icons/Home";
import NoteIcon from "@material-ui/icons/Note";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CloudIcon from "@material-ui/icons/Cloud";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EmailIcon from "@material-ui/icons/Email";


let {pathname} = location;

const signIn = {
	name : "Sign In",
	Icon : HomeIcon,
	link : "/admin",
	title : "Sign In | Vimal Menon",
	breadcrumbs : [
		{
			name : "Home",
			Icon : HomeIcon
		}
	]
};

const dashboard = {
	name : "Home",
	Icon : HomeIcon,
	link : "/admin",
	title : "Dashboard | Vimal Menon",
	breadcrumbs : [
		{
			name : "Home",
			Icon : HomeIcon
		}
	]
};

const pageNotFound = {
	name : "Page Not Found",
	Icon : ReportProblemIcon,
	link : "/",
	title : "Page Not found | Vimal Menon",
	breadcrumbs : [
		dashboard,
		{
			name : "Page Not Found",
			Icon : ReportProblemIcon
		}
	]
};
const googleDrive = {
	name : "Google Drive",
	Icon : CloudIcon,
	link : "/admin/admin/google-drive",
	title : "Google Drive | Admin | Vimal Menon",
	checkEntitlement: true,
	breadcrumbs : [
		dashboard,
		{
			name : "Admin",
			Icon : SupervisorAccountIcon,
			link : "/admin",
		},
		{
			name : "Google Drive",
			Icon : CloudIcon,
		}
	]
};
const YoutubeScript = {
	name : "Youtube Script",
	Icon : YouTubeIcon,
	link : "/admin/admin/youtube-script",
	title : "Youtube Script | Admin | Vimal Menon",
	checkEntitlement: true,
	breadcrumbs : [
		dashboard,
		{
			name : "Admin",
			Icon : SupervisorAccountIcon,
			link : "/admin",
		},
		{
			name : "Youtube Script",
			Icon : YouTubeIcon,
		}
	]
};
const message = {
	name : "Message",
	Icon : EmailIcon,
	link : "/admin/admin/message",
	title : "Message | Admin | Vimal Menon",
	checkEntitlement: true,
	breadcrumbs : [
		dashboard,
		{
			name : "Admin",
			Icon : SupervisorAccountIcon,
			link : "/admin",
		},
		{
			name : "Message",
			Icon : EmailIcon,
		}
	]
};
const admin = {
	name : "Admin",
	Icon : SupervisorAccountIcon,
	link : "/admin/admin",
	title : "Admin | Vimal Menon",
	open : pathname.startsWith("/admin"),
	checkEntitlement: true,
	navigations : [
		//googleDrive,
		YoutubeScript,
		message
	],
	breadcrumbs : [
		dashboard,
		{
			name : "Admin",
			Icon : SupervisorAccountIcon,
		}
	]
};
const profile = {
	name : "Profile",
	Icon : AccountCircleIcon,
	link : "/admin/profile",
	title : "Profile | Vimal Menon",
	breadcrumbs : [
		dashboard,
		{
			name : "Profile",
			Icon : AccountCircleIcon,
		}
	]
};
const notes = {
	name : "Notes",
	Icon : NoteIcon,
	link : "/admin/notes",
	title : "Notes | Vimal Menon",
	breadcrumbs : [
		dashboard,
		{
			name : "Note",
			Icon : NoteIcon,
		}
	]
};
const calendar = {
	name : "Calendar",
	Icon : CalendarTodayIcon,
	link : "/admin/calendar",
	title : "Calendar | Vimal Menon",
	breadcrumbs : [
		dashboard,
		{
			name : "Calendar",
			Icon : NoteIcon,
		}
	]
};
const expenses = {
	name : "Expenses",
	Icon : AttachMoneyIcon,
	link : "/admin/expenses",
	title : "Expenses | Vimal Menon",
	breadcrumbs : [
		dashboard,
		{
			name : "Expenses",
			Icon : AttachMoneyIcon,
		}
	]
};
const unauthorised = {
	name : "Unauthorised",
	Icon : ReportProblemIcon,
	title : "Unauthorised | Vimal Menon",
	breadcrumbs : [
		dashboard,
		{
			name : "Unauthorised",
			Icon : ReportProblemIcon,
		}
	]
};
const navigations = [
	dashboard,
	profile,
	admin,
	notes,
	expenses
];

const home = {
	name : "Home",
	link : "/",
	title : "Vimal Menon",
};
const PrivacyPolicy = {
	name : "Privacy Policy",
	link : "/privacy-policy",
	title : "Privacy Policy | Vimal Menon",
	breadcrumbs : [
		home
	]
};

const tutorials = {
	name : "Tutorials",
	link : "/tutorials",
	title : "Tutorials | Vimal Menon",
	breadcrumbs : [
		home
	]
};
const mainNavigations = [
	tutorials
];
const extraNavigations = [
	tutorials,
	PrivacyPolicy
];

const urlMapper = {
	"/":home,
	"/tutorials":tutorials,
	"/privacy_policy":PrivacyPolicy,
	"/admin": dashboard,
	"/admin/admin" : admin,
	"/admin/profile" : profile,
	"/admin/notes" : notes,
	"/admin/calendar" : calendar,
	"/admin/expenses" : expenses,
	"/admin/admin/google-drive": googleDrive,
	"/admin/admin/youtube-script" : YoutubeScript,
	"/admin/admin/message" : message
};

const navigationByName = {
	home,
	PrivacyPolicy,
	tutorials,
	signIn,
	dashboard,
	admin,
	profile,
	notes,
	calendar,
	expenses,
	googleDrive,
	pageNotFound,
	unauthorised,
	YoutubeScript,
	message
};
export {navigations, urlMapper, navigationByName, mainNavigations, extraNavigations};