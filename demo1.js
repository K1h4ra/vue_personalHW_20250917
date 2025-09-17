// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const dianjianniu = document.getElementById('dianjianniu');
    const wenzi = document.getElementById('wenzi');
    const diyimingyan = document.getElementById('diyimingyan');
    const diermingyan = document.getElementById('diermingyan');
    const huanyingyu = document.querySelector('.huanyingyu');
    
    // 欢迎消息数组
    const huanyingxiaoxi = [
        '欢迎来到我的页面！',
        '很高兴见到你！',
        '希望你喜欢这个页面！',
        '祝你今天过得愉快！',
        '感谢你的访问！'
    ];
    
    // 按钮点击消息数组
    const dianjixinxi = [
        '你点击了按钮！',
        '按钮被激活了！',
        '干得好！',
        '继续探索吧！',
        '你发现了隐藏功能！'
    ];
    
    // 随机显示欢迎消息
    let dangqianxiaoxi = 0;
    function genghuanhuanyingyu() {
        huanyingyu.textContent = huanyingxiaoxi[dangqianxiaoxi];
        dangqianxiaoxi = (dangqianxiaoxi + 1) % huanyingxiaoxi.length;
    }
    
    // 每3秒更换一次欢迎消息
    setInterval(genghuanhuanyingyu, 3000);
    
    // 按钮点击事件
    dianjianniu.addEventListener('click', function() {
        // 随机显示消息
        const suijixiaoxi = dianjixinxi[Math.floor(Math.random() * dianjixinxi.length)];
        wenzi.textContent = suijixiaoxi;
        
        // 添加动画效果
        dianjianniu.style.transform = 'scale(0.95)';
        setTimeout(() => {
            dianjianniu.style.transform = 'scale(1)';
        }, 100);
        
        // 文字淡入效果
        wenzi.style.opacity = '0';
        wenzi.style.transform = 'translateY(10px)';
        setTimeout(() => {
            wenzi.style.transition = 'all 0.3s ease';
            wenzi.style.opacity = '1';
            wenzi.style.transform = 'translateY(0)';
        }, 50);
    });
    
    // 鼠标悬停效果
    diyimingyan.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    diyimingyan.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    diermingyan.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    diermingyan.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // 图片点击效果
    const gerenzhaopian = document.querySelector('.gerenzhaopian');
    gerenzhaopian.addEventListener('click', function() {
        // 创建旋转效果
        this.style.transform = 'rotate(360deg) scale(1.1)';
        this.style.transition = 'transform 0.6s ease';
        
        setTimeout(() => {
            this.style.transform = 'rotate(0deg) scale(1)';
        }, 600);
    });
    
    // 页面滚动效果
    window.addEventListener('scroll', function() {
        const suoyouqukuai = document.querySelectorAll('.gerenxinxi, .zuoyoumingyan, .youyoulianjie, .huxianding');
        
        suoyouqukuai.forEach(qukuai => {
            const qukuaiweizhi = qukuai.getBoundingClientRect().top;
            const chuangkugaodu = window.innerHeight;
            
            if (qukuaiweizhi < chuangkugaodu * 0.8) {
                qukuai.style.opacity = '1';
                qukuai.style.transform = 'translateY(0)';
            }
        });
    });
    
    // 初始化动画
    function chushihuadonghua() {
        const suoyouqukuai = document.querySelectorAll('.gerenxinxi, .zuoyoumingyan, .youyoulianjie, .huxianding');
        
        suoyouqukuai.forEach((qukuai, suoyin) => {
            qukuai.style.opacity = '0';
            qukuai.style.transform = 'translateY(30px)';
            qukuai.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                qukuai.style.opacity = '1';
                qukuai.style.transform = 'translateY(0)';
            }, suoyin * 200);
        });
    }
    
    // 页面加载完成后执行初始化动画
    setTimeout(chushihuadonghua, 300);
    
    // 添加键盘交互
    document.addEventListener('keydown', function(shijian) {
        if (shijian.key === 'Enter' || shijian.key === ' ') {
            dianjianniu.click();
        }
    });
    
    console.log('页面加载完成！JavaScript功能已激活。');
});