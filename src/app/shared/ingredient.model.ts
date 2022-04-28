/*      Versión Anterior                    

    export class Ingredient {
        public name: string;
        public amount: number;

        constructor(name: string, amount: number){
            this.name = name;
            this.amount = amount;
        }
    }
*/

export class Ingredient {
    /*  Podemos definir el constructor de esta manera, la cual es similar   *
    *   a crear las variables fuera del constructor y luego asignarle los   *
    *   valores mediante el constructor (Versión Anterior)                  */
    constructor(public name: string, public amount: number){}
}

