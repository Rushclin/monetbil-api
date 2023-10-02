import { Injectable } from '@nestjs/common';
import * as requestPromise from 'request-promise';
// import { convertPrice, generateRandomToken } from './utils';
// import * as md5 from 'md5-nodejs';

@Injectable()
export class MonetbilService {
    async initPay(currencyCode: string, amount: number, redirectUrl: string | undefined, type: string): Promise<any> {

        const baseUrl = "https://api.monetbil.com/widget";
        const version = "v2.1";
        const serviceKey = "qO0lwPVz3G2NxCgMllqkeY7zmh6wWjS5"
        const postUrl = `${baseUrl}/${version}/${serviceKey}`

        const ob = {
            amount: amount,
            logo: "https://www.acesy.net/imgs/logo-acesy.png",
            item_ref: "item_ref",
            notify_url: "https://2fc5-102-244-160-172.ngrok-free.app/monetbil-webhook/notify",
            return_url: "http://localhost:5174/"
        }

        var options = {
            method: 'POST',
            uri: postUrl,
            formData: ob,
            headers: {}
        };

        let result = await requestPromise(options)
            .then((body) => {
                return body
            })
            .catch((err) => {
                console.log(err)
            });
        result = JSON.parse(result);
        result.item_ref = "item_ref";
        return result;
    }
}
