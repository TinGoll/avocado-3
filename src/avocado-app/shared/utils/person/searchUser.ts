import { Person } from "../../contract/types";

export const searchUser = (searchText: string, user?: Person): boolean => {
  if (!user) {
    return false;
  }
  const { login, firstname, lastname, middlename } = user;
  const lowerSearchText = searchText.toLowerCase();
  return Boolean(
    login.toLowerCase().includes(lowerSearchText) ||
      (firstname && firstname.toLowerCase().includes(lowerSearchText)) ||
      (lastname && lastname.toLowerCase().includes(lowerSearchText)) ||
      (middlename && middlename.toLowerCase().includes(lowerSearchText))
  );
};
