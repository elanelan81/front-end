import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { of } from 'rxjs/internal/observable/of';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: UserService;
  let userServiceSpy: jasmine.Spy;

  beforeEach(async () => {
    //create mock object for each 
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [UserService]
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
    //create Mock class for service 
    userService = TestBed.inject(UserService);
    //Mock the data for the getUser method
    userServiceSpy = spyOn(userService, 'getUsers').and.returnValue(of([
      {id: 1, name: "AAAA"},
      {id: 2, name: "BBBB"}
    ]))

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //test users
  it('should retrieve users from the UserService on init',() => {
    fixture.detectChanges();
    expect(userServiceSpy).toHaveBeenCalled();
  })
  //refresh button 
  it('should retrieve users from the UserService when the refresh button is clicked',() => {
    fixture.detectChanges();
    userServiceSpy.calls.reset();

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    expect(userServiceSpy).toHaveBeenCalled();
    
  })


});
