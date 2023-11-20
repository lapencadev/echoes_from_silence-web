import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  loading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;  
    }, 2000);  
  }
}
