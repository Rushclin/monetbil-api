import { Controller, Post, Body, Get } from '@nestjs/common';
import { MonetbilService } from './monetbil.service';

@Controller('monetbil')
export class MonetbilController {
    constructor(private readonly monetbilService: MonetbilService) { }

    @Post('init-pay')
    async initPay() {
        const result = await this.monetbilService.initPay("CM", 1, "/", "")
        return result
    }

    @Post('sign')
    async sign(@Body() body: any): Promise<boolean> {
        // Appeler la fonction sign du service ici
        return
    }

    @Post("verify")
    async verifyMonetbil(@Body() body: any) {
        console.log("=============> Body", body)
    }

    @Get("/")
    async testRoute() {
        return {
            "status": "OK"
        }
    }
}
