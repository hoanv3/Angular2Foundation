import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
    /**
     * GetEmployeeData
     */
    public GetEmployeeData(): any {
        let employeeList: any[] = [
            { Id: 1, Name: 'Steven Nguyen' },
            { Id: 2, Name: 'Luna Vu' },
            { Id: 3, Name: 'Steve Job' }
        ];

        return employeeList;
    }
}