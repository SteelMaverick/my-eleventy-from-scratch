# My Eleventy From Scratch
---

As the name implies, this is the work I have done working alongside Andy Bell's written course: [Learn Eleventy from Scratch](https://learneleventyfromscratch.com/)

The implementation of the course's website is different in that it isn't 100% copy and paste of the original code. I have made some updates and changes which include:

- The code syntax has been updated to use ECMAScript modules (ESM) over CommonJS to improve client performance.
- Dates are now formatted in JavaScript. Moment.js has been removed as the package is outdated and no longer recommended. This is also to prepare for the native implementation of Temporal (which hopefully should be in a matter of time).
- Dates are now formatted according to the region you're located in.
- Experimented using JavaScript for front-mattering data

This website contains only the complete HTML component of the course up to lesson 17. No CSS is implemented here as I have decided not to use SASS. I eventually want to attempt re-writing the CSS component using CSS only due to the improvements it has made over the years and to have less dependency on packages and frameworks where possible.

## NodeJS Package Dependencies
---

If you wish to render this website locally on your device, you will need to install the following NodeJS packages using `npm install`:

- Eleventy: `@11ty/eleventy`
- Eleventy-fetch: `@11ty/eleventy-fetch`
- Eleventy RSS plugin: `@11ty/eleventy-plugin-rss`

## Private/Sensitive Data Notice
---

**Sensitive Data Used**
- IP Address

If you decide to clone this project, please keep in mind it does use IP Addresses to help determine how to format the date. This information is stored in the `.cache` folder of the project. Do not remove this from `.gitignore` if you happen to use this project for your own needs. You have been warned.
