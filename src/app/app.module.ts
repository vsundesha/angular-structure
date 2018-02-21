import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';


import { AppComponent } from './app.component';
import { ToolModule } from "./tool/tool.module";
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




@NgModule({
	declarations: [
		AppComponent,
		
		TopMenuComponent,
		// all the pages that are in top menu
		routingComponents,
		
		FooterComponent,
		
		PageNotFoundComponent
		
	],
	imports: [
		BrowserModule,
		// toolModule is a complete seperate module on its on it is injected here
		// because it is a child module of appModule 
		ToolModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
