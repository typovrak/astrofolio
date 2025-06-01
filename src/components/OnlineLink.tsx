import OnlineCircle from "@components/OnlineCircle";

export default function({href,title,style}:{href:string, title:string,style?:string}) {
  return (
    <a
      href={href}
      target="_blank"
      class="flex gap-2 justify-center sm:justify-end items-center"
      style={style}
    >
      <OnlineCircle/>
      {title}
    </a>
  )
}