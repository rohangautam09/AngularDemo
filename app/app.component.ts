import {Component} from 'angular2/core';
import{CoursesComponent} from './courses.component'
import{SeatComponent} from './seat.component'

@Component({
    selector: 'my-app',
    template: `
    <h1>Song of Ice & Fire</h1>
    <house></house>
    <seat></seat>`,
    directives : [CoursesComponent,SeatComponent] 
})
export class AppComponent { }   