import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(
    private router: RouterModule,
  ) { }

  onStrat(){
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
