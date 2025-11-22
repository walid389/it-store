import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accessoires } from './accessoires';

describe('Accessoires', () => {
  let component: Accessoires;
  let fixture: ComponentFixture<Accessoires>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Accessoires]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accessoires);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
