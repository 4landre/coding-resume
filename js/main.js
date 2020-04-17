!function () {
    let content1 = `
    /*
    * 面试官你好，我是田永吉
    * 下面我将用书写代码的形式介绍我自己
    * 先准备一些样式
    */
    
    body {
        background: rgb(238, 238, 238);
    }
    
    .codeWrapper {
        position: fixed;
        left: 0;
        top: 0;
        padding: 20px 20px;
        height: 100vh;
        width: 50%;
    }
    
    .code {
        padding: 16px 16px;
        border: 1px solid gray;
        font-size: 16px;
        box-shadow: 0 0 3px 3px gray;
        height: 100%;
        overflow: auto;
    }
    
    /* 增加代码高亮效果 */
    
    .token.comment {
        color: slategray;
    }
    
    .token.selector {
        color: #690;
    }
    
    .token.punctuation {
        color: #999;
    }
    
    .token.property {
        color: #905;
    }
    
    .token.function {
        color: #DD4A68;
    }
    
    /* 然后在右边准备一张纸 */
    
    .paper {
        width: 50%;
        height: 100vh;
        position: fixed;
        right: 0;
        top: 0;
        background: rgb(238, 238, 238);
        border: 10px solid black;
        overflow: auto;
    }
    `
    let content2 = `/* 在纸上准备好简历内容 */
    `
    let content3 = `
    /* 但是杂乱无章的简历不好看呢，我们来变个魔法美化一下吧！！！ 请注意看右边 >>>>>> */
    
    `
    let content4 = `/* 这就是我的会动的简历，谢谢观看 */`
    let $code = $('#code')
    let preEle = document.createElement('pre')
    $code.append(preEle)
    let preContent = {
        text: '',
        style: ''
    }


    write(preContent, content1,
        function () {
            $('.paper').removeClass('off')
            write(preContent, content2,
                function () {
                    $('.paper').children().removeClass('off')
                    write(preContent, content3,
                        function () {
                            $('#headEle').append('<link rel="stylesheet" href="./css/colorful.css"></link>')
                            setTimeout(finsh, 6000)
                        }, 100)
                }, 100)
        }, 50
    )


    function finsh() {
        write(preContent, content4, undefined, 100)
    }
    function write(preContent, newContent, callBack, time) {
        let i = 0
        let id = setInterval(function () {
            preEle.innerHTML = preContent.text + Prism.highlight(newContent.substring(0, i + 1), Prism.languages.css, 'css')
            styleEle.innerHTML = preContent.style + newContent.substring(0, i + 1)
            code.scrollTop = code.clientHeight
            i++
            if (i === newContent.length) {
                clearInterval(id)
                if (callBack !== undefined) {
                    callBack.call()
                }
            }
        }, time)
        preContent.text = preEle.innerHTML
        preContent.style = styleEle.innerHTML
        return preContent
    }
}.call()