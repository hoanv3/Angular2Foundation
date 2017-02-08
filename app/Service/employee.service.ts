import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
    private apiUrl = "http://localhost:57890/api/Data/GetAllStudents";

    /**
     * constructor
     */
    constructor(private _http : Http) {

    }

    /**
     * GetEmployeeData
     */
    public GetEmployeeData(): Observable<any[]> {
        let data = this._http.get(this.apiUrl)
        .map((response: Response) => response.json());
        return data;
    }
}