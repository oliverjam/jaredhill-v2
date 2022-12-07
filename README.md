# Jared Hill's portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/c3be5891-02df-47ac-a540-6c50ee29c480/deploy-status)](https://app.netlify.com/sites/jaredhill-v2/deploys)

## Run locally

To run this site on your own computer you'll need Git, Node and npm installed.

1. Clone this repository
1. Open a new terminal inside the directory
1. Run `npm install` to install all the dependencies it needs
1. Run `npm run dev` to start a development server

Your terminal will show the URL you can access the local site at (this defaults to http://localhost:8080).

## Content editing

Any markdown files added to `src/blog/` or `src/work/` will create pages in their respective sections on the site. They all need `title` and `date` properties added to their "frontmatter" (the metadata at the beginning between the `---` fences).

Blog posts can set `draft: true` to stop them showing up on the site. Work posts need `featured: true` set in order to show up on the homepage. All work posts will be available at their URL however, so they can be directly linked to.

Work posts need a `description` set, and a `cover` pointing to the image for that case study. They should also set the `info` property with sub-properties for `date`, `timeline`, `type` and `role`. These will render in a box at the start of the case study.

### Custom elements

There are a few custom elements available to enhance the Markdown.

- `<call-out>Important</call-out>` makes text bigger
- `<light-box src="/some-image.png">Caption</light-box>` creates an image that can be expanded on click
- `<yt-embed id="abcdef"></yt-embed>` embeds the YouTube video with that ID

## Deployment

The site is currently hosted on Netlify. This is a static host with a build system that can generate our site when we push changes to the GitHub repo.

1. Push to `main` branch (i.e. by merging a PR)
1. Netlify detects the change and pulls the new code
1. Netlify spins up a computer in the cloud and runs our build script
1. `npm run build` our build script runs Eleventy to generate the `_site` directory
1. Netlify deploys the `_site` directory

Any host that supports builds can be configured this way—you just need to tell it to run `npm run build` and to deploy the `_site` directory afterwards.

## Development

The site is generated using the [Eleventy](https://www.11ty.dev/) static site generator with it's [WebC plugin](https://www.11ty.dev/docs/languages/webc/). WebC allows pages and components to be defined using standard HTML, CSS and JS.

Eleventy is configured in the `eleventy.config.js` file. This includes loading Markdown plugins and helper functions for things like formatting dates.

All the actual site code lives inside the `src/` directory.

### Pages

Eleventy will turn anything inside `src/` that it recognises as a page template into an HTML file. These files are generated into a `_site` directory—this is what gets deployed to a hosting provider. Page paths are determined by the template file paths—for example `src/about.md` would turn into `_site/about/index.html`.

### WebC

All pages use WebC as the templating language. They are HTML or Markdown files that can contain frontmatter.

WebC files can include a `<style>` tag. This can include CSS that will only affect the elements in that file, and is automatically included in the final HTML page.

All files in `src/_components/` are automatically available for use in pages. The file name determines the element name: for example `src/_components/call-out.html` creates an element you can use with `<call-out>Example</call-out>`.

#### Patched problem

Using WebC for Markdown pages is kind of a hack. Since it treats the content as HTML it auto-escapes blockquote-syntax. E.g. it turns `> a quote` into `&lt; a quote`.

See [this issue](https://github.com/11ty/eleventy-plugin-webc/issues/34) for more info. For now I've patched out the escaping in WebC just for this repo (see `patches/@11ty+webc+0.8.0.patch`).

### CSS

Most CSS is scoped to individual pages or components using WebC. However some global CSS is loaded by the `src/_components/page-layout.html` element. These files are in `src/_css` and include styles that apply to everything rather than specific components.

### JS

Components that need client-side JS can include a `<script>` tag which will be automatically included on the page. This can be used to enhance a component with additional functionality (e.g. see `src/_components/light-box.html`).

### Layouts

Eleventy uses "layouts" to handle repeated content. For example all blog posts should have the same template. By setting their layout once in `src/blog/blog.json` we can ensure they all have the same structure and styling.

Layouts can be nested—all pages use the `src/_layouts/base.html` layout at their root as this handles the metadata each page needs (loading CSS/JS, SEO tags etc).

### Assets

Any files inside `src/_assets` will be available in the final site at the `/assets/` path. E.g. `src/_assets/about-1.png` can be loaded at `/assets/about-1.png`.

Additionally any images inside `src/work/` will be available at `/work/`, so example images can be co-located with case studies.
