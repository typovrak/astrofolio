import type { CollectionEntry } from "astro:content";
import { formatDate, readingTime } from "@lib/utils";
import OnlineCircle from "@components/OnlineCircle";

type Props = {
  entry: CollectionEntry<"projet"> | CollectionEntry<"blog">;
};

export default function ArrowCard({ entry }: Props) {
  const { collection, data, body } = entry;
  const { title, summary, date } = data;
  
  const demoUrl = collection === "projet" ? data.demoUrl : null;
  const repoUrl = collection === "projet" ? data.repoUrl : null;
  const repoFrontUrl = collection === "projet" ? data.repoFrontUrl : null;
  const repoApiUrl = collection === "projet" ? data.repoApiUrl : null;
  
  const repoIconName = (url: string) => {
    if (url.includes("https://github.com")) return "github";
    if (url.includes("https://gitlab.com")) return "gitlab";
    return "link";
  };

  return (
    <div>
      <a
        data-collection={collection}
        data-slug={entry.slug}
        href={`/${collection === "projet" ? "projets" : collection}`}
        class="group w-fit p-1.5 gap-1.5 text-sm flex items-center border rounded hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out"
      >
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
            x1="19"
            y1="12"
            x2="5"
            y2="12"
            class="scale-x-0 group-hover:scale-x-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 ease-in-out"
          ></line>
          <polyline
            points="12 19 5 12 12 5"
            class="translate-x-1 group-hover:translate-x-0 transition-all duration-300 ease-in-out"
          ></polyline>
        </svg>
        <span
          class="w-full group-hover:text-black group-hover:dark:text-white transition-colors duration-300 ease-in-out"
        >
          Revenir au{collection === "projet" ? "x" : ""} {collection === 'projet' ? 'projets' : collection}
        </span>
      </a>
      <div class="flex flex-wrap text-sm uppercase mt-12 gap-3 opacity-75">
        <p class="flex items-center gap-2">
          <svg class="size-5 stroke-current">
            <use href="/ui.svg#calendar"></use>
          </svg>
          {formatDate(date, collection === "blog")}
        </p>

        <p id={`${entry.collection}-${entry.slug}`} class="flex items-center gap-2 text-clip bg-gradient-logo">
          0 vue
        </p>

        <p class="flex items-center gap-2">
          <svg class="size-5 stroke-current">
            <use href="/ui.svg#book-open"></use>
          </svg>
          {readingTime(body)}
        </p>
      </div>
      <h1
        class="text-3xl font-semibold text-black dark:text-white mt-2 text-clip bg-gradient-logo"
      >
        {title}
      </h1>
      <p class="mt-1">
        {summary}
      </p>
      {
        (demoUrl || repoUrl || repoFrontUrl || repoApiUrl) && (
          <div class="mt-4 flex flex-wrap gap-2">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                class="group flex gap-2 items-center px-3 py-1.5 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend"
              >
                <OnlineCircle/>

                <span class="text-current group-hover:text-black group-hover:dark:text-white blend">
                  Voir le site
                </span>
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                class="group flex gap-2 items-center px-3 py-1.5 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend"
              >
                <svg class="size-4">
                  <use
                    href={`/ui.svg#${repoIconName(repoUrl)}`}
                    class="fill-current group-hover:fill-black group-hover:dark:fill-white blend"
                  />
                </svg>
                <span class="text-current group-hover:text-black group-hover:dark:text-white blend">
                  Voir le repository
                </span>
              </a>
            )}
            {repoFrontUrl && (
              <a
                href={repoFrontUrl}
                target="_blank"
                class="group flex gap-2 items-center px-3 py-1.5 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend"
              >
                <svg class="size-4">
                  <use
                    href={`/ui.svg#${repoIconName(repoFrontUrl)}`}
                    class="fill-current group-hover:fill-black group-hover:dark:fill-white blend"
                  />
                </svg>
                <span class="text-current group-hover:text-black group-hover:dark:text-white blend">
                  Repository front
                </span>
              </a>
            )}
            {repoApiUrl && (
              <a
                href={repoApiUrl}
                target="_blank"
                class="group flex gap-2 items-center px-3 py-1.5 truncate rounded text-xs md:text-sm lg:text-base border border-black/25 dark:border-white/25 hover:bg-black/5 hover:dark:bg-white/15 blend"
              >
                <svg class="size-4">
                  <use
                    href={`/ui.svg#${repoIconName(repoApiUrl)}`}
                    class="fill-current group-hover:fill-black group-hover:dark:fill-white blend"
                  />
                </svg>
                <span class="text-current group-hover:text-black group-hover:dark:text-white blend">
                  Repository API
                </span>
              </a>
            )}
          </div>
        )
      }
    </div>
  )
}