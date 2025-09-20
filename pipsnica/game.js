const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const idArray = Array.from(checkboxes).map(element => element.id);

let listThems = [];
let word = null;
let theme1 = null;

const information = [
    "данные", "файл", "код", "база", "сеть", "знание", "запись", "бит", "бита", "цифра",
    "знак", "сигнал", "поток", "память", "диск", "носитель", "вывод", "ввод", "доступ", "поиск",
    "запрос", "ответ", "сервер", "клиент", "протокол", "формат", "тип", "поле", "запись", "связь",
    "адрес", "порт", "домен", "сайт", "страница", "текст", "графика", "звук", "видео", "архив",
    "копия", "версия", "обновление", "патч", "ошибка", "журнал", "фильтр", "поиск", "сортировка", "выборка",
    "анализ", "отчет", "статистика", "график", "диаграмма", "поле", "массив", "список", "дерево", "структура",
    "объект", "класс", "метод", "функция", "алгоритм", "программа", "скрипт", "команда", "синтаксис", "переменная",
    "константа", "оператор", "выражение", "условие", "цикл", "индекс", "ключ", "значение", "карта", "множество",
    "очередь", "стек", "хэш", "шифр", "ключ", "дешифровка", "сжатие", "распаковка", "кодировка", "паттерн",
    "модель", "система", "интерфейс", "плагин", "модуль", "фреймворк", "библиотека", "инструмент", "утилита", "драйвер"
];

const phylosophy = [ 
    "ум", "дух", "бытие", "смысл", "форма", "идея", "материя", "бог", "добро", "зло",
    "истина", "ложь", "знание", "вера", "разум", "чувство", "этика", "мораль", "нрав", "свобода",
    "воля", "судьба", "время", "пространство", "движение", "покой", "причина", "следствие", "закон", "порядок",
    "хаос", "единое", "многое", "душа", "тело", "сознание", "опыт", "субъект", "объект", "явление",
    "сущность", "качество", "количество", "мера", "противоречие", "отрицание", "синтез", "тезис", "антитезис", "абсолют",
    "относительное", "общее", "частное", "целое", "часть", "содержание", "форма", "возможность", "действительность", "necessitas",
    "случайность", "категория", "понятие", "суждение", "умозаключение", "диалектика", "метафизика", "логика", "интуиция", "трансцендентальное",
    "феномен", "ноумен", "априори", "апостериори", "императив", "дискурс", "нарратив", "экзистенция", "dasein", "ничто",
    "абсурд", "бунт", "творчество", "воля", "власть", "сверхчеловек", "дух", "история", "прогресс", "утопия",
    "идеал", "критика", "толкование", "герменевтика", "структура", "знак", "язык", "дискурс", "власть", "дисциплина"
];

const math = [
    "число", "цифра", "счет", "ряд", "сумма", "разность", "произведение", "частное", "доля", "дробь",
    "числитель", "знаменатель", "делитель", "делимое", "остаток", "модуль", "степень", "корень", "квадрат", "куб",
    "логрифм", "синус", "косинус", "тангенс", "котангенс", "секанс", "косеканс", "интеграл", "дифференциал", "производная",
    "предел", "бесконечность", "последовательность", "ряд", "сходимость", "расходимость", "функция", "аргумент", "значение", "график",
    "уравнение", "неравенство", "система", "матрица", "детерминант", "вектор", "скаляр", "норма", "орт", "базис",
    "пространство", "размерность", "линейный", "оператор", "спектр", "собственный", "значение", "вектор", "транспонирование", "обращение",
    "комплексный", "мнимая", "действительная", "сопряжение", "аргумент", "модуль", "теорема", "аксиома", "лемма", "следствие",
    "доказательство", "гипотеза", "конъюнкция", "дизъюнкция", "импликация", "отрицание", "квантор", "множество", "подмножество", "объединение",
    "пересечение", "дополнение", "пустое", "мощность", "биекция", "инъекция", "сюръекция", "изоморфизм", "гомоморфизм", "топология",
    "метрика", "непрерывность", "компактность", "связность", "группа", "кольцо", "поле", "идеал", "гомотопия", "когомология"
];

const biology = [
    "рост", "пубертат", "гормон", "тестостерон", "эстроген", "прогестерон", "гипофиз", "гипоталамус", "пол", "ген",
    "хромосома", "днк", "рнк", "геном", "белок", "фермент", "рецептор", "клетка", "митоз", "мейоз",
    "гамета", "сперма", "яйцеклетка", "зигота", "зародыш", "эмбрион", "плод", "овуляция", "менструация", "цикл",
    "овуль", "фолликул", "желтое", "тело", "матка", "эндометрий", "влагалище", "клитор", "пенис", "мошонка",
    "яичко", "яичник", "семенник", "простата", "сперматогенез", "оогенез", "оплодотворение", "имплантация", "плацента", "пубертас",
    "адренархе", "гонархе", "менархе", "скачок", "акне", "прыщ", "сало", "жир", "пот", "запах",
    "лобок", "волос", "оволосение", "ось", "гипоталамо", "гипофизарно", "гонадная", "созревание", "возмужание", "тинейджер",
    "подросток", "юность", "зрелость", "взросление", "изменение", "ломка", "голос", "кадык", "грудь", "молочная",
    "железа", "симптом", "признак", "развитие", "дифференциация", "морфология", "физиология", "репродукция", "либидо", "влечение"
];

const sleng = [
    "краш", "чилить", "рофлить", "кринж", "кринжово", "агриться", "вайб", "вайбовать", "омлет", "шазам",
    "бангер", "эщкере", "зашквар", "хайп", "хайпить", "рил", "рил ток", "пон", "ноу пон", "скилл",
    "флекс", "флексить", "флексово", "идж", "изи", "го", "ноу го", "лав", "лавово", "сасный",
    "сасно", "сус", "сомнительно", "падра", "бро", "братуха", "сис", "щищ", "отпад", "офигенно",
    "пушка", "бомба", "огонь", "жарко", "стремно", "facepalm", "камон", "летс го", "дринк", "залипать",
    "залип", "залипуха", "катка", "пати", "туса", "тусить", "отжигать", "движ", "движуха", "сорян",
    "ок", "окей", "агонь", "ауф", "вялый", "вышка", "грайн", "дроп", "дропнуть", "забайтить",
    "залип", "затусить", "кэш", "луз", "лузер", "мэд", "насерить", "низзя", "офк", "пабло",
    "пацан", "пацане", "пруф", "пруфы", "рип", "рипнуться", "снюс", "сорян", "стимать", "стримить",
    "тащер", "тильт", "топ", "топчик", "хейт", "хейтить", "чекать", "чувак", "чувиха", "шиммер"
];

const russianAlphabet = [
    'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 
    'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 
    'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 
    'э', 'ю', 'я'
];

function startGame() {
    let a = null;
    for (let i=0;i<idArray.length;i++) {
        a = document.getElementById(`${idArray[i]}`)
        if ((a.checked) && i!=0) {
            listThems.push(idArray[i])
        }
    }

    if (listThems.length === 0) {
        alert("Выбери хотя бы 1 тему, осел")
        return;
    }

    theme1 = listThems[Math.floor(Math.random()*listThems.length)]
    switch (theme1) {
        case "information":
            let c = Math.floor(Math.random()*information.length) 
            word = information[c]
            information.splice(c,1)
            break;
        case "phylosophy":
            let h = Math.floor(Math.random()*phylosophy.length) 
            word = phylosophy[h]
            phylosophy.splice(h,1)
            break;
         case "math":
            let k = Math.floor(Math.random()* math.length) 
            word =  math[k]
            math.splice(k,1)
            break;
        case "biology":
            let g = Math.floor(Math.random()* biology.length) 
            word =  biology[g]
            biology.splice(g,1)
            break;
        case "sleng":
            let l = Math.floor(Math.random()* sleng.length) 
            word =  sleng[l]
            sleng.splice(l,1)
            break;            
    }
    localStorage.setItem('currentWord', word);
    localStorage.setItem('currentTheme', theme1);
    localStorage.setItem('remainingAttempts', '12');
    localStorage.setItem('usedLetters', JSON.stringify([]));

    listThems = []
    window.location.href = "game.html"
}




function addLetter() {
    const vocabContainer = document.getElementById("vocablary");
    for (let i = 0; i < russianAlphabet.length; i++) {
        let b = document.createElement("button"); // Исправлено здесь
        b.className = "noClickLetter";
        b.innerText = russianAlphabet[i];
        b.id = `letter-${russianAlphabet[i]}`; // Добавляем ID для удобства
        b.setAttribute("onclick", "checkLetter(this)");
        vocabContainer.appendChild(b);
    }

    const theme = document.getElementById("themeGame");
    const c = document.createElement("p")
    c.innerText = `Тема: ${theme2}`
    theme.appendChild(c)
}


document.addEventListener('DOMContentLoaded', function() {
    addLetter();
    startpipi();
});

function checkLetter(element) {
    let a = element.id
    let b = element.innerText
    game(element)
}



let kuni = 0;
let anus = 0;
let russi = 12;
let jo = 0;

let word1 = localStorage.getItem('currentWord') || "слово";
let theme2 = localStorage.getItem('currentTheme') || "тема";
let usedLetters = JSON.parse(localStorage.getItem('usedLetters')) || [];

function upd() {
    let f = document.getElementById("word_")
    f.innerHTML = ''
    for (let i=0;i<anus.length;i++) {
        f.innerHTML+=anus[i]
    }
}


function startpipi() {
    kuni = word1.split("")
    anus = new Array(kuni.length).fill("-");
    upd()
}



function game(element) {
    let b = element.innerText
    let letterFound = false;
    /* let a = document.getElementById("knopki");
    let textSpan = document.getElementById("gameText"); */
/*     if (!textSpan) {
        textSpan = document.createElement("span");
        textSpan.id = "gameText";
        a.appendChild(textSpan); 
    }
    
  
    textSpan.textContent += (textSpan.textContent ? ' ' : '') + b; */

    for (let i = 0; i<anus.length;i++) {
        if (b==kuni[i]) {
            anus[i] = b
            upd()
            jo++
            letterFound = true;
        } 
    }
    if (!letterFound) {
        element.style.backgroundColor = "red"; // делаем кнопку красной
        element.style.color = "white"; // меняем цвет текста для контраста
        element.disabled = true; // делаем кнопку неактивной
    }
    /* bu.value = ''; */
     if (anus.join("")==kuni.join("")) {
        setTimeout(() => {
            alert("🎉 Поздравляем! Вы отгадали слово: " + word1);
            localStorage.removeItem('currentWord');
            localStorage.removeItem('currentTheme');
            localStorage.removeItem('remainingAttempts');
            localStorage.removeItem('usedLetters');
            window.location.href = "main.html";
        }, 500);
    }  
    if(jo<1) {
        russi--
        let g = String(russi)
        let h = document.getElementById(`pi${g}`)
        h.style.display = "block"
        if (russi<2) { 
            setTimeout(() => {
                document.getElementById("monk1").play()
                document.getElementById("monk2").play()
                alert("💀 Игра окончена! Загаданное слово: " + word1);
                localStorage.removeItem('currentWord');
                localStorage.removeItem('currentTheme');
                localStorage.removeItem('remainingAttempts');
                localStorage.removeItem('usedLetters');
                window.location.href = "main.html";
            }, 500);
        } 
    }

    jo = 0
}
