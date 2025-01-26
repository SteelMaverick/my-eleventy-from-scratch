---js
const title = "The Issue 33 Blog"
const layout = "layouts/feed.html"
const updated = "Last Updated: "
const pagination = {
  data: "collections.blog",
  size: 5
};
const permalink = "blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html"
const paginationPrevText = "Newer posts"
const paginationNextText = "Older posts"
const paginationAnchor = "#post-list"

function currentDate() {
	return (new Date()).toLocaleString();
}
---

The latest articles from around the studio, demonstrating our design
thinking, strategy and expertise.
