<script type="text/javascript" src="jQuery.js"></script>
<script type="text/javascript" src="jqplot.js"></script>
<script type="text/javascript">
$(document).ready(function() {
    var data = [[1,2,3,4,5,6,7,8,9],[3,6,8,1,11,22,4,21,6]];
    var data_max = 30; //Y轴最大刻度
    var line_title = ["A","B"]; //曲线名称
    var y_label = "这是Y轴"; //Y轴标题
    var x_label = "这是X轴"; //X轴标题
    var x = [1,2,3,4,5,6,7,8,9]; //定义X轴刻度值
    var title = "这是标题"; //统计图标标题
    j.jqplot.diagram.base("chart1", data, line_title, "这是统计标题", x, x_label, y_label, data_max, 1);
    j.jqplot.diagram.base("chart2", data, line_title, "这是统计标题", x, x_label, y_label, data_max, 2);});

</script>
