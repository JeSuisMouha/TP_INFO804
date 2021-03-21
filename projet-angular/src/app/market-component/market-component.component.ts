import { Component,Input, OnInit } from '@angular/core';
//import { send } from 'node:process';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError} from 'rxjs';

@Component({
  selector: 'app-market-component',
  templateUrl: './market-component.component.html',
  styleUrls: ['./market-component.component.css']
})
export class MarketComponentComponent implements OnInit {
 
  @Input() produitName: string;
  @Input() produitPrix: number;
  color ="gray"
  tentativeAchat = false
  achatValider = undefined
  @Input() produitStatus: string;
  numeroCarte = ""
  codeCarte = ""
  posts: Observable<any>|undefined
  urlAPIrest = "http://localhost:3000";
  

  constructor(private http: HttpClient) {
  }

 

  ngOnInit(): void {
  }
 
  getPrix(){
    return this.produitPrix;
  }
  setStatus(){
    if(this.produitStatus == "non acheté"){ 
      this.produitStatus = "acheté"
    }
    else {this.produitStatus = "non acheté"}
    
  }
  getStatus(){
    return this.produitStatus;
  }
  onValider(){
    
    this.tentativeAchat = true

  }
  getnumero(){
    return this.numeroCarte;
  }
  getcodCarte(){
    return this.codeCarte;
  }

  onSubmit(){
    console.log("verifRest");
    var numAValider = this.numeroCarte
    var codeAValider = this.codeCarte
    //verifCarte/?numeroCarte=22222&codeCarte=455
    var url = this.urlAPIrest;
    url = url.concat('/verifCarte' + "/?numeroCarte=" + this.numeroCarte.toString() + "&" +"codeCarte="+this.codeCarte.toString());
    console.log(url)
    if (this.posts = this.http.get(url)){
        console.log(true)
        this.posts.subscribe((res)=>{
          if(res){
            this.setStatus()
            
            this.achatValider = true
            this.setColor()
            
          }else{
            this.achatValider = false
          }
          
        })
    }else{
      console.log(false)
    }
    
    /*
    this.posts.forEach(async (value) => {
      var res = await value["result"];
      console.log("foreach"+res);})
    */
    console.log(this.posts)
    console.log(this.numeroCarte.toString())
    
  }
  getValidation(){
    return this.achatValider
  }
  fromAchat(){
    if(this.tentativeAchat == true){
      return true
    }else{
      return false
    }
  }
  setColor(){
    if (this.getStatus() == "acheté"){
      this.color = "green"
    }else{
      this.color = "gray"}
  }
  getColor(){
    
      return this.color
    

  }



}
