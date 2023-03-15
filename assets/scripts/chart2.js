'use strict';

var ctx = document.getElementById('bar_graph');
var bar_graph = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['','2','','4','','6','','8','','10','','12','','14','','16','','18','','20','','22','','24','','26','','28','','30',],
    datasets: [{
      data: [3,4,5,3,0,0,4,2,2,8,8,2,2,1,7,4,4,3,3,3,2,2,6,2,2,1,1,1,7,8],
      backgroundColor: '#BDD3E1',
      xAxisID:'x',
      yAxisID:'y',
    }, ],
  },
})