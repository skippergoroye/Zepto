import Link from "next/link";
import Image from "next/image";
import {
  AvatarImage,
  AccountIcon,
  HamburgerIcon,
  BackIcon,
} from "../../../../assets/icons";
import { NotificationIcon } from "../../../../assets/icons/notificationIcon";

interface AuthNavProps {
  onNavToggle: () => void;
}

export const AuthNav = ({ onNavToggle }: AuthNavProps) => {


  return (
    <nav className="bg-white w-full h-[70px] px-5 fixed bg-opacity-95 z-20 top-0 lg:h-[70px]">
      <div className="flex justify-between items-center lg:justify-end h-full">
        <div
          className="cursor-pointer block lg:hidden"
          onClick={onNavToggle}
        >
          <HamburgerIcon width={20} height={30} color="red" />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-8">
            <NotificationIcon width={30} height={30} bgColor="#C5C7CD" className="cursor-pointer"/>
            <p className="font-semibold hidden lg:block">Kelvin</p>
            <span className="cursor-pointer ">
              <Image
                src={AvatarImage}
                alt="user picture"
                width={50}
                height={50}
                className="border rounded-full p-[0.1rem]"
              />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
