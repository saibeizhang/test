function getTableColor() {
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
            return 'bgm-yellow';
        case 9:
            return 'bgm-orange';
        default:
            return 'bgm-bluegray';
    }
}
/**
 * 增加折线图
 */
function insertLineChart() {
    var color = getTableColor();
    $("#test").append("<div class='col-sm-3'> <div class='mini-charts-item " + color + "'>" +
        " <div class='clearfix'> <div class='chart chart-line stats-line-3'></div><div class='count'>" +
        "<small>Test</small><h2>123456</h2></div></div></div></div>");
    getChartData('stats-line-3', 'line');
}
/**
 * 增加柱状图
 */
function insertBarChart() {
    $("#test").append("<div class='col-sm-3'> <div class='mini-charts-item bgm-blue'>" +
        " <div class='clearfix'> <div class='chart chart-line stats-line'></div><div class='count'>" +
        "<small>Test</small><h2>123456</h2></div></div></div></div>");
}
/**
 * 增加饼状图
 */
function insertPieChart() {
    $("#test").append("<div class='col-sm-3'> <div class='mini-charts-item bgm-blue'>" +
        " <div class='clearfix'> <div class='chart chart-line stats-line'></div><div class='count'>" +
        "<small>Test</small><h2>123456</h2></div></div></div></div>");
}
/**
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
/**
 * ajax请求各种表格数据
 * @param type
 *          表格类型
 */
function getChartData(chartId, chartType) {
    $.get("/saibei_test/refresh?type=" + chartType,function(data){
        if (chartType=='bar') {
            console.log(chartId +"  "+ chartType);
            console.log('bar');
            sparklineBar({
                id:chartId,
                values:data.result,
                height:'45px',
                barWidth: 3,
                barColor:'#fff',
                barSpacing:2
            });
        } else if(chartType=='line') {
            console.log(chartId +"  "+ chartType);
            console.log('line');
            sparklineLine({
                id:chartId,
                values: data.result,
                width:80,
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
        } else if(chartType=='pie') {
            console.log(chartId +"  "+ chartType);
            console.log('pie');
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
        } else {
            console.log(chartId);
            sparklineLine({
                id:chartId,
                values: data.result,
                width:'100%',
                height:'95px',
                lineColor:'rgba(255,255,255,0.7)',
                fillColor:'rgba(0,0,0,0)',
                lineWidth:2,
                maxSpotColor:'rgba(255,255,255,0.4)',
                minSpotColor: 'rgba(255,255,255,0.4)',
                spotColor:'rgba(255,255,255,0.4)',
                spotRadius:5,
                hSpotColor:'#fff',
                hLineColor:'rgba(255,255,255,0.4)'
            });
        }
    });
}

$(document).ready(function () {

    insertLineChart();
    if ($('.stats-bar')[0]) {
        getChartData('stats-bar', 'bar');
    }
    if ($('.stats-bar-2')[0]) {
        getChartData('stats-bar-2', 'bar');
    }
    if ($('.stats-line')[0]) {
        getChartData('stats-line', 'line');
    }
    if ($('.stats-line-2')[0]) {
        getChartData('stats-line-2', 'line');
    }
    if ($('.stats-pie')[0]) {
        getChartData('stats-pie', 'pie');
    }
    if ($('.stats-pie-2')[0]) {
        getChartData('stats-pie-2', 'pie');
    }
    if ($('.dash-widget-visits')[0]) {
        getChartData('dash-widget-visitswidget', 'line');
    }
});


