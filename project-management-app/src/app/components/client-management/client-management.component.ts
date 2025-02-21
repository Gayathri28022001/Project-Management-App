import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientMeetingManagementComponent } from '../client-meeting-management/client-meeting-management.component';

@Component({
  selector: 'app-client-management',
  standalone: true,
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css']
})
export class ClientManagementComponent {
  constructor(private router: Router) {}

  registerClient(event: Event) {
    event.preventDefault();

    // Getting form values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    const repeatPassword = (document.getElementById("repeatPassword") as HTMLInputElement).value;

    // Basic validation
    if (!name || !email || !address || !password || !repeatPassword) {
      alert("Please fill all fields!");
      return;
    }

    if (password !== repeatPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Store in localStorage (Simulating a database)
    localStorage.setItem(email, JSON.stringify({ name, email, address, password }));
    alert("Registration successful! Redirecting to Meeting Management...");
    this.router.navigate(['client-meeting-management']);
  }

  loginClient(event: Event) {
    event.preventDefault();

    // Getting login values
    const email = (document.getElementById("loginEmail") as HTMLInputElement).value;
    const password = (document.getElementById("loginPassword") as HTMLInputElement).value;

    // Fetching user from localStorage
    const userData = localStorage.getItem(email);
    
    if (!userData) {
      alert("User not found! Please register first.");
      return;
    }

    const user = JSON.parse(userData);

    if (user.password !== password) {
      alert("Incorrect password!");
      return;
    }

    alert("Login successful! Redirecting to Meeting Management...");
    this.router.navigate(['client-meeting-management']);
  }
}