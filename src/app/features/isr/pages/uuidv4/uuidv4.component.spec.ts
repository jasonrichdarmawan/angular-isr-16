import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uuidv4Component } from './uuidv4.component';

describe('Uuidv4Component', () => {
  let component: Uuidv4Component;
  let fixture: ComponentFixture<Uuidv4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Uuidv4Component]
    });
    fixture = TestBed.createComponent(Uuidv4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
