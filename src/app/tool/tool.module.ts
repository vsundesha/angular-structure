import { NgModule } from '@angular/core';

import { ToolRoutingModule, routingComponents } from './tool-routing.module';

import { ToolComponent } from "./tool.component";



@NgModule({
	declarations: [
		ToolComponent,
		routingComponents
	],
	imports: [
		ToolRoutingModule
	],
	providers: [],
	bootstrap: [ToolComponent]
})
export class ToolModule { }
