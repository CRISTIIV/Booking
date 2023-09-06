import { PassportSerializer } from "@nestjs/passport";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";
import { Inject, Injectable } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthService,
        private readonly userService: UsersService,
    ) {
        super();
    }

    serializeUser(user: CreateUserDto, done: Function) {
        console.log("serializerUser", user)
        done(null, user);
    }

    async deserializeUser(payload:any, done: Function) {
        const userFound = await this.userService.findOne(payload.email as string);
        console.log("deserializerUser", userFound)
        return userFound ? done(null, userFound) : done(null, null);
    }
}