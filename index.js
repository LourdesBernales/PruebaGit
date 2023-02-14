const user = {
  name: "Rian",
  nickname: "Ryan",
  hobiess: ["Run", "Dancing", "Code", "Eat"],
  Adress: {
    Street: "Jr Hualcan",
    City: "Lima",
    Departament: "Lima",
  },
};
/*
TODO: ESTAS
  LOHDAHDGD
  KJAJDJDK
KJDK4
LDDLGKLDG
* @param miparam
?esta ekka

!fasfafs



*/
const friends = [
  { name: "Lourdes", nickname: "Logui" },
  { name: "Jessica ", nickname: "Revoltosa" },
  { name: "Margarita", nickname: "Margue" },
  { name: "Melisa", nickname: "Meli" },
  { name: "Martina", nickname: "Pulga" },
];
user.friends = friends;
output = "";
for (let i = 0; i < friends.length; i++) {
  output = output + `<li> ${friends[i].name} -  ${friends[i].nickname}</li>`;
}
document.getElementById("People").innerHTML = output;
let cadenaPost = "";

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (let j = 0; j < data.length; j++) {
      cadenaPost =
        cadenaPost + `<li> ${data[j].userId} -  ${data[j].title}</li>`;
      console.log("Hola" + cadenaPost);
    }
    document.getElementById("Post").innerHTML = cadenaPost;
  });
console.log("hola3");

console.log(user);
console.log(JSON.stringify(user));
