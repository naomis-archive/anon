import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormData } from '../interfaces/FormData';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  url = 'https://anon-api.naomi.lgbt/ask';

  constructor(private http: HttpClient) {}

  public postForm(data: FormData) {
    return this.http.post<FormData>(this.url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
