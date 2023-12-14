import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="laptop:min-h-[20vh] bg-black tablet:bg-transparent tablet:bg-gray-900 ">

        <div className="footer-about flex gap-14 flex-col  tablet:flex-row h-full mx-5 laptop:m-0">
            <div className="container flex flex-col laptop:flex-row gap-20 mt-14 tablet:mt-0">
                <div>
                    <h3 className="text-gray-500 uppercase mb-3">О компании</h3>
                    <div className="flex flex-col gap-1">
                        <a href="/partner-programm" className="hover:text-white transition-colors duration-300"><span>Партнерская программа</span></a>
                        <a href="/jobs" className="hover:text-white transition-colors duration-300"><span>Вакансии</span></a>
                    </div>
                </div>
                <div className="footer-menu mb-4">
                    <h3 className="text-gray-500 uppercase mb-3">Меню</h3>

                    <div className="flex gap-14 flex-wrap standard-mobile:flex-nowrap">
                        <div className="flex flex-col gap-1">
                            <a href="/prices" className="hover:text-white transition-colors duration-300"><span>Расчет стоимости</span></a>
                            <a href="/services" className="hover:text-white transition-colors duration-300"><span>Услуги</span></a>
                            <a href="/widgets" className="hover:text-white transition-colors duration-300"><span>Виджеты</span></a>
                            <a href="/integrations" className="hover:text-white transition-colors duration-300"><span>Интеграции</span></a>
                            <a href="/clients" className="hover:text-white transition-colors duration-300"><span>Наши клиенты</span></a>
                        </div>

                        <div className="flex flex-col gap-1">
                            <a href="/cases" className="hover:text-white transition-colors duration-300"><span>Кейсы</span></a>
                            <a href="/thanks" className="hover:text-white transition-colors duration-300"><span>Благодарственные письма</span></a>
                            <a href="/certifications" className="hover:text-white transition-colors duration-300"><span>Сертификаты</span></a>
                            <a href="/blog" className="hover:text-white transition-colors duration-300"><span>Блог на Youtube</span></a>
                            <a href="/questions-and-answers" className="hover:text-white transition-colors duration-300"><span>Вопрос / Ответ</span></a>
                        
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer-contacts  flex flex-col justify-between laptop:items-end gap-14 laptop:gap-3 min-w-fit h-full ">
                <div className="flex flex-col laptop:items-end">
                    <h3 className="text-gray-500 uppercase mb-3 w-fit">Контакты</h3>
                    <div className=" flex flex-col laptop:items-end gap-3">

                        <button className="h-fit hover:text-white transition-colors duration-300 w-fit">+7 555 555-55-55</button>

                        <div className=" flex laptop:justify-end ">
                            <button className="h-fit mr-3 mt-1 hover:text-white transition-colors duration-300 ">
                                <FaTelegramPlane />
                            </button>
                            <button className="h-fit mr-3 mt-1 hover:text-white transition-colors duration-300">
                                <PiPhoneCallFill />
                            </button>
                            <button className="h-fit mt-1 hover:text-white transition-colors duration-300">
                                <FaWhatsapp />
                            </button>
                        </div>

                        <span>Москва, Путевой проезд 3с1, к 902</span>

                    </div>
                </div>

                <div className="text-gray-400 text-xs flex flex-col gap-1 mb-4 ">
                    <span className=" block w-fit">WELBEX 2022. Все права защищены.</span>
                    <a href="/policy"><span className="underline">Политика конфидециальности</span></a>
                </div>
            </div>
        </div>


      
    </footer>
  )
}

export default Footer
