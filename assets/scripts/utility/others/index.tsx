export const rgbToNumbers = (rgbString: string) => {
	return rgbString.substring(4, rgbString.length-1)
		.replace(/ /g, '')
		.split(',');
}
export const replaceUrlBackslashAtEnd = (url: string) => {
	if (url.substring(url.length-1, url.length) === "/" && !(url === "/")) {
		return url.substring(0, url.length-1);
	}
	return url;
}