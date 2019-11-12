/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StreamFieldComponent } from './stream-field.component';

describe('StreamFieldComponent', () => {
  let component: StreamFieldComponent;
  let fixture: ComponentFixture<StreamFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
