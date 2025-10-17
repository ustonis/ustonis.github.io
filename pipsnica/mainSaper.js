class DifficultGame {
    constructor(name, sizeOfMap, mines) {
        this.name = name;
        this.sizeOfMap = sizeOfMap;
        this.mines = mines; // добавим количество мин
    }
}

// Добавляем количество мин для каждой сложности
let noob = new DifficultGame("noob", 10, 10)
let starter = new DifficultGame("starter", 20, 40)
let pro = new DifficultGame("pro", 50, 150)
let god = new DifficultGame("god", 100, 400)

function startGame() {
    let difficult = document.getElementById("difficultGame").value
    switch(difficult) {
        case "noob": 
            difficult = noob;
            break;
        case "starter": 
            difficult = starter;
            break;
        case "pro": 
            difficult = pro;
            break;
        case "god": 
            difficult = god;
            break;
    }
    localStorage.setItem('difGame', JSON.stringify(difficult));
    window.location.href = "gameSaper.html"

}

function createGame() {
    // Правильно получаем и парсим данные
    let difficultData = JSON.parse(localStorage.getItem('difGame'));
    let size = difficultData.sizeOfMap;
    let minesCount = difficultData.mines;
    
    // Создаем карту правильного размера
    let map = Array(size).fill().map(() => Array(size).fill(0));
    
    // Расставляем мины
    let minesPlaced = 0;
    while (minesPlaced < minesCount) {
        let a = Math.floor(Math.random() * size);
        let b = Math.floor(Math.random() * size);
        
        // Проверяем, нет ли уже мины в этой клетке
        if (map[a][b] !== -1) {
            map[a][b] = -1;
            minesPlaced++;
        }
    }
    
    // Создаем контейнер для кнопок
    const gameContainer = document.getElementById("mainContent");
    gameContainer.innerHTML = ''; // Очищаем предыдущую игру
    gameContainer.style.display = 'grid';
    gameContainer.style.gridTemplateColumns = `repeat(${size}, 30px)`; // Сетка по размеру карты
    gameContainer.style.gap = '2px';
    
    // Подсчитываем цифры вокруг мин
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (map[i][j] !== -1) {
                let count = 0;
                
                // Проверяем всех соседей
                for(let di = -1; di <= 1; di++) {
                    for(let dj = -1; dj <= 1; dj++) {
                        if(di === 0 && dj === 0) continue;
                        
                        let ni = i + di;
                        let nj = j + dj;
                        
                        // Проверяем границы массива
                        if (ni >= 0 && ni < size && nj >= 0 && nj < size) {
                            if (map[ni][nj] === -1) {
                                count++;
                            }
                        }
                    }
                }
                map[i][j] = count;
                
                // Создаем кнопку для клетки с цифрой
                let b = document.createElement("button"); 
                b.className = "button";
                b.innerText = ""; // Показываем цифру только при клике
                b.dataset.value = count; // Сохраняем значение в data-атрибуте
                b.dataset.i = i;
                b.dataset.j = j;
                b.id = `button-${i}-${j}`; 
                b.addEventListener('click', function() {
                    handleCellClick(this);
                });
                gameContainer.appendChild(b);
            } else {
                // Создаем кнопку для мины
                let b = document.createElement("button"); 
                b.className = "button mine";
                b.innerText = ""; // Не показываем мину сразу
                b.dataset.value = -1;
                b.dataset.i = i;
                b.dataset.j = j;
                b.id = `button-${i}-${j}`; 
                b.addEventListener('click', function() {
                    handleCellClick(this);
                });
                gameContainer.appendChild(b);
            }
        }
    }
    
    
}

function returnToMain() {
    localStorage.setItem('difGame', null);
    window.location.href = "index.html"
}
function backToPipi() {
    window.location.href = "main.html"
}
// Функция обработки клика по клетке
function handleCellClick(button) {
    const value = button.dataset.value;
    const i = button.dataset.i;
    const j = button.dataset.j;
    
    if (value === "-1") {
        // Если это мина
        button.innerText = "💣";
        button.style.backgroundColor = "red";
        alert("Игра окончена! Вы наступили на мину!");
        // Здесь можно добавить логику завершения игры
        localStorage.setItem('difGame', null);
        window.location.href = "index.html"
        
    } else {
        // Если это цифра
        button.innerText = value;
        button.style.backgroundColor = "#e0e0e0";
        button.disabled = true;
        
    }
}

function goToSaperRules() {
    window.location.href = "rulesSaper.html"
}




