import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { MonetbilWebhookService } from './webhook.service';
import { WebhookNotificationDTO } from './dto/webhook.dto';

@Controller('monetbil-webhook')
export class MonetbilWebhookController {
    constructor(private readonly webhookService: MonetbilWebhookService) { }

    @Post('notify')
    async handlerMonetbillNotification(
        @Body() notification: WebhookNotificationDTO
    ) {
        console.log("Transaction", notification)
        // Ici on pourra gerer la mise a jour de la transaction. 
        await this.webhookService.mobilenetCheckNotificaton(notification)
        return { status: 'ok' };
    }
}
