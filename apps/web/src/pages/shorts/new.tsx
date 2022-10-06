import type { NextPage } from "next";
import { useState } from "react";
import { Layout } from "../../components/layout";
import { trpc } from "../../utils/trpc";
import { useUser } from "@auth0/nextjs-auth0";

export const NewShort: NextPage = () => {
  const { user } = useUser();
  const [longUrl, setLongUrl] = useState<string>("");
  const [inProgress, setInProgress] = useState<boolean>(false);
  const addUrlMutation = trpc.addUrl.useMutation();
  const deleteUrlMutation = trpc.deleteUrl.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLongUrl(e.target.value);
  };

  const handleNewShort = async () => {
    if (!user?.sub) return;
    const resolveHostName = longUrl.replace(/\/\/|.+\/\//, "");
    setLongUrl(resolveHostName);
    setInProgress(true);
    addUrlMutation.mutate({
      longUrl: `https://${resolveHostName}`,
      user: user.sub,
    });
    setInProgress(false);
    setLongUrl("");
    window.location.href = "/dashboard";
  };

  const handleDeleteShort = async () => {
    setInProgress(true);
    deleteUrlMutation.mutate({ longUrl });
    setInProgress(false);
  };

  return (
    <div className="min-h-full">
      <Layout title="New Link">
        <main className="flex-1">
          <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div className="min-w-0 flex-1">
              <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
                Add new link
              </h1>
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-6 px-4 sm:px-6 lg:px-8">
            <form className="space-y-8 divide-y divide-gray-200">
              <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div className="space-y-6 sm:space-y-5">
                  <div>
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Add/Update Link
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Updating a link will update all its previous slugs to
                      redirect to this new one (if you choose to specify it).
                    </p>
                  </div>

                  <div className="space-y-6 sm:space-y-5">
                    <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Link to be shorten
                        <span className="text-red-800 text-md">
                          <sup>*</sup>
                        </span>
                      </label>
                      <div className="mt-1 sm:col-span-2 sm:mt-0">
                        <div className="flex max-w-lg rounded-md shadow-sm">
                          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                            https://
                          </span>
                          <input
                            onChange={(e) => handleChange(e)}
                            type="text"
                            name="slug"
                            id="slug"
                            required
                            value={longUrl}
                            className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                      >
                        Specify Slug
                      </label>
                      <div className="mt-1 sm:col-span-2 sm:mt-0">
                        <div className="flex max-w-lg rounded-md shadow-sm">
                          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                            art0.dev/
                          </span>
                          <input
                            type="text"
                            name="slug"
                            id="slug"
                            className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5 flex justify-between">
                <div className="justify-start">
                  <button
                    type="button"
                    onClick={handleDeleteShort}
                    className="rounded-md border border-red-300 bg-red-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-50 hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Delete
                  </button>
                </div>
                <div className="justify-end">
                  <button
                    type="button"
                    className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Cancel
                  </button>
                  <button
                    disabled={inProgress}
                    onClick={handleNewShort}
                    type="submit"
                    className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default NewShort;
