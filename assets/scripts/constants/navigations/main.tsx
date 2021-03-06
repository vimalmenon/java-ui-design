const Home = {
	isShown : false,
	name : "Home",
	link : "/",
	title : "Vimal Menon",
};
const Contact = {
	isShown : true,
	name : "Contact",
	link : "/contact",
	title : "Contact | Vimal Menon",
};
const Tutorials = {
	isShown : true,
	name : "Tutorials",
	link : "/tutorials",
	title : "Tutorials | Vimal Menon",	
};
const About = {
	isShown : true,
	name : "About",
	link : "/about",
	title : "About | Vimal Menon",	
};
const PrivacyPolicy = {
	isShown : false,
	name :"Privacy Policy",
	link : "/privacy-policy",
	title : "Privacy Policy | Vimal Menon",	
};
export const MainNavigation = [
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
