import Nedb from "nedb";
import { SessionToken } from "../Server/Model";

export class SessionTokenDBAccess {
    private nedb:Nedb;

    constructor(){
        this.nedb = new Nedb('database/SessionToken.db')
        this.nedb.loadDatabase();
    }

    public async storeSessionToken(token: SessionToken): Promise<void> {
        return new Promise ((resolve, reject) => {
            this.nedb.insert(token, (error) => {
                if (error){
                    reject(error);
                }else {
                    resolve();
                }
            })
        })
    }
}