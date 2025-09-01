export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/output.css": "style.css", });
  eleventyConfig.addPassthroughCopy({ "src/fonts": "fonts", });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets", });
  eleventyConfig.addPassthroughCopy({ "src/favicon.png": "favicon.png" });
  eleventyConfig.ignores.add("README.md");
}
