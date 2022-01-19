import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/data/user';
import { UserManagerService } from '../user-manager.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[]
  usersSubscription: Subscription
  columnsToDisplay: string[] = ['id', 'name', 'email', 'age', 'gender', 'profession', 'maritalStatus', 'location', 'actions']

  constructor(private userManager: UserManagerService) { }

  ngOnInit(): void {
    this.usersSubscription = this.userManager.users$.subscribe(
      users => this.users = users
    )
  }

  ngOnDestroy(): void {
      this.usersSubscription.unsubscribe()
  }

}
