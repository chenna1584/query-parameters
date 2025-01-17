import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private route: ActivatedRoute) {}
  params:string

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.params = params["id"];
    });

  }

}
