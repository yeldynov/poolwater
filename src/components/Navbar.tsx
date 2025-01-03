import { FileQuestion, Menu } from 'lucide-react'

import { cn } from '@/lib/utils'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const subMenuItemsOne = [
  {
    title: 'Why is My Pool Green?',
    description: '',
    icon: <FileQuestion className='size-5 shrink-0' />,
  },
]

const Navbar = () => {
  return (
    <section className='py-4'>
      <div className='container mx-auto '>
        <nav className='items-center justify-between hidden lg:flex'>
          <div className='flex items-center gap-6'>
            <div className='flex items-center gap-2'>
              <img src='logo.png' className='w-full' alt='logo' />
            </div>
            <div className='flex items-center'>
              <a
                className={cn(
                  'text-muted-foreground',
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: 'ghost',
                  })
                )}
                href='#'
              >
                Home
              </a>
              <a
                className={cn(
                  'text-muted-foreground',
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: 'ghost',
                  })
                )}
                href='#'
              >
                About Us
              </a>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className='text-muted-foreground'>
                    <NavigationMenuTrigger>
                      <span>Troubleshooting Guides</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className='p-3 w-80'>
                        <NavigationMenuLink>
                          {subMenuItemsOne.map((item, idx) => (
                            <li key={idx}>
                              <a
                                className={cn(
                                  'flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                )}
                                href='#'
                              >
                                {item.icon}
                                <div>
                                  <div className='text-sm font-semibold'>
                                    {item.title}
                                  </div>
                                  <p className='text-sm leading-snug text-muted-foreground'>
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </li>
                          ))}
                        </NavigationMenuLink>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <a
                className={cn(
                  'text-muted-foreground',
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: 'ghost',
                  })
                )}
                href='#'
              >
                Our Services
              </a>
              <a
                className={cn(
                  'text-muted-foreground',
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: 'ghost',
                  })
                )}
                href='#'
              >
                Work Profile
              </a>
              <a
                className={cn(
                  'text-muted-foreground',
                  navigationMenuTriggerStyle,
                  buttonVariants({
                    variant: 'ghost',
                  })
                )}
                href='#'
              >
                More
              </a>
            </div>
          </div>
          <div className='flex gap-2'>
            <Button variant='outlineblue'>Contact Us</Button>
            <Button variant='blue'>Login</Button>
          </div>
        </nav>
        <div className='block mx-5 lg:hidden'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <img src='logo.png' className='w-full' alt='logo' />
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  className='p-2 border-none'
                  variant='outline'
                  size='icon'
                >
                  <Menu className='w-8 h-8' />
                </Button>
              </SheetTrigger>
              <SheetContent className='overflow-y-auto bg-white'>
                <SheetHeader>
                  <SheetTitle>
                    <div className='flex items-center gap-2'>
                      <img src='logo.png' className='w-20' alt='logo' />
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className='flex flex-col gap-4 mt-8 mb-8'>
                  <a href='#' className='font-semibold'>
                    Home
                  </a>
                  <a href='#' className='font-semibold'>
                    About Us
                  </a>
                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='products' className='border-b-0'>
                      <AccordionTrigger className='py-0 mb-4 font-semibold hover:no-underline'>
                        Troubleshooting Guides
                      </AccordionTrigger>
                      <AccordionContent className='mt-2'>
                        {subMenuItemsOne.map((item, idx) => (
                          <a
                            key={idx}
                            className={cn(
                              'flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                            )}
                            href='#'
                          >
                            {item.icon}
                            <div>
                              <div className='text-sm font-semibold'>
                                {item.title}
                              </div>
                              <p className='text-sm leading-snug text-muted-foreground'>
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <a href='#' className='font-semibold'>
                    Our Services
                  </a>
                  <a href='#' className='font-semibold'>
                    Work Profile
                  </a>
                  <a href='#' className='font-semibold'>
                    More
                  </a>
                </div>
                <div className='pt-4 border-t'>
                  <div className='flex flex-col gap-3 mt-2'>
                    <Button variant='outlineblue'>Log in</Button>
                    <Button variant='blue'>Sign up</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
