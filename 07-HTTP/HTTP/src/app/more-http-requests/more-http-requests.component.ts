import { Component, OnInit } from '@angular/core';
import {
  Http,
  Response,
  RequestOptions,
  Headers
} from '@angular/http';

@Component({
  selector: 'app-more-http-requests',
  templateUrl: './more-http-requests.component.html'
})
export class MoreHttpRequestsComponent implements OnInit {
  data: Object;
  loading: boolean;

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  makePost(): void {
    this.loading = true;
    this.http.post(
      'http://jsonplaceholder.typicode.com/posts',
      JSON.stringify({
        body: 'bar',
        title: 'foo',
        userId: 1
      }))
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }

  makeDelete(): void {
    this.loading = true;
    this.http.delete('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }

  makeHeaders(): void {
    const headers: Headers = new Headers();
    headers.append('X-API-TOKEN', 'ng-book');

    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;

    this.http.get('http://jsonplaceholder.typicode.com/posts/1', opts)
      .subscribe((res: Response) => {
        this.data = res.json();
      });
  }
}
