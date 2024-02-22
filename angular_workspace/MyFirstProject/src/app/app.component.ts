import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { AttributeDemoComponent } from './attribute-demo/attribute-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MyFirstServiceComponent } from './my-first-service/my-first-service.component';
import { MyHttpUseComponent } from './my-http-use/my-http-use.component';
import { MyHttpUse2Component } from './my-http-use2/my-http-use2.component';
import { EmpRoutsComponent } from './emp-routs/emp-routs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyHttpUse3Component } from './my-http-use3/my-http-use3.component';
import { MyHttpUseMovieComponent } from './my-http-use-movie/my-http-use-movie.component';
import { LoginComponent } from './login/login.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { FormWithMaterialDemoComponent } from './form-with-material-demo/form-with-material-demo.component';
import { RecipeMenuComponent } from './recipe-menu/recipe-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,DirectiveDemoComponent,AttributeDemoComponent,PipeDemoComponent,FormDemoComponent,ParentComponent,ChildComponent, MyFirstServiceComponent,MyHttpUseComponent,MyHttpUse2Component,RouterModule, EmpRoutsComponent,PageNotFoundComponent,EmpRoutsComponent,MyHttpUse3Component,MyHttpUseMovieComponent, LoginComponent,TemplateFormComponent,ReactiveFormComponent,MaterialDemoComponent,FormWithMaterialDemoComponent,RecipeMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyFirstProject';
}
