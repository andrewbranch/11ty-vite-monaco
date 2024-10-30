// @ts-check
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import { readFile } from "node:fs/promises";

/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addGlobalData(
    "config.vite.manifest",
    JSON.parse(await readFile("vite/dist/.vite/manifest.json", "utf-8"))
  );

  eleventyConfig.addPassthroughCopy({ "vite/dist": "." });

  return {
    dir: {
      input: "index.njk", // Input folder for Eleventy templates
      output: "dist", // Output folder (matches Vite's build folder)
    },
  };
}
