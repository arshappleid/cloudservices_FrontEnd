import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  isMobile: boolean = false;
  resp: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // check for mobile
    if (navigator.userAgent.match(/Android/i)
         || navigator.userAgent.match(/webOS/i)
         || navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         || navigator.userAgent.match(/BlackBerry/i)
         || navigator.userAgent.match(/Windows Phone/i)) {
            this.isMobile = true ;
         } else {
            this.isMobile = false ;
    }


    // perform a test query to the backEnd
    this.performHttp();

  }
  performHttp() {
    this.setupConnection();
    this.subscribeConnection();
  }

  async setupConnection() {
    var dataUrl = environment.backEnd_Endpoint + "/getclients";
    console.log("BAckend end point url : " + dataUrl);
    this.resp = await this.http.get<any>(dataUrl);
    return true;
  }
  async subscribeConnection() {
    await this.setupConnection().then(() => {
      this.resp.subscribe(
        (data: any) => {
          console.log(JSON.stringify(data));
        },
        (error: any) => {
          console.error(error);
        }
      )
    })
  }

}

