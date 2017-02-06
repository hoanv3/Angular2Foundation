import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'exponentialStrength' })
export class ExponentialStrengthPipe implements PipeTransform {
    transform(value: number, exponent: string) {
        let exp = parseFloat(exponent); // block scoped
        return Math.pow(value, isNaN(exp) ? 1 : exp);
    }
}