import "./byeie"; // loučíme se s IE
import { Script } from "vm";

/*
// snadné načtení souboru pro každého!
fetch("https://blabla.cz/blabla.json")
  .then(response => response.json()) // nebo .text(), když to není json
  .then(data => {
    // tady jde provést s daty cokoliv
  });
*/
//grafcyklyivf
  Highcharts.setOptions({
    colors: ['#FFCC00', '#EE8027', '#E53434', '#A0067D', '#5E2281', '#172983', '#007BC2', '#89BA17', '#D4B66D', '#B85637', '#A21F16', '#732813', '#5C748C']
});

Highcharts.chart('grafcyklyivf', {
  chart: {
      type: 'line',
  },
  title: {
      text: 'Počet výkonů asistované reprodukce',
  },
  credits: {
    text: 'Zdroj: ÚZIS',
    href: 'https://www.uzis.cz/index.php?pg=registry-sber-dat--registrace-a-vstup-do-registru',
  },
  subtitle: {
      text: '',
  },
  xAxis: {
      categories: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
  },
  yAxis: {
      title: {
          text: 'počet cyklů v tisících',
      }
  },
  plotOptions: {
      line: {
          dataLabels: {
              enabled: true,
          },
          enableMouseTracking: false,
      }
  },
  series: [{
      name: 'všechny cykly',
      data: [17682, 21316, 22707, 23798, 24550, 27879, 32245, 35875, 38081, 41017, 42773],
      visible:false
  }, {
      name: 'darování vajíček',
      data: [675, 1555, 1900, 2361, 3110, 3696, 4319, 4924, 5018, 5374, 5003],
  },
  {
    name: 'ivf - umělé oplodnění',
    data: [12192, 14150, 12843, 12733, 12326, 12296, 12980, 13280, 13205, 15006, 15428],
},
{
  name: 'ket - rozmrazení embyrií',
  data: [4218, 4793, 4896, 5025, 4520, 6224, 7715, 9507, 11240, 12260, 13714],
  visible:false,
},
{
  name: 'freeze - zmrazení embyrií',
  data: [0, 26, 231, 194, 152, 426, 548, 663, 789, 1280, 2081],
  visible:false,
},
{
  name: 'přijetí darovaných vajíček',
  data: [0, 153, 2246, 2829, 3735, 4297, 5199, 5643, 5769, 6557, 6057],
},
]
});

Highcharts.chart('grafvek', {
  chart: {
      type: 'line'
  },
  title: {
      text: 'Průměrný věk žen při zahájení léčby'
  },
  credits: {
    text: 'Zdroj: ÚZIS',
    href: 'https://www.uzis.cz/index.php?pg=registry-sber-dat--registrace-a-vstup-do-registru'
},
  subtitle: {
      text: ''
  },
  xAxis: {
      categories: ['2008', '2009','2010', '2011', '2012','2013', '2014', '2015', '2016', '2017']
  },
  yAxis: {
      title: {
          text: 'průměrný věk'
      }
  },
  plotOptions: {
      line: {
          dataLabels: {
              enabled: true
          },
          enableMouseTracking: false
      }
  },
  series: [{
      name: 'ivf (ze zkumavky)',
      data: [34, 33.5, 33.9, 34, 34.4, 34.8, 35.1, 35.3, 35.6, 35.8]
  }, {
      name: 'přijámání darovaných vajíček',
      data: [40, 40.7, 41.2, 41.3, 41.2, 41, 41.2, 41.2, 41.3, 41.3],
      visible:false
  },
  {
    name: 'přenos zmražených embryí',
    data: [34.4, 35.2, 35.3, 35.9, 36.4, 36.7, 36.9, 37.2, 37.1, 37.2],
    visible:false
},
{
  name: 'darování vajíček',
  data: [28.8, 28, 27.4, 27, 26.7, 26.7, 26.7, 27, 27, 27]
},
]
});

Highcharts.chart('darovani', {
  chart: {
      type: 'bar'
  },
  title: {
      text: 'Celkový počet darovaných a přijatých vajíček'
  },
  credits: {
    text: 'Zdroj: ÚZIS',
    href: 'https://www.uzis.cz/index.php?pg=registry-sber-dat--registrace-a-vstup-do-registru'
},
  xAxis: {
      categories: ['Češky', 'cizinky']
  },
  yAxis: {
      min: 0,
      title: {
          text: 'celkový počet oocytů v tisících'
      }
  },
  legend: {
      reversed: true
  },
  plotOptions: {
      series: {
          stacking: 'normal'
      }
  },
  series: [{
      name: 'darování',
      data: [33628, 177]
  }, {
      name: 'přijímání',
      data: [5528, 34558]
    },
  ]
  });
  
  Highcharts.chart('prijeti', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Přijetí darovaných vajíček v jednotlivých letech'
    },
    credits: {
      text: 'Zdroj: ÚZIS',
      href: 'https://www.uzis.cz/index.php?pg=registry-sber-dat--registrace-a-vstup-do-registru'
  },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            '2010',
            '2011',
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:"><b>{point.y:.0f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 3
        }
    },
    series: [{
        name: 'Češky',
        data: [458, 553, 634, 683, 769, 820, 783, 828]

    }, {
        name: 'cizinky',
        data: [2371, 3182, 3663, 4516, 4874, 4949, 5774, 5229]

    },
    ]
    });  