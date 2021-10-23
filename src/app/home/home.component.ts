import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../common/api.service';
import { HomeModel } from '../home.model';
import { faUserEdit,faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  edit = faUserEdit;
  delete = faUserTimes;
  searchText!: string;
  user = [];
  userForm!: FormGroup;
  homeModelobj: HomeModel = new HomeModel(); //created a object here for the model
  data: any;

  constructor(private formbuilder: FormBuilder, private api: ApiService, private router:Router) {}

  ngOnInit(): void {
    this.userForm = this.formbuilder.group({
      Name: [''],
      Password: [''],
      Email: [''],
      Mobile: [''],
    });

    this.getUserData();
  }

  
  getUserData() {
    this.api.getUser().subscribe((user) => {
      this.data = user;
      console.log(user);
    });
  }
  deleteUser(item: any) {
    if(confirm('Do You want to delete this record?'))
    {
    this.api.deleteUser(item.id).subscribe((res) => {
      
      
      this.getUserData();
    })
    };
  
  }

  logOut(){
    if(confirm('Do You want to logout from this page?'))
    {
      this.router.navigate(['login']);
  }
    
  }
}
