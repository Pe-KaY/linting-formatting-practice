import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { User } from '../../user-interface';
import { UserService } from '../user.service';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userServiceMock: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    userServiceMock = jasmine.createSpyObj('UserService', ['getUsers']);
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [
        { provide: UserService, useValue: userServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // simple test case to test if the getUsers function is called
  it('should call getUsers when init', () => {
    expect(userServiceMock.getUsers).toHaveBeenCalledTimes(1);
  });

  // simple test case to test if the users are set
  it('should set users when init', () => {
    const users: User[] = [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }];
    userServiceMock.getUsers.and.returnValue(users);

    fixture.detectChanges();

    expect(component.users).toEqual(users);
  });
})
