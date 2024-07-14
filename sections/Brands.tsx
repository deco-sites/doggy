// BrandLogo.tsx

import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { useId } from "../sdk/useId.ts";

export interface BrandLogo {
  Imgsrc?: ImageWidget;
}

export interface Props {
  title?: string;
  addLogo?: BrandLogo[];
}

const DEFAULT_PROPS: Props = {
  title: "Featured Brands",
  addLogo: [
    {
      Imgsrc: "https://example.com/default-logo.png",
    },
  ],
};

const BrandLogo = ({ title = DEFAULT_PROPS.title, addLogo = DEFAULT_PROPS.addLogo }: Props) => {
  const id = useId();

  return (
    <div id={id} className="brand-logo-container lg:container md:max-w-6xl lg:mx-auto mx-4 py-4 lg:py-6">
      <h2 className="text-2xl font-bold mb-4 text-center pt-16 pb-8">{title}</h2>
      <div className="flex justify-center items-center space-x-4">
        {(addLogo ?? []).map((logo, index) => (
          <div key={index} className="brand-logo-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
            {logo.Imgsrc && <Image src={logo.Imgsrc} alt="Brand Logo" className="w-full h-full object-contain" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandLogo;
