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
import { FaHome, FaPhoneAlt } from 'react-icons/fa'
import { MdLocalPhone } from 'react-icons/md'
import { IoPeopleSharp } from 'react-icons/io5'
const Navbar = () => {
	return (
		<nav className="border flex items-center h-20 px-5 sm:px-20 sticky top-0 z-50 py-3 backdrop-blur-md border-neutral-700/80">
			<div className="flex items-center justify-between w-full">
				<div className="flex items-center gap-4">
					<NavigationMenu>
						<NavigationMenuList className="flex items-center space-x-5 sm:space-x-[580px]">
							<div>
								<NavigationMenuItem>
									<img src={Logo} alt="Logo" className="h-8 w-8" />
								</NavigationMenuItem>
							</div>
							<div className="sm:flex gap-36 hidden">
								<NavigationMenuItem>Home</NavigationMenuItem>
								<NavigationMenuItem>About Us</NavigationMenuItem>
								<NavigationMenuItem>Contact Us</NavigationMenuItem>
							</div>
							<div className="sm:hidden flex text-gray-300 text-xl gap-4">
								<FaHome />
								<IoPeopleSharp />
								<MdLocalPhone />
							</div>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div>
					<Input className="sm:w-full w-56" type="search" placeholder="Search" />
				</div>
			</div>
		</nav>
	)
}

export default Navbar
