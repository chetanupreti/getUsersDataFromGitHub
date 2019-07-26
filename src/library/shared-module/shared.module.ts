import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {ButtonModule} from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
@NgModule({
    imports: [MatInputModule,
        MatCardModule,
        BrowserAnimationsModule,
        ButtonModule,
        InputTextareaModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        BrowserModule
    ],
    exports: [MatInputModule,
        MatCardModule,
        BrowserAnimationsModule,
        ButtonModule,
        InputTextareaModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        BrowserModule
    ],
    declarations: [],
    providers: [],
})
export class SharedModule { }
