import Image from "next/image";
import CopyEmailButton from "@/components/copy-email-button";
import CopyrightYear from "@/components/copyright-year";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center">
      <div className="flex flex-col items-center max-w-[1000px] w-full pt-13 px-5">
        <div className="flex flex-col gap-16 items-start w-full">
          <div className="flex gap-1.5 h-10 items-center justify-center w-full">
            <a
              href="https://cal.com/nessim-bozrati-nea7ld/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 h-10 items-center justify-center px-3 rounded-xl bg-foreground w-[200px] transition-opacity duration-150 hover:opacity-90 active:opacity-70"
            >
              <Image
                src="/hero/icon-book-call.svg"
                alt=""
                width={16}
                height={16}
              />
              <span className="text-button text-background whitespace-nowrap">
                Book a Call
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/nessim-bozrati/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 h-10 items-center justify-center px-3 rounded-xl bg-primary-blue w-[200px] transition-opacity duration-150 hover:opacity-90 active:opacity-70"
            >
              <Image
                src="/hero/icon-send-dm.svg"
                alt=""
                width={16}
                height={16}
              />
              <span className="text-button text-background whitespace-nowrap">
                Send a DM
              </span>
            </a>
            <CopyEmailButton email="nessimbozrati@gmail.com" />
            <a
              href="https://www.linkedin.com/in/nessim-bozrati/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center size-10 rounded-xl bg-background border border-stroke shadow-sm transition-opacity duration-150 hover:opacity-90 active:opacity-70"
            >
              <Image
                src="/hero/icon-linkedin.svg"
                alt=""
                width={14}
                height={14}
              />
            </a>
            <a
              href="https://substack.com/@nessimbozrati"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Substack"
              className="flex items-center justify-center size-10 rounded-xl bg-background border border-stroke shadow-sm transition-opacity duration-150 hover:opacity-90 active:opacity-70"
            >
              <Image
                src="/contact/icon-substack.svg"
                alt=""
                width={14}
                height={14}
              />
            </a>
          </div>

          <div className="flex flex-col items-start w-full rounded-2xl overflow-hidden shadow-md">
            <div className="relative w-full aspect-[1200/328]">
              <Image
                src="/contact/testimonial-photo-v2.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-6 h-[200px] items-center justify-center p-6 w-full bg-foreground">
              <p className="font-heading text-h3 text-background text-center max-w-[786px]">
                Nessim helped us find a clearer voice for the brand. The
                refresh made everything feel warmer, more consistent and
                easier for customers to understand.
              </p>
              <p className="text-body text-background-secondary whitespace-nowrap">
                Sabreen Morsey — CEO @ Farinas Marketing Services
              </p>
            </div>
          </div>
        </div>

        <div className="flex h-[50px] items-center justify-center px-2.5 py-4 w-full">
          <p className="text-body text-foreground-secondary text-center whitespace-nowrap">
            ©<CopyrightYear /> Nessim Bozrati
          </p>
        </div>
      </div>
    </section>
  );
}
