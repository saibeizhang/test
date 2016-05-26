$(document).ready(function () {

});

/**
 * 插入包含数据的报表略缩图
 * @param tagObj        DOM节点的jQuery对象
 * @param chartId       报表DOM节点的Id
 * @param chartType     报表类型[bar, line, pie]
 */
function insertThumbnailChart(tagObj, chartId, chartType) {
    $.get("/test_a/refresh?type=" + chartType, function (data,status) {
        if (status == 'success') {
            thumbnailChart(tagObj, chartId);
            if (chartType == 'bar') {
                sparklineBar({
                    id:chartId,
                    values:data.result,
                    height:'45px',
                    barWidth: 3,
                    barColor:'#fff',
                    barSpacing:2
                });
                sparklineBar({
                    id:'big'+ chartId,
                    values:data.result,
                    height:'90px',
                    barWidth: 6,
                    barColor:'#fff',
                    barSpacing:2
                });
            } else if (chartType == 'pie') {
                sparklinePie({
                    id:chartId,
                    values: data.result,
                    width: 45,
                    height: 45,
                    sliceColors:[
                        '#fff',
                        'rgba(255,255,255,0.7)',
                        'rgba(255,255,255,0.4)',
                        'rgba(255,255,255,0.2)'
                    ]
                });
                sparklinePie({
                    id:'big'+ chartId,
                    values: data.result,
                    width: 90,
                    height: 90,
                    sliceColors:[
                        '#fff',
                        'rgba(255,255,255,0.7)',
                        'rgba(255,255,255,0.4)',
                        'rgba(255,255,255,0.2)'
                    ]
                });
            } else {
                sparklineLine({
                    id:chartId,
                    values: data.result,
                    width:85,
                    height:45,
                    lineColor:'#fff',
                    fillColor:'rgba(0,0,0,0)',
                    lineWidth:1.25,
                    maxSpotColor:'rgba(255,255,255,0.4)',
                    minSpotColor: 'rgba(255,255,255,0.4)',
                    spotColor:'rgba(255,255,255,0.4)',
                    spotRadius:3,
                    hSpotColor:'#fff',
                    hLineColor:'rgba(255,255,255,0.4)'
                });
                sparklineLine({
                    id:'big'+ chartId,
                    values: data.result,
                    width:170,
                    height:90,
                    lineColor:'#fff',
                    fillColor:'rgba(0,0,0,0)',
                    lineWidth:1.25,
                    maxSpotColor:'rgba(255,255,255,0.4)',
                    minSpotColor: 'rgba(255,255,255,0.4)',
                    spotColor:'rgba(255,255,255,0.4)',
                    spotRadius:3,
                    hSpotColor:'#fff',
                    hLineColor:'rgba(255,255,255,0.4)'
                });
            }
            dropDownThumbnailChart();
        }
    });
}

/**
 *插入 报表略缩图 的DOM结构
 * @param tagObj
 * @param chartId
 */
function thumbnailChart(tagObj, chartId) {
    tagObj.append(
        "<div class='col-sm-3'>" +
            "<div class='mini-charts-item " + randomChartColor() + "'>" +
                "<div class='clearfix'>" +
                    "<a style='cursor: hand'>" +
                        "<div class='chart chart-line " + chartId + "'></div>" +
                        "<div class='count'><small>Test</small><h2>123456</h2></div>" +
                    "</a>" +
                "</div>" +
                "<div id='big-chart' class='dash-widget-item " + randomChartColor() +" big-chart' style='display: none;position: absolute;float: left;z-index: 100;width: 100%'>"+
                    "<div class='dash-widget-header'>" +
                        "<div class='p-50'>" +
                            "<div class='chart big"+ chartId +"'></div>"+
                        "</div>"+
                        "<div class='dash-widget-title' style='position: relative!important;float: left;color: white'>For the past 30 days</div>"+
                    "</div>"+
                    "<div class='p-100'>"+
                        "<small style='color: white'>Page Views</small><h3 class='m-0 f-400'>47,896,536</h3>"+
                        "<br/>"+
                        "<small style='color: white'>Site Visitors</small><h3 class='m-0 f-400'>24,456,799</h3>"+
                        "<br/>"+
                        "<small style='color: white'>Total Clicks</small><h3 class='m-0 f-400'>13,965</h3>"+
                    "</div>"+
                "</div>" +
            "</div>" +
        "</div>");

}

/**
 * 随机选择一个app.min.1.css中的背景颜色
 * @returns {*}
 */
function randomChartColor() {
    switch (Math.round(Math.random()*10)) {
        case 0:
            return 'bgm-pink';
        case 1:
            return 'bgm-red';
        case 2:
            return 'bgm-blue';
        case 3:
            return 'bgm-purple';
        case 4:
            return 'bgm-lightblue';
        case 5:
            return 'bgm-cyan';
        case 6:
            return 'bgm-green';
        case 7:
            return 'bgm-lime';
        case 8:
            return 'bgm-teal';
        case 9:
            return 'bgm-orange';
        default:
            return 'bgm-bluegray';
    }
}

/**
 *添加悬浮事件
 */
function dropDownThumbnailChart() {
    $(".mini-charts-item").hover(function() {
        $(this).find(".big-chart").animate({opacity: "show"}, "slow");
    }, function() {
        $(this).find(".big-chart").hide();
    });
}

/**
 * 渲染柱状图
 * @param params
 * id, values, height, barWidth, barColor, barSpacing
 * id, values必填
 */
function sparklineBar(params) {
    $('.'+params.id).sparkline(params.values, {
        type: 'bar',
        height: params.height==undefined?'45px':params.height,
        barWidth: params.barWidth==undefined?3:params.barWidth,
        barColor: params.barColor==undefined?'#fff':params.barColor,
        barSpacing: params.barSpacing==undefined?2:params.barSpacing,
    })
}
/**
 * 渲染折线图
 * @param params
 * id, values, width, height, lineColor, fillColor, lineWidth, maxSpotColor, minSpotColor, spotColor, spotRadius, hSpotColor, hLineColor
 * 默认： (), (),  85, 45, '#fff', 'rgba(0,0,0,0)', 1.25, 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.4)', 3, '#fff', 'rgba(255,255,255,0.4)'
 * id, values必填
 */
function sparklineLine(params) {
    $('.'+params.id).sparkline(params.values, {
        type: 'line',
        width: params.width==undefined?85:params.width,
        height: params.height==undefined?45:params.height,
        lineColor: params.lineColor==undefined?'#fff':params.lineColor,
        fillColor: params.fillColor==undefined?'rgba(0,0,0,0)':params.fillColor,
        lineWidth: params.lineWidth==undefined?1.25:params.lineWidth,
        maxSpotColor: params.maxSpotColor==undefined?'rgba(255,255,255,0.4)':params.maxSpotColor,
        minSpotColor: params.minSpotColor==undefined?'rgba(255,255,255,0.4)':params.minSpotColor,
        spotColor: params.spotColor==undefined?'rgba(255,255,255,0.4)':params.spotColor,
        spotRadius: params.spotRadius==undefined?3:params.spotRadius,
        highlightSpotColor: params.hSpotColor==undefined?'#fff':params.hSpotColor,
        highlightLineColor: params.hLineColor==undefined?'rgba(255,255,255,0.4)':params.hLineColor
    });
}
/**
 * 渲染饼状图
 * @param params
 * id, values, width, height, sliceColors
 * 默认： (), (),  45, 45, ['#fff', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.2)']
 * id, values必填
 */
function sparklinePie(params) {
    $('.'+params.id).sparkline(params.values, {
        type: 'pie',
        width: params.width==undefined?45:params.width,
        height: params.height==undefined?45:params.height,
        sliceColors: params.sliceColors==undefined?['#fff', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.2)']:params.sliceColors,
        offset: 0,
        borderWidth: 0
    });
}
