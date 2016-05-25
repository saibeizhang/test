<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <%
        String path = request.getContextPath();
    %>
    <script src="<%=path%>/resources/js/jquery.min.js"></script>
    <script src="<%=path%>/resources/js/jquery.sparkline.min.js"></script>
    <script src="<%=path%>/resources/js/charts.js"></script>

    <link href="<%=path%>/resources/css/app.min.1.css" rel="stylesheet">
    <title>Title</title>
</head>
<body>
<div class="mini-charts">
    <div class="row">
        <div class="col-sm-3">
            <div class="mini-charts-item bgm-cyan">
                <div class="clearfix">
                    <div class="chart stats-bar"></div>
                    <div class="count">
                        <small>Website Traffics</small>
                        <h2>987,459</h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-sm-3">
            <div class="mini-charts-item bgm-lightgreen">
                <div class="clearfix">
                    <div class="chart stats-bar-2"></div>
                    <div class="count">
                        <small>Website Impressions</small>
                        <h2>356,785K</h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-sm-3">
            <div class="mini-charts-item bgm-orange">
                <div class="clearfix">
                    <div class="chart stats-line"></div>
                    <div class="count">
                        <small>Total Sales</small>
                        <h2>$ 458,778</h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-sm-3">
            <div class="mini-charts-item bgm-bluegray">
                <div class="clearfix">
                    <div class="chart stats-line-2"></div>
                    <div class="count">
                        <small>Support Tickets</small>
                        <h2>23,856</h2>
                    </div>
                </div>
            </div>
        </div>


        <div class="col-sm-3">
            <div class="mini-charts-item bgm-teal">
                <div class="clearfix">
                    <div class="chart chart-pie stats-pie"></div>
                    <div class="count">
                        <small>Percentage</small>
                        <h2>99.87%</h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-sm-3">
            <div class="mini-charts-item bgm-red">
                <div class="clearfix">
                    <div class="chart stats-line"></div>
                    <div class="count">
                        <small>Total Sales</small>
                        <h2>$ 458,778</h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-sm-3">
            <div class="mini-charts-item bgm-blue">
                <div class="clearfix">
                    <div class="chart chart-pie stats-pie-2"></div>
                    <div class="count">
                        <small>John Snow</small>
                        <h2>41.87%</h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-sm-3">
            <div class="mini-charts-item bgm-pink">
                <div class="clearfix">
                    <div class="chart stats-bar"></div>
                    <div class="count">
                        <small>Website Traffics</small>
                        <h2>987,459</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
