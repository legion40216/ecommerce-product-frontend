import NavLeft from "./navbar/nav-left";
import NavRight from "./navbar/nav-right";

export default function Navbar() {
  return (
    <div 
        className="flex items-center justify-between 
                   py-4 md:py-6 mx-2 md:mx-0"
    >
        <NavLeft />

        <NavRight />
    </div>
  )
}
