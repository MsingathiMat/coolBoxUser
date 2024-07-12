export enum UserRole {
    Admin = 'Admin',
    Owner = 'Owner',
    User = 'User',
    SuperUser = 'SuperUser',
  }
  

  export enum QueryFunctions{
    GetEvents="GetEvents",
    GetAllHotlist= "GetAllHotlist",
    GetHotlistById="GetHotlistById",
    GetAllArtist= "GetAllArtist",
    GetGigGuidById="GetGigGuidById",
    GetStats="GetStats",
    AddUser="AddUser"
  }
  
  type FunctionRegistryType = {
    [key in UserRole]: string[];
  };
  

  export const FunctionRegistry: FunctionRegistryType = 
    {
      [UserRole.Admin]: [],
      [UserRole.Owner]: [
        "AddUser",
      ],
      [UserRole.User]: [],
      [UserRole.SuperUser]: [],
    }
  ;


