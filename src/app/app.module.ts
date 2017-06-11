import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { StoreDetailComponent } from './store-details/store-detail.component';
import { BerryService} from './berry.service';
import { BerriesComponent } from './heroes/berries.component';
import { AppRoutingModule} from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoreServerService} from './store-server.service';
import { StoresComponent } from './stores/stores.component';
import { AlldataService} from './alldata.service';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StoreDetailComponent,
    BerriesComponent,
    DashboardComponent,
    StoresComponent,
    MainpageComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BerryService, StoreServerService, AlldataService, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
