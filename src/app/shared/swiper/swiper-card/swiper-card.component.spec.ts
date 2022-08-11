/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SwiperCardComponent } from './swiper-card.component';

describe('SwiperCardComponent', () => {
  let component: SwiperCardComponent;
  let fixture: ComponentFixture<SwiperCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiperCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
