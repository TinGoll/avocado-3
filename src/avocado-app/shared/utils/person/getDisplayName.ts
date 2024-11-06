import { Person } from "../contract/types";

export const getDisplayName = (user: Person): string => {
  const { login, firstname, lastname, middlename } = user;

  if (lastname && firstname) {
    let result = lastname;
    result += ` ${firstname[0]}.`;

    if (middlename) {
      result += ` ${middlename[0]}.`;
    }

    return result;
  } else if (firstname) {
    return firstname;
  } else {
    return login;
  }
};
