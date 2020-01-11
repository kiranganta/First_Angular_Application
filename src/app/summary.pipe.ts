import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name : 'summarypipe'
})
export class SummaryPipe implements PipeTransform {

    transform(value: String, limit: number) {

        if (!value) {
        return null;
        }

        const actualLimit = (limit) ? limit : 50;

    return  value.substr(0, actualLimit) + '...';

    }



}
