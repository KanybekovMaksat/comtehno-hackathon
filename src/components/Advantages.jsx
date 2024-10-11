const Advantages = () => {
  return (
    <section className="my-20">
      <div className="container">
        <h2 className="font-serif text-2xl font-medium lg-max:text-center">
          На хакатоне вы
        </h2>
        <div className="flex justify-between lg-max:flex-wrap lg-max:justify-center">
          <div className="card flex flex-col gap-3 w-[280px] items-center">
            <img
              src="/pazl.png"
              alt=""
              className="h-[200px] w-[200px]"
            />
            <h3 className="text-[14px] font-medium font-serif text-center">
              Создадите работающий <br /> прототип
            </h3>
            <p className="text-center text-[13px] font-medium">
              За короткое время вы сможете создать MVP (минимально
              жизнеспособный продукт) и презентовать его жюри.
            </p>
          </div>
          <div className="card gap-3 flex flex-col w-[280px] items-center">
            <img
              src="/people.png"
              alt=""
              className="h-[200px] w-[200px]"
            />
            <h3 className="text-[14px] font-medium font-serif text-center">
              Познакомитесь с единомышленниками
            </h3>
            <p className="text-center text-[13px] font-medium">
              Хакатон — отличное место для нетворкинга. Вы встретите талантливых
              разработчиков, дизайнеров, предпринимателей и экспертов
            </p>
          </div>
          <div className="card gap-3 flex flex-col w-[280px] items-center">
            <img
              src="/chart.png"
              alt=""
              className="h-[200px] w-[200px]"
            />
            <h3 className="text-[14px] font-medium font-serif text-center">
              Получите опыт и улучшить навыки
            </h3>
            <p className="text-center text-[13px] font-medium">
              За короткое время вы сможете создать MVP (минимально
              жизнеспособный продукт) и презентовать его жюри.
            </p>
          </div>
          <div className="card gap-3 flex flex-col w-[280px] items-center">
            <img
              src="/case.png"
              alt=""
              className="h-[200px] w-[200px]"
            />
            <h3 className="text-[14px] font-medium font-serif text-center">
              Начнете свой <br /> стартап
            </h3>
            <p className="text-center text-[13px] font-medium">
              Ваш проект может стать основой для успешного бизнеса. Многие
              успешные стартапы начинались с хакатонов.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Advantages














