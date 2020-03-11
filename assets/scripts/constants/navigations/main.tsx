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
export const MainNavigation = [
	Home,
	Contact
];

export const MainUrlMapper = {
	"/" : Home,
	"/contact" : Contact
}
