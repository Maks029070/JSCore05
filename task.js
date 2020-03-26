var user = {
	"name": "Пилип",
	"surname": "Шевченко"
};

user.name = "Сергій";
delete user.name;

function task2() {
	var employeeSalaries = {
		"Пилип": 9800,
		"Сергій": 7760,
		"Максим": 12500,
		"Василь": 15000
	};

	var sum = 0;
	for (var key in employeeSalaries) {
		sum += employeeSalaries[key];
	}

	alert(sum);

	console.log(employeeSalaries);
}