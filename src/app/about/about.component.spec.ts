import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let h1:        HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have skyblue <h2>', () => {
    const h2: HTMLElement = fixture.nativeElement.querySelector('h2');
    const bgColor = h2.style.backgroundColor;
    expect(bgColor).toBe('skyblue');
  });

  it('no title in the DOM after createComponent()', () => {
    expect(h1.textContent).toEqual('');
  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(h1.textContent).toContain(component.title);
  });

it('should display original title after detectChanges()', () => {
  fixture.detectChanges();
  expect(h1.textContent).toContain(component.title);
});

it('should display a different test title', () => {
  component.title = 'Test Title';
  fixture.detectChanges();
  expect(h1.textContent).toContain('Test Title');
});
});

