import { Menu, X } from "lucide-react";
import { Button } from "../../../ui/button";
import { navLinks } from "../../../../data/links";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../../../ui/sheet"
import NavLinks from "../../../nav-links";

export default function NavGroup() {

  return (
    <div className="flex items-center gap-3 h-full">
      {/* Desktop Nav */}
      <div className="hidden md:flex gap-3 items-center h-full">
        {navLinks.map((route, index) => (
          <Button
            key={index}
            variant={"ghost"}
            asChild
            className="text-kumbh-darkGrayishBlue hover:!bg-transparent transition-none
            font-medium !h-full border-b-4 border-transparent hover:border-kumbh-orange 
            !rounded-none lg:text-lg"
          >
            <a href={route.href}>
              {route.label.charAt(0).toUpperCase() + route.label.slice(1)}
            </a>
          </Button>
        ))}
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"outline"} size={"icon"}>
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-3 [&>button]:hidden">
            <SheetTitle className="hidden">Menu</SheetTitle>

            <SheetDescription className="hidden">
              Navigation for mobile screens
            </SheetDescription>

            <div className="flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="flex gap-1">
                    <SheetTrigger asChild>
                      <Button variant="outline" size={"icon"}>
                        <X className="size-5" />
                      </Button>
                    </SheetTrigger>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  {navLinks.map((item, index) => (
                    <NavLinks
                      key={index}
                      routeHref={item.href}
                      routeLabel={
                        item.label.charAt(0).toUpperCase() + item.label.slice(1)
                      }
                      className={"font-bold text-kumbh-black hover:text-kumbh-orange"}
                    />
                  ))}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
