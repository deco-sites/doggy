export interface Props {
    title: string;
    Description1: string;
    Description2: string;
    Description3: string;
    Title1 : string;
    Title2 : string;
    Title3 : string;
  }
  
  export default function Post({ title,  Description1, Description2, Description3, Title1,Title2,Title3}: Props) {
    return (
      <div className="text-center">
        <h1 className="font-bold text-6xl py-16">{title}</h1>
        <div className="flex justify-center mt-4">
          <div className="max-w-xs mx-4 text-center">
            <img className="w-24 h-24 mx-auto" src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11741/eb7c74f4-1071-4bc3-974f-58df363ecf40" alt="Image 1" />
            <h2 className="text-lg font-semibold mt-2">{Title1}</h2>
            <p className="mt-2">{Description1}</p>
          </div>
          <div className="max-w-xs mx-4 text-center">
            <img className="w-24 h-24 mx-auto" src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11741/1f0fa718-1ffb-45e9-bdf1-140206b04449" alt="Image 2" />
            <h2 className="text-lg font-semibold mt-2">{Title2}</h2>
            <p className="mt-2">{Description2}</p>
          </div>
          <div className="max-w-xs mx-4 text-center">
            <img className="w-24 h-24 mx-auto" src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11741/8d81fb5d-06f1-42ab-bc36-2892ee3d9f02" alt="Image 3" />
            <h2 className="text-lg font-semibold mt-2">{Title3}</h2>
            <p className="mt-2">{Description3}</p>
          </div>
        </div>
      </div>
    );
  }