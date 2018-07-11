var myText = prompt("Введите текст.");
var separator = prompt("Введите сепаратор.");

function splitter(txt, sep) {
    var counter = 1;
    for (var i = 0; i <= myText.length; i++) {
        if (txt.charAt(i) === sep) {
            counter += 1;
        }
    }

    return counter;
}

alert("Количество фрагментов в вашем тексте - " + splitter(myText, separator) + ".\n"
    + "Разделителем был выбран символ '" + separator + "'.");
