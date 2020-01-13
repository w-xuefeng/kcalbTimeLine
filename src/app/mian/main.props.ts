export class MainProps {
    public year = (new Date()).getFullYear();
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
    public data: any = [{
        id: `${this.getDate()}-${Math.ceil(Math.random() * 10000)}`,
        date: this.getDate(),
        title: '疯狂加载中...',
        textContent: '请耐心等待...',
        img: 'https://pub.wangxuefeng.com.cn/asset/img/bg6.jpg',
        click: ''
    }];
    lastData = {
        id: `${this.getDate()}-${Math.ceil(Math.random() * 10000)}`,
        date: this.getDate(),
        title: 'kcalb.wang',
        textContent: '未来...',
        img: 'https://pub.wangxuefeng.com.cn/asset/img/bg35.jpg',
        click: ''
    };
    getDate() {
        const now = new Date();
        return `${now.getFullYear()}-${this.addZero(now.getMonth() + 1)}-${this.addZero(now.getDate())}`;
    }
    addZero(x) {
        return x < 10 && x > 0 ? `0${x}` : x;
    }
}
