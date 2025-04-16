import { checkCurrentUser } from "./services/auth.service.js";
import { STORAGE_KEYS } from "./utils/constant.util.js";

checkCurrentUser(STORAGE_KEYS.CURRENTUSER);