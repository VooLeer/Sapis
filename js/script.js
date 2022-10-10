var counter = 0;
var nameArr = [];
var smartphoneAvArr = [];
var colorArr = [];
var phonesArr = [];
var sharpArr = [];
var dateArr = [];
var exhibitionArr=[];

function validate () {
    let bool = true;
    if (document.getElementById('name').value==="" || document.getElementById('phones').value==="Выберите понравившуюся модель"
    	|| document.getElementById('week').value==="") {
        if(document.getElementById('name').value==="")
            alert("Заполните поле \"Имя\"");
        if(document.getElementById('phones').value==="Выберите понравившуюся модель")
            alert("Выберите понравившуюся модель");
        if(document.getElementById('week').value==="")
        	 alert("Выберите дату посещения");
        bool=false;
    }
    if(bool) {
        nameArr[counter]=document.getElementById('name').value;
        if (document.querySelector('input[id="smartphone_availability"]:checked')){
            smartphoneAvArr[counter] = "Да";
        } else smartphoneAvArr[counter]="Нет";
        colorArr[counter]=document.getElementById('interior').value;
        dateArr[counter]=document.getElementById('week').value;
        phonesArr[counter]=document.getElementById('phones').value;
        sharpArr[counter]=document.querySelector('input[name="sharp"]:checked').value;
        exhibitionArr[counter]=document.getElementById('exhibition').value;
        counter++;
        ShowAll();
    }
}
function ShowAll () {
    var newWindow = window.open('', "Итоговые данные", "menubar=no,scrollbars=yes,width=1300px,height=500px");
    newWindow.document.write('<!DOCTYPE html>\n' +
        '<html lang="ru">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>Опрос</title>\n' +
        '    <link href="../css/style.css" rel="stylesheet">\n' +
        '    <script type="text/javascript" src="../js/script.js"></script>\n' +
        '</head>\n' +
        '<body>\n' +
        '<div class="wrapper">' +
        '<header class="header">' +
        '<h1 class="h1">' +
        'Выставка смартфонов' +
        '</h1>' +
        '</header>' +
        '<article class = "main" align="center">' +
        '<p>' + tabl() +'</p>'+
        '\n' +
        '</article>' +
        '<nav id="nav">\n' +
        '\n' +
        '        <button name="send" type="button" onclick="window.close()">Главная</button>\n' +
        '        <br><br>\n' +
        '        <button name="send" type="button" disabled>Результаты</button>' +
        '</nav>\n' +
        '    <aside><p>Ежегодная выставка смартфонов разных брендов привлекла большое количество посетителей.</p></aside>\n' +
        '    <footer>\n' +
        '        <p class="p1">Минск, 2021<br>ул. Я. Коласа, 28</p>\n' +
        '    </footer>\n' +
        '</div>\n' +
        '</body>\n' +
        '</html>')
}
function tabl() {
    var html =
        "<table border='4px' id='tableNames'>" +
        "<tr>" +
        "<th>Имя</th>" +
        "<th>Дата посещения</th>" +
        "<th>Наличие телефона</th>" +
        "<th>Модель</th>" +
        "<th>Цвет телефона</th>" +
        "<th>Частота покупки</th>" +
        "<th>Оценка выставки</th>" +
        "</tr>";
    for(var i=0; i<nameArr.length;i++) {
        html=html+"<tr>" +
            "<td>"+ nameArr[i]+"</td>" +
            "<td>"+ dateArr[i]+"</td>" +
            "<td>"+ smartphoneAvArr[i]+"</td>" +
            "<td>"+ phonesArr[i]+"</td>" +
            "<td>"+ colorArr[i]+"</td>" +
            "<td>"+ sharpArr[i]+"</td>" +
            "<td>"+ exhibitionArr[i]+"</td>" +
            "</tr>";
    }
    html+="</table>";
    html+= "<optgroup align='center' label='Список пользователей'>";
    for(i=0; i<nameArr.length;i++) {
        html=html+
            "<option>" + nameArr[i] + "</option>";
    }
    html+= "</optgroup>";
    return html;
}

function clearArr() {
    window.close();
    nameArr.clearData();
    ShowAll();
}