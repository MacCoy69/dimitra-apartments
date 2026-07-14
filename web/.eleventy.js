module.exports = function (eleventyConfig) {
  // Statische Assets 1:1 übernehmen
  ["css", "js", "img", "video"].forEach((d) =>
    eleventyConfig.addPassthroughCopy("src/" + d)
  );
  eleventyConfig.addPassthroughCopy("src/favicon.svg");

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
};
