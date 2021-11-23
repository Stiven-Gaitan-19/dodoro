import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DororoComponent } from './dororo.component';

describe('DororoComponent', () => {
  let component: DororoComponent;
  let fixture: ComponentFixture<DororoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DororoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DororoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
