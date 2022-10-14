import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Descriptions, Titles } from 'src/assets/interfaces/Enums';
import { Category } from 'src/assets/interfaces/FormData';
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
  public category: Category = 'question';
  public title = Titles[this.category];
  public description = Descriptions[this.category];

  constructor(
    private formService: FormService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const question = this.questionForm.value.question;
    const user = this.questionForm.value.user || 'Anonymous';
    const category = this.category;

    if (!question) {
      this.error = 'Please enter a question';
      return;
    }

    this.formService.postForm({ question, user, category }).subscribe(
      (data) => {
        console.log(data);
        this.result = data;
        this.submitted = true;
        this.error = '';
      },
      (error) => {
        console.error(error);
        this.error = JSON.stringify(error);
        this.submitted = false;
      }
    );
  }

  setCategory(category: Category): void {
    this.category = category;
    this.title = Titles[category];
    this.description = Descriptions[category];
  }

  reset(): void {
    this.submitted = false;
    this.questionForm.reset();
  }
}
