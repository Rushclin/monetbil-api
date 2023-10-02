import { Injectable, Logger } from '@nestjs/common';
import { WebhookNotificationDTO } from './dto/webhook.dto';

@Injectable()
export class MonetbilWebhookService {
    private readonly logger = new Logger(MonetbilWebhookService.name);

    async mobilenetCheckNotificaton(notyfiction: WebhookNotificationDTO) {
        this.logger.log("Le montant de la transaction est : ", notyfiction.amount)
        this.logger.log("Le statut de la transaction est : ", notyfiction.status)
    }
}
