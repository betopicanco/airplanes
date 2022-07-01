import Link from "next/link";
import AirplaneIcon from "../../icons/AirplaneIcon";
import HeaderLink from "./HeaderLink";

export default function Header() {
  return (
    <header className={` bg-white flex justify-between fixed top-0 z-10 w-full px-4`}>
      <div className={` p-4 `}>
        <Link href={'/'} passHref>
          <span>
            <AirplaneIcon style={` h-14 w-14 stroke-blue-800 md:stroke-2 `}/>
          </span>
        </Link>
      </div>

      <div className={` text-center m-4 `}>
          <span className={` hidden md:inline-block `}>
            <HeaderLink text={'Passageiros e Tripulação'} path={'/users'}/>
          </span>

          <strong>
            <HeaderLink text={'Aviões'} path={'/airplanes'}/>
          </strong>
      </div>
    </header>
  );
}