import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { AppData } from "./app-data.model"

@Injectable({providedIn: "root"})
export class ApiService {

    baseUrl = "https://us-central1-wenk-portfolio.cloudfunctions.net/api/"
    
    constructor(private http: HttpClient) {}

    getData(): Observable<AppData> {
        return this.http.get<AppData>(
            this.baseUrl + "v1/"
        )
    }
}