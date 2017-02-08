import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Service/employee.service';

@Component({
    selector: 'emp-data',
    templateUrl: 'app/Template/employee.component.html',
    providers: [ EmployeeService ]
})

export class EmployeeComponent implements OnInit {
    public employeeList: any[];

    /**
     *
     */
    constructor(private employeeSvc: EmployeeService) {

    }

    /**
     * name
     */
    public ngOnInit() {
        this.employeeList = this.employeeSvc.GetEmployeeData();
    }
}