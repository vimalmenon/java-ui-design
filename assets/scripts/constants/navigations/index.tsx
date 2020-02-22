import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import NoteIcon from '@material-ui/icons/Note';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CloudIcon from '@material-ui/icons/Cloud';


let {pathname} = location;

const signIn = {
    name : "Sign In",
    Icon : HomeIcon,
    link : "/",
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
    link : "/",
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
    link : "/admin/google-drive",
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
}
const admin = {
    name : "Admin",
    Icon : SupervisorAccountIcon,
    link : "/admin",
    title : "Admin | Vimal Menon",
    open : pathname.startsWith("/admin"),
    checkEntitlement: true,
    navigations : [
        googleDrive
    ],
    breadcrumbs : [
        dashboard,
        {
            name : "Admin",
            Icon : SupervisorAccountIcon,
        }
    ]
};
const preference = {
    name : "Preference",
    Icon : SettingsIcon,
    link : "/preference",
    title : "Preference | Vimal Menon",
    breadcrumbs : [
        dashboard,
        {
            name : "preference",
            Icon : SettingsIcon,
        }
    ]
};
const profile = {
    name : "Profile",
    Icon : AccountCircleIcon,
    link : "/profile",
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
    link : "/notes",
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
    link : "/calendar",
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
    link : "/expenses",
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
}
const navigations = [
    dashboard,
    profile,
    admin,
    preference,
    notes,
    expenses
];

const urlMapper = {
    "/": dashboard,
    "/admin" : admin,
    "/profile" : profile,
    "/preference" : preference,
    "/notes" : notes,
    "/calendar" : calendar,
    "/expenses" : expenses,
    "/admin/google-drive": googleDrive
};

const navigationByName = {
    signIn,
    dashboard,
    admin,
    preference,
    profile,
    notes,
    calendar,
    expenses,
    googleDrive,
    pageNotFound,
    unauthorised
}
export {navigations, urlMapper, navigationByName};