---js
const title = "Tag Archive"
const layout = "layouts/feed.html"
const pagination = {
  data: "collections",
  size: 1,
  alias: "tag",
  filter: ['all', 'nav', 'blog', 'work', 'featuredWork', 'people', 'rss']
  };
const permalink = "/tag/{{ tag | slugify }}/"

function currentDate() {
	const stringDate = new Date().toISOString();
    const date = new Date(stringDate);
	return (date);
}
---
