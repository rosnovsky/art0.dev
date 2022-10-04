import { PlusIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { Actions } from "../../utils/types";

export const Button = ({ text, action }: { text: string; action: Actions }) => {
  const href = action === Actions.CreateUrl ? "/shorts/new" : "/shorts/update";
  return (
    <Link href={href}>
      <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <PlusIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
        {text}
      </button>
    </Link>
  );
};
