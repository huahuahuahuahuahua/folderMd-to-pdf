        在上世纪90年代，几乎所有的网站都由HTML页面实现，服务器处理每一个用户请求都需要重新加载网页。用户体验极差！由于每次应用的沟通都需要向服务器发送请求，应用的回应时间依赖于服务器的回应时间。这导致了用户界面的回应比本机应用慢得多。

> 在 2005 年，Google 通过其 Google Suggest 使 AJAX 变得流行起来。
> 
> Google Suggest 使用 AJAX 创造出动态性极强的 web 界面：当您在谷歌的搜索框输入关键字时，JavaScript 会把这些字符发送到服务器，然后服务器会返回一个搜索建议的列表。

### Ajax简介

        Ajax 并不算是一种新的技术，全称是 asynchronous javascript and xml，可以说是已有技术的组合，主要用来实现客户端与服务器端的异步通信效果，实现页面的局部刷新，早期的浏览器并不能原生支持 ajax，可以使用隐藏帧（iframe）方式变相实现异步效果，后 来的浏览器提供了对 ajax 的原生支持 使 用 ajax 原 生 方 式 发 送 请 求 主 要 通 过 XMLHttpRequest( 标 准 浏 览 器 ) 、 ActiveXObject(IE 浏览器)对象实现异步通信效果

> ajax是基于现有的Internet标准，并且联合使用它们：
> 
> *   XMLHttpRequest 对象 (异步的与服务器交换数据)
> *   JavaScript/DOM (信息显示/交互)
> *   CSS (给数据定义样式)
> *   XML (作为转换数据的格式)

### Ajax优缺点

**【1】优点**

*   页面局部刷新，用户体验好。
*   异步通信，更加快的响应能力。
*   减少冗余请求，减轻了服务器负担；按需获取数据，节约带宽资源。
*   基于标准化的并被广泛支持的技术，不需要下载插件或者小程序

**【2】缺点**

*   `ajax`干掉了`back`按钮和加入收藏书签功能，即对浏览器后退机制的破坏。
*   存在一定的安全问题，AJAX 暴露了与服务器交互的细节。
*   对搜索引擎的支持比较弱。
*   破坏了程序的异常机制。
*   无法用`URL`直接访问

### 创建Ajax的步骤

> `Ajax`的原理简单来说通过`XmlHttpRequest`对象来向服务器发异步请求，从服务器获得数据，然后用`javascript`来操作`DOM`而更新页面。这其中最关键的一步就是从服务器获得请求数据     
> 
> **ajax过程：**                                                                   
> 
> 1.  创建 XMLHttpRequest 对象,也就是创建一个异步调用对象
> 2.  创建一个新的 HTTP 请求,并指定该 HTTP 请求的方法、URL 及验证信息
> 3.  设置响应 HTTP 请求状态变化的函数
> 4.  发送 HTTP 请求
> 5.  获取异步调用返回的数据
> 6.  使用 JavaScript和 DOM 实现局部刷新

**【1】创建XMLHttpRequest**

XMLHttpRequest 是 AJAX 的基础。XMLHttpRequest 用于在后台与服务器交换数据。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。所有现代浏览器均支持 XMLHttpRequest 对象（IE5 和 IE6 使用 ActiveXObject）。

```
var xhr;
if (window.XMLHttpRequest){
  // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
  xhr = new XMLHttpRequest();
} else {
  // IE6, IE5 浏览器执行代码
  xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
```

**【2】向服务器发送请求**

如需将请求发送到服务器，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法

<table border="1" cellpadding="1" cellspacing="1"><tbody><tr><td><strong>方法</strong></td><td><strong>描述</strong></td></tr><tr><td>open(<em>method</em>,<em>url</em>,<em>async</em>)</td><td><p>规定请求的类型、URL 以及是否异步处理请求。</p><p><em>1、method</em>：请求的类型；GET 或 POST</p><p><em>2、url</em>：文件在服务器上的位置</p><p><em>3、async</em>：true（异步）或 false（同步）</p></td></tr><tr><td>send(<em>string</em>)</td><td><p>将请求发送到服务器。</p><p><em>1、string</em>：仅用于 POST 请求</p></td></tr></tbody></table>

```
// 一个简单的get请求
xhr.open("GET","ajax_info.txt",true);
xhr.send();

// 一个简单的post请求
xhr.open("POST","/try/ajax/demo_post.php",true);
xhr.send();
```

**【3】处理服务器响应**

当请求被发送到服务器时，我们需要执行一些基于响应的任务。每当 readyState 改变时，就会触发 onreadystatechange 事件。readyState 属性存有 XMLHttpRequest 的状态信息。

<table border="1" cellpadding="1" cellspacing="1"><tbody><tr><td><strong>方法</strong></td><td><strong>描述</strong></td></tr><tr><td>onreadystatechange</td><td>存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。</td></tr><tr><td>readyState</td><td><p>存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。</p><ul><li>0: 请求未初始化</li><li>1: 服务器连接已建立</li><li>2: 请求已接收</li><li>3: 请求处理中</li><li>4: 请求已完成，且响应已就绪</li></ul></td></tr><tr><td>status</td><td>200: "OK"<br>404: 未找到页面</td></tr></tbody></table>

```
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        console.log(xhr.responseText); // responseText获取字符串形式的响应数据  responseXML获取XML形式的响应数据
    } 
}
```

### Ajax实例

**【1】原生Ajax请求**

```
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
</head>

<body>
  <div id="myDiv">
    <h2>使用 AJAX 修改该文本内容</h2>
  </div>
  <button type="button" onclick="loadXMLDoc()">修改内容</button>

  <script>
    function loadXMLDoc() {
      var xhr;
      if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xhr = new XMLHttpRequest();
      }
      else {
        // IE6, IE5 浏览器执行代码
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          document.getElementById("myDiv").innerHTML = xhr.responseText;
        }
      }
      xhr.open("GET", "/try/ajax/ajax_info.txt", true);
      xhr.send();
    }
  </script>

</body>

</html>
```

**【2】jQuery封装Ajax请求**

```
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title></title>
  <script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js">
  </script>
</head>

<body>

  <div id="myDiv">
    <h2>使用 jQuery AJAX 修改文本内容</h2>
  </div>
  <button>修改内容</button>

  <script>
    $(document).ready(function () {
      $("button").click(function () {
        htmlobj = $.ajax({
          type: "GET",
          url: "/jquery/test1.txt",
          data: {},
          dataType: "json",
          async: false,
          success: function (data) {
            $("#myDiv").html(data);
          }
        });
      });
    });
  </script>

</body>

</html>
```

![](https://img-blog.csdnimg.cn/20200226160925462.png)

  

本文转自 [https://blog.csdn.net/qq\_38128179/article/details/85986650](https://blog.csdn.net/qq_38128179/article/details/85986650)，如有侵权，请联系删除。