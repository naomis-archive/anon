import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public questionForm = this.formBuilder.group({
    question: '',
    user: '',
  });
  public result = {};
  public error = '';
  public submitted = false;

  constructor(
    private formService: FormService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const question = this.questionForm.value.question;
    const user = this.questionForm.value.user || 'Anonymous';

    if (!question) {
      this.error = 'Please enter a question';
      return;
    }

    this.formService.postForm({ question, user }).subscribe(
      (data) => {
        console.log(data);
        this.result = data;
        this.submitted = true;
      },
      (error) => {
        console.error(error);
        this.error = JSON.stringify(error);
        this.submitted = false;
      }
    );
  }

  reset(): void {
    this.submitted = false;
    this.questionForm.reset();
  }
}
