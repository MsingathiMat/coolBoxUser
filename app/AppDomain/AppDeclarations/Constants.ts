 enum UserRole {
  Admin = "Admin",
  Owner = "Owner",
  User = "User",
  SuperUser = "SuperUser",
}

 enum QueryFunctions {
  GetEvents = "GetEvents",
  GetAllHotlist = "GetAllHotlist",
  GetHotlistById = "GetHotlistById",
  GetAllArtist = "GetAllArtist",
  GetGigGuidById = "GetGigGuidById",
  GetStats = "GetStats",
  AddUser = "AddUser",
  GetUserByEmail = "GetUserByEmail",
}

export type FunctionRegistryType = {
  [key in UserRole]: string[];
};

 const FunctionRegistry: FunctionRegistryType = {
  [UserRole.Admin]: ["AddUser", "GetUserByEmail"],
  [UserRole.Owner]: ["AddUser", "GetUserByEmail"],
  [UserRole.User]: ["AddUser", "GetUserByEmail"],
  [UserRole.SuperUser]: ["AddUser", "GetUserByEmail"],
};


export {QueryFunctions,UserRole,FunctionRegistry}