import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopVideosWorldwideComponent } from './top-videos-worldwide.component';

describe('TopVideosWorldwideComponent', () => {
  let component: TopVideosWorldwideComponent;
  let fixture: ComponentFixture<TopVideosWorldwideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopVideosWorldwideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopVideosWorldwideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
