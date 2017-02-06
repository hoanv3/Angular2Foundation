import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { FirstComponent } from './first.component';
import { StruturalComponent} from './directives/structural.component';
import { AttrComponent } from './directives/attribute.component';
import { InteractionComponent } from './ComponentInteraction/outputParam.component',
import { ExponentialStrengthPipe } from './filters/exponent-length.pipe'

@NgModule({
  imports:      [ BrowserModule, FormsModule  ],
  declarations: [ AppComponent, FirstComponent, StruturalComponent, AttrComponent
  , InteractionComponent, ExponentialStrengthPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
