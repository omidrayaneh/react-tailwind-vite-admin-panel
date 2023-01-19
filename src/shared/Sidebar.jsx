import classNames from "classnames";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import arrow from "../assets/control.png";
import logo from "../assets/logo.png";
import {DASHBOARD_SIDEBAR_BOTTOM_LINKS   } from "../lib/consts/navigation";
import {DASHBOARD_SIDEBAR_LINKS   } from "../lib/consts/navigation";
import { HiOutlineLogout } from 'react-icons/hi'

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

  function SidebarLink({ item }) {
    const {pathname}= useLocation();

    return (
      <Link to={item.path} className={classNames(pathname === item.path ? 'bg-neutral-400 text-white': 'text-neutral-400',linkClass) }>
        <span className={`text-xl `}>{item.icon}</span>
        <span className={`${!open && "hidden" }`} > {item.label}</span>       
      </Link>
    );
  }

  return (
    <div
      className={` ${
        open ? "w-60" : "w-20 "
      } bg-dark-purple h-screen p-5  pt-8 relative duration-300 flex flex-col`}
    >
      <img
        src={arrow}
        className={`absolute cursor-pointer -left-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />

      <div className="flex gap-x-4 items-center">
        <img
          src={logo}
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
        />
        <h1
          className={`text-white origin-right font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          <span>Admin-Panel</span>
        </h1>
      </div>

			<div className="py-8 flex flex-1 flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>


			<div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
					<SidebarLink key={item.key} item={item} />
				))}

				<div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
					<span className="text-xl">
						<HiOutlineLogout  />
					</span>
					<span className={`${!open && 'hidden'}`}>Logout</span>
				</div>
			</div>

    </div>
  );
};

export default Sidebar;
