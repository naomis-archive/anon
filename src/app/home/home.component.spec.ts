import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { Category } from 'src/interfaces/Category';
import { Titles, Descriptions, Emotes, Buttons } from 'src/config/Text';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: HTMLElement;
  const categoryOrder: Category[] = [
    'question',
    'confession',
    'flirt',
    'compliment',
    'never',
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default to the question view', () => {
    expect(component.category).toBe('question');
  });

  it('should render the question view correctly', () => {
    validateView(component, fixture, compiled, categoryOrder, 'question');
  });

  it('should render the confession view correctly', () => {
    validateView(component, fixture, compiled, categoryOrder, 'confession');
  });

  it('should render the flirt view correctly', () => {
    validateView(component, fixture, compiled, categoryOrder, 'flirt');
  });

  it('should render the compliment view correctly', () => {
    validateView(component, fixture, compiled, categoryOrder, 'compliment');
  });

  it('should render the never view correctly', () => {
    validateView(component, fixture, compiled, categoryOrder, 'never');
  });
});

function validateView(
  component: HomeComponent,
  fixture: ComponentFixture<HomeComponent>,
  compiled: HTMLElement,
  categoryOrder: Category[],
  viewName: Category
) {
  component.setCategory(viewName);
  fixture.detectChanges();
  const title = compiled.querySelector('.title');
  const emote = compiled.querySelector('img');
  const description = compiled.querySelectorAll('p')?.[1];
  const buttons = compiled.querySelectorAll('button');
  expect(title?.textContent?.trim()).toBe(Titles[viewName]);
  expect(description?.textContent?.trim()).toBe(Descriptions[viewName]);
  expect(emote?.src).toBe(
    `https://cdn.nhcarrigan.com/anon/${Emotes[viewName]}.png`
  );
  // the fifth is the submit button
  expect(buttons?.length).toBe(5);
  expect(buttons?.[0].textContent?.trim()).toBe(
    Buttons[categoryOrder.filter((el) => el !== viewName)[0]]
  );
  expect(buttons?.[1].textContent?.trim()).toBe(
    Buttons[categoryOrder.filter((el) => el !== viewName)[1]]
  );
  expect(buttons?.[2].textContent?.trim()).toBe(
    Buttons[categoryOrder.filter((el) => el !== viewName)[2]]
  );
  expect(buttons?.[3].textContent?.trim()).toBe(
    Buttons[categoryOrder.filter((el) => el !== viewName)[3]]
  );
}
