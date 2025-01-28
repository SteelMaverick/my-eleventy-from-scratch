export const siteInfo = {
    name: "Issue 33",
    url: "https://issue33.com",
    published: "Site Published: ",
    updated: "Page Last Updated: ",
    authorName: "Issue 33",
    authorEmail: "hi@piccalil.li"
};

export function publishedDate() {
    const stringDate = new Date().toISOString();
    const date = new Date(stringDate);
	return (date);
};
