import { Component } from "@angular/core";

@Component({
    selector:'app-user-card',
    standalone:true,
    template:`

<div class="wrapper">
  <article class="card">
            <img style="width: 80px;height:80px;border-radius:50%" src="https://pbs.twimg.com/profile_images/1675132971924484096/wkkbSaiD_400x400.jpg" alt="">
    <div class="card__content">
      <h2>Title</h2>
      <p>Desc</p>
    </div>
  </article>
</div>
    `,
    styleUrl:'./user-card.scss'
})
export class UserCard{

}