#Nhúng vào bất cứ đâu trong thẻ body
````
<div id="HiNet-root"></div>
<script crossorigin="anonymous" src="/HiNet-Widget.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var widgetOptions = {
            action: 'url gửi báo cáo',
            method : 'Post, get',
            title : 'Tiêu đề báo cáo'
        };
        new HiNetWidget(widgetOptions);
    });
</script>
````
