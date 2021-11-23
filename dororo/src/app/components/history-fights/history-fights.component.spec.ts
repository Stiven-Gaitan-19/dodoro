import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryFightsComponent } from './history-fights.component';

describe('HistoryFightsComponent', () => {
  let component: HistoryFightsComponent;
  let fixture: ComponentFixture<HistoryFightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryFightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryFightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
