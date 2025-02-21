import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-meeting-management',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client-meeting-management.component.html',
  styleUrls: ['./client-meeting-management.component.css']
})
export class ClientMeetingManagementComponent {
  meetingTopic: string = '';
  meetingDate: string = '';
  numberOfPeople: number | null = null;
  startTime: string = '';

  scheduleMeeting() {
    const currentDate = new Date();
    const selectedDate = new Date(this.meetingDate);

    // Normalize the dates to remove the time component
    currentDate.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    console.log('Current Date:', currentDate);
    console.log('Selected Date:', selectedDate);

    if (!this.meetingTopic) {
      alert('Meeting title cannot be empty.');
      return;
    }

    if (!this.meetingDate || selectedDate <= currentDate) {
      alert('Please select a future date for the meeting.');
      return;
    }

    if (!this.startTime) {
      alert('Meeting time cannot be empty.');
      return;
    }

    if (this.numberOfPeople === null || this.numberOfPeople <= 0) {
      alert('Number of participants must be greater than 0.');
      return;
    }

    alert(`Meeting scheduled successfully!\n\nTopic: ${this.meetingTopic}\nDate: ${this.meetingDate}\nPeople: ${this.numberOfPeople}\nStart Time: ${this.startTime}`);
  }
}