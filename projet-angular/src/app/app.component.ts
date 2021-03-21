import { Component ,OnInit} from '@angular/core';
import { MarketComponentComponent } from './market-component/market-component.component';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError} from 'rxjs';
import { Apollo,gql } from 'apollo-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent /*implements OnInit*/ {
  posts: Observable<any>|undefined

  //urlAPIql = "http://localhost:4100/graphQL/";
  produitList : any;
  title = 'projet-angular';
  produits = [
    {
      name : "bouteil d'eau",
      prix : 3,
      status : "non acheté"
    },
    {
      name : "chocolat",
      prix : 3.5,
      status : "non acheté"
    },
    {
      name : "gateaux",
      prix : 4.50,
      status : "non acheté"
    }
  ];
  produit1 = "bouteil d'eau" 
  produit2 = "chocolat"
  produit3 = "gateaux"

  constructor(private http: HttpClient, private apollo :Apollo) { 

  }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: gql`
      {
        tab{
          produitName
          produitPrix
          produitStatus
        }
      }
      `
    }).valueChanges.subscribe((res:any)=>{
      console.log(res);  
      this.produitList = res?.data?.tab;
    })
    

    };
  
  
  
  
  }
  


