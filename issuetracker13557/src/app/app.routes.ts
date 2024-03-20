import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';
import { DeleteComponent } from './components/delete/delete.component';

export const routes: Routes = [
    {
        path: "",
        component:HomeComponent
    },
    {
        path: "home",
        component:HomeComponent
    },
    {
        path: "create",
        component:CreateComponent
    },
    {
        path: "details/:id",
        component:DetailsComponent
    },
    {
        path: "edit/:id",
        component:EditComponent
    },
    {
        path: "delete/:id",
        component:DeleteComponent
    },

];
