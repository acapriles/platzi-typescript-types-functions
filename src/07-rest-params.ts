import { User, ROLES } from './01-enum';


const curentUser: User = {
  username: 'andy',
  role: ROLES.USER
}

const checkAdminRole = () => {
  if (curentUser.role === ROLES.ADMIN ) {
    return true;
  } else {
    return false;
  }
}

const resp = checkAdminRole();
console.log({resp});


const checkRoleV2 = (roles: string[]) => {
  if (roles.includes( curentUser.role )) {
    return true;
  } else {
    return false;
  }
}

const resp2 = checkRoleV2([ROLES.ADMIN, ROLES.OWNER]);
console.log({resp2});

// rest params
// Convierte todos los params en un array
const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes( curentUser.role )) {
    return true;
  } else {
    return false;
  }
}

const resp3 = checkRoleV3(ROLES.ADMIN, ROLES.OWNER);
console.log({resp3});
