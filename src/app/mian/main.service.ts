import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';


@Injectable()
export class MainService {
    constructor(public http: HttpClient) {
    }

    getHead(): Observable<any> {
        return this.http.get<any>('https://kcalb.wang/api/head');
    }
}
