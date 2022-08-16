import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistComponent } from './userlist.component';

describe('UserlistComponent', () => {
  let component: UserlistComponent;
  let fixture: ComponentFixture<UserlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserlistComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it(`should have as title test2`, () => {
    const fixture = TestBed.createComponent(UserlistComponent);
    const app = fixture.debugElement.nativeElement;
    expect(app.querySelector('p').textContent).toEqual('userlist works!');
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
