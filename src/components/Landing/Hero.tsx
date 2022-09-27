import { ChevronRightIcon, StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/future/image';
import Link from 'next/link';
import screenshot from '../../public/static/screenshot2.png';

export const Hero = () => {
  return (
    <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div>
          <div>
            <Image
              className="h-11 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=500"
              alt="Your Company"
              width={600}
              height={700}
            />
          </div>
          <div className="mt-20">
            <div>
              <a href="#" className="inline-flex space-x-4">
                <span className="rounded bg-blue-50 px-2.5 py-1 text-sm font-semibold text-blue-500">
                  What&apos;s new
                </span>
                <span className="inline-flex items-center space-x-1 text-sm font-medium text-blue-500">
                  <span>Just shipped the <code>init</code> version</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </a>
            </div>
            <div className="mt-6 sm:max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Another URL Shortener
              </h1>
              <p className="mt-6 text-xl text-gray-500">
                But this one is cool because it&apos;s made with love and Next.js.
              </p>
            </div>
            <div className="mt-12 sm:flex sm:w-full sm:max-w-lg">
              <div className="min-w-0 flex-1">
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full rounded-md border border-transparent bg-blue-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:px-10"
                  >
                    Come on in!
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="inline-flex items-center divide-x divide-gray-300">
                <div className="flex flex-shrink-0 pr-5">
                  <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                  <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                  <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                  <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                  <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1 py-1 pl-5 text-sm text-gray-500 sm:py-3">
                  <span className="font-medium text-gray-900">Rated 5 stars</span> by {' '}
                  <span className="font-medium text-blue-500"><Link href="https://rosnovsky.us">Art Rosnovsky</Link></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
        <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="hidden sm:block">
            <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full" />
            <svg
              className="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
            </svg>
          </div>
          <div className="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
            <Image
              className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
              src={screenshot}
              alt=""

            />
          </div>
        </div>
      </div>
    </div>
  )
}
