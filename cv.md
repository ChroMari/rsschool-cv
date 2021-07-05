Хромова Мария Алексеевна
============

----------------------------
почта - chromarija@gmail.com <br>
телефон - 8-999-613-6881 <br>
[Telegram - ChroMari](https://t.me/ChroMari)

--------------------------------------

О себе
---------

Обожаю трудиться и люблю динамику в своём развитии. Являюсь человеком, который любит эстетику, поэтому стараюсь делать свою работу не только внутрене на хорошем качестве, но и внешне отрожать красоту и элегантность проекта. Мне нравится кодить, методом проб и ошибок, поняла, что это то чем я хочу заниматься пока лет 10. <br>
Стараюсь помогать другим людям объясняя и направляя их. Есть небольшое призвание к педагогике, хорошо приподношу для других даже самый сложный и запутанный материал. <br>
Хочу своей работой приносить людям пользу и красоту, чтобы видя проект они забывали о дурном и сером в своей жизни и осозновали, что в жизни для всех есть своё место. <br>
Умею выстраивать свой личный план обучения и люблю изучать темы углублённо, не останавливаясь на поверхностных знаниях, которые нужны для решения проблемы и создания проекта. <br>

Навыки
---------

* **HTML** - использование семмантики при работе, адаптивность свёрстанных проектов,использование БЭМ при написание классов.
* **CSS** - использование препроцессоров SaSS/ScSS в работе, умение подключать различными способами шрифты для проектов, написание структурированного кода. Умение работать с анимацией.
* **JavaScript** - написание кода, как в функциональном подходе, так и с использованием ООП. Умение работать с ассинхронными запросами. Написание кода разбитого на смысловые модули.
* **Webpack** - умение настраивать сборку с нуля для проекта.
* **React** - основные базовые навыки работы с фреймворком. Умение работаь как со state, так и использовать хуки при написании кода.

Пример кода
---------

Пример использования делегорования события по нажатим клавишам при помощи data-* и клавиатурного события
```javascript
class ButtonCalculator {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this);
    elem.onkeydown = this.onKeydown.bind(this);
    elem.onkeyup = this.onKeyup.bind(this);
  }

  allClear = () => calculator.clear();
  
  delete = () => calculator.delete();
  
  operation = (textElement) => calculator.choseOperation(textElement);
  
  number = (textElement) => calculator.appendNumber(textElement);
  
  equals = () => calculator.compute(true);
  
  sqrt = () => calculator.sqrtOperation();
  

  onClick (e) {
    const action = e.target.dataset.action;
    const textElement = e.target.textContent;

    if (action) {
      this[action](textElement);
      const isError = calculator.updateDisplay();
      audio.currentTime = 0;
      audio.play();

      if (isError) {
        calculator_numbers.remove();
        output.remove();
        card_body.append(error);
      }
    }
  };

  onKeydown (e) {
    const button = this._elem.querySelector(`[data_key=${e.code}]`);

    if (button == undefined) return;

    const action = button.dataset.action;
    const textElement = button.textContent;

    if (action) {
      this[action](textElement);
      calculator.updateDisplay();
      audio.currentTime = 0;
      audio.play();
    }

    button.classList.add('playing');
  };

  onKeyup (e) {
    const button = this._elem.querySelector(`[data_key=${e.code}]`);
    if (button == undefined) return;
    button.classList.remove('playing');
  }
}
```

Опыт работы
---------

*English for kids* - приложение для изучения английских слов детьми. (**html, css, javascript**; написание SPA приложения, работа со сменой режимов игры, работа с audio) <br>
`Ссылка на проект:` https://github.com/ChroMari/english-for-kids

**MovieSearch** - одностраничное приложение, отображающее информацию о фильмах по запросу пользователя. Для получения информации используется OMDb RESTful API. (**html, css, javascript**; ассинхронные запросы fetch, использование Promisse) <br>
`Ссылка на проект:` https://github.com/ChroMari/movie-search

**Shelter** - сайт для приюта животных. (**html, css, javascript**; адаптивная вертка и семмантика, написание слайдера и пагинации на javascript; получение данных из отдельного файла) <br>
`Ссылка на проект:` https://github.com/ChroMari/shelter

Education
---------

Период обучения | Название учереждения
------------ | -------------
2004-2015 | МОУ лицей (с физико-математическим уклоном)
2015-2019 | Владимирский государственный университет им. А.Г. и Н.Г. Столетовых (Информационная безопасность)
2020 | Coursera (Московский физико-технический институт, Яндекс, Разработка интерфейсов: вёрстка и JavaScript)
2020 | Coursera (Гонконгский университет науки и технологии, Full-Stack Web Development with React)

English
---------
Уровень языка А1. Активно учу и развиваю навыки. Школьные годы и период университета учила немецкий язык.
