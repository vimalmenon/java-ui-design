const Home:INavigation = {
	name : "Home",
	link : "/",
	title : "Vimal Menon",
};
const Contact:INavigation = {
	name : "Contact",
	link : "/contact",
	title : "Contact | Vimal Menon",
};
const Tutorials:INavigation = {
	name : "Tutorials",
	link : "/tutorials",
	title : "Tutorials | Vimal Menon",	
};
const About:INavigation = {
	name : "About",
	link : "/about",
	title : "About | Vimal Menon",	
};
const PrivacyPolicy:INavigation = {
	name :"Privacy Policy",
	link : "/privacy-policy",
	title : "Privacy Policy | Vimal Menon",	
};
export const MainNavigation: INavigation[] = [
	About,
	Tutorials,
	Contact,
];

export const MainUrlMapper = {
	"/" : Home,
	"/about": About,
	"/contact" : Contact,
	"/tutorials" : Tutorials,
	"/privacy-policy" : PrivacyPolicy
};
