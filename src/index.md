---js
const title = "Issue 33"
const metaDesc = 'A made up agency site that you build if you take Learn Eleventy From Scratch, by Piccalilli'
const layout = "layouts/home.html"
const updated = "Last Updated: "
const intro = {
  eyebrow: 'Digital Marketing is our',
  main: 'Bread & Butter',
  summary: 'Let us help you create the perfect campaign with our multi-faceted team of talented creatives.',
  button: {
    text: 'See our work',
    url: '/work'
  },
  image: {
    src: '/images/bg/toast.jpg',
    alt: 'Buttered toasted white bread'
  }
};
const primaryCTA = {
  title: 'This is an agency that doesn’t actually exist',
  summary: 'This is the project site you build when you take the “Learn Eleventy From Scratch” course so it is all made up as a pretend context. You will learn a lot about Eleventy by building this site though. Take the course today!',
  button: {
    text: 'Buy a copy',
    url: 'https://learneleventyfromscratch.com'
  }
};
const featuredWork = {
  title: 'Selected work',
  summary: 'Some stuff that should give you an idea of what we’re all about.'
};
const studioFeed = {
  title: 'From inside the studio'
};

function currentDate() {
	return (new Date()).toLocaleString();
}
---

This is pretty _rad_, right?
