// 13. Параметры объекта
// Сколько параметров ожидается функцией:

function add_nums(num1, num2, num3 ){
    return num1 + num2 + num3;
}
add_nums.length // 3 - количество ожидаемых параметров.
// Сколько параметров получает функция:

function add_many_nums(){
    return arguments.length;
}    
add_many_nums(2,1,122,12,21,89); //возвращает 6