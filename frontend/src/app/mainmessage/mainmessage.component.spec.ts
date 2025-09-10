import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainmessageComponent } from './mainmessage.component';

describe('MainmessageComponent', () => {
  let component: MainmessageComponent;
  let fixture: ComponentFixture<MainmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainmessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
