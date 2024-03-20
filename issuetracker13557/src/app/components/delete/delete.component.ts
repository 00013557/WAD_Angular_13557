import { Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { Issuetracker13557Service } from '../../issuetracker13557.service';
import { Issues } from '../../Issues';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [MatChipsModule, MatCardModule, MatButtonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  deleteIssue:Issues={
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

  service = inject(Issuetracker13557Service)
  activateRote= inject(ActivatedRoute)
  router = inject(Router)
  ngOnInit(){
    this.service.getByID(this.activateRote.snapshot.params["id"]).subscribe((result)=>{
      this.deleteIssue = result
    });
  }
  onHomeButtonClick(){
    this.router.navigateByUrl("home")
  }
  onDeleteButtonClick(id:number){
    this.service.delete(id).subscribe(r=>{
      this.router.navigateByUrl("home")
    });
  }
}
