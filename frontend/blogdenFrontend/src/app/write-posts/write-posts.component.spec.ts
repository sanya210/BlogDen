import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritePostsComponent } from './write-posts.component';

describe('WritePostsComponent', () => {
  let component: WritePostsComponent;
  let fixture: ComponentFixture<WritePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritePostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
