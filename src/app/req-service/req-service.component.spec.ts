import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqServiceComponent } from './req-service.component';

describe('ReqServiceComponent', () => {
  let component: ReqServiceComponent;
  let fixture: ComponentFixture<ReqServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
