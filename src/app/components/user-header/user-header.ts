import { JsonPipe } from "@angular/common";
import { Component, computed, input } from "@angular/core";

@Component({
    selector:'app-user-header',
    standalone:true,
    template:`
    <nav class="flex">
        <ul class="nav"> 
           <li class="user-section__nav-item">
            <a>
                New User
            </a>   
        </li>
        </ul>
    </nav>
    `,
    styleUrl:'./user-header.scss'
})

export class UserHeader{



}