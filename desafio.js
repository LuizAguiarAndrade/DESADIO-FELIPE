const heroName = "dante "
const textt = "O herói de nome "
const text ="está no nível de "
let xp = 2551


if (xp < 1000){
   exp = "Ferro";
} else if (xp > 1000 && xp <= 2000){
   exp = "Bronze";
} else if (xp > 2000 && xp <= 5000){
   exp = "Prata";
} else if (xp > 5000 && xp <= 6000){
   exp = "Ouro";
} else if (xp > 6000 && xp <= 7000){
   exp = "Platina";
} else if (xp > 7000 && xp <= 8000){
   exp = "Diamante";
} else if (xp > 8000 && xp <= 9000){
   exp = "Ascendente";
} else if (xp > 9000 && xp <= 10000){
   exp = "Imortal";
} else {
   exp = "Radiante";
};

console.log(textt + heroName + text + exp)
