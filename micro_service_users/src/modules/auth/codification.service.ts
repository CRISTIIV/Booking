import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';


@Injectable()
export class BcryptService {
    async encriptPass(pass:string): Promise<string>{
        const salt_rounds = 10;
        const salt = await bcrypt.genSalt(salt_rounds);
        const EncyptedPass = await bcrypt.hash(pass,salt);
        return EncyptedPass;
    }

    async verifyPass (pass:string, EncyptedPass:string): Promise<boolean>{
        return await bcrypt.compare(pass,EncyptedPass);
    }
}