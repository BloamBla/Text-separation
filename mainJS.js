var myText = prompt("Введите текст.");
var separator = prompt("Введите сепаратор.");

function splitter(txt, sep){
    return txt.split(sep).length;
}

alert("Количество фрагментов в вашем тексте " + splitter(myText, separator) + ".\n"
    + "Разделителем был выбран символ '" + separator + "'.");
