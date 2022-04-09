import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MQTTComponent } from './mqtt.component';

describe('MQTTComponent', () => {
  let component: MQTTComponent;
  let fixture: ComponentFixture<MQTTComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MQTTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MQTTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
