import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero/hero.service';
import { FormsModule } from '@angular/forms';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';

describe('HeroComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        HeroesComponent,
        HeroDetailComponent
      ],
      providers: [HeroService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'Tour of Heroes'`, async(() => {
    expect(component.title).toEqual('Tour of Heroes');
  }));

  it('should render title in a h1 tag', async(() => {
    expect(compiled.querySelector('h1').textContent).toContain('Tour of Heroes');
  }));
});
