import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftDescriptionComponent } from './nft-description.component';

describe('NftDescriptionComponent', () => {
  let component: NftDescriptionComponent;
  let fixture: ComponentFixture<NftDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
