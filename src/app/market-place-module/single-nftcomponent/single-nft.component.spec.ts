import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNFTComponent } from './single-nft.component';

describe('SingleNFTComponent', () => {
  let component: SingleNFTComponent;
  let fixture: ComponentFixture<SingleNFTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleNFTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleNFTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
