var z;
class Tab {
    constructor(id) {
            this.main = document.querySelector(id);
            this.tabadd = document.querySelector('.tabadd');
            this.ul = document.querySelector('ul');
            this.tabscon = document.querySelector('.tabscon');
            console.log(this.ul);
            console.log(this.tabadd);
            z = this;
            this.chushuhua();
        }
        //初始化功能
    chushuhua() {
        this.huoqu();
        z.tabadd.onclick = this.tianjia;
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].xuhao = i;
            this.lis[i].onclick = this.qiehuan;
        }
    }
    huoqu() {
            this.section = document.querySelectorAll('section');
            this.lis = document.querySelectorAll('li');
        }
        //清除功能
    qingchu() {
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].className = '';
                this.section[i].className = '';
            }
        }
        //切换功能
    qiehuan() {
            z.qingchu();
            console.log(this.xuhao);
            this.className = 'liactive';
            z.section[this.xuhao].className = 'conactive';
        }
        //添加功能
    tianjia() {
            z.qingchu();
            var i = '<li class="liactive"><span>新建标签</span><span class="iconfont icon-guanbi"></span></li>'
            var j = '<section class="conactive">新建内容</section>'
            z.ul.insertAdjacentHTML('beforeend', i);
            z.tabscon.insertAdjacentHTML('beforeend', j);
            z.chushuhua();
        }
        // 删除功能
}
var ceshi = new Tab('#tab');