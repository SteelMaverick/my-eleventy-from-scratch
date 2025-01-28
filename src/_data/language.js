import Fetch from "@11ty/eleventy-fetch";

export default async () => {
    let url = 'https://ipapi.co/languages/';
	try {
		const langPref = await Fetch(url, {
			duration: '5d',
			type: 'text',
		});
        return langPref;
	} catch (error) {
		console.log(error);
        return '';
	}
};
