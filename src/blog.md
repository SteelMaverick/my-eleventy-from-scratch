---js
const title = "The Issue 33 Blog"
const layout = "layouts/feed.html"
const pagination = {
  data: "collections.blog",
  size: 5
};
const permalink = "blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html"
const paginationPrevText = "Newer posts"
const paginationNextText = "Older posts"
const paginationAnchor = "#post-list"

function currentDate() {
	const stringDate = new Date().toISOString();
    const date = new Date(stringDate);
	return (date);
}
---

The latest articles from around the studio, demonstrating our design
thinking, strategy and expertise.
