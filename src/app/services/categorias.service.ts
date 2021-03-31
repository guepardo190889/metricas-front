import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CategoriasService {
  private API_SERVER = "http://localhost:8080/categorias";

  constructor(private httpClient: HttpClient) {}

  public buscarTodas():Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }
}
