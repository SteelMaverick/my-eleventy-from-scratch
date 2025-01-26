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
	return (new Date()).toLocaleString();
}
---
