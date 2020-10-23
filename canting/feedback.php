<?php include("./header.php")?>
<style>
    /* 留言反馈 */

    .formB {
        width: 1290px;
        box-sizing: border-box;
        padding: 0 15px;
        position: relative;
        margin: 0 auto;
        background: #fff;
        padding: 70px 0 100px 0;
        width: 600px;
        height: auto;
        margin: 0 auto
    }

    .formB label {
        display: block;
        width: 100%;
        height: auto;
        padding-bottom: 8px;
    }

    .formB label input {
        width: 100%;
        height: 38px;
        line-height: 38px;
        display: block;
        box-sizing: border-box;
        padding: 0 10px;
        font-size: 14px;
        border: 1px solid #e5e5e5;
        outline-color: #238ad4;
        outline: none;
    }

    .formB label p {
        color: red;
        font-size: 12px;
        box-sizing: border-box;
        padding: 0 10px;
        line-height: 1.5;
        height: 18px
    }

    .formB label input:focus {
        border-color: rgba(231, 23, 23, .2);
        box-shadow: 0 0 5px rgba(231, 23, 23, .2);
    }

    .formB label textarea {
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding: 10px;
        line-height: 1.5;
        font-size: 14px;
        border: 1px solid #e5e5e5;
        outline: none;
    }

    .formB label textarea:focus {
        border-color: rgba(231, 23, 23, .2);
        box-shadow: 0 0 5px rgba(231, 23, 23, .2);
    }

    .formB label #submit {
        background: #e71717;
        color: #fff;
        display: block;
        text-align: center;
        line-height: 2.4;
        font-size: 18px;
    }

    .formB label #submit:hover {
        background: #bd0909;
    }

    .location {
        width: 1230px;
        margin: 30px auto;
    }

    .location span {
        font-size: 16px;
        color: #666;
        line-height: 30px;
        padding: 0 4px;
    }

    .content {
        width: 1200px;
        margin: 30px auto;
    }

    .content>h3 {
        line-height: 35px;
        font-size: 18px;
        color: #555;
        text-align: center;
    }

    @media screen and (max-width:1290px) {
        /* 留言反馈 */
        #show .content,
        #feedback .content {
            width: 90%;
        }
        .location {
            width: 100%;
            margin: 15px auto;
        }
        .location span {
            font-size: 12px;
            color: #666;
            line-height: 20px;
            padding: 0 3px;
        }
        .content {
            width: 100%;
            margin: 30px auto;
            margin-bottom: 60px;
        }
        .content>h3 {
            line-height: 32px;
            font-size: 14px;
            color: #555;
            text-align: center;
        }
        .formB {
            width: 70%;
            padding: 0;
        }
    }

    @media screen and (max-width:768px) {
        /* 留言反馈-------------------------------------- */
        .content {
            width: 100%;
            margin: 30px auto;
        }
        #show .content {
            width: 92%;
            padding-top: 40px;
            padding-bottom: 40px;
        }
        #show .content h3 {
            font-size: 20px;
        }
        #show .content .setting span {
            padding: 0 10px;
        }
        #change {
            padding: 20px 0;
        }
        #show #video {
            width: 100%;
            margin-bottom: 20px;
        }
        #show .content .setting {
            margin-bottom: 20px;
        }
        #show .content.video .ql-container {
            width: 100%;
            padding-bottom: 20px;
            font-size: 14px;
            line-height: 1.5;
        }
        .formB {
            width: 90%;
            padding: 50px 0 10px 0;
        }
        .formB label #submit {
            line-height: 30px;
            font-size: 14px;
        }
    }
</style>

<div id="location">
    <div class="location">
        <span>您的位置：</span>
        <span>
            <a href="http://www.g3wei.com/demo/index/index.html">首页</a>
        </span> &gt;
        <span>
            <a>留言反馈</a>
        </span>
    </div>
</div>

<div class="content">
    <h3>留言反馈</h3>
    <form id="form" class="formB">
        <label for="nickname">
            <input id="nickname" type="text" name="nickname" placeholder="联系人(必填)" onblur="check_nickname(value)">
            <p></p>
        </label>
        <label for="phone">
            <input id="phone" name="phone" placeholder="电话" onblur="check_phone(value)">
            <p></p>
        </label>
        <label for="email">
            <input id="email" name="email" placeholder="邮箱" onblur="check_email(value)">
            <p></p>
        </label>
        <label for="content">
            <textarea id="content" name="content" cols="30" rows="10" placeholder="内容" onblur="check_content(value)"></textarea>
            <p></p>
        </label>
        <label for="submit">
            <a href="javascript:;" id="submit">提交</a>
        </label>
    </form>
</div>


<script src="./img/feedback/feedback.js"></script>
<?php include("./footer.php")?>