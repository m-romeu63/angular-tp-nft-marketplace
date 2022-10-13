import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNftComponent } from './single-nft.component';

describe('SingleNftComponent', () => {
  let component: SingleNftComponent;
  let fixture: ComponentFixture<SingleNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleNftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
