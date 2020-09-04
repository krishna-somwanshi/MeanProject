import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LatestJobsComponent } from './latest-jobs/latest-jobs.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },

  // Private UsingSession
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'latest-jobs', component: LatestJobsComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'search', component: SearchComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'home-page', component: HomePageComponent },
    ],
  },

  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: '', redirectTo: 'login', pathMatch: "full" },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
