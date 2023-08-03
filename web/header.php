<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Java24</title>
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;500;600;700;800&family=Nanum+Gothic:wght@400;800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap" rel="stylesheet">
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script src="./js/event.js"></script>
    <script src="https://kit.fontawesome.com/d309663a90.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="./css/header.css">
    <link rel="stylesheet" href="./css/footer.css">
    <link rel="stylesheet" href="./css/sub_layout.css">
    <link rel="stylesheet" href="./css/home.css">
</head>
<body>
    <header>
        <nav class="member">
            <div class='center'>
                <a href="./index.php">처음으로</a>
                <a href="#">로그인</a>
                <a href="#">회원가입</a>
                <a href="#">SNS</a>
            </div>
        </nav>
        <div class="bottom">
            <h1>
               <a href="./index.php">
                <img src="./img/icons/logo.png" alt="">
               </a>
            </h1>
            <nav class="gnb">
            <?php include "sitemenu.php"?>
            </nav>
        </div>
    </header>

    <nav class="quick">
        <b>quick <br> menu</b>

        <a href="./biz_intro.php">
        <i class="fas fa-sd-card"></i>
            <span>사업분야</span>
        </a>
        <a href="./online.php">
        <i class="fas fa-globe-asia"></i>
            <span>온라인상담</span>
        </a>
        <a href="./location.php">
        <i class="fas fa-map-marker-alt"></i>
            <span>오시는길</span>
        </a>
        <button class="top"><i class="fas fa-arrow-up"></i>top</button>
    </nav>