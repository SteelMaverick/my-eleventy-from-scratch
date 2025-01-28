export const siteInfo = {
    name: "Issue 33",
    url: "https://issue33.com",
    published: "Site Published: ",
    updated: "Page Last Updated: ",
    authorName: "Issue 33",
    authorEmail: "hi@piccalil.li"
};


/*export function publishedDate() {
	return (new Date()).toISOString();
};*/

export function publishedDate() {
    const stringDate = new Date().toISOString();
    const date = new Date(stringDate);
	return (date);
};



/*ESM
// siteData.js

// General site-wide metadata
export const siteInfo = {
  siteName: "My Static Site",
  siteUrl: "https://www.mystaticsite.com",
  description: "A blog about web development and programming.",
  author: "John Doe",
  socialLinks: {
    twitter: "@john_doe",
    github: "john-doe",
    linkedin: "john-doe-linkedin"
  },
};

// Blog posts data
export const posts = [
  {
    id: 1,
    title: "Introduction to JavaScript",
    slug: "introduction-to-javascript",
    date: "2024-12-01",
    author: "John Doe",
    summary: "An introduction to JavaScript for beginners.",
    tags: ["JavaScript", "Programming", "Beginner"],
    image: "/images/js-introduction.jpg",
  },
  {
    id: 2,
    title: "Understanding Asynchronous Programming",
    slug: "understanding-asynchronous-programming",
    date: "2024-12-05",
    author: "John Doe",
    summary: "Learn how asynchronous programming works in JavaScript.",
    tags: ["JavaScript", "Async", "Web Development"],
    image: "/images/async-programming.jpg",
  }
];

// Navigation data
export const navigation = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" }
];

// Footer data
export const footer = {
  copyright: "© 2024 My Static Site. All rights reserved.",
  footerLinks: [
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Terms of Service", link: "/terms-of-service" }
  ]
};

*/








/*CJS
module.exports = {
  // General site-wide metadata
  siteInfo: {
    siteName: "My Static Site",
    siteUrl: "https://www.mystaticsite.com",
    description: "A blog about web development and programming.",
    author: "John Doe",
    socialLinks: {
      twitter: "@john_doe",
      github: "john-doe",
      linkedin: "john-doe-linkedin"
    },
  },

  // Blog posts data
  posts: [
    {
      id: 1,
      title: "Introduction to JavaScript",
      slug: "introduction-to-javascript",
      date: "2024-12-01",
      author: "John Doe",
      summary: "An introduction to JavaScript for beginners.",
      tags: ["JavaScript", "Programming", "Beginner"],
      image: "/images/js-introduction.jpg",
    },
    {
      id: 2,
      title: "Understanding Asynchronous Programming",
      slug: "understanding-asynchronous-programming",
      date: "2024-12-05",
      author: "John Doe",
      summary: "Learn how asynchronous programming works in JavaScript.",
      tags: ["JavaScript", "Async", "Web Development"],
      image: "/images/async-programming.jpg",
    }
  ],

  // Navigation data
  navigation: [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" }
  ],

  // Footer data
  footer: {
    copyright: "© 2024 My Static Site. All rights reserved.",
    footerLinks: [
      { name: "Privacy Policy", link: "/privacy-policy" },
      { name: "Terms of Service", link: "/terms-of-service" }
    ]
  }
};*/
