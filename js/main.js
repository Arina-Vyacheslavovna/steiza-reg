//присваиваем переменным ссылки на элементы по их соответствующим id
var countriesSelect = document.getElementById('select_country');
var citiesSelect = document.getElementById('select_city');

//присваиваем переменным поля кода страны и ввода самого номера телефона
var country_code = document.getElementById('country_code');
var phone = document.getElementById('phone');

//присваимаем переменным значения оставших инпутов и select
var surname = document.getElementById('surname');
var namee = document.getElementById('name');
var patronymic = document.getElementById('patronymic');
var gender = document.getElementById('gender');
var birth = document.getElementById('birth');
var fullphone = document.getElementById('fullphone');
var reg = document.getElementById('registration');

//Создаем объект, где ключами являются страны, а значениями - соответствующие города
var data = {
  'Выберите страну': ['Сначала выберите страну'],
  Россия: [
    'Выберите город',
    'Москва',
    'Санкт-Петербург',
    'Казань',
    'Нижний Новгород',
    'Екатеринбург',
    'Мурманск',
    'Саранск',
    'Сочи',
  ],
  Франция: ['Выберите город', 'Париж', 'Марсель', 'Ницца', 'Страсбург', 'Ним', 'Тулуза'],
  Германия: ['Выберите город', 'Берлин', 'Гамбург', 'Мюнхен', 'Кёльн', 'Лейпциг', 'Бохум', 'Киль'],
};

//создаем функцию, которая будет добавлять option к select html-докумета
//функция зависит от 2х переменных - объекта select и массива arr
function addOptions(select, arr) {
  //цикл от 0 до длины массива arr, шаг +1
  for (var i = 0; i < arr.length; i++) {
    //создаем option со значением i-того элемента массива arr и добавляем его в конец объекта select
    select.add(new Option(arr[i]));
  }
}

// присваиваем переменной countries массив значений ключей объекта data (Выберите страну, Россия, Франция, Германия)
var countries = Object.keys(data);
//используем функцию addOptions, где в качестве объекта select - countriesSelect, а в качестве массива arr - countries, т е добавляем option со странами в select
addOptions(countriesSelect, countries);

//присваиваем переменной defaultCities массив городов 0-го ключа объекта data, т е значение ключа 'Выберите страну' - 'Сначала выберите страну'
var defaultCities = data[countries[0]];
//используем функцию addOptions, где в качестве объекта select - citiesSelect, а в качестве массива arr - defaultCities, т е добавляем option 'Сначала выберите страну' в select
addOptions(citiesSelect, defaultCities);

//добавляем обработчик события change элемента countriesSelect
countriesSelect.addEventListener('change', function () {
  //в переменной cities будут лежать города выбранной страны
  var cities = data[this.value];
  //Удаляем все option, что имеются в селекте, чтобы добавить нужные
  citiesSelect.length = 0;

  //используем функцию addOptions, где в качестве объекта select - citiesSelect, а в качестве массива arr - cities, т е добавляем option с горадами в select выбранной страны
  addOptions(citiesSelect, cities);
  //Сравниваем выбранную страну со значениями, если выбрано 'Выберите страну') и добавляем рамки для выбора стран и номера телефона
  if (this.value == 'Выберите страну') {
    //запрет ввода номера телефона
    phone.readOnly = true;
    //удаляем введенный ранее номер телефона
    phone.value = '';
    //добавляем рамки обязательного поля
    countriesSelect.style.border = '2px solid red';
    fullphone.style.border = '2px solid red';
  } else if (this.value == 'Россия') {
    //разрешение на ввод номера телефона
    phone.readOnly = false;
    //удаляем введенный ранее номер телефона и добавляем код страны
    phone.value = '7';
    //тип поля ввода номера телефона - number
    phone.type = 'number';
    //добавляем рамку обязательного поля
    countriesSelect.style.border = '2px solid green';
  } else if (this.value == 'Франция') {
    //разрешение на ввод номера телефона
    phone.readOnly = false;
    //удаляем введенный ранее номер телефона и добавляем код страны
    phone.value = '33';
    //тип поля ввода номера телефона - number
    phone.type = 'number';
    //добавляем рамку обязательного поля
    countriesSelect.style.border = '2px solid green';
  } else if (this.value == 'Германия') {
    //разрешение на ввод номера телефона
    phone.readOnly = false;
    //удаляем введенный ранее номер телефона и добавляем код страны
    phone.value = '49';
    //тип поля ввода номера телефона - number
    phone.type = 'number';
    //добавляем рамку обязательного поля
    countriesSelect.style.border = '2px solid green';
  }
});

//накладываем обработчик события change на citiesSelect  - обводим рамкой, если выбрано или нет
citiesSelect.addEventListener('change', function () {
  if (this.value == 'Выберите город' || this.value == 'Сначала выберите страну') {
    //добавляем рамку обязательного поля
    citiesSelect.style.border = '2px solid red';
  } else {
    //добавляем рамку обязательного поля
    citiesSelect.style.border = '2px solid green';
  }
});

//Создаем функцию, которая  удаляет все поля и селекты и задает красные рамки всем полям
function resetphone() {
  //запрет ввода поля номера телефона
  phone.readOnly = true;
  //очищаем поле номера телефона
  phone.value = 0;
  //задаем красные рамки
  countriesSelect.style.border = '2px solid red';
  citiesSelect.style.border = '2px solid red';
  fullphone.style.border = '2px solid red';
  surname.style.border = '2px solid red';
  namee.style.border = '2px solid red';
  patronymic.style.border = '2px solid red';
  gender.style.border = '2px solid red';
  birth.style.border = '2px solid red';
}

//проверка каждого поля на ввод данных , если пусто - красная рамка, иначе зеленая
surname.addEventListener('change', function () {
  if (surname.value == '') {
    surname.style.border = '2px solid red';
  } else surname.style.border = '2px solid green';
});
namee.addEventListener('change', function () {
  if (namee.value == '') {
    namee.style.border = '2px solid red';
  } else namee.style.border = '2px solid green';
});
patronymic.addEventListener('change', function () {
  if (patronymic.value == '') {
    patronymic.style.border = '2px solid red';
  } else patronymic.style.border = '2px solid green';
});
gender.addEventListener('change', function () {
  if (gender.value == 'Выберите пол') {
    gender.style.border = '2px solid red';
  } else gender.style.border = '2px solid green';
});
birth.addEventListener('change', function () {
  if (birth.value == '') {
    birth.style.border = '2px solid red';
  } else birth.style.border = '2px solid green';
});

//создаем переменную для максимальной длины ввода номера телефона и переменную типа boolean
var maxphone;
var correct = false;

//создаем обработчик события keypress на поле ввода номера телефона, задаем максимальную длину ввода, обводим рамкой
fullphone.addEventListener('keypress', function (e) {
  //если выбрано Россия - то максимальная длина 10
  if (countriesSelect.value == 'Россия') {
    maxphone = 10;
    //если Франция иои Германия - 11
  } else if (countriesSelect.value == 'Франция' || countriesSelect.value == 'Германия') {
    maxphone = 11;
    //иначе 0
  } else maxphone = 0;

  //проверяем по длине вводимых чисел , если меньше - красная,
  if (phone.value.length < maxphone || phone.readOnly) {
    fullphone.style.border = '2px solid red';
    correct = false;
    //если равно максмальной длине, то зеленая
  } else if (phone.value.length == maxphone) {
    fullphone.style.border = '2px solid green';
    correct = true;
  } else {
    //иначе предотвращаем ввод
    e.preventDefault();
  }

  //создаем массив запретных данных
  var invalidChars = ['-', '.', 'e'];
  //сверяем, если совпадает - не печатаем
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});

var check = false;

//Проверка заполнены ли поля
document.addEventListener('change', function () {
  if (
    countriesSelect.value != 'Выберите страну' &&
    citiesSelect.value != 'Выберите страну' &&
    citiesSelect.value != 'Сначала выберите страну' &&
    correct &&
    gender.value != 'Выберите пол' &&
    birth.value &&
    surname.value != '' &&
    namee != '' &&
    patronymic != ''
  ) {
    check = true;
  } else {
    check = false;
  }
});

//накладываем на форму обработчик события submit
reg.addEventListener('submit', function () {
  //если все поля заполнены, то выводим сообщение с данными и обнуляем форму, иначе - ошибку и выделяем не заполненные поля
  if (check) {
    alert(`
    Ваши данные сохранены
    ФИО: ${surname.value} ${namee.value} ${patronymic.value}
    Ваш пол: ${gender.value}
    Ваша дата рождения: ${birth.value}
    Вы проживаете в стране ${countriesSelect.value} и в городе ${citiesSelect.value}
    Ваш номер телефона: +${phone.value}`);
    surname.style.border = '2px solid black';
    namee.style.border = '2px solid black';
    patronymic.style.border = '2px solid black';
    gender.style.border = '2px solid black';
    countriesSelect.style.border = '2px solid black';
    citiesSelect.style.border = '2px solid black';
    birth.style.border = '2px solid black';
    fullphone.style.border = '2px solid black';
    reg.reset();
    return true;
  } else {
    if (surname.value == '') surname.style.border = '2px solid red';
    if (namee.value == '') namee.style.border = '2px solid red';
    if (patronymic.value == '') patronymic.style.border = '2px solid red';
    if (gender.value == 'Выберите пол') gender.style.border = '2px solid red';
    if (countriesSelect.value == 'Выберите страну') countriesSelect.style.border = '2px solid red';
    if (citiesSelect.value == 'Выберите страну' || citiesSelect.value == 'Сначала выберите страну')
      citiesSelect.style.border = '2px solid red';
    if (!birth.value) birth.style.border = '2px solid red';
    if (!correct) fullphone.style.border = '2px solid red';

    alert('Введите все данные!');
  }
});
