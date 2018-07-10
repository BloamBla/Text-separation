const text = prompt("Введите текст.");
const sep = prompt("Введите сепаратор.");

function counter(){
    let count = 0;
    let arr = text.split(sep);
		for (let i = 0; i < arr.length; i++){
			if (arr[i] !== "") {
				count += 1
			}
		}
		return (count);
	}
	
	alert(counter(text));