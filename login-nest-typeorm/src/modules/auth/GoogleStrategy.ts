import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-google-oauth20";
import { AuthService } from "./auth.service";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
    constructor (
        @Inject('AUTH_SERVICE') private readonly authService: AuthService,
    ){
        super({
            clientID: process.env.GOOGLE_CLIENT_I,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL, 
            scope: ['email', 'profile'],
        });
    }


    async validate(accessToken: string, refreshToken: string, profile: Profile): Promise<any> {
        const { name, emails, photos } = profile;
        const user = {
            email: emails[0].value,
            password: accessToken,
            username: name.givenName,
            last_name: name.familyName,
            is_admin: false,
            city_name: "",
        }
        console.log("refreshToken...")
        console.log(refreshToken)
        console.log("Profile...")
        console.log(profile)
        console.log("accessToken...")
        console.log(accessToken)
        console.log("Validate...")
        console.log(user);
        await this.authService.validateUser(user);
        if (accessToken.length>0) this.authService.googleLogin(user);
        return user || null;
    }

}