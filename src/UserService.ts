import * as local from './StorageHelper'

class UserService
{
    localStorageRepo: local.StorageHelper.LocalStorageWorker
    constructor()
    {
        this.localStorageRepo =   new local.StorageHelper.LocalStorageWorker()
    }
public static USER = {token: ""}

public saveUser(user: any){
   this.localStorageRepo.add("user", JSON.stringify(user))
}

public getUser(): any{
    return JSON.parse(this.localStorageRepo.get("user"))
}

}

export default UserService