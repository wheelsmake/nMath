import * as utils from "../../utils/index";
export default class big{
    #value :bigint;
    #pow :number;
    constructor(value :bigint, pow :number){
        this.#value = value;
        this.#pow = pow;
    }
    get value(){return this.#value;}
    get pow(){return this.#pow;}
    get number():number{return parseInt(this.#value.toString()) / 10 ** this.#pow;}
}