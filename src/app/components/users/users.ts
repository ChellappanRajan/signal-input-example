import { JsonPipe } from "@angular/common";
import { Component, computed, input } from "@angular/core";

@Component({
    selector:'app-users',
    standalone:true,
    imports:[JsonPipe],
    template:`
    
    `,
})

export class Users<T>{
    users = input<any>();



}