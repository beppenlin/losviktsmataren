import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BerriesComponent } from '../heroes/berries.component';
import { StoreDetailComponent } from '../store-details/store-detail.component';
import {StoresComponent} from '../stores/stores.component';
import {MainpageComponent} from '../mainpage/mainpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'cities', component: MainpageComponent},
  { path: 'storedetail/:id', component: StoreDetailComponent},
  { path: 'stores/:store', component: DashboardComponent},
  { path: 'berries',     component: BerriesComponent},
  { path: 'detail/:id', component: BerriesComponent},
  { path: 'stores', component: StoresComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
