<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script src="/test_a/resources/js/jquery.min.js"></script>
    <script src="/test_a/resources/js/jquery.sparkline.min.js"></script>

    <script src="/test_a/resources/js/tmp.js"></script>

    <link href="/test_a/resources/css/app.min.1.css" rel="stylesheet">

    <title>表格略缩</title>
</head>
<body>
<div>
    <button onclick="insertThumbnailChart($('.row'), 'stats-line-' + Math.round(Math.random())+2, 'line');">Line</button>
    <button onclick="insertThumbnailChart($('.row'), 'stats-bar-' + Math.round(Math.random())+2, 'bar')">Bar</button>
    <button onclick="insertThumbnailChart($('.row'), 'stats-pie-' + Math.round(Math.random())+2, 'pie')">Pie</button>
</div>


<div class="mini-charts">
    <div class="row" id="test">
        <script type="text/javascript">insertThumbnailChart($(".row"),'stats-line', 'line')</script>
</body>
</html>
