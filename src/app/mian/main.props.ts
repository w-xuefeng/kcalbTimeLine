import { Input, Output, EventEmitter } from '@angular/core';
export class MainProps {
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
    public data: any = [];
    lastData = {
        id: `${this.getDate()}-${Math.ceil(Math.random() * 10000)}`,
        date: this.getDate(),
        title: 'kcalb.wang',
        textContent: '未来...',
        img: 'https://pub.wangxuefeng.com.cn/asset/img/bg35.jpg',
        click: ''
    }
    getDate() {
        const now = new Date();
        return `${now.getFullYear()}-${this.addZero(now.getMonth() + 1)}-${this.addZero(now.getDate())}`;
    }
    addZero(x) {
        return x < 10 && x > 0 ? `0${x}` : x;
    }
}