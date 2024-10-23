import { SidebarTrigger } from './ui/sidebar'

export default function NavTitle({currentLocation}:{currentLocation:string}) {
  return (
    <nav className="col-span-4 bg-secondary h-fit px-3 py-1 gap-4 flex items-center">
            
            <SidebarTrigger />
                <h1>{currentLocation}</h1>
            </nav>
  )
}
