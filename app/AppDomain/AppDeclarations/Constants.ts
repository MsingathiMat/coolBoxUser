export enum UserRole {
    Admin = 'Admin',
    Owner = 'Owner',
    User = 'User',
    SuperUser = 'SuperUser',
  }
  

  export enum QueryFunctions{
    getEvents="getEvents",
    getAllHotlist= "getAllHotlist",
    getHotlistById="getHotlistById",
    getAllArtist= "getAllArtist",
    getGigGuidById="getGigGuidById",
    getStats="getStats"
  }
  
  type FunctionRegistryType = {
    [key in UserRole]: string[];
  };
  

  export const FunctionRegistry: FunctionRegistryType = 
    {
      [UserRole.Admin]: ["getStats"],
      [UserRole.Owner]: [
        "getEvents",
        "getAllHotlist",
        "getHotlistById",
        "getAllArtist",
        "getGigGuidById",
      ],
      [UserRole.User]: [],
      [UserRole.SuperUser]: [],
    }
  ;


