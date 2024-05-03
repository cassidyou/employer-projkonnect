$(document).ready(function(){

     
     Chart.register(ChartDataLabels);
     var internshipData = [400, 800, 200, 900, 600, 700, 100, 500, 500, 400, 300, 300];
     var jobData = [200, 1000, 700, 500, 200, 500, 300, 800, 600, 300, 700, 500];
     var yearlyLabel = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


     barChart(internshipData, jobData, yearlyLabel, 'jobInternChart', 'Internship Applications', 'Job Applications');

    
     
     var screenSize = window.innerWidth;
     var thickness = screenSize < 768 ? 10 : 25;
    
     function barChart(data1, data2, label, idName, labelName1, labelName2) {

          new Chart(idName, {
               type: 'bar',
               data: {
                    defaultFontFamily: 'Poppins',
                    labels: label,
                    datasets: [
                         {
                              label: labelName1,
                              data: data1,
                              borderColor: 'transparent',
                              borderWidth: "0",
                              borderRadius: 0,
                              barThickness: thickness,
                              hoverBackgroundColor: '#FDC10B',
                              backgroundColor: '#FDC10B',
                              
                              tension: 0.5,
                              fill: false,
                         
                         },
                         {
                              label: labelName2,
                              data: data2,
                              borderColor: 'transparent',
                              borderWidth: "0",
                              borderRadius: 0,
                              barThickness: thickness,
                              hoverBackgroundColor: '#97CD66',
                              backgroundColor: '#97CD66',
                              
                              tension: 0.5,
                              fill: false,
                         
                         }
                    ]
               },
              
               options: {
                    plugins: {
                         datalabels: {
                              display: false,
                         },
                         legend: {
                              display: true,
                              position: 'bottom'
                         },
                    },
                    scales:  {
                         y: {
                              grid: {
                                   borderDash: [5, 5],
                                   zeroLineBorderDash: [5, 5],
                                   zeroLineColor: '#fff',
                                   zeroLineWidth: 0
                              },
                              beginAtZero: true
                         },
                         x: {
                              grid: {
                                   borderDash: [5, 5],
                                   zeroLineBorderDash: [5, 5],
                                   zeroLineColor: '#fff',
                                   zeroLineWidth: 0
                              },
                              barPercentage: 0.2
                         },
                    },
               },
          });
     }

});