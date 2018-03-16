import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router';
import{appRouterModule} from './app.route';
import{HttpModule} from '@angular/http';
import {Ng2PaginationModule} from 'ng2-pagination';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,} from '@angular/material';

import 'hammerjs';
import{CopypasteDirective} from './directive/app.directive';
import { FirstComponent } from './first/first.component';
import { LoginComponent } from './login/login.component';
import { SecondComponent } from './second/second.component';
import { UserComponent } from './user/user.component';  
import { RemoveComponent } from './remove/remove.component';
import { MatangComponent } from './matang/matang.component';
import {CdkTableModule} from '@angular/cdk/table';
import { ChildrenModule } from './children/children.module';
import { Child1Component } from './children/child1/child1.component';
import { Child2Component } from './children/child2/child2.component';
import { CrudComponent } from './crud/crud.component';
import { CrudaddComponent } from './crudadd/crudadd.component';
import { CrudeditComponent } from './crudedit/crudedit.component';
import{FilterPipe} from '../app/crudpipe/FilterPipe';
import { TryoutComponent } from './tryout/tryout.component';
import { ChuttiComponent } from './chutti/chutti.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: [ChuttiComponent, ProfileComponent],
  // declarations: [SearchcompComponent, ChildrenComponent, Child1Component, Child2Component]
})
export class DemoMaterialModule {}


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    WelcomeComponent,
    CrudComponent,
    CrudaddComponent,
    CrudeditComponent,
    FirstComponent,
    LoginComponent,
    SecondComponent,
    TryoutComponent,
    UserComponent,
    RemoveComponent,
    MatangComponent,
    CopypasteDirective,
    FilterPipe,
  ],
  
  imports: [
    BrowserModule,RouterModule,appRouterModule,ReactiveFormsModule,FormsModule,
    BrowserAnimationsModule,    DemoMaterialModule,HttpModule,Ng2PaginationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 