import Url from './Url'

export default function UrlList({ urls }: any) {
  return (
    <div className="my-10">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
        </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Add Link
            </button>
          </div>
      </div>
      <Url url={urls} />
    </div>
  )
}
