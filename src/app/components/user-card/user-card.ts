import { Component } from "@angular/core";

@Component({
    selector:'app-user-card',
    standalone:true,
    template:`
    <div class="user-section__card">
        <div class="left">
            <img style="width: 80px;height:80px;border-radius:50%" src="https://pbs.twimg.com/profile_images/1675132971924484096/wkkbSaiD_400x400.jpg" alt="">
        </div>
        <div class="right">
            <h3>Name</h3>
            <span>Troy</span>
        </div>
    </div>
    `,
    styleUrl:'./user-card.scss'
})
export class UserCard{

}