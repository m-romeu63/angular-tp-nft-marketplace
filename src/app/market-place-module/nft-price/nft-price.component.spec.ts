import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftPriceComponent } from './nft-price.component';

describe('NftPriceComponent', () => {
  let component: NftPriceComponent;
  let fixture: ComponentFixture<NftPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
