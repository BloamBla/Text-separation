var myText = prompt("Введите текст.", '');
if (myText === null) {
    alert("ещё увидимся ;)");
}
else {
    if (myText === "") {
        alert("Вы ничего не ввели!");
    }
    else {
        var separator = prompt("Введите сепаратор.", '');
        if (separator === null) {
            alert("Так рано? До скорого.");
        }
        else {
            function counter(txt, sep) {
                var counter = 1;
                if (sep === "") {
                    return txt.length;
                }
                else {
                    for (var i = 0; i <= txt.length; i++) {
                        if (txt.charAt(i) === sep) {
                            counter += 1;
                        }
                    }
                    return counter;
                }
            }
            alert("Количество фрагментов в вашем тексте - " + counter(myText, separator) + ".\n"
                + "Разделителем был выбран символ '" + separator + "'.");
        }
    }
}
