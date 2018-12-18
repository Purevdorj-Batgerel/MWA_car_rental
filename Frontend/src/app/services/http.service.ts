import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class HttpService {
    constructor(public http: HttpClient) {
    }

    get(url: string): Observable<any> {
        return this.http.get(url);
    }

    post(url, data, option = {}): Observable<any> {
        return this.http.post(url, data, option);
    }

    patch(url, data, option = {}): Observable<any> {
        return this.http.patch(url, data, option);
    }
}