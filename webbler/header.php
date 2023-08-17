<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
        href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Nanum+Myeongjo:wght@400;700;800&display=swap"
        rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Nanum+Gothic:wght@400;700;800&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="./css/header.css">
    <link rel="stylesheet" href="./css/footer.css">
    <link rel="stylesheet" href="./css/home.css">
    <script src="https://kit.fontawesome.com/7d1f9ca95d.js" crossorigin="anonymous"></script>
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script src="./js/jquery.ripples.js"></script>
    <script src="./js/masonry-docs.min.js"></script>
    <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
    <script src="./js/common.js"></script>
    <title>Document</title>
</head>

<body>
    <svg style="display: none;">

        <filter id="filter">

            <feTurbulence id="water" numOctaves="3" seed="1" baseFrequency="0.02 0.5" />

            <feDisplacementMap scale="10" in="SourceGraphic" />

            <animate href="#water" attributeName="baseFrequency" keyTimes="0;0.5;1" values="0.002;0.008;0.002" dur="10s"
                repeatCount="indefinite" />

        </filter>

    </svg>
    <!--before 가상엘리먼트  fixed bg -->
    <script src="./js/header.js"></script>
    <header>
        <div class="center">
            <h1>
                <a href="./index.php">
                    <img src="./img/logo-white.svg" alt="">
                </a>
                <span class="hidden">webbler</span>
            </h1>
            <nav class="gnb gnb-lg">
                <?php include "menu.php" ?>
            </nav>
            <button class="mbtn">
                <span class="bar1"></span>
                <span class="bar2"></span>
                <span class="bar3"></span>
            </button>
        </div><!-- center -->
    </header>
    <nav class="gnb gnb-sm">
        <video class="gnb-video" src="./video/navbg.mp4"></video>
        <div class="gnb-inner">
            <?php include "menu.php" ?>
        </div>
    </nav>
    <button class="top-btn">
        <i class="fas fa-arrow-alt-circle-right"></i>
    </button>