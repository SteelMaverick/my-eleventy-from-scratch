import { sortByDisplayOrder } from './src/utils/sort-by-display-order.js';
import { dateFilter } from './src/filters/date-filter.js';
import { w3DateFilter } from './src/filters/w3-date-filter.js';
import rssPlugin from '@11ty/eleventy-plugin-rss';

export default async function(eleventyConfig) {

  //Configure Eleventy. ORDER MATTERS
    eleventyConfig.setInputDirectory("src"); //Config API. Tells @eleventy to look in src for templates
    eleventyConfig.setOutputDirectory("dist"); //Finished templates will be written here. Eleventy will create this if it doesn't exist
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addFilter('dateFilter', dateFilter);
    eleventyConfig.addFilter('w3DateFilter', w3DateFilter);
    eleventyConfig.addPlugin(rssPlugin);

    //Creates and returns a collection of work
    eleventyConfig.addCollection("work", async (collection) => {
      return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md'));
    });

    //Creates and returns a collection of work that is set to be featured
    eleventyConfig.addCollection("featuredWork", async (collection) => {
      return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md')).filter(x => x.data.featured);
    });

    //Creates and returns a collection of blog posts in reverse date order
    eleventyConfig.addCollection("blog", async (collection) => {
      return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
    });

    //Creates and returns a collection of people ordered by file name (just a single integer)
    eleventyConfig.addCollection("people", async (collection) => {
      return collection.getFilteredByGlob('./src/people/*.md').sort((a, b) => {
        return Number(a.fileSlug) > Number(b.fileSlug) ? 1: -1;
      });
    });
};

//Required as there are no callback method to eleventy's API for these configurations. Need to export a config object
export const config = {
  markdownTemplateEngine: "njk", //Markdown files run through this template engine before becoming HTML
  dataTemplateEngine: 'njk', //DEPRECATED? Don't see this config in Eleventy's configuration documentation
  htmlTemplateEngine: 'njk', //HTML runs through this template engine before becoming better? HTML
};
