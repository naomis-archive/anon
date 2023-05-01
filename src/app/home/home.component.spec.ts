import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should use the 'Grin' emote when category is not yet set", () => {
    component.ngOnInit();
    const homeElement: HTMLImageElement = fixture.nativeElement;
    const emote = homeElement.querySelector('img')!;
    expect(emote.src).toBe("https://cdn.naomi.lgbt/emotes/NaomiGrin.png")
  });

  it("Should use the 'Huh' emote when category is set to 'Never'", () => {
    component.ngOnInit();
    const homeElement: HTMLImageElement = fixture.nativeElement;
    const emote = homeElement.querySelector('img')!;
    let button: HTMLButtonElement | null = homeElement.querySelector("#never-button");
    button?.click();
    fixture.detectChanges();
    expect(emote.src).toBe("https://cdn.naomi.lgbt/emotes/NaomiHuh.png")
  });

  it("Should use the 'Blush' emote when category is set to 'Compliment'", () => {
    component.ngOnInit();
    const homeElement: HTMLImageElement = fixture.nativeElement;
    const emote = homeElement.querySelector('img')!;
    let button: HTMLButtonElement | null = homeElement.querySelector("#compliment-button");
    button?.click();
    fixture.detectChanges();
    expect(emote.src).toBe("https://cdn.naomi.lgbt/emotes/NaomiBlush.png")
  });

  it("Should use the 'Naomato' emote when category is set to 'Flirt'", () => {
    component.ngOnInit();
    const homeElement: HTMLImageElement = fixture.nativeElement;
    const emote = homeElement.querySelector('img')!;
    let button: HTMLButtonElement | null = homeElement.querySelector("#flirt-button");
    button?.click();
    fixture.detectChanges();
    expect(emote.src).toBe("https://cdn.naomi.lgbt/emotes/NaomiNaomato.png")
  });

  it("Should use the 'Think' emote when category is set to 'Confession'", () => {
    component.ngOnInit();
    const homeElement: HTMLImageElement = fixture.nativeElement;
    const emote = homeElement.querySelector('img')!;
    let button: HTMLButtonElement | null = homeElement.querySelector("#confess-button");
    button?.click();
    fixture.detectChanges();
    expect(emote.src).toBe("https://cdn.naomi.lgbt/emotes/NaomiThink.png")
  });


  it("Should use the 'Grin' emote when category is set to 'Question'", () => {
    component.ngOnInit();
    const homeElement: HTMLImageElement = fixture.nativeElement;
    const emote = homeElement.querySelector('img')!;
    let button: HTMLButtonElement | null = homeElement.querySelector("#question-button");
    button?.click();
    fixture.detectChanges();
    expect(emote.src).toBe("https://cdn.naomi.lgbt/emotes/NaomiGrin.png")
  });
});
