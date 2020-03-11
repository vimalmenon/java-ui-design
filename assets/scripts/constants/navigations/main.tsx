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
}
export const MainNavigation = [
	Home,
	Contact,
	Tutorials
];

export const MainUrlMapper = {
	"/" : Home,
	"/contact" : Contact,
	"/tutorials" : Tutorials
}
