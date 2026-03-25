import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeTarjeta } from './heroe-tarjeta';

describe('HeroeTarjeta', () => {
  let component: HeroeTarjeta;
  let fixture: ComponentFixture<HeroeTarjeta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroeTarjeta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroeTarjeta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
