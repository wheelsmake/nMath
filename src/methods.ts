import * as utils from "../../utils/index";
import big from "./big";
export function abs(x :bigint | big) :bigint{
    if(x instanceof big) x = x.value;
    else if(typeof x != "bigint") utils.generic.E("x", "bigint", x);
    return x > 0n ? x : -x;
}
export function sign(x :bigint | big) :bigint{
    if(x instanceof big) x = x.value;
    else if(typeof x != "bigint") utils.generic.E("x", "bigint", x);
    return x > 0n ? 1n :
            x = 0n ? 0n :
             x = -0n ? -0n : -1n;
}