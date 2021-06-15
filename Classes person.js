class potensregnerclass {
	constructor (tal, potens){

		this.tal = tal;
		this.potens = potens;
	}

	potensregner(){
		return Math.pow (this.tal,this.potens);
	}

}

let regnestykke1 = new potensregnerclass(2,2)

console.log (regnestykke1)

/*
function potensregner (tal,potens){
	return Math.pow (tal,potens);
}
console.log (potensregner(2,2))
console.log (potensregner(2,3))
console.log (potensregner(2,4))
console.log (potensregner(5,10))
*/

/*
function potensregner (tal,potens){
	var i;
	for (i = 0; i < potens; i++){
		return tal*tal

		}
}
console.log (potensregner(2,3))
console.log (potensregner(2,3))
console.log (potensregner(2,4))
*/