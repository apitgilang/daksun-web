import Image from "next/image";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import type { NewsBlock } from "@/types/content";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => <h2 className="font-display text-2xl text-ink">{children}</h2>,
    h3: ({ children }) => <h3 className="font-display text-xl text-ink">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-kencana pl-5 font-display text-xl italic text-ink">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => (
      <a href={value?.href} className="text-merah underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      const url = urlForImage(value);
      if (!url) return null;
      return (
        <span className="relative my-6 block aspect-[16/9] overflow-hidden rounded-2xl">
          <Image src={url} alt={value?.alt ?? ""} fill sizes="(max-width: 768px) 100vw, 700px" className="object-cover" />
        </span>
      );
    },
  },
};

/** Renders a news body that may be plain string paragraphs (local) or Portable Text (Sanity). */
export function NewsBody({ body }: { body: NewsBlock[] }) {
  if (body.length > 0 && typeof body[0] === "string") {
    return (
      <>
        {(body as string[]).map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </>
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <PortableText value={body as any} components={components} />;
}
