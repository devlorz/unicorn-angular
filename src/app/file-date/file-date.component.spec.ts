import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDateComponent } from './file-date.component';

describe('FileDateComponent', () => {
  let component: FileDateComponent;
  let fixture: ComponentFixture<FileDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileDateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
