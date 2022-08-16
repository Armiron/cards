import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'Saw this awesome tree through my hike today',
    },
    {
      title: 'Snowy mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountain',
      content: 'Saw this awesome mountain through my hike today',
    },
    {
      title: 'Mountain biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking',
      content: 'I did some biking today',
    },
  ];
}
