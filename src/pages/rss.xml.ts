import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@consts";

type Context = {
  site: string;
};

export async function GET(context: Context) {
  const posts = await getCollection("blog");
  const projects = await getCollection("projet");

  const items = [];
  for(let i=0; i<posts.length; i++) 
    if(!posts[i].data.draft) items.push(posts[i]);

  for(let i=0; i<projects.length; i++) 
    if(!projects[i].data.draft) items.push(projects[i]);
  

  items.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  return rss({
    trailingSlash: false,
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.summary,
      pubDate: item.data.date,
      link: item.slug.startsWith("blog")
        ? `/blog/${item.slug}`
        : `/projet/${item.slug}`,
    })),
  });
}
