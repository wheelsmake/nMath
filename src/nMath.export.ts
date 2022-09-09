import * as utils from "../../utils/index";
import * as methods from "./methods";
import * as constants from "./constants";
const nMath = {...methods, ...constants};
utils.generic.constantize(nMath);
export default nMath;