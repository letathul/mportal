import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JboxitemComponent } from './jboxitem.component';

describe('JboxitemComponent', () => {
  let component: JboxitemComponent;
  let fixture: ComponentFixture<JboxitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JboxitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JboxitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
