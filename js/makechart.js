/*window.onload = function () {
function linechart() {


var linechart = $("#linechart").get(0).getContext("2d");
var myNewChart = new Chart(linechart);
};
linechart();
}
*/
/*

function draw(id) {
    var ctx = $(id).get(0).getContext("2d");
    var myNewChart = new Chart(ctx);
    var data = {
    labels : ["January","February","March","April","May","June","July"],
    datasets : [
        {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [65,59,90,81,56,55,40]
        },
        {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            data : [28,48,40,19,96,27,100]
        }
    ]
}
 new Chart(ctx).Line(data,options);
}


function resizeCanvas(id) {
var id = id;
    var ele = $(id).eq(0);
    var parent = ele.parent("div");
    var parentwidth = parent.innerWidth();
    var parentheight = parent.innerHeight();
    ele.width(parentwidth);
    ele.height(parentheight);
    draw(id);



};

resizeCanvas("#linechart");




        var lineChartData = {
            labels : ["January","February","March","April","May","June","July"],
            datasets : [
                {
                    fillColor : "rgba(220,220,220,0.5)",
                    strokeColor : "rgba(220,220,220,1)",
                    pointColor : "rgba(220,220,220,1)",
                    pointStrokeColor : "#fff",
                    data : [65,59,90,81,56,55,40]
                },
                {
                    fillColor : "rgba(151,187,205,0.5)",
                    strokeColor : "rgba(151,187,205,1)",
                    pointColor : "rgba(151,187,205,1)",
                    pointStrokeColor : "#fff",
                    data : [28,48,40,19,96,27,100]
                }
            ]
            
        }

    var myLine = new Chart(document.getElementById("linechart").getContext("2d")).Line(lineChartData);
   
        var pieData = [
                {
                    value: 30,
                    color:"#F38630"
                },
                {
                    value : 50,
                    color : "#E0E4CC"
                },
                {
                    value : 100,
                    color : "#69D2E7"
                }
            
            ];

    var myPie = new Chart(document.getElementById("linechart").getContext("2d")).Pie(pieData);
    
var lineChartData = {
    labels : ["09/12","09/13","09/14","09/15","09/16","09/17","09/18"], //X轴 坐标
    datasets : [
        {
            fillColor : "transparent", // 背景色
            strokeColor : "#ef7c1f", // 线
            pointColor : "#ef7c1f", // 点
            pointStrokeColor : "#fff", // 点的包围圈
            data : [120,140,110,130,150,170,160] // Y轴坐标
        },
        {
            fillColor : "transparent",
            strokeColor : "#3dc448",
            pointColor : "#3dc448",
            pointStrokeColor : "#fff",
            data : [80,90,80,100,110,130,100]
        }
    ]

} */

 function radom(){ return Math.random()*90}







function linechartsize(ele,data,options){
    var parent = ele.parent("div");
    var parentwidth = parent.width();
    var elepadding = ele.innerWidth();
    ele.attr({
        width: parentwidth,
        height:'400'
    });
    ele.height(400);
    var myLine = new Chart(ele.get(0).getContext("2d")).Line(data, options);

};



    linechartsize($("#linechart"),{
    labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
           {
            label: "My Second dataset",
            fillColor: "rgba(172,206,227,0.3)",
            strokeColor: "rgba(172,206,227,0.3)",
            pointColor: "rgba(172,206,227,0)",
            pointStrokeColor: "rgba(172,206,227,0",
            pointHighlightFill:"rgba(172,206,227,0)",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [radom(), radom(),radom(), radom(), radom(), radom(), radom()]
            },
            {
            label: "My First dataset",
           fillColor : "rgba(52,192,226,0.6)",
            strokeColor : "rgba(52,192,226,0.3)",
            pointColor : "rgba(52,192,226,0)",
            pointStrokeColor : "rgba(52,192,226,0.3)",
            pointStrokeColor: "rgba(52,192,226,0)",
            pointHighlightFill: "rgba(52,192,226,0.6)",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [radom(), radom(), radom(), radom(), radom(), radom(), radom()]
            }
            
            ]
            },defaults);





var defaults = {
                
    //Boolean - If we show the scale above the chart data           
    scaleOverlay : false,
    
    //Boolean - If we want to override with a hard coded scale
    scaleOverride : false,
    
    //** Required if scaleOverride is true **
    //Number - The number of steps in a hard coded scale
    scaleSteps : null,
    
    //Number - The value jump in the hard coded scale
    scaleStepWidth : 20,
    
    // Y 轴的起始值
    scaleStartValue : null,

    // Y/X轴的颜色
    scaleLineColor : "rgba(0,0,0,.1)",
    
    // X,Y轴的宽度
    scaleLineWidth : 2,

    // 刻度是否显示标签, 即Y轴上是否显示文字
    scaleShowLabels : true,
    
    // Y轴上的刻度,即文字
    scaleLabel : "<%=value%>",
    
    // 字体
    scaleFontFamily : "'Arial'",
    
    // 文字大小
    scaleFontSize : 12,
    
    // 文字样式
    scaleFontStyle : "normal",
    
    // 文字颜色
    scaleFontColor : "#666",    
    
    // 是否显示网格
    scaleShowGridLines : false,
    
    // 网格颜色
    scaleGridLineColor : "rgba(0,0,0,0)",
    
    // 网格宽度
    scaleGridLineWidth : 10, 
    
    // 是否使用贝塞尔曲线? 即:线条是否弯曲
    bezierCurve : false,
    
    // 是否显示点数
    pointDot : false,
    
    // 圆点的大小
    pointDotRadius : 0,
    
    // 圆点的笔触宽度, 即:圆点外层白色大小
    pointDotStrokeWidth : 0,
    
    // 数据集行程
    datasetStroke : true,
    
    // 线条的宽度, 即:数据集
    datasetStrokeWidth : 2,
    
    // 是否填充数据集
    datasetFill : false,
    
    // 是否执行动画
    animation : true,

    // 动画的时间
    animationSteps : 60,
    
    // 动画的特效
    animationEasing : "easeOutQuart",

    // 动画完成时的执行函数
    onAnimationComplete : null
    
}
//linchart




function radiachartsize(ele,data,options){
    var parent = ele.parent("div");
    var parentwidth = parent.width();
    var elepadding = ele.innerWidth();
    ele.attr({
        width: parentwidth,
        height:'450'
    });
    ele.height(450);
    var myRadia = new Chart(ele.get(0).getContext("2d")).Radar(data,options);

};






var radia = {};
 radia.data = {
    labels : ["Eating","Drinking","Sleeping","Designing","Coding","Partying","Running"],
    datasets : [
        {
            fillColor : "rgba(172,206,227,0.3)",
            strokeColor : "rgba(172,206,227,1)",
            pointColor : "rgba(172,206,227,1)",
            pointStrokeColor : "#fff",
            data : [radom(),radom(),radom(),radom(),radom(),radom(),radom()]
        },
        {
            fillColor : "rgba(52,192,226,0.6)",
            strokeColor : "rgba(52,192,226,1)",
            pointColor : "rgba(52,192,226,1)",
            pointStrokeColor : "#fff",
            data : [radom(),radom(),radom(),radom(),radom(),radom(),radom()]
        }
    ]
}


radia.defaults = {
                
    //Boolean - If we show the scale above the chart data           
    scaleOverlay : false,
    
    //Boolean - If we want to override with a hard coded scale
    scaleOverride : false,
    
    //** Required if scaleOverride is true **
    //Number - The number of steps in a hard coded scale
    scaleSteps : null,
    //Number - The value jump in the hard coded scale
    scaleStepWidth : null,
    //Number - The centre starting value
    scaleStartValue : null,
    
    //Boolean - Whether to show lines for each scale point
    scaleShowLine : true,

    //String - Colour of the scale line 
    scaleLineColor : "rgba(0,0,0,.1)",
    
    //Number - Pixel width of the scale line    
    scaleLineWidth : 1,

    //Boolean - Whether to show labels on the scale 
    scaleShowLabels : false,
    
    //Interpolated JS string - can access value
    scaleLabel : "<%=value%>",
    
    //String - Scale label font declaration for the scale label
    scaleFontFamily : "'Arial'",
    
    //Number - Scale label font size in pixels  
    scaleFontSize : 12,
    
    //String - Scale label font weight style    
    scaleFontStyle : "normal",
    
    //String - Scale label font colour  
    scaleFontColor : "#666",
    
    //Boolean - Show a backdrop to the scale label
    scaleShowLabelBackdrop : true,
    
    //String - The colour of the label backdrop 
    scaleBackdropColor : "rgba(255,255,255,0.75)",
    
    //Number - The backdrop padding above & below the label in pixels
    scaleBackdropPaddingY : 2,
    
    //Number - The backdrop padding to the side of the label in pixels  
    scaleBackdropPaddingX : 2,
    
    //Boolean - Whether we show the angle lines out of the radar
    angleShowLineOut : true,
    
    //String - Colour of the angle line
    angleLineColor : "rgba(0,0,0,.1)",
    
    //Number - Pixel width of the angle line
    angleLineWidth : 1,         
    
    //String - Point label font declaration
    pointLabelFontFamily : "'Arial'",
    
    //String - Point label font weight
    pointLabelFontStyle : "normal",
    
    //Number - Point label font size in pixels  
    pointLabelFontSize : 12,
    
    //String - Point label font colour  
    pointLabelFontColor : "#666",
    
    //Boolean - Whether to show a dot for each point
    pointDot : true,
    
    //Number - Radius of each point dot in pixels
    pointDotRadius : 3,
    
    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,
    
    //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,
    
    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : 2,
    
    //Boolean - Whether to fill the dataset with a colour
    datasetFill : true,
    
    //Boolean - Whether to animate the chart
    animation : true,

    //Number - Number of animation steps
    animationSteps : 60,
    
    //String - Animation easing effect
    animationEasing : "easeOutQuart",

    //Function - Fires when the animation is complete
    onAnimationComplete : null
    
}

radiachartsize($("#radiachart"),radia.data,radia.defaults)
//radiachart



function piechartsize(ele,data,options){
    var parent = ele.parent("div");
    var parentwidth = parent.width();
    var elepadding = ele.innerWidth();
    ele.attr({
        width: parentwidth,
        height:'400'
    });
    ele.height(400);
    var myRadia = new Chart(ele.get(0).getContext("2d")).Pie(data,options);

};



piechartsize($("#piechart"),[
    {
        value: 30,
        color:"#e3746f"
    },
    {
        value : 50,
        color : "#757eaf"
    },
    {
        value : 100,
        color : "#34c0e2"
    }           
],{
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,
    
    //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",
    
    //Number - The width of each segment stroke
    segmentStrokeWidth : 2,
    
    //Boolean - Whether we should animate the chart 
    animation : true,
    
    //Number - Amount of animation steps
    animationSteps : 100,
    
    //String - Animation easing effect
    animationEasing : "easeOutBounce",
    
    //Boolean - Whether we animate the rotation of the Pie
    animateRotate : true,

    //Boolean - Whether we animate scaling the Pie from the centre
    animateScale : false,
    
    //Function - Will fire on animation completion.
    onAnimationComplete : null
})
//peichart






function barchartsize(ele,data,options){
    var parent = ele.parent("div");
    var parentwidth = parent.width();
    var elepadding = ele.innerWidth();
    ele.attr({
        width: parentwidth,
        height:'450'
    });
    ele.height(450);
    var myRadia = new Chart(ele.get(0).getContext("2d")).Bar(data,options);

};

barchartsize($("#barchart"),{
    labels : ["January","February","March","April","May","June","July"],
    datasets : [
        {
            fillColor : "rgba(172,206,227,0.5)",
            strokeColor : "rgba(172,206,227,1)",
            data : [65,59,90,81,56,55,40]
        },
        {
            fillColor : "rgba(52,192,226,0.6)",
            strokeColor : "rgba(52,192,226,1)",
            data : [28,48,40,19,96,27,100]
        }
    ]
},{
                
    //Boolean - If we show the scale above the chart data           
    scaleOverlay : false,
    
    //Boolean - If we want to override with a hard coded scale
    scaleOverride : false,
    
    //** Required if scaleOverride is true **
    //Number - The number of steps in a hard coded scale
    scaleSteps : null,
    //Number - The value jump in the hard coded scale
    scaleStepWidth : null,
    //Number - The scale starting value
    scaleStartValue : null,

    //String - Colour of the scale line 
    scaleLineColor : "rgba(0,0,0,.1)",
    
    //Number - Pixel width of the scale line    
    scaleLineWidth : 1,

    //Boolean - Whether to show labels on the scale 
    scaleShowLabels : false,
    
    //Interpolated JS string - can access value
    scaleLabel : "<%=value%>",
    
    //String - Scale label font declaration for the scale label
    scaleFontFamily : "'Arial'",
    
    //Number - Scale label font size in pixels  
    scaleFontSize : 12,
    
    //String - Scale label font weight style    
    scaleFontStyle : "normal",
    
    //String - Scale label font colour  
    scaleFontColor : "#666",    
    
    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,
    
    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",
    
    //Number - Width of the grid lines
    scaleGridLineWidth : 1, 

    //Boolean - If there is a stroke on each bar    
    barShowStroke : true,
    
    //Number - Pixel width of the bar stroke    
    barStrokeWidth : 2,
    
    //Number - Spacing between each of the X value sets
    barValueSpacing : 5,
    
    //Number - Spacing between data sets within X values
    barDatasetSpacing : 1,
    
    //Boolean - Whether to animate the chart
    animation : true,

    //Number - Number of animation steps
    animationSteps : 60,
    
    //String - Animation easing effect
    animationEasing : "easeOutQuart",

    //Function - Fires when the animation is complete
    onAnimationComplete : null
    
})
//barchart

 linechartsize($("#linechart2"),{
    labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
           {
            label: "My Second dataset",
            fillColor: "rgba(172,206,227,0)",
            strokeColor: "#2d9ad9",
            pointColor: "#fff",
            pointStrokeColor: "#2d9ad9",
            pointHighlightFill:"#2d9ad9",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [radom(), radom(),radom(), radom(), radom(), radom(), radom()]
            },
            {
            label: "My First dataset",
           fillColor : "rgba(52,192,226,0)",
            strokeColor : "#e3746f",
            pointColor : "#ffff",
            pointStrokeColor : "#e3746f",
            pointStrokeColor: "#e3746f",
            pointHighlightFill: "rgba(52,192,226,0.6)",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [radom(), radom(), radom(), radom(), radom(), radom(), radom()]
            }
            
            ]
            }, {
                
    //Boolean - If we show the scale above the chart data           
    scaleOverlay : false,
    
    //Boolean - If we want to override with a hard coded scale
    scaleOverride : false,
    
    //** Required if scaleOverride is true **
    //Number - The number of steps in a hard coded scale
    scaleSteps : null,
    
    //Number - The value jump in the hard coded scale
    scaleStepWidth : 20,
    
    // Y 轴的起始值
    scaleStartValue : null,

    // Y/X轴的颜色
    scaleLineColor : "rgba(0,0,0,.1)",
    
    // X,Y轴的宽度
    scaleLineWidth : 2,

    // 刻度是否显示标签, 即Y轴上是否显示文字
    scaleShowLabels : true,
    
    // Y轴上的刻度,即文字
    scaleLabel : "<%=value%>",
    
    // 字体
    scaleFontFamily : "'Arial'",
    
    // 文字大小
    scaleFontSize : 12,
    
    // 文字样式
    scaleFontStyle : "normal",
    
    // 文字颜色
    scaleFontColor : "#666",    
    
    // 是否显示网格
    scaleShowGridLines : false,
    
    // 网格颜色
    scaleGridLineColor : "rgba(0,0,0,0)",
    
    // 网格宽度
    scaleGridLineWidth : 10, 
    
    // 是否使用贝塞尔曲线? 即:线条是否弯曲
    bezierCurve : false,
    
    // 是否显示点数
    pointDot : false,
    
    // 圆点的大小
    pointDotRadius : 4,
    
    // 圆点的笔触宽度, 即:圆点外层白色大小
    pointDotStrokeWidth : 4,
    
    // 数据集行程
    datasetStroke : true,
    
    // 线条的宽度, 即:数据集
    datasetStrokeWidth : 3,
    
    // 是否填充数据集
    datasetFill : false,
    
    // 是否执行动画
    animation : true,

    // 动画的时间
    animationSteps : 60,
    
    // 动画的特效
    animationEasing : "easeOutQuart",

    // 动画完成时的执行函数
    onAnimationComplete : null
    
});







