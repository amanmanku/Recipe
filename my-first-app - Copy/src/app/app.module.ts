import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpModule } from '@angular/common/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module'
import { CoreModule } from './core/core.module';
import { ServerCompnent } from './server/server.component';

import { ServersComponent } from './servers/servers.component';
//import { HeaderComponent } from './core/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        ServerCompnent,
        ServersComponent
        //HeaderComponent
    ],
    imports: [
        BrowserModule,
        // HttpModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        ShoppingListModule,
        AuthModule,
        CoreModule,
        //ServerCompnent,
        //ServersComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
