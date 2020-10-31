import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaComponent } from './capa.component';

describe('CapaComponent', () => {
  let component: CapaComponent;
  let fixture: ComponentFixture<CapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
