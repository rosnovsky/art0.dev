import { useUser } from '@auth0/nextjs-auth0';
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import { trpc } from "../../utils/trpc";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type StatsType = {
  name: string;
  stat: number;
  previousStat: number;
  change: string;
  changeType: string;
}[];

export const Stats = () => {
  const { user } = useUser()

  const allUrls = trpc.getAll.useQuery({ userId: user!.sub! })
  const totalUrls = allUrls.data?.length || 0;
  const urlsYesterday = allUrls.data?.filter((url) => new Date(url.createdAt) < new Date(new Date().setDate(new Date().getDate() - 1)))?.length || 0;

  const allClicks = trpc.getAllClicks.useQuery()
  const totalClicks = allClicks.data?.length || 0;

  const clicksYesterday = allClicks.data?.filter((click: any) => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return new Date(click.timestamp).getDate() === yesterday.getDate();
  }).length || 0;

  const clicksToday = allClicks.data?.filter((click: any) => {
    const date = new Date(click.createdAt);
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  }).length || 0;

  const averageClicks = parseFloat(((totalClicks || 0) / (totalUrls || 1)).toPrecision(3));
  const averageClicksYesterday = parseFloat(((clicksYesterday || 0) / (urlsYesterday || 1)).toPrecision(3));

  const stats: StatsType = [
    {
      name: "Total URLs",
      stat: totalUrls,
      previousStat: urlsYesterday,
      change: `${Math.floor(((totalUrls - urlsYesterday) / totalUrls) * 100)}%`,
      changeType: totalUrls > urlsYesterday ? "increase" : "decrease",
    },
    {
      name: "Total Clicks",
      stat: totalClicks,
      previousStat: clicksYesterday,
      change: `${Math.floor(((totalClicks - clicksYesterday) / totalClicks) * 100)}%`,
      changeType: totalClicks > clicksYesterday ? "increase" : "decrease",
    },
    {
      name: "Average Clicks",
      stat: averageClicks,
      previousStat: averageClicksYesterday,
      change: `${Math.floor(((averageClicks - averageClicksYesterday) / averageClicks) * 100)}%`,
      changeType: averageClicks > averageClicksYesterday ? "increase" : "decrease",
    },
  ];

  return (
    <div className="mt-6 px-4 sm:px-6 lg:px-8">
      <div>
        <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-y-0 md:divide-x">
          {stats &&
            stats.map((item) => (
              <div key={item.name} className="px-4 py-5 sm:p-6">
                <dt className="text-base font-normal text-gray-900">
                  {item.name}
                </dt>
                <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                  <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                    {item.stat}
                    <span className="ml-2 text-sm font-medium text-gray-500">
                      from {item.previousStat}
                    </span>
                  </div>

                  <div
                    className={classNames(
                      item.changeType === "increase"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800",
                      "inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0"
                    )}
                  >
                    {item.changeType === "increase" ? (
                      <ArrowUpIcon
                        className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArrowDownIcon
                        className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                        aria-hidden="true"
                      />
                    )}
                    <span className="sr-only">
                      {" "}
                      {item.changeType === "increase"
                        ? "Increased"
                        : "Decreased"}{" "}
                      by{" "}
                    </span>
                    {item.change}
                  </div>
                </dd>
              </div>
            ))}
        </dl>
      </div>
    </div>
  );
};
