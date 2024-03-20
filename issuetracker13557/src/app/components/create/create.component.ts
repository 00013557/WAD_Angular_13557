import { Component, inject } from '@angular/core';
import { Issuetracker13557Service } from '../../issuetracker13557.service';
import { Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  serviceIssueTracker = inject(Issuetracker13557Service);

  router = inject(Router);

  users:any; //cate

  selectedUserID: number=0; //cID

  issueToCreate:any = {
    title:"",
    description:"",
    priority:"",
    status:"",
    userID:0
  }


  ngOnInit(){
    this.serviceIssueTracker.getAllUsers().subscribe(result =>{
      this.users = result
    });
  }

  create(){
    this.issueToCreate.userID = this.selectedUserID
    this.serviceIssueTracker.create(this.issueToCreate).subscribe(result=>{
      alert("Issue Created")
      this.router.navigateByUrl("home")
    })
  }
}
