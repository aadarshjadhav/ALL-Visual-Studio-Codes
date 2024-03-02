import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyFirstServiceComponent } from './my-first-service/my-first-service.component';
import { MyHttpUseComponent } from './my-http-use/my-http-use.component';
import { MyHttpUse2Component } from './my-http-use2/my-http-use2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpRoutsComponent } from './emp-routs/emp-routs.component';
import { MyHttpUse3Component } from './my-http-use3/my-http-use3.component';
import { MyHttpUseMovieComponent } from './my-http-use-movie/my-http-use-movie.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { FormWithMaterialDemoComponent } from './form-with-material-demo/form-with-material-demo.component';
import { RecipeMenuComponent } from './recipe-menu/recipe-menu.component';
import { SimpleEmployeeComponent } from './simple-employee/simple-employee.component';

export const routes: Routes = [

    {path:'Home',component:HomeComponent},
    {path:'Login',component:LoginComponent},
    {path:'Form',component:FormComponent},
    {path:'Emp',component:MyFirstServiceComponent},
    {path:'UserData',component:MyHttpUseComponent},
    {path:'Myhttpuse3',component:MyHttpUse3Component},
    {path:'Movie',component:MyHttpUseMovieComponent},
    {path:'Data',component:MyHttpUse2Component},
    {path:'EmpData/:id',component:EmpRoutsComponent},
    {path:'TemplateForm',component:TemplateFormComponent},
    {path:'ReactiveForm',component:ReactiveFormComponent},
    {path:'MaterialDemo',component:MaterialDemoComponent},
    {path:'FormWithMaterialDemo',component:FormWithMaterialDemoComponent},
    {path:'RecipeMenu',component:RecipeMenuComponent},
    {path:'SimpleEmployee',component:SimpleEmployeeComponent},
    {path:'',redirectTo:'Home',pathMatch:'full'}, //When yoyu open the webpage, by default the Home is selected
    {path:'**',component:PageNotFoundComponent}, 
  
];
