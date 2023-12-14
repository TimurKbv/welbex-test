import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";

const Header = () => {
  return (
    <header className="h-[8vh] bg-black tablet:bg-transparent laptop:h-[10vh] flex justify-center laptop:justify-between ">
        {/* Logo */}
      <div className="flex laptop:mt-7">
        <a href="/" className="logo w-40 hidden laptop:block ">
          <img src="../assets/welbex_logo.png" alt="" />
          <p className="text-xs text-gray-500 mt-2">
            крупный интегратор CRM в России и еще 8 странах
          </p>
        </a>
        {/* Navigation */}
        <nav className="w-fit tablet:ml-16 mt-5 laptop:mt-2 uppercase laptop:normal-case laptop:text-md text-xs m-2 flex items-center">
          <ul className="flex gap-3 laptop:gap-4">
            <li className="hover:text-white transition-colors duration-300">
                <a href="/services">Услуги</a>
            </li>
            <li className="hover:text-white transition-colors duration-300">
                <a href="/widgets">Виджеты</a>
            </li>

            <li className="hover:text-white transition-colors duration-300">
                <a href="/integrations">Интеграции</a>
            </li>
            <li className="hover:text-white transition-colors duration-300">
                <a href="/cases">Кейсы</a>
            </li>
            <li className="hover:text-white transition-colors duration-300 hidden tablet:list-item">
                <a href="/certifications">Сертификаты</a>
            </li>
          </ul>
        </nav>
      </div>
        {/* Contacts */}
      <div className="contact-container  gap-7 mt-7  hidden laptop:flex ">
        <button className="h-fit mr-4 hover:text-white transition-colors duration-300">+7 555 555-55-55</button>
        <button className="h-fit mt-1 hover:text-white transition-colors duration-300">
          <FaTelegramPlane />
        </button>
        <button className="h-fit mt-1">
          <PiPhoneCallFill />
        </button>
        <button className="h-fit mt-1">
          <FaWhatsapp />
        </button>
      </div>
    </header>
  );
};

export default Header;
