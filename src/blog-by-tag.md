---
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
    - all
    - blog
    - work
permalink: "/blog/tags/{{ tag | slug }}/"
measure: wide
eleventyComputed:
  title: "Posts tagged with '{{ tag | capitalize }}'"
  blocks:
    - type: posts
      tag: "{{ tag }}"
---
