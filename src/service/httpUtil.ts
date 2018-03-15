import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpUtil {
    constructor(private http: HttpClient) {

    }

    get(url: string, callbackSucess, callbackError) {
        
        this.http.get(url).subscribe(data => {
            callbackSucess(data);
        }, error => {
            callbackError(error);
        });
    }
}