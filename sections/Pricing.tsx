
export interface Post {
  DogBreed: string;
  Plan: string;
  offerItems1: string;
  offerItems2: string;
  offerItems3: string;
}

export interface Props {
  title?: string;
  description?: string;
  posts?: Post[];
}


export default function BlogPosts({
  title = "Here's a component for you to showcase your blogposts",
  description = "This subheading is fully editable, remember?",
  posts = [
    {
      DogBreed: "Chihuahua",
      Plan:"Free",
      offerItems1:"5 Matches Per Day",
      offerItems2:"10 Messages Per Day",
      offerItems3:"Limited App Usage"
    },
    {
      DogBreed: "Labrador",
      Plan:"$49 / mo",
      offerItems1:"Unlimited Matches",
      offerItems2:"Unlimited Messages",
      offerItems3:"Unlimited App Usage"
    },
    {
      DogBreed: "Mastiff",
      Plan:"$99 / mo",
      offerItems1:"Pirority Listing",
      offerItems2:"Unlimited Messages",
      offerItems3:"Unlimited Messages"
    },
  ],
}: Props) {
  return (
    <div className="bg-gray-100">
    <div className="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-12 lg:py-28">
      <div className="space-y-16">
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
          <div className="space-y-6 lg:w-1/2 justify-center items-center">
            <h2 className="text-4xl leading-snug font-bold">{title}</h2>
            <p className="text-lg">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts?.map((post, index) => (
            <div key={index} className="border border-secondary rounded-lg overflow-hidden">
              <div className="p-6 space-y-4">
                <div className="space-y-2 text-center">
                  <h3 className="text-2xl">{post.DogBreed}</h3>
                  <h2 className="text-4xl font-bold">{post.Plan}</h2>
                </div>
                <div className="mt-4 flex justify-center flex-col items-center">
                  <div><h1>{post.offerItems1}</h1></div>
                  <div><h1>{post.offerItems2}</h1></div>
                  <div><h1>{post.offerItems3}</h1></div>
                </div>
                <div className="flex justify-center mt-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
