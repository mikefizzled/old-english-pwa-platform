module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("docs/assets");
  eleventyConfig.addPassthroughCopy("docs/data");
  eleventyConfig.addPassthroughCopy("docs/images");
  eleventyConfig.addPassthroughCopy("docs/scripts");
  eleventyConfig.addPassthroughCopy("docs/styles");
  eleventyConfig.addPassthroughCopy("docs/CNAME");

  return {
    dir: {
      input: "docs",
      output: "dist"
    },

    templateFormats: ["html"],
    
    htmlTemplateEngine: false,

    dataTemplateEngine: false,

    pathPrefix: "/old-english-pwa-platform/"
  };
};
