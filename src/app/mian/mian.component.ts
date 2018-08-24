import { Component, OnInit } from '@angular/core';
import { MainProps } from './main.props';
import { MainService } from './main.service';

@Component({
  selector: 'app-mian',
  templateUrl: './mian.component.html',
  styleUrls: ['./mian.component.css'],
  providers: [MainService]
})
export class MianComponent extends MainProps implements OnInit {
  constructor(public mainService: MainService) { super(); }
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.mainService.getHead().subscribe(rs => {
      if (rs.status) {
        this.data = rs.data;
      } else {
        console.log(rs);
      }
      this.data.push(this.lastData);
    });
  }
}
