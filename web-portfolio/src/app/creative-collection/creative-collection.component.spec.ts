import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeCollectionComponent } from './creative-collection.component';

describe('CreativeCollectionComponent', () => {
  let component: CreativeCollectionComponent;
  let fixture: ComponentFixture<CreativeCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreativeCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreativeCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
