import { Component} from '@angular/core';

@Component ({
    selector: 'form-temp',
    templateUrl: 'app/ComponentInteraction/FormTemplate/form-template.component.html',
    styleUrls: ['app/Contents/style.component.css']
})

export class FormTemplateComponent {
    /**
     * submit
     */
    public onSubmit(frmValues: any) {
        console.log(frmValues);
    }
}