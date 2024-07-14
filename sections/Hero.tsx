import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */
  description?: string;
  image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export default function HeroFlats({
  title = "Tinder but for dogs.",
  description =
    "Meet new and interesting dogs nearby",
  image,
  placement = "left",
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", outline: false },
    { id: "change-me-2", href: "/", text: "Change me", outline: true },
  ],
}: Props) {
  return (
    <div class="bg-pink-200">
    <nav class="lg:container lg:mx-auto mx-4 ">
      <div class="flex flex-col items-center gap-8">
        <div
          class={`flex w-full xl:container xl:mx-auto py-20 mx-5 md:mx-10 z-10 ${
            image
              ? PLACEMENT[placement]
              : "flex-col items-center justify-center text-center"
          } lg:py-36 gap-12 md:gap-20 items-center`}
        >
          {image && (
            <Image
            width={640}
            class="w-full lg:w-1/2 object-fit rounded-lg"
            sizes="(max-width: 640px) 50vw, 15vw"
            src={image}
            alt={image}
            decoding="async"
            loading="lazy"
          />
          
          )}
          <div
            class={`mx-6 lg:mx-auto lg:w-full space-y-4 gap-4 ${
              image
                ? "lg:w-1/2 lg:max-w-xl"
                : "flex flex-col items-center justify-center lg:max-w-3xl"
            }`}
          >
            <div
              class="inline-block lg:text-[80px] text-4xl leading-none font-medium text-gray-900"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            >
            </div>
            <p class="text-lg md:text-xl leading-[150%]">
              {description}
            </p>
            <div class="flex items-center gap-3">
              {cta?.map((item) => (
                <a
                  key={item?.id}
                  id={item?.id}
                  href={item?.href}
                  target={item?.href.includes("http") ? "_blank" : "_self"}
                  class={`font-normal btn btn-primary ${
                    item.outline && "btn-outline"
                  }`}
                >
                  {item?.text}
                </a>
              ))}
            </div>
            <div class="flex items-center gap-3 mt-4">
                <a
                  href="https://play.google.com/store/apps"
                  target="_blank"
                  class="btn btn-primary flex items-center gap-2"
                >
                  <img
                    src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11741/9ec53be9-1008-4f0a-a9b5-c97da7d7d508"
                    alt="Play Store"
                    class="w-6 h-6"
                  />
                  Download
                </a>
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  class="btn bg-white text-black flex items-center gap-2 border border-gray-300"
                >
                  <img
                    src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11741/00a3390d-fdfa-4c0b-9488-062ecb983e60"
                    alt="Apple Store"
                    class="w-6 h-6"
                  />
                  Download
                </a>

              </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}
