import { CUSTOM_ELEMENTS_SCHEMA, Component, input } from '@angular/core';
import '@material/web/chips/suggestion-chip.js';
import '@material/web/chips/chip-set.js';

@Component({
  selector: 'app-user-card',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="wrapper">
      <article class="card">
        <img
          style="width: 80px;height:80px;border-radius:50%"
          src="https://pbs.twimg.com/profile_images/1675132971924484096/wkkbSaiD_400x400.jpg"
          alt=""
        />
        <div class="card__content">
          <h2>{{ user().name }}</h2>
          <p>{{ user().city }}</p>

          <div class="card_chips">
            <md-chip-set aria-label="Assist chips">
              <md-suggestion-chip label="Test"> </md-suggestion-chip>
             
              <md-suggestion-chip label="Test"> </md-suggestion-chip>
              <md-suggestion-chip label="Test"> </md-suggestion-chip>
            </md-chip-set>
          </div>
        </div>
      </article>
    </div>
  `,
  styleUrl: './user-card.scss',
})
export class UserCard {
  user = input.required<any>();
}
