import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User, users } from 'src/data/user';

@Injectable({
  providedIn: 'root',
})
export class UserManagerService {
  private userDataSource = new BehaviorSubject<User[]>(users);
  users$ = this.userDataSource.asObservable();

  constructor() {}

  add(user: User): void {
    const current = this.userDataSource.getValue();
    const next = [...current, user];
    this.userDataSource.next(next);
  }

  update(user: User): void {
    const current = this.userDataSource.getValue();
    const next = current.map(value => {
      if (value._id === user._id) return user
    })
    this.userDataSource.next(next)
  }

  find(id: string): User {
    const users = this.userDataSource.getValue();
    return users.find((user) => user._id === id);
  }
}
