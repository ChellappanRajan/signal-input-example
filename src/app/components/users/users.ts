import { JsonPipe } from "@angular/common";
import { Component, computed, input } from "@angular/core";
import { UserCard } from "../user-card/user-card";

@Component({
    selector:'app-users',
    standalone:true,
    styleUrl:'./users.scss',
    imports:[UserCard],
    template:`
    <section class="wrapper">
    @for (user of users(); track $index) {
            <app-user-card [user]="user"></app-user-card>
    }
</section>
    `,
})

export class Users<T>{
    users = input<any>();

}