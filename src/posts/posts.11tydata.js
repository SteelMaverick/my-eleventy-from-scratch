export const layout = "layouts/post.html";
export const permalink = "/blog/{{ title | slugify }}/index.html";

export function currentDate() {
	return (new Date()).toLocaleString();
};
