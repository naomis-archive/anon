import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormData } from '../assets/interfaces/FormData';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  url = 'http://localhost:6080/ask';

  constructor(private http: HttpClient) {}

  public postForm(data: FormData) {
    return this.http.post<FormData>(this.url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
