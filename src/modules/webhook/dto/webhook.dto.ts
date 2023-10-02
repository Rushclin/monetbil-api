// webhook-notification.dto.ts

import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class WebhookNotificationDTO {
    @IsNotEmpty()
    @IsString()
    service: string;

    @IsNotEmpty()
    @IsString()
    transaction_id: string;

    @IsNotEmpty()
    @IsString()
    transaction_uuid: string;

    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @IsNotEmpty()
    @IsNumber()
    fee: number;

    @IsNotEmpty()
    @IsNumber()
    revenue: number;

    @IsNotEmpty()
    @IsString()
    status: string;

    @IsNotEmpty()
    @IsString()
    message: string;

    @IsNotEmpty()
    @IsString()
    country_name: string;

    @IsNotEmpty()
    @IsString()
    country_iso: string;

    @IsNotEmpty()
    @IsString()
    country_code: string;

    @IsNotEmpty()
    @IsString()
    mccmnc: string;

    @IsNotEmpty()
    @IsString()
    operator: string;

    @IsNotEmpty()
    @IsString()
    operator_code: string;

    @IsNotEmpty()
    @IsString()
    currency: string;

    @IsOptional()
    @IsString()
    user: string;

    @IsOptional()
    @IsString()
    item_ref: string;

    @IsOptional()
    @IsString()
    payment_ref: string;

    @IsOptional()
    @IsString()
    first_name: string;

    @IsOptional()
    @IsString()
    last_name: string;

    @IsOptional()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    sign: string;
}
