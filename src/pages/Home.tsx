import { FaMinus } from "react-icons/fa";

const Home = () => {
  return (
    <main className="flex flex-col tablet:flex-row justify-evenly gap-28 min-h-[92vh] tablet:min-h-[70vh] tablet:text-xl mx-5">
      <section className="tablet:my-40 ">
        <h1 className="text-4xl text-white">Зараатывайте <br /> больше <br /> 
            <span className="font-extrabold bg-gradient-to-r from-orange-300 to-orange-700 text-transparent bg-clip-text">с WELBEX</span>
        </h1>
        <p className="mt-7">Развиваем и контролируем <br />продажи за вас</p>
      </section>

      <section className="tablet:my-40 flex flex-col items-start laptop:items-end gap-10">
        <h2 className="text-xl laptop:text-right text-white">Вместе с 
            <span className="uppercase bg-gradient-to-r from-orange-300  via-orange-700 to-orange-300 text-transparent bg-clip-text font-bold"> бесплатной <br /> консультацией</span> мы дарим:
        </h2>
        <div className="container grid grid-rows-2 grid-cols-2 gap-8 laptop:text-right w-fit">
            <div className="w-fit hidden laptop:block">
                <h3 className="uppercase text-white">Виджеты</h3>
                <p className="text-xs mt-2">30 готовых <br /> решений</p>
            </div>
            <div className="w-fit  hidden laptop:block">
                <h3  className="uppercase text-white">Dashboard</h3>
                <p className="text-xs mt-2">с показателями <br /> вашего бизнеса</p>
            </div>
            <div className="w-fit hidden laptop:block">
                <h3 className="uppercase text-white">Skype аудит</h3>
                <p className="text-xs mt-2 ">отдела продаж <br /> и CRM системы</p>
            </div>
            <div className="w-fit hidden laptop:block">
                <h3 className="uppercase text-white">35 дней</h3>
                <p className="text-xs mt-2 ">использования <br /> CRM</p>
            </div>

            <div className="w-fit laptop:hidden flex items-center">
                <FaMinus className="text-orange-700 mr-2"/>
                <h3 className="uppercase text-white">Skype аудит</h3>
            </div>
            <div className="w-fit laptop:hidden flex items-center">
            <FaMinus className="text-orange-700 mr-2"/>
                <h3  className="uppercase text-white">30 Виджетов</h3>
            </div>
            <div className="w-fit laptop:hidden flex items-center">
            <FaMinus className="text-orange-700 mr-2"/>
                <h3 className="uppercase text-white">Dashboard </h3>
            </div>
            <div className="w-fit laptop:hidden flex items-center">
            <FaMinus className="text-orange-700 mr-2"/>
                <h3 className="uppercase text-white">месяц AMOCRM</h3>
            </div>
        </div>

        <button className="hidden tablet:block bg-blue-500 py-4 px-8">Получить консультацию</button>
      </section>
    </main>
  )
}

export default Home
