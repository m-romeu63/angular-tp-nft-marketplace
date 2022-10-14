import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteNftComponent } from './favorite-nft.component';

describe('FavoriteNftComponent', () => {
  let component: FavoriteNftComponent;
  let fixture: ComponentFixture<FavoriteNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteNftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
