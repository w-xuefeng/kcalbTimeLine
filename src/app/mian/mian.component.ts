import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mian',
  templateUrl: './mian.component.html',
  styleUrls: ['./mian.component.css']
})
export class MianComponent implements OnInit {
  public style: any = {
    wrap: {},
    node: {},
    reverse: false
  };
  public headConfig = {
    baseUrl: 'https://kcalb.wang/img/head/',
    baseName: 'kcalb_',
    baseType: 'jpg',
  };
  public hostHead = {
    img: 'https://pub.wangxuefeng.com.cn/asset/defaultHead/avatar.png',
    alt: '点我逆序排列',
    name: 'XueF°',
    sub: '记录kcalb的每一次改变'
  };
  public data: any = [
    {
      id: 1,
      date: '2017-03-15',
      title: 'kcalb',
      textContent: '月是故乡明 2016-09-15',
      img: this.getHead(1),
      click(e) {
        console.log(e);
      }
    },
    {
      id: 2,
      date: '2017-06-24',
      title: 'kcalb',
      textContent: '没有草莓的蛋糕，就是一块甜的面包而已 2016-10-01',
      img: this.getHead(2),
      click(e) {
        console.log(e);
      }
    },
    {
      id: 3,
      date: '2017-07-21',
      title: 'kcalb',
      textContent: '只要还想向光明前进一步，人类的灵魂就不会败北 2016-11-07',
      img: this.getHead(3),
      click(e) {
        console.log(e);
      }
    },
    {
      id: 4,
      date: '2017-09-28',
      title: 'kcalb',
      textContent: '神tm因为爱 2016-11-16',
      img: this.getHead(4),
      click(e) {
        console.log(e);
      }
    },
    {
      id: 5,
      date: '2017-10-16',
      title: 'kcalb',
      textContent: '下雪了❄ 2016-11-21',
      img: this.getHead(5),
      click(e) {
        console.log(e);
      }
    },
    {
      id: 6,
      date: '2017-12-24',
      title: 'kcalb',
      textContent: '所谓日常，就是生活中每一件奇迹所连接起来，造就你生命的事物。 2016-12-31',
      img: this.getHead(6),
      click(e) {
        console.log(e);
      }
    },
    {
      id: 7,
      date: '2018-03-08',
      title: 'kcalb',
      textContent: '且将新火试新茶，诗酒趁年华。 2017-01-27',
      img: this.getHead(7),
      click(e) {
        console.log(e);
      }
    },
    {
      id: 8,
      date: '2018-04-16',
      title: 'kcalb',
      textContent: '打包一份家乡的思念，不要香菜 2017-03-02',
      img: this.getHead(8),
      click(e) {
        console.log(e);
      }
    },
    {
      id: 9,
      date: '2018-04-18',
      title: 'kcalb',
      textContent: '敬往事一杯酒再爱也不回头 2017-04-28',
      img: this.getHead(9),
      click(e) {
        console.log(e);
      }
    },
    {
      id: 10,
      date: '2018-06-12',
      title: 'kcalb',
      textContent: '你我山前即相见，山后定相逢 2017-05-23',
      img: this.getHead(10),
      click(e) {
        console.log(e);
      }
    },
    {
      id: 11,
      date: '2018-07-16',
      title: 'kcalb',
      textContent: '生日快乐🎂',
      img: this.getHead(11),
      click(e) {
        console.log(e);
        window.open('https://kcalb.wang/birthday.html');
      }
    },
    {
      id: 12,
      date: '2018-07-28',
      title: 'kcalb',
      textContent: '抱紧我的猴面雀儿 2018-04-27',
      img: this.getHead(12),
      click(e) {
        console.log(e);
      }
    },
    {
      id: `${this.getDate()}-${Math.ceil(Math.random() * 10000)}`,
      date: this.getDate(),
      title: 'kcalb.wang',
      textContent: '未来...',
      img: 'https://pub.wangxuefeng.com.cn/asset/img/bg35.jpg',
      click(e) {
        console.log(e);
      }
    }
  ];

  getHead(id) {
    return `${this.headConfig.baseUrl}${this.headConfig.baseName}${id}.${this.headConfig.baseType}`;
  }
  getDate() {
    const now = new Date();
    return `${now.getFullYear()}-${this.addZero(now.getMonth() + 1)}-${this.addZero(now.getDate())}`;
  }
  addZero(x) {
    return x < 10 && x > 0 ? `0${x}` : x;
  }
  constructor() { }

  ngOnInit() {
  }

}
