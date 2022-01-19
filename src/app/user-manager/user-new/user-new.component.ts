import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserManagerService } from '../user-manager.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss'],
})
export class UserNewComponent implements OnInit {
  newUserForm: FormGroup;
  isDisabled: boolean;

  constructor(private userManager: UserManagerService,
    private router: Router) {}

  ngOnInit(): void {
    this.newUserForm = new FormGroup({
      _id: new FormControl('', Validators.required),
      name: new FormGroup({
        first: new FormControl('', Validators.required),
        last: new FormControl('', Validators.required),
      }),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl(undefined, Validators.required),
      gender: new FormControl(undefined, Validators.required),
      profession: new FormControl('', Validators.required),
      maritalStatus: new FormControl(undefined, Validators.required),
      location: new FormGroup({
        addresses: new FormArray([]),
        city: new FormControl('', Validators.required),
        region: new FormControl('', Validators.required),
      }),
    });
  }

  get addresses() {
    return (this.newUserForm.get('location').get('addresses') as FormArray)
      .controls;
  }

  onAddAddress() {
    (this.newUserForm.get('location').get('addresses') as FormArray).push(
      new FormControl(null, Validators.required)
    );
  }

  onRemoveAddress(index: number) {
    (this.newUserForm.get('location').get('addresses') as FormArray).removeAt(index)
  }

  onSubmit() {
    if (this.newUserForm.valid) {
      this.userManager.add(this.newUserForm.value)
      this.router.navigate(['..'])
    }
  }
}
