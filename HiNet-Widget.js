/*
 * Created Date: 30/01/2024
 * Author: HieuCMS - HiNet JSC 
 * 
 */
function HiNetWidget(options) {
    this.options = options || {};
    this.container = null;

    this.init();
}

HiNetWidget.prototype.init = function() {
    this.createButton();
};

HiNetWidget.prototype.createButton = function() {
    var self = this;
    var root = document.getElementById('HiNet-root');
    root.style = "box-sizing: border-box;transition: transform 0.3s ease-in-out;transform-origin: bottom right;background-color: #9fe1ff;position: fixed;bottom: 30px;right: 35px;outline: none;border: none;height: 50px;width: 50px;display: flex;cursor: pointer;align-items: center;justify-content: center;border-radius: 50%;transition: all 0.2s ease;border: 1px solid #4195dd;";
    var img = document.createElement("img");
    img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAASJSURBVEiJtVVbbFRVFF3nnDuPe2faaTsdpmOhBQsFCgVtBVoqtlAK5ZFgqBpiQjFGQKOYkJj6iFETDTE+Ij/qRz+MJBqU8KEgGKglGkCwppaOoi1vK3Yenelj5s7c9/GjMLQpjxLD+jofK2etvc7e+wD3GORuyOUNz9VSQloJg3orjmWgt/voJ02TFlj2+MvrCu/zfyRJTjYQGxSj/eGAXaC35Kd0MlBePmskJStmJBZ/QbiTgMvtevq9d3bMYpRieCSJUx1B+Xb8QEF+9oJ5s/IVRcWLLR9uHidQV/eWMOQIb2cEGzWLh7hhfU4JKKOjjj3Zbqyur3bdyRQAUErBAZoRmFPf7JUd/Z1+EYXE1BnAIRt0/b/9Uc00LTBG8UPHaXzR9i2ojUMys/Bkw3pUVZSj59wV+Lw5CJ69CABYVDkXAmMAAHZdYMbcqtNTPSi1dJUSwkEI4GDcIVLDGYqnB3PzPeLu9lY464fAixJQA4PoPH4BDxbPR7bbBVFygnOOLLeEfK8HnAOHjpwMMgCYu2xbIC9b2MUsnXLOAQAWBxK6AN0C6Q8PDIWtWJZZG4GmqjATBPEjApw1SYx0AcuXLobdJsCb54E3zwNKKUzTwqEjJ4MCABA7mwlOmGXLiiZTmqhoupsSDpfNgoNZGFFVZlgWdAUYOGADNwDvGgOEchimibYfO3Dp0lUECnwomjoFxUUBiE4HAEAAAIPDrViE791Z67syICsf7A+GU0lZSCvpPN0ixLA4q19Yg9ZgL3KXmSCiBeoA+Gkv1jU+gtKSYqB20bhH1jT9hkB1Se5nokNQclx2aYrH6fyqpc75d1TGmYuDqXhSUxnjrP1we3j9w43+g78dA3GbsA25saayDtluN/buP4olD5Wh7VgHAOCJjSvHV0AoCT2zoshnF27MXZHPhSKfSwIg/dI7IPeMSOpjKxrRtHw1YvFh5OZkg7HR9t3U1AAA2PpU4YQKKAD8fHF47Ym/opZpWjft6cNd4ZFtz272AwAhBPnenMzld4IAAD01+aFIQk8amp7DRDaBpHJmMEbxfdsp9P0TwqqVVeg93wcAuHz5aoZXWVGGrjM9aNqwPBNRJpPmra/t3l4/bUf1wumUjNlQ7d2hoXjePPvS6kppUpavQdN0PP/S+19mJnlP666dFl6dcvSP2Iba8oAEwvjBX/six36PCge+br6ry8di7C7if3bGtniqtYScYIbJGfdKul2UpPMAvAAyEQFAgd+LkhmFOHGqG7NnT4fTYcf5C32Q5fTELgJAKja98ajDlftuhCjGwaCcNGBTIpqLpA2t+KfjnamapQ9IjSurJjgsm3N/5ry4omxcRAAgLFi12SUWzO+aVrFkBg3MYZpJEQJcwGiLTQPHnu5zyr7Dn4bfbtniz/G4JxXNtZVjCTbv7NfnNaydqUoByOrENiUgcBSWOrXcgLPlzY+jpSVTb/sfXEc0OmjG4ok9gl0UF2X5/EgM33wGrkOQsnA5ybu+e6V51aRKuIbJTcv/gGDq5tnOb/aVp1PpCOeWcTsyV5S+e23orvEfzMjK52+NCasAAAAASUVORK5CYII=";
    root.appendChild(img);

    root.onclick = function() {
        self.toggleWidget();
    };
};

HiNetWidget.prototype.toggleWidget = function() {
    if (!this.container) {
        this.createWidgetContainer();
    }

    this.container.style.display = (this.container.style.display === 'none' || this.container.style.display === '') ? 'block' : 'none';
};

HiNetWidget.prototype.createWidgetContainer = function() {
    var self = this;
    this.container = document.createElement('div');
    this.container.className = "hinet-widget-container";
    this.container.style = "display: none;position: fixed;right: 5px;bottom: 90px;max-width: 350px;background: rgb(255, 255, 255);border-radius: 15px;overflow: hidden;box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 128px 0px, rgba(0, 0, 0, 0.5) 0px 32px 64px -48px;transition: all 0.1s ease 0s;width: 100%;";
    
    //khởi tạo header
    var header = document.createElement('header');
    header.style = "padding: 10px;position: relative;text-align: center;color: #fff;background: #5190dd;";
    header.className = "hinet-widget-header";

    var headerTitle = document.createElement("h2");
    headerTitle.style = "display: inline-block;margin: 0;padding: 0;font-size: 24px;";
    headerTitle.textContent = this.options.title || 'Gửi báo cáo'
    header.appendChild(headerTitle);

    var headerClose = document.createElement("div");
    headerClose.className = "hinet-widget-close";
    headerClose.style = "float: right;text-align: center;font-size: 24px;cursor:pointer";
    headerClose.textContent = "×";
    headerClose.onclick = function() {
        self.toggleWidget(); // Dòng đã được sửa
    };

    header.appendChild(headerClose);
    this.container.appendChild(header);

    //khởi tạo phần body
    var body = document.createElement("div");
    body.className = "hinet-widget-body";
    body.style = "padding: 20px;width: 100%;float: left;";

    var divGroupName = document.createElement("div");
    divGroupName.className = "hinet-widget-form_group"
    divGroupName.style = "display: block;width: 100%;float: left;";

    var labelFullName = document.createElement("label");
    labelFullName.htmlFor = "FullName";
    labelFullName.textContent = "Họ tên";
    labelFullName.style = "display: block;font-size: 16px;padding-bottom: 5px;width: 100%;";
    divGroupName.appendChild(labelFullName);

    var inputFullName = document.createElement("input");
    inputFullName.type = "text";
    inputFullName.name = "FullName";
    inputFullName.id = "FullName";
    inputFullName.style = "width: 100%;display: inline-block;border: 1px solid rgb(204, 204, 204);border-radius: 4px;box-sizing: border-box;padding: 12px 20px;";
    divGroupName.appendChild(inputFullName);
    body.appendChild(divGroupName);

    var divGroupPhone = document.createElement("div");
    divGroupPhone.className = "hinet-widget-form_group"
    divGroupPhone.style = "display: block;width: 100%;float: left;padding-top: 10px;";

    var labelPhone = document.createElement("label");
    labelPhone.htmlFor = "Phone";
    labelPhone.textContent = "Số điện thoại";
    labelPhone.style = "display: block;font-size: 16px;padding-bottom: 5px;width: 100%;";
    divGroupPhone.appendChild(labelPhone);

    var inputPhone = document.createElement("input");
    inputPhone.type = "text";
    inputPhone.name = "Phone";
    inputPhone.id = "Phone";
    inputPhone.style = "width: 100%;display: inline-block;border: 1px solid rgb(204, 204, 204);border-radius: 4px;box-sizing: border-box;padding: 12px 20px;padding-top: 10px;";
    divGroupPhone.appendChild(inputPhone);
    body.appendChild(divGroupPhone);

    var divGroupContent = document.createElement("div");
    divGroupContent.className = "hinet-widget-form_group"
    divGroupContent.style = "display: block;width: 100%;float: left; padding-top: 10px;";

    var labelContent = document.createElement("label");
    labelContent.htmlFor = "Content";
    labelContent.textContent = "Nội dung";
    labelContent.style = "display: block;font-size: 16px;padding-bottom: 5px;width: 100%;";
    divGroupContent.appendChild(labelContent);

    var inputContent = document.createElement("textarea");
    inputContent.name = "Content";
    inputContent.id = "Content";
    inputContent.style = "width: 100%;display: inline-block;border: 1px solid rgb(204, 204, 204);border-radius: 4px;box-sizing: border-box;padding: 12px 20px;padding-top: 10px;";
    divGroupContent.appendChild(inputContent);
    body.appendChild(divGroupContent);

    var captcha = document.createElement("div");
    captcha.className = "hinet-widget-form_group"
    captcha.id = "captcha-container";
    body.appendChild(captcha);

    var buttonSubmit = document.createElement("button");
    buttonSubmit.className = "hinet-widget-submit";
    buttonSubmit.style = "padding: 8px 20px;outline: none;border: none;background-color: #5190dd;color: #fff;border-radius: 4px;cursor: pointer;margin-top: 5px;";
    buttonSubmit.textContent = "Gửi";
    buttonSubmit.onclick = function(){
        self.sendData();
    }
    body.appendChild(buttonSubmit);
    this.container.appendChild(body);

    var captchaContainer = this.container.querySelector('#captcha-container');
    this.initBotDetectCaptcha(captchaContainer);

    
    document.body.appendChild(this.container);
};

HiNetWidget.prototype.initBotDetectCaptcha = function(container) {
    //http://localhost:35101/Home/Captcha
    var headers = new Headers();
    
    const requestOptions = {
        method: "GET"
    }

    fetch(this.options.captchaUrl, null).then(res => res).then(data => {
        console.log(data)
    }).catch(() => {
        
    }).finally((e) => console.log(e));

};

HiNetWidget.prototype.sendData = function(){
    console.log(document.getElementById("FullName").value)
    var formBody = {
        FullName : document.getElementById("FullName").value,

    }
    var headers = new Headers();
    const requestOptions = {
        method: this.options.method,
        body: {

        }
    }
    // Send POST request to API, get response and set the reponse as paragraph text
    fetch(this.options.action, requestOptions).then(res => res.json()).then(data => {

    }).catch(() => {
        
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}
