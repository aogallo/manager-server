import { UserCredentialsDBAccess } from "../src/Authorization/UserCredentialDBAccess";

class DBTest {
    public dbAccess: UserCredentialsDBAccess = new UserCredentialsDBAccess();
}

new DBTest().dbAccess.putUserCredential({
    username: 'user1',
    password: '123',
    accessRights: [1,2,3]
})