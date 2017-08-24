import{Component} from 'angular2/core'

@Component({
    selector :'house',
    template :`
    
    
    <h2>House</h2>
    <ul>
            <li *ngFor="#house of house">
            {{house}}
            </li>
            
    </ul>

    
    `
})
export class CoursesComponent{
  house = ["Stark","Lannister","Targaryen","Arryn","Tyrell","Greyjoy","Umber","Mormont","Tully","Hornhill","Baratheon"]

}

