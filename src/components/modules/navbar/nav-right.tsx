import userImage from "../../../assets/images/image-avatar.png";
import Cart from "./nav-right/cart";

export default function NavRight() {
  return (
    <div>
      <div className="flex items-center gap-4 md:gap-6">
        <Cart />

        <div className="aspect-square h-9 hover:ring-2 hover:ring-kumbh-orange 
        ring-offset-4 rounded-full"
        >
          <img 
          src={userImage}
          alt="user image"
          />
        </div>
      </div>
    </div>
  );
}
