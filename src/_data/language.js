import Fetch from "@11ty/eleventy-fetch";

export default async () => {
    let url = 'https://ipapi.co/languages/'; //"https://ipapi.co/json/";
	try {
		const langPref = await Fetch(url, {
			duration: '5d',
			type: 'text', //json
		});
        return langPref;
	} catch (error) {
		console.log(error);
        return '';
	}
};
