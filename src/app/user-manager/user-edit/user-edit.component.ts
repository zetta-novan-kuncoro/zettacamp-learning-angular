import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/data/user';
import { UserManagerService } from '../user-manager.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  user: User;
  editUserForm: FormGroup;

  constructor(
    private userManager: UserManagerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.params['id'];
    this.user = this.userManager.find(userId);

    const addressesFormControl =
      this.user.location.addresses?.map(
        (address) => new FormControl(address)
      ) || [];
    this.editUserForm = new FormGroup({
      _id: new FormControl(this.user._id, Validators.required),
      name: new FormGroup({
        first: new FormControl(this.user.name.first, Validators.required),
        last: new FormControl(this.user.name.last, Validators.required),
      }),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email,
      ]),
      age: new FormControl(this.user.age, Validators.required),
      gender: new FormControl(this.user.gender, Validators.required),
      profession: new FormControl(this.user.profession, Validators.required),
      maritalStatus: new FormControl(
        this.user.maritalStatus,
        Validators.required
      ),
      location: new FormGroup({
        addresses: new FormArray(addressesFormControl),
        city: new FormControl(this.user.location.city, Validators.required),
        region: new FormControl(this.user.location.region, Validators.required),
      }),
    });
  }

  get addresses() {
    return (this.editUserForm.get('location').get('addresses') as FormArray)
      .controls;
  }

  onAddAddress() {
    (this.editUserForm.get('location').get('addresses') as FormArray).push(
      new FormControl(null, Validators.required)
    );
  }

  onRemoveAddress(index: number) {
    (this.editUserForm.get('location').get('addresses') as FormArray).removeAt(
      index
    );
  }

  onSubmit() {
    this.userManager.update(this.editUserForm.value);
    this.router.navigate(['/users/manage']);
  }
}
