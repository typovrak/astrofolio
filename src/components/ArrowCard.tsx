import { formatDate, readingTime } from "@lib/utils";
import type { CollectionEntry } from "astro:content";
import { COLORS } from "@consts";
import { onMount } from "solid-js";

type Props = {
  entry: CollectionEntry<"blog"> | CollectionEntry<"projet">;
  pill?: boolean;
};

export default function ArrowCard({ entry, pill }: Props) {
  onMount(() => {
    // this onMount is only for /rechercher page
    const setPathnameCount = (): undefined => {
      const pathnamesCountString = window.localStorage.getItem('pathnamesCount');
      if(!pathnamesCountString) return;

      const pathnamesCount = JSON.parse(pathnamesCountString);
      const item: Array<{pathname: string, count: number}> = pathnamesCount.filter(({pathname} : {pathname:string, count:number}) => pathname === `/${entry.collection}/${entry.slug}`);
      if(!item.length) return;

      const view = document.getElementById(`${entry.collection}-${entry.slug}`);
      if(!view) return;

      const count = item[0].count ?? 0;
      view.textContent = `${count} vue${count > 1 ? 's' : '' }`;
      return
    }

    setPathnameCount();
  });

  return (
    <a
      data-collection={entry.collection}
      data-slug={entry.slug}
      href={`/${entry.collection}/${entry.slug}`}
      class="group p-4 gap-3 flex items-center border rounded-lg hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out"
    >
      <div class="w-full group-hover:text-black group-hover:dark:text-white blend">
        <div class="flex flex-wrap items-center gap-2 justify-between">
          {pill && (
            <div class="text-sm capitalize px-2 py-0.5 rounded-full border border-black/15 dark:border-white/25">
              {entry.collection === "blog" ? "Blog" : "Projet"}
            </div>
          )}
          <div class="text-sm uppercase">
            {formatDate(entry.data.date, entry.collection === "blog")}
          </div>

          <div id={`${entry.collection}-${entry.slug}`} class="text-sm uppercase text-clip bg-gradient-logo"
            style={`--color-1:rgb(${
              COLORS.LOGO[entry.collection === "blog" ? 3 : 2][0]
            });--color-2:rgb(${
              COLORS.LOGO[entry.collection === "blog" ? 3 : 2][1]
            });--color-3:rgb(${
              COLORS.LOGO[entry.collection === "blog" ? 3 : 2][2]
            });`}
          >0 vue</div>

          <div class="flex items-center gap-2">
            <svg class="size-4 stroke-current">
              <use href="/ui.svg#book-open"></use>
            </svg>
            <div class="text-sm uppercase">{readingTime(entry.body, true)}</div>
          </div>
        </div>
        <div
          class="font-semibold mt-3 text-clip bg-gradient-logo"
          style={`--color-1:rgb(${
            COLORS.LOGO[entry.collection === "blog" ? 3 : 2][0]
          });--color-2:rgb(${
            COLORS.LOGO[entry.collection === "blog" ? 3 : 2][1]
          });--color-3:rgb(${
            COLORS.LOGO[entry.collection === "blog" ? 3 : 2][2]
          });`}
        >
          {entry.data.title}
        </div>

        <div class="text-sm line-clamp-2">{entry.data.summary}</div>
        <ul class="flex flex-wrap mt-2 gap-1">
          {entry.data.tags.map(
            (
              tag: string // this line has an error; Parameter 'tag' implicitly has an 'any' type.ts(7006)
            ) => (
              <li class="text-xs uppercase py-0.5 px-1 rounded bg-black/5 dark:bg-white/20 text-black/75 dark:text-white/75">
                {tag}
              </li>
            )
          )}
        </ul>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white"
      >
        <line
          x1="5"
          y1="12"
          x2="19"
          y2="12"
          class="scale-x-0 group-hover:scale-x-100 translate-x-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
        />
        <polyline
          points="12 5 19 12 12 19"
          class="translate-x-0 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
        />
      </svg>
    </a>
  );
}
