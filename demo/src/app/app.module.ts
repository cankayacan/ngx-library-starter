import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from '@angular/forms';
import {LibModule} from 'ngx-library-starter';
import {AppComponent} from "./app";

@NgModule({
    imports: [BrowserModule, FormsModule, LibModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
