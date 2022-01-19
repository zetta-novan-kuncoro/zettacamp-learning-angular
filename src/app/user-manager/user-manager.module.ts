import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserManagerComponent } from './user-manager.component';
import { UserNewComponent } from './user-new/user-new.component';

const routes: Routes = [
  { path: 'users/manage', component: UserListComponent },
  { path: 'users/manage/new', component: UserNewComponent },
  { path: 'users/manage/:id/edit', component: UserEditComponent },
  { path: '**', redirectTo: '/users/manage' }
]

@NgModule({
  declarations: [
    UserManagerComponent,
    UserListComponent,
    UserNewComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    TranslateModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [
    UserManagerComponent
  ]
})
export class UserManagerModule { }
