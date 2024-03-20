import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips'
import { MatCardModule } from '@angular/material/card';
import { Issues } from '../../Issues';
import { Issuetracker13557Service } from '../../issuetracker13557.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatChipsModule, MatCardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  detailsIssue:Issues = {
    id: 0,
    title: "",
    description: "",
    priority: "",
    status: "",
    userID: 0,
    user:{
        id: 0,
        username: "",
        email: "",
        role: ""
    }
}

issuetrackerservice = inject(Issuetracker13557Service)
activatedRoute = inject(ActivatedRoute)
ngOnInit(){
  this.issuetrackerservice.getByID(this.activatedRoute.snapshot.params["id"]).subscribe((resultedItem) => {
    this.detailsIssue = resultedItem
  })
}

}

