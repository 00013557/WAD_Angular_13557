import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Issues } from './Issues';


@Injectable({
  providedIn: 'root'
})
export class Issuetracker13557Service {
  httpClient = inject(HttpClient)
  constructor() { }
  getAll(){
    return this.httpClient.get<Issues[]>("https://localhost:7057/api/IssuesGetIssues/")
  }

  getByID(id:number){
    return this.httpClient.get<Issues>("https://localhost:7057/api/IssuesGetIssue/"+id);
  };

  edit(issue:Issues){
    const link = `https://localhost:7057/api/IssuesPutIssue/${issue.id}`;
    return this.httpClient.put(link, issue);  
  };

  delete(id:number){
    return this.httpClient.delete("https://localhost:7057/api/IssuesDeleteIssue/"+id);
  };
  
  create(issue:any){
    return this.httpClient.post("https://localhost:7057/api/IssuesPostIssue/", issue)
  }

  getAllUsers(){
    return this.httpClient.get("https://localhost:7057/api/UsersGetUsers");
  }
}
