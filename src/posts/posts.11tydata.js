export const layout = "layouts/post.html";
export const permalink = "/blog/{{ title | slugify }}/index.html";

export function currentDate() {
	const stringDate = new Date().toISOString();
    const date = new Date(stringDate);
	return (date);
};
