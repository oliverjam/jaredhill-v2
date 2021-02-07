---
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
    - all
    - blog
permalink: "/blog/tags/{{ tag | slug }}/"
eleventyComputed:
  title: "Posts tagged with '{{ tag | capitalize }}'"
  blocks:
    - type: collection
      props:
        tag: "{{ tag }}"
---
