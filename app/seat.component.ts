import{Component} from 'angular2/core'

@Component({
    selector :'seat',
    template :`
    
    
    <h2>Seat</h2>
    <ul>
            <li *ngFor="#seat of seat">
            {{seat}}
            </li>
            
    </ul>

    
    `
})
export class SeatComponent{
  seat = ["Winterfell","Casterly Rock","Dragon Stone","Eyrie","High Gardens","Pyke","Last Hearth","Bear Islands","Riverrun","Tarley","Storms End"]

}

