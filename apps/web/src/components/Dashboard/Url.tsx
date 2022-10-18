import Image from "next/future/image";
import { useState } from 'react';
import { trpcReact } from '../../utils/trpc';
import favicon from '../../../public/favicon.ico';

import Toggle from "../elements/Toggle";

export default function Url({ url }) {
  const [enabled, setEnabled] = useState<boolean>(url.status);
  const [copied, setCopied] = useState<boolean>(false);
  const clicks = trpcReact.getClicks.useQuery(url.id);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url.shortUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }
      , 1000);
  };


  return (
    <tbody className="divide-y divide-gray-200 bg-white">
      <tr key={url._id}>
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
          <div className="flex items-center">
            <div className="h-10 w-10 flex-shrink-0">
              <Image
                className="h-10 w-10"
                src={url.favicon ? url.favicon : favicon}
                width={50}
                height={50}
                alt=""
              />
            </div>
            <div className="ml-4">
              <div className="font-medium text-gray-900">
                {url.title || "Unknown"}
              </div>
              <div className="text-gray-500 truncate">
                {url.longUrl.slice(0, 45) + "..."}
              </div>
            </div>
          </div>
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <div className="text-gray-500 cursor-pointer">
            <div onClick={handleCopy}>{copied ? "copied!" : url.shortUrl}</div>
          </div>
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <Toggle enabled={enabled} setEnabled={setEnabled} id={url.id} />
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {clicks.data}
        </td>
        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
          <a
            href="#"
            className="text-indigo-600 hover:text-indigo-900"
          >
            Edit<span className="sr-only">, {url.slug}</span>
          </a>
        </td>
      </tr>
    </tbody>

  );
}
