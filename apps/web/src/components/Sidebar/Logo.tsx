import Image from 'next/future/image'

export const Logo = () => {
  return (
    <div className="flex flex-shrink-0 items-center px-6">
      <Image
        width={50}
        height={50}
        className="h-8 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=500"
        alt="Your Company"
      />
    </div>
  )
}
