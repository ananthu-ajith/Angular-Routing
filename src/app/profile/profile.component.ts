import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  

    UserProfile = {
    name: "John Doe",
    contactInformation: {
        email: "john.doe@example.com",
        mobile: "0123456789"
    },
    bio: "Software Engineer | Tech Enthusiast",
    location: "New York, NY",
    website: "https://www.johndoe.com",
    employment: "ABC Technologies",
    education: "University of XYZ",
    interests: ["Programming", "Reading", "Hiking"],
  
};

atag='atag'

}
