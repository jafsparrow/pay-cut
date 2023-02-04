import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./user.service";


@Controller('user')
export class UserController {
    constructor(private userService: UserService) {

    }

    @Get()
    getUsers() {
        return 'hello i am a user'
    }

    @Post()
    createUser(@Body()userDto: CreateUserDto) {
        // orgId should be read from the jwt.
        return this.userService.createUser(userDto)

    }

    @Get('barcode/:barcode')
    findUserFromBarcode(@Param('barcode') barcode) {
        return this.userService.findUserFromUserBarcode(barcode)
        // return barcode;
    }
}