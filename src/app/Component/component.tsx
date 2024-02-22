import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import {
  PlusCircleIcon,
  ChatBubbleBottomCenterIcon,
  BuildingStorefrontIcon,
  FireIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/outline";

export interface Props {
  heroSections?: {
    logo?: React.ReactNode;
    motive?: string;
    version?: string;
    heading?: string;
    content?: string;
    gettingStartedLink?: string;
    imageSrc?: any;
  };
  logoCloud?: {
    title?: string;
    logos?: any;
  };
  features?: {
    title?: string;
    description?: string;
    primaryFeatures?: {
      name?: string;
      description?: string;
      href?: string;
      icon?: any;
    }[];
  };
  everyThingsNeed?: {
    title?: string;
    subtitle?: string;
    description?: string;
    imageUrl?: any;
    secondaryFeatures?: {
      name?: string;
      description?: string;
      icon?: any;
    }[];
  };
  stats?: {
    title?: string;
    subtitle?: string;
    description?: string;
    stat?: {
      id?: number;
      name?: string;
      value?: string;
    }[];
  };
  ctaSection?: {
    heading1?: string;
    heading2?: string;
    content?: string;
    gettingSatartedLink?: string;
    learnMoreLink?: string;
  };
  footer?: {
    title?: string;
    companyDesc?: any;
    footerNavigation?: {
      name?: string;
      href?: string;
      icon?: any;
    }[];
  };
}

export default function Example({
  heroSections,
  logoCloud,
  features,
  everyThingsNeed,
  stats,
  ctaSection,
  footer,
}: Props) {
  return (
    <div className="bg-gray-900">
      <main>
        {/* Hero section */}
        <div className="relative isolate overflow-hidden">
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
            />
          </svg>
          <div
            className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
            <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
              {heroSections?.logo}
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <Link href="#" className="inline-flex space-x-6">
                  <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                    {heroSections?.motive}
                  </span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                    <span>{heroSections?.version}</span>
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </div>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                {heroSections?.heading}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {heroSections?.content}
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="#"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Get started
                </Link>
                <Link
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Live demo <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <Image
                  src={heroSections?.imageSrc}
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-white">
            {logoCloud?.title}
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <PlusCircleIcon width={158} height={48} className="text-white" />
            <BuildingStorefrontIcon
              width={158}
              height={48}
              className="text-white"
            />
            <ChatBubbleBottomCenterIcon
              width={158}
              height={48}
              className="text-white"
            />
            <PresentationChartBarIcon
              width={158}
              height={48}
              className="text-white"
            />
            <FireIcon width={158} height={48} className="text-white" />
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400"></h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {features?.title}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {features?.description}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features?.primaryFeatures?.map((feature) => (
                <div key={feature?.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <Link
                        href={feature?.href!}
                        className="text-sm font-semibold leading-6 text-indigo-400"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Everything you need section */}
        <div className="mt-32 sm:mt-56">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-400">
                {everyThingsNeed?.title}
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {everyThingsNeed?.subtitle}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {everyThingsNeed?.description}
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <Image
                src={everyThingsNeed?.imageUrl}
                alt="App screenshot"
                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
                width={2432}
                height={1442}
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {everyThingsNeed?.secondaryFeatures?.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <h2 className="text-base font-semibold leading-8 text-indigo-400">
              {stats?.title}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {stats?.subtitle}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {stats?.description}
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {stats?.stat?.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col gap-y-3 border-l border-white/10 pl-6"
              >
                <dt className="text-sm leading-6">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* CTA section */}
        <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1d4240dd-898f-445f-932d-e2872fd12de3"
                width={200}
                height={200}
                x="50%"
                y={0}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={0} className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)"
            />
          </svg>
          <div
            className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {ctaSection?.heading1}
              <br />
              {ctaSection?.heading2}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              {ctaSection?.content}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href={ctaSection?.gettingSatartedLink!}
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </Link>
              <Link
                href={ctaSection?.learnMoreLink!}
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer aria-labelledby="footer-heading" className="relative">
        <h2 id="footer-heading" className="sr-only">
          {footer?.title}
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-4 lg:px-8">
          <div className="border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              {footer?.footerNavigation?.map((item) => (
                <Link
                  key={item.name}
                  href={item.href!}
                  className="text-gray-500 hover:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
            <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; {footer?.companyDesc}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
