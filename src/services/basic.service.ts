// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BasicService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
     private basicUrl = 'https://jsonplaceholder.typicode.com'; 

     getJson() {
        return this.http.get(this.basicUrl + '/posts/1')
            .map(res => res.json())
            .catch(this.handleError);
    }

    handleError(error):any {        
        return Observable.throw(error.json().error || 'Server error');
    }

}