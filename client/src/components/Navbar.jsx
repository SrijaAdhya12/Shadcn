import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport
} from '@/components/ui/navigation-menu'
import { Input } from '@/components/ui/input'
import { Logo } from '@/assets'




const Navbar = () => {
	return (
		<nav className="border flex items-center h-20 px-8 sm:px-20 font-roboto sticky top-0 z-50 py-3 backdrop-blur-md border-neutral-700/80">
			<div className="flex sm:space-x-[1500px] space-x-48 items-center">
				<div>
					<NavigationMenu>
						<NavigationMenuList>
							<div className='flex items-center'>
								<div>
									<NavigationMenuItem>
										<img src={Logo} alt="Logo" className="h-8 w-8" />
									</NavigationMenuItem>
								</div>
								<div className='flex gap-4'>
									<NavigationMenuItem>Home</NavigationMenuItem>
								</div>
							</div>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div>
					<Input type="search" placeholder="Search" />
				</div>
			</div>
		</nav>
	)
}

export default Navbar
