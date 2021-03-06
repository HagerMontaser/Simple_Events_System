import { HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Login } from 'src/app/_models/login';
import { Loginresponse } from 'src/app/_models/loginresponse';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit,OnDestroy {
  span:string="";
  log:Login=new Login("","");
  res:Loginresponse=new Loginresponse("","");
  sub:Subscription|null=null;

  constructor(public adminSer:AdminService,public router:Router) { }
  

  
  ngOnInit(): void {
  }
  login(){

    this.sub=this.adminSer.getLoginResponse(this.log).subscribe(
      a=>{
        if(a.token!=undefined && a.token!=null && a.msg=="admin")
        {
          this.res=a;
          localStorage.setItem("token",this.res.token);
          this.adminSer.header=new HttpHeaders().set("Authorization",localStorage.getItem("token")??"undefined");
          this.router.navigateByUrl("admin");
        }
        else
        {
          this.span="Check inputs";
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
