import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {SampleComponent} from './sample/sample.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpModule
	],
	declarations: [
		SampleComponent
	],
	exports: [
		SampleComponent
	]
})
export class LibModule {
}
