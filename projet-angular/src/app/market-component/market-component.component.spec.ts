import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketComponentComponent } from './market-component.component';

describe('MarketComponentComponent', () => {
  let component: MarketComponentComponent;
  let fixture: ComponentFixture<MarketComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
