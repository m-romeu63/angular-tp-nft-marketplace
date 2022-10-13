import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNFTComponentComponent } from './single-nftcomponent.component';

describe('SingleNFTComponentComponent', () => {
  let component: SingleNFTComponentComponent;
  let fixture: ComponentFixture<SingleNFTComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleNFTComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleNFTComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
