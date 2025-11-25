import { NavLink } from "react-router-dom";
import { MobileButton } from "../component/button";

const MobileSidebar = ({ menuOpen, setMenuOpen, navLinks }) => {
  return (
    <div
      className={`fixed top-0 left-0 z-999 h-full w-full sm:w-full bg-[rgba(32,17,60,1)] text-white px-3 py-6 transform transition-transform duration-300 max-lg:block hidden ${
        menuOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* TOP — LOGO + CLOSE */}
      <div className="flex items-center justify-between mb-3">
        <img src="/June-Logo.svg" className="w-25" />
        <img
          src="/close-menu.svg"
          className="w-6 cursor-pointer"
          onClick={() => setMenuOpen(false)}
        />
      </div>

      {/* NAV LINKS */}
     <section className="px-8 mt-10">
        <nav className="flex flex-col gap-4 text-[24px] font-georama">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              onClick={() => {
                closeDropdown();
                setMenuOpen(false)
              }}
              className={({ isActive }) =>
                `py-1 ${
                  isActive ? "text-purple-400 font-semibold" : "text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* BUTTON */}
        <div className="mt-4">
          <MobileButton text={"Get In Touch"} logo={"/arrow-right.svg"} />
        </div>
      </section>  

      {/* Bottom Decoration */}
        <img
        src="/menu-vector.svg"
        className="absolute bottom-0 right-0 w-55 max-xsm:hidden  "
      />
      
    </div>
  );
};

export default MobileSidebar;
