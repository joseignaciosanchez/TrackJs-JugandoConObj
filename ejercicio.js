var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

//¿Cómo harías print/log de la edad de John?
console.log(users[1].age);

//¿Cómo harías print/log del nombre del primer objeto?
console.log(users[0].name);

//¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop?
function nomAge(x){
  
  for(i = 0; i < x.length; i++){
  console.log(users[i].name,users[i].age);
  }
}
nomAge(users);

//¿Cómo harías para imprimir el nombre de los mayores de edad?
function nomMayEdad(x){
  mayorEdad = x[0].age;
  nomMayor = x[0].name;
  for(i = 0; i < x.length; i++){    
    if(x[i].age > mayorEdad){
      mayorEdad = x[i].age;     
      nomMayor = x[i].name;
      return nomMayor;
    }
  }
  console.log(nomMayor);
}
nomMayEdad(users);