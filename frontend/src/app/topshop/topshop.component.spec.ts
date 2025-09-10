import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopshopComponent } from './topshop.component';

describe('TopshopComponent', () => {
  let component: TopshopComponent;
  let fixture: ComponentFixture<TopshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopshopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
