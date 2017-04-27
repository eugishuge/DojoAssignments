var students = [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

for (var x = 0; x < students.length; x++){

    var full_name = students[x].first_name + " " + students[x].last_name;

    console.log(full_name);
}

var users = {

'Students': [
 {first_name:  'Michael', last_name : 'Jordan'},
 {first_name : 'John', last_name : 'Rosales'},
 {first_name : 'Mark', last_name : 'Guillen'},
 {first_name : 'KB', last_name : 'Tonel'}
],
'Instructors': [
 {first_name : 'Michael', last_name : 'Choi'},
 {first_name : 'Martin', last_name : 'Puryear'}
]
}

for (var x = 0; x<users.length; x++){

    var numStudents = (x+1) + " -" + users.Students[x].first_name + " " + users.Students[x].last_name + " -" + str.length;

    console.log(numStudents);
}
