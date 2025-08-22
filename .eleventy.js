export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/output.css": "style.css", });
  eleventyConfig.addPassthroughCopy({ "src/fonts": "fonts", });
}
