//Задача 1

//Задача на понимание объектов, указан массив с данными пользователей

//1.getLoan - Отобразить только тех пользователей у кого зарплата больше 200$ и они старше 20 лет, так как банк остальным не одобряет кредит

//2.getUserNames - Отобразить в console имена тех пользователей кто сейчас в сети

//3.getUserNames - Далее отобразить не только тех кто в онлайн, также добавить offline пользователей у кого активность была не больше 10 минут назад, и рядом с offline вывести имена
//    как в примере Jon 10 minutes ago


const users = [
    {
        id: 1,
        username: "Jon",
        age: 20,
        status: "online",
        lastActivity: 0,
        salary: 150
    },
    {
        id: 2,
        username: "Anna",
        age: 32,
        status: "offline",
        lastActivity: 25,
        salary: 300
    },
    {
        id: 3,
        username: "Bob",
        age: 19,
        status: "offline",
        lastActivity: 120,
        salary: 100
    },
    {
        id: 4,
        username: "David",
        age: 46,
        status: "online",
        lastActivity: 120,
        salary: 1500
    },
    {
        id: 5,
        username: "Bill",
        age: 18,
        status: "offline",
        lastActivity: 8,
        salary: 2000
    },
];
/* */
// Задача 1: Отобразить только тех пользователей, у кого зарплата больше 200$ и старше 20 лет
const getLoan = users.filter(user => user.salary > 200 && user.age > 20);
console.log("Задача 1:", getLoan);

// Задача 2: Отобразить имена пользователей, кто сейчас в сети
const getOnlineUserNames = (users) => {
    return users.filter(user => user.status === 'online').map(user => user.username);
};
console.log("Задача 2:", getOnlineUserNames(users));

// Задача 3: Отобразить имена всех пользователей, а для оффлайн добавить информацию о времени последней активности
const getAllUserNames = (users) => {
    return users.map(user => {
        if (user.status === 'online') {
            return user.username;
        } else {
            const minutesAgo = Math.floor(user.lastActivity / 60);
            return `${user.username} ${minutesAgo} minutes ago`;
        }
    });
};

console.log("Задача 3:", getAllUserNames(users));




//Задача 2


//У вас есть класс Rectangle, представляющий прямоугольник. 
//Ваша задача - добавить методы для вычисления площади и периметра прямоугольника. Также создайте несколько экземпляров класса и выведите результаты в консоль.

//calculateArea - Метод для вычисления площади прямоугольника

//calculatePerimeter - Метод для вычисления периметра прямоугольника

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

// Создаем экземпляры класса Rectangle
const rectangle1 = new Rectangle(6, 9);
const rectangle2 = new Rectangle(12, 5);

// Вызываем методы и выводим результаты в консоль
console.log("Прямоугольник 1:");
console.log("Площадь:", rectangle1.calculateArea());
console.log("Периметр:", rectangle1.calculatePerimeter());

console.log("\nПрямоугольник 2:");
console.log("Площадь:", rectangle2.calculateArea());
console.log("Периметр:", rectangle2.calculatePerimeter());

//Задача 3


//Ваша задача - создать класс TrafficLight, представляющий //светофор. У светофора есть три цвета: красный, желтый и //зеленый. Реализуйте методы для переключения цветов светофора.


//getCurrentColor - Метод для получения текущего цвета светофора
//switchColor - Метод для переключения цвета светофора
class TrafficLight {
    constructor() {
        this.colors = ['red', 'yellow', 'green'];
        this.currentColorIndex = 0;
    }

    getCurrentColor() {
        return this.colors[this.currentColorIndex];
    }

    switchColor() {
        this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
    }
}

// Пример использования
const trafficLight = new TrafficLight();

// Получаем текущий цвет
console.log("Текущий цвет:", trafficLight.getCurrentColor());

// Переключаем цвет
trafficLight.switchColor();
console.log("Текущий цвет после переключения:", trafficLight.getCurrentColor());

// Переключаем цвет еще раз
trafficLight.switchColor();
console.log("Текущий цвет после второго переключения:", trafficLight.getCurrentColor());


