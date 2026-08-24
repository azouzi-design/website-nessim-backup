import Image from "next/image";
import type { CSSProperties } from "react";

type GalleryPhoto = {
  src: string;
  wrapperWidth: number;
  wrapperHeight: number;
  imgWidth: number;
  rotate: number;
};

const gallery: GalleryPhoto[] = [
  { src: "/about/gallery-1.jpg", wrapperWidth: 120, wrapperHeight: 173, imgWidth: 97, rotate: 8.55 },
  { src: "/about/gallery-2.jpg", wrapperWidth: 154, wrapperHeight: 167, imgWidth: 146, rotate: -2.94 },
  { src: "/about/gallery-3.jpg", wrapperWidth: 175, wrapperHeight: 195, imgWidth: 120, rotate: -24.23 },
  { src: "/about/gallery-4.jpg", wrapperWidth: 139, wrapperHeight: 174, imgWidth: 120, rotate: -7.22 },
  { src: "/about/gallery-5.jpg", wrapperWidth: 213, wrapperHeight: 190, imgWidth: 188, rotate: 9.89 },
  { src: "/about/gallery-6.jpg", wrapperWidth: 196, wrapperHeight: 197, imgWidth: 158, rotate: 16.06 },
];

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center">
      <div className="flex flex-col gap-16 items-center max-w-[1000px] w-full px-5 py-13">
        <div className="flex flex-col gap-6 items-center text-center">
          <h2 className="font-heading text-h2 text-foreground whitespace-nowrap">
            Hi, I&rsquo;m Nessim Bozrati
          </h2>
          <div className="text-body text-foreground-secondary w-[420px] max-mobile:w-full">
            <p className="mb-4">
              A growth operator and builder for early-stage founders..
            </p>
            <p className="mb-4">
              I help startups turn ideas into real growth, whether
              that&rsquo;s launching a new product, entering a new market, or
              building the marketing and sales, systems needed to grow.
            </p>
            <p>
              I see what doesn&rsquo;t exist yet, architect the vision, and
              build the strategy to make it real. I don&rsquo;t just advise,
              I work alongside founders to co-create, build, and execute.
            </p>
          </div>
        </div>

        <div className="group flex items-center justify-center w-full overflow-hidden rounded-xl">
          <div className="flex flex-col gap-2 items-center max-mobile:scale-[0.7] tablet:flex-row tablet:gap-0">
            {[gallery.slice(0, 3), gallery.slice(3, 6)].map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex gap-2 items-center justify-center tablet:contents"
              >
                {row.map((photo, localIndex) => {
                  const index = rowIndex * 3 + localIndex;
                  return (
                    <div
                      key={photo.src}
                      className={`flex items-center justify-center shrink-0 h-auto tablet:h-[var(--wrapper-h)] tablet:w-[var(--wrapper-w)] tablet:group-hover:w-[var(--img-w)] transition-[margin,width] duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] ${
                        index === gallery.length - 1 ? "" : "tablet:mr-[-48px] tablet:group-hover:mr-1"
                      }`}
                      style={{
                        "--wrapper-w": `${photo.wrapperWidth}px`,
                        "--wrapper-h": `${photo.wrapperHeight}px`,
                        "--img-w": `${photo.imgWidth}px`,
                      } as CSSProperties}
                    >
                      <div
                        className="tablet:rotate-[var(--rotate)] tablet:group-hover:rotate-0 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]"
                        style={{ "--rotate": `${photo.rotate}deg` } as CSSProperties}
                      >
                        <Image
                          src={photo.src}
                          alt=""
                          width={photo.imgWidth}
                          height={160}
                          className="w-[var(--img-w)] h-40 rounded-xl object-cover"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-[600px] aspect-[600/450]">
          <div
            className="absolute top-0 left-[3.5%] rounded-xl border border-stroke shadow-md overflow-hidden"
            style={{ width: "90.5%", height: "94.67%", transform: "rotate(-2deg)" }}
          >
            <Image
              src="/about/mention-screenshot.jpg"
              alt="VC4A mentor profile screenshot"
              fill
              className="object-cover"
            />
          </div>
          <div
            className="absolute left-0 rounded-xl border border-stroke shadow-md overflow-hidden"
            style={{ top: "20.89%", width: "100%", height: "47.56%" }}
          >
            <Image
              src="/about/mention-card.jpg"
              alt="Nessim Bozrati mentor mention"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
