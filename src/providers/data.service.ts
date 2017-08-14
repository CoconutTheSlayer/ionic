import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { Dictionary, StringRepresentable } from 'lodash';


@Injectable()
export class DataService {

    private API_ROOT: string = 'http://private-9aad-note10.apiary-mock.com/';

    constructor(
        private http: Http,
    ) {}

    get<T>(url: string, params?: Dictionary<StringRepresentable>, wholeURL?: boolean): Observable<T>;
    get(url: string, params: Dictionary<StringRepresentable> = {}, wholeURL: boolean = false): Observable<object> {
        const parameters = new URLSearchParams();

        Object.keys(params).forEach((key) => {
            parameters.set(key.toString(), params[key].toString());
        });

        return this.http.get(wholeURL ? url : this.API_ROOT + url, {
            search: parameters,
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        })
            .map((res) => {
                return res.json();
            })
            .catch((err) => Observable.throw(err));
    }

    request(method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE', url: string, body?: object): Observable<object | void> {

        return this.http.request(this.API_ROOT + url, {
            method,
            body,
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        })
            .map(res => {
                try {
                    return res.json();
                } catch (e) {
                    return undefined;
                }
            })
            .catch((err) => Observable.throw(err));
    }
}
