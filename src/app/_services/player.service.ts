import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Team} from "../_classes/team";
import {Player} from "../_classes/player";
import {CommentPlayer} from "../_classes/comment-player";
import {GlobalConstants} from "../_classes/globalconstants";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private baseURL = GlobalConstants.apiurl
  constructor(private http:HttpClient) { }

  getPlayers():Observable<Player[]>{
    const url = this.baseURL + 'players/';
    return this.http.get<Player[]>(url);
  }

  getPlayersSearch(name: any):Observable<Player[]>{
    let url;
    if (name!=""){
       url = this.baseURL + 'players/search/' +name;
    }
    else{
       url = this.baseURL + 'players/';
    }
    return this.http.get<Player[]>(url);
  }

  getSelectedPlayer(id:number):Observable<Player>{
    const url = this.baseURL+'players/'+id;
    return this.http.get<Player>(url);
  }
  getCommentsPlayer(id:number):Observable<CommentPlayer[]>{
    const url = this.baseURL+'players/comments/'+id;
    return this.http.get<CommentPlayer[]>(url);
  }

  getSeasonsPlayer(id:number):Observable<any[]>{
    const url = this.baseURL+'players/seasons/'+id;
    return this.http.get<any[]>(url);
  }
  insertPlayer(player:any):Observable<any>{
    const url = this.baseURL+'insertplayer/';
    return this.http.post<any>(url,player);
  }
  editPlayer(id:number,player:any):Observable<any>{
    const url = this.baseURL+'editplayer/'+id;
    return this.http.put<any>(url,player);
  }
  deletePlayer(id:number) {
    const url = this.baseURL + 'deleteplayer/' + id;
    return this.http.delete(url)
  }
  addFavouritePlayer(id:any,values: any): Observable<any>{
    const url = this.baseURL+'players/' + id;
    return this.http.post<any>(url,values);
  }

  removeFavouritePlayer(id: any, values: any): Observable<any> {
    const url = this.baseURL+'players/' + id;
    return this.http.post<any>(url,values);
  }

  addCommentPlayer(id: any , values: any) {
    const url = this.baseURL+'players/' + id;
    return this.http.post<any>(url,values);
  }

}
