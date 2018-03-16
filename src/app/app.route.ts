
import { Routes } from '@angular/router';
import { RouterModule }  from '@angular/router';
import{WelcomeComponent} from './welcome/welcome.component';
import{FormComponent} from './form/form.component';
import { FirstComponent } from './first/first.component';
import{LoginComponent} from './login/login.component';
import{SecondComponent} from './second/second.component';
import{UserComponent} from './user/user.component';
import{CrudeditComponent} from './crudedit/crudedit.component';
import { RemoveComponent } from './remove/remove.component';
import{CrudComponent} from'./crud/crud.component';
import{CrudaddComponent} from './crudadd/crudadd.component';
import{MatangComponent} from './matang/matang.component';
import{TryoutComponent} from './tryout/tryout.component';
import{ChuttiComponent} from './chutti/chutti.component';

const routes: Routes = [
    {
      path: 'second/:username',
      component: SecondComponent,
    },
    {
      path: 'tryout',
      component: TryoutComponent,
    },
    {
      path: 'remove',
   component: RemoveComponent,
  },
    {
       path: 'register',
    component: FormComponent,
   },
   {
    path: 'chutti',
 component: FormComponent,
},

    {
      path:'first',
      component: FirstComponent,
    },
    {
      path:'second',
      component: SecondComponent,
    },
    {
      path: 'welcome',
      component: WelcomeComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path:'user',
      component:UserComponent,
    },
    {
      path:'crud',
      component:CrudComponent,
      
      children:[
        {
        path:'crudadd',
        component:CrudaddComponent,
      }, 
       {
        path:'crudedit/:id',
        component:CrudeditComponent,
      }
    ]
    },
    //   {
    //   path:'crudadd',
    //   component:CrudaddComponent,
    // },
    // {
    //   path:'crudedit/:id',
    //   component:CrudeditComponent,
    // },
    {
      path:'mat',
      component:MatangComponent,
    },
    {
      path: '',
      redirectTo: 'first',
      pathMatch: 'full'
    },
  ];

  export const appRouterModule = RouterModule.forRoot(routes);
