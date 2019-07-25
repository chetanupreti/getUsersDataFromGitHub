import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
    imports: [MatInputModule,
        MatCardModule,
        BrowserAnimationsModule,
        MatButtonModule
    ],
    exports: [MatInputModule,
        MatCardModule,
        BrowserAnimationsModule,
        MatButtonModule
    ],
    declarations: [],
    providers: [],
})
export class SharedModule { }
