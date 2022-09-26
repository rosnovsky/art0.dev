function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const Navigation = ({ navigation, teams }: { navigation: any, teams: any }) => {
  return (
    <nav className="mt-6 px-3">
      <div className="space-y-1">
        {navigation.map((item: any) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
              'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            <item.icon
              className={classNames(
                item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                'mr-3 flex-shrink-0 h-6 w-6'
              )}
              aria-hidden="true"
            />
            {item.name}
          </a>
        ))}
      </div>
      <div className="mt-8">
        {/* Secondary navigation */}
        <h3 className="px-3 text-sm font-medium text-gray-500" id="desktop-teams-headline">
          Tags
        </h3>
        <div className="mt-1 space-y-1" role="group" aria-labelledby="desktop-teams-headline">
          {teams.map((team: any) => (
            <a
              key={team.name}
              href={team.href}
              className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              <span
                className={classNames(team.bgColorClass, 'w-2.5 h-2.5 mr-4 rounded-full')}
                aria-hidden="true"
              />
              <span className="truncate">{team.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
