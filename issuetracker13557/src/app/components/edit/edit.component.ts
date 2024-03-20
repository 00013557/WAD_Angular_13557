import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { Issuetracker13557Service } from '../../issuetracker13557.service';
import { Issues } from '../../Issues';

function findIndexByID(jsonArray: any[], indexToFind: number): number {
  return jsonArray.findIndex((issue) => issue.id === indexToFind);
}

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  serv = inject(Issuetracker13557Service); // Service to get and send data from and to the API
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  editIssue:Issues = {
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
  };
  issuesobject: any; // Issue Object for listing
  selected: any // if any selected by default
  cID: number = 0;// cID To inject 
  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params["id"])

    this.serv.getByID(this.activatedRoute.snapshot.params["id"]).subscribe(result => {
      this.editIssue = result;
      console.log(this.editIssue)
      this.selected = this.editIssue.userID;
    });

    this.serv.getAllUsers().subscribe((result) => {
      this.issuesobject = result;
    });
  }

  toHome() {
    this.router.navigateByUrl("home")
  }

  edit() {
    this.editIssue.userID = this.cID;
    this.editIssue.user = this.issuesobject[findIndexByID(this.issuesobject, this.cID)];
    this.serv.edit(this.editIssue).subscribe(res=>{
      alert("Changes have been updated")
      this.router.navigateByUrl("home");
    })
  }
}
