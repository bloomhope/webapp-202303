'use strict';

var ctx = document.getElementById('bar_graph');
var bar_graph = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['1','2','3', '4', '5','6','7', '8','9', '10','11', '12','13','14','15', '16','17', '18', '19','20','21', '22', '23','24','25','26','27', '28', '29','30',],
    datasets: [{
      data: [3,4,5,3,0,0,4,2,2,8,8,2,2,1,7,4,4,3,3,3,2,2,6,2,2,1,1,1,7,8],
      backgroundColor: '#87cefa',
      xAxisID:'x',
      yAxisID:'y',
      borderRadius:10,
      //minBarLength:100,
      //showLine:false,
    }, ],
  },
  options:{
    plugins:{
      legend:{
        display:false //凡例なし
      }
    },
    /*grid:{
      yaxis:{
        lines:{
          show:false
        }
      }
    },
    layout:{
      padding:{
        left:30,
        rigth:30,
      },
      },*/
    scales:{
      /*scaleLabel:{
        padding:{
          top:50,
        }
      },*/
      grid:{
        display:false,
        //tickLength:100,
          /*x:{
            lines:{
              show:false
            }
          }*/
        //color:'#fff',
      },
      x:{
        //display:false,
        ticks:{
          callback: function(value,index) {
            return index >=1 && value % 2 == 1 ? "" : value; },
          color:'#87cefa'
        },
        grid:{
          //drawTicks:false,
          drawBorder:false, //軸線なし
          color:'#fff',
          //tickLength:50, グラフとメモリラベルのスキマ
        }
      },
      y:{
        /*type:'time',
        time:{
          unit:'hour'
        },*/
        //scaleLabel:['0h','','2h','','4h','','6h','','8h',],
        gridLines:{
          display:false
        },
        //display:false,
        ticks:{
          //display:true
          callback: function(value) {
            return value + 'h';},
          count:5,
          padding:20,
          lineHeight:10,
          color:'#87cefa'
          //stepSize:3,
          //autoSkip:true,
          //autoSkipPadding:40,
        },
        alignToPixels:true,
        grid:{
          //drawTicks:false,
          drawBorder:false, //軸線なし
          color:'#fff',
          
        }
      }
    }
    /*scales:{
      x:{
        plugins:{
        gridLines :{
          display: false
        },
      }
    }
    }*/
    }
}
);

//ドーナツ
var ctx = document.getElementById('doughnut_language');
var doughnut_language = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['HTML', 'CSS', 'JavaScript','PHP','Laravel','SQL','SHELL','情報システム基礎知識（その他）'],
    datasets: [{
      data: [30, 20, 10,5,5,20,20,10],
      backgroundColor: ['#0000ff', '#4682b4', '#00ced1','#00bfff','#9370db','#7b68ee','#0000cd','#00008b'],
      weight: 100,
      radius:100
    }],
  },
  options:{
    layout:{
      /*padding:{
        top:70
      },*/
    },
    plugins:{
      legend:{
        display:false
        /*position:'bottom',
        labels:{
          render:'persentage',
          fontColor: 'white',
          fontSize: 20,
          boxWidth:20,
          boxHeight:20,
          //borderRadius:10,
          textAlign:'left',
          //maxHeight:10*/

      },
    },
    
    /*labels: {
      render: 'percentage',
      fontColor: function (data) {
        var rgb = hexToRgb(data.dataset.backgroundColor[data.index]);
        var threshold = 140;
        var luminance = 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b;
        return luminance > threshold ? 'black' : 'white';
      },
      precision: 2
    }*/
  }
});


var ctx = document.getElementById('doughnut_content');
var doughnut_content = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['N予備校', 'ドットインストール', 'POSSE'],
    datasets: [{
      data: [40, 20, 40],
      backgroundColor: ['#0000ff', '#4682b4', '#00ced1'],
      weight: 100,
      radius:100
    }],
  },
  options:{
    layout:{
      /*padding:{
        top:70
      },*/
    },
    plugins:{
      legend:{
        display:false
        /*position:'bottom',
        labels:{
          render:'persentage',
          fontColor: 'white',
          fontSize: 20,
          boxWidth:20,
          boxHeight:20,
          //borderRadius:10,
          textAlign:'left',
          //maxHeight:10*/

      },
    },
  }
});
