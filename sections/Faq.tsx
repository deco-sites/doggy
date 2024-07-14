export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Question {
  title: string;
  /** @format rich-text */
  answer: string;
}

export interface Props {
  title?: string;
  description?: string;
  cta?: CTA;
  questions?: Question[];
}

export default function BlogPosts({
  title = "FAQs",
  description =
    "Welcome to TinDog FAQs! Find answers to common questions about our app.",
  cta = { id: "change-me", href: "/", text: "Back to TinDog", outline: true },
  questions = [
    {
      title: "What is TinDog?",
      answer:
        "TinDog is a matchmaking app for dogs! It helps dogs find playmates, dates, and friendships in their local area.",
    },
    {
      title: "How do I create a profile for my dog?",
      answer:
        "Creating a profile for your dog on TinDog is easy! Simply download the app, sign up, add your dog's photos, preferences, and a short bio to get started.",
    },
    {
      title: "Can I use TinDog to find local dog parks and events?",
      answer:
        "Yes! TinDog provides a feature to discover nearby dog-friendly places and events where you can take your dog for fun outings.",
    },
    {
      title: "Is TinDog free to use?",
      answer:
        "TinDog offers a basic free membership with limited features. You can also upgrade to TinDog Plus for premium features and unlimited matches.",
    },
    {
      title: "How can I ensure my dog's safety on TinDog?",
      answer:
        "Safety is our priority! TinDog verifies profiles and encourages responsible interactions. Always supervise your dog during meetups.",
    },
  ],
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-12 lg:py-28">
      <div class="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between">
        <div class="flex-none space-y-6 lg:w-2/5">
          <p class="text-4xl leading-snug">
            {title}
          </p>
          <p class="text-lg">
            {description}
          </p>
          <a
            key={cta?.id}
            id={cta?.id}
            href={cta?.href}
            target={cta?.href.includes("http") ? "_blank" : "_self"}
            class={`font-normal btn btn-primary ${
              cta.outline && "btn-outline"
            }`}
          >
            {cta?.text}
          </a>
        </div>
        <div class="flex-auto border-primary border-t">
          {questions?.map((question) => (
            <details class="border-primary border-b group">
              <summary class="text-lg cursor-pointer py-6 flex ">
                <span class="flex-auto">{question.title}</span>
                <span class="flex-none transition group-open:rotate-180">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.17674 12.5577L8.17676 12.5577L8.5303 12.2041C8.53031 12.2041 8.53031 12.2041 8.53032 12.2041C8.62794 12.1065 8.78621 12.1065 8.88385 12.2041C8.88385 12.2041 8.88385 12.2041 8.88385 12.2041L15.6464 18.9667L16 19.3202L16.3535 18.9667L23.1161 12.2041C23.2138 12.1064 23.372 12.1064 23.4696 12.2041L23.8232 12.5577C23.9208 12.6553 23.9208 12.8135 23.8232 12.9112L16.1767 20.5577C16.0791 20.6553 15.9209 20.6553 15.8232 20.5577L8.17674 12.9112C8.17674 12.9112 8.17674 12.9112 8.17674 12.9112C8.07911 12.8135 8.07911 12.6553 8.17674 12.5577Z"
                      fill="#18181B"
                      stroke="#18181B"
                    />
                  </svg>
                </span>
              </summary>
              <p
                class="leading-relaxed mb-6 group-open:animate-fadeIn"
                dangerouslySetInnerHTML={{ __html: question.answer }}
              >
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
