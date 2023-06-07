import { navigationMenu } from '~/lib/config';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from '../base/dropdown-menu';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link } from '@remix-run/react';
import { cn } from '~/lib/utils';
import { Button, buttonVariants } from '../base/button';
import { User } from 'lucide-react';

export function SidebarMenu() {
    return (
        <>
            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
                Menu
            </h2>
            {navigationMenu?.map((item, index) => {
                if (item.visible) {
                    if (item.subItems) {
                        return (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild key={index}>
                                    <Button variant="ghost" fullWidth={true} className='justify-between'>
                                        <div className='flex'>{item.icon}
                                            <span className="ml-3 text-sm text-blue-500">{item.name}</span>
                                        </div>
                                        <ChevronDownIcon
                                            className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                                            aria-hidden="true" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>Itens de  {item.name}</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    {item.subItems.map((subItem, subIndex) => (
                                        <DropdownMenuItem key={subIndex}>
                                            <Link to={subItem.href}> <div className='flex'>{subItem.icon}
                                                <span>{subItem.name}</span>
                                            </div></Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>

                            </DropdownMenu>
                        )
                    } else {
                        return (
                            <Link to={item.href} key={index}>
                                <Button variant="ghost" fullWidth={true} className='justify-start'>
                                    {item.icon}
                                    <span>{item.name}</span>
                                </Button>
                            </Link>
                        )
                    }
                }
            }
            )}
        </>
    )
}