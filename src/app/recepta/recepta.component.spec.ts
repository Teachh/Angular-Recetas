import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptaComponent } from './recepta.component';

describe('ReceptaComponent', () => {
  let component: ReceptaComponent;
  let fixture: ComponentFixture<ReceptaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
