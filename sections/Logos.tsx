import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Logo {
  src?: ImageWidget;
  /** @description text alternative */
  altText?: string;
}

export interface Props {
  title?: string;
  logos?: Logo[];
}

const MIN_LOGOS_COUNT = 30;

const IMG_PLACEHOLDER = Array(Math.max(MIN_LOGOS_COUNT, 30)).fill(0).map(() => ({
  src:
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11741/3eb86c50-b76b-45ee-96f9-842391c65d67",
  altText: "Logo",
}));

export default function Logos({
  title = "",
  logos = IMG_PLACEHOLDER,
}: Props) {
  const effectiveLogos = logos.length >= MIN_LOGOS_COUNT ? logos : IMG_PLACEHOLDER.slice(0, MIN_LOGOS_COUNT);

  const slideContent = (
    <div class="flex items-center gap-4">
      {effectiveLogos.map((logo, index) => {
        return (
          <a key={index} class="flex items-center justify-center p-2" href="/">
            <Image src={logo.src || ""} width={30} height={60} class="object-contain" />
            <span class="text-xl font-bold">TinDog</span>
          </a>
        );
      })}
    </div>
  );

  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 py-4 lg:py-6">
      <div class="flex flex-col gap-12">
        <p class="text-center text-lg">{title}</p>
        <div class="relative w-full overflow-hidden h-11">
          <div class="animate-sliding absolute top-0 left-0 flex flex-nowrap h-11">
            {slideContent}
          </div>
        </div>
      </div>
    </div>
  );
}
