import { Account, SessionToken, TokenGenerator } from "../Server/Model";

export class Authorizer implements TokenGenerator{

    async generateToken(account: Account): Promise<SessionToken | undefined> {
        if (account.username === 'se' && account.password === '123'){
            return {
                tokenId: 'someTokenId'
            }
        }else {
            return undefined;
        }
    }

}