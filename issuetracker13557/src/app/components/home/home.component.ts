import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Issues } from '../../Issues';
import { MatButtonModule } from '@angular/material/button';
import { Issuetracker13557Service } from '../../issuetracker13557.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router = inject(Router)
  issuetrackerService = inject(Issuetracker13557Service)
  issuesList: Issues[] = [];
  ngOnInit() {
    this.issuetrackerService.getAll().subscribe((result) => {
      this.issuesList = result
    })
  }

  displayedColumns: string[] = ['ID', 'Title', 'Description', 'Priority', 'Status', 'Username', 'Email', 'Role', 'Actions'];

  EditClicked(id:number){
    console.log(id, "From Edit");
    this.router.navigateByUrl("/edit/"+id);
  };
  DetailsClicked(id:number){
    console.log(id, "From Details");
    this.router.navigateByUrl("/details/"+id);
  };
  DeleteClicked(id:number){
    console.log(id, "From Delete");
    this.router.navigateByUrl("/delete/"+id);
  }
}
