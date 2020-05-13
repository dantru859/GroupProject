import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgChooserComponent } from './img-chooser.component';

describe('ImgChooserComponent', () => {
  let component: ImgChooserComponent;
  let fixture: ComponentFixture<ImgChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
