import NavLeft from "./navbar/nav-left";
import NavRight from "./navbar/nav-right";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-[65px] md:h-[100px]">
        <NavLeft />

        <NavRight />
    </div>
  )
}
