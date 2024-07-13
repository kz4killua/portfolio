import clsx from "clsx"


export default function Container({
  children, className
}: {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <div 
      className={clsx(
        "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", 
        className
      )}
    >
      {children}
    </div>
  )
}