import type { CollectionEntry } from "astro:content";
import { createEffect, createSignal, For } from "solid-js";
import ArrowCard from "@components/ArrowCard";
import { cn } from "@lib/utils";

type Props = {
  tags: string[];
  data: CollectionEntry<"projet">[];
};

export default function Projects({ data, tags }: Props) {
  const [filter, setFilter] = createSignal(new Set<string>());
  const [projects, setProjects] = createSignal<CollectionEntry<"projet">[]>([]);

  createEffect(() => {
    setProjects(
      data.filter((entry) =>
        Array.from(filter()).every((value) =>
          entry.data.tags.some(
            (tag: string) => tag.toLowerCase() === String(value).toLowerCase()
          )
        )
      )
    );
  });

  function toggleTag(tag: string) {
    setFilter(
      (prev) =>
        new Set(
          prev.has(tag) ? [...prev].filter((t) => t !== tag) : [...prev, tag]
        )
    );
  }

  return (
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div class="col-span-3 sm:col-span-1">
        <div class="sticky top-24">
          <h2 class="text-sm font-semibold uppercase mb-2 text-black dark:text-white">
            Affiner
          </h2>
          <ul class="flex flex-wrap sm:flex-col gap-1.5">
            <For each={tags}>
              {(tag) => (
                <li>
                  <button
                    onClick={() => toggleTag(tag)}
                    class={cn(
                      "w-full px-2 py-1 rounded",
                      "whitespace-nowrap overflow-hidden overflow-ellipsis",
                      "flex gap-2 items-center",
                      "bg-black/5 dark:bg-white/10",
                      "hover:bg-black/10 hover:dark:bg-white/15",
                      "transition-colors duration-300 ease-in-out",
                      filter().has(tag) && "text-black dark:text-white"
                    )}
                  >
                    <svg
                      class={cn(
                        "size-5 fill-black/50 dark:fill-white/50",
                        "transition-colors duration-300 ease-in-out",
                        filter().has(tag) && "fill-black dark:fill-white"
                      )}
                    >
                      <use
                        href={`/ui.svg#square`}
                        class={cn(!filter().has(tag) ? "block" : "hidden")}
                      />
                      <use
                        href={`/ui.svg#square-check`}
                        class={cn(filter().has(tag) ? "block" : "hidden")}
                      />
                    </svg>
                    {tag}
                  </button>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
      <div class="col-span-3 sm:col-span-2">
        <div class="flex flex-col">
          <p class="text-sm uppercase mb-2">
            {projects().length} projet{projects().length > 1 ? "s" : ""} affiché
            {projects().length > 1 ? "s" : ""} sur {data.length}
          </p>
          <ul class="flex flex-col gap-3">
            {projects().map((project) => (
              <li>
                <ArrowCard entry={project} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
