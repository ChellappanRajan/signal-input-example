import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Users } from './components/users/users';
import { UserHeader } from './components/user-header/user-header';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/icon/icon.js';

// https://www.uidesigndaily.com/posts/figma-users-list-card-day-1542

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserHeader],
  templateUrl: './app.component.html',
  schemas:[CUSTOM_ELEMENTS_SCHEMA ],
  // encapsulation:ViewEncapsulation.None
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'signal-input';
  users = 
    [
      {"name": "Linda Wilson", "city": "Boston, MA", "technologies": ["Go", "Beego", "Gin"]},
      {"name": "Patricia Taylor", "city": "Denver, CO", "technologies": ["Swift", "Objective-C", "Cocoa"]},
      {"name": "Linda Wilson", "city": "New York, NY", "technologies": ["Swift", "Objective-C", "Cocoa"]},
      {"name": "Chris Martin", "city": "Boston, MA", "technologies": ["C#", ".NET", "Entity Framework"]},
      {"name": "Chris Martin", "city": "Boston, MA", "technologies": ["Angular", "React", "Vue"]},
      {"name": "Bob Brown", "city": "Troy, MI", "technologies": ["PHP", "Laravel", "Symfony"]},
      {"name": "Jane Smith", "city": "Austin, TX", "technologies": ["Go", "Beego", "Gin"]},
      {"name": "Bob Brown", "city": "Los Angeles, CA", "technologies": ["Go", "Beego", "Gin"]},
      {"name": "Alice Johnson", "city": "New York, NY", "technologies": ["Angular", "React", "Vue"]},
      {"name": "Mike Davis", "city": "New York, NY", "technologies": ["JavaScript", "Node.js", "Express"]},
      {"name": "Lelah Nicholas", "city": "New York, NY", "technologies": ["Python", "Django", "Flask"]},
      {"name": "John Doe", "city": "Miami, FL", "technologies": ["Python", "Django", "Flask"]},
      {"name": "Lelah Nicholas", "city": "Chicago, IL", "technologies": ["JavaScript", "Node.js", "Express"]},
      {"name": "Bob Brown", "city": "Seattle, WA", "technologies": ["C++", "Qt", "Boost"]},
      {"name": "Lelah Nicholas", "city": "San Francisco, CA", "technologies": ["C#", ".NET", "Entity Framework"]},
      {"name": "Linda Wilson", "city": "Los Angeles, CA", "technologies": ["C#", ".NET", "Entity Framework"]},
      {"name": "Chris Martin", "city": "New York, NY", "technologies": ["C#", ".NET", "Entity Framework"]},
      {"name": "Linda Wilson", "city": "Austin, TX", "technologies": ["Java", "Spring", "Hibernate"]},
      {"name": "Alice Johnson", "city": "New York, NY", "technologies": ["PHP", "Laravel", "Symfony"]},
      {"name": "Jane Smith", "city": "Austin, TX", "technologies": ["Swift", "Objective-C", "Cocoa"]}
  ];

}
