import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

  clientId = '[CLIENT_ID]';

  constructor(private http: Http) { }

  get(url, attachClientId?) {
    return this.http.get(attachClientId ? this.prepareUrl(url) : url);
  }

  prepareUrl(url) {
    return `${url}?client_id=${this.clientId}`
  }

}
