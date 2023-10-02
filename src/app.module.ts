import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonetbilController } from './modules/monetbil/monetbil.controller';
import { MonetbilService } from './modules/monetbil/monetbil.service';
import { MonetbilWebhookController } from './modules/webhook/webhook.controller';
import { MonetbilWebhookService } from './modules/webhook/webhook.service';

@Module({
  imports: [],
  controllers: [AppController, MonetbilController, MonetbilWebhookController],
  providers: [AppService, MonetbilService, MonetbilWebhookService],
})
export class AppModule { }
