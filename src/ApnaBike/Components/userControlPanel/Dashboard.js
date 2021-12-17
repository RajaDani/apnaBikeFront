import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
// import '../../sidebarStyle.scss'
import { BaseUrl } from '../../BaseUrl';
import { useParams } from "react-router-dom";

//Import Components
import MiniWidget from "./mini-widget";
import LatestTransaction from "./latest-transaction";
import { valid } from "joi";

//Import Image

const series1 = [{
  data: [25, 66, 41, 89, 63, 25, 44, 20, 36, 40, 54]
}];

const options1 = {
  fill: {
    colors: ['#5b73e8']
  },
  chart: {
    width: 70,
    sparkline: {
      enabled: !0
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  tooltip: {
    fixed: {
      enabled: !1
    },
    x: {
      show: !1
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        }
      }
    },
    marker: {
      show: !1
    }
  }
};

const series2 = [70];

const options2 = {
  fill: {
    colors: ['#34c38f']
  },
  chart: {
    sparkline: {
      enabled: !0
    }
  },
  dataLabels: {
    enabled: !1
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '60%'
      },
      track: {
        margin: 0
      },
      dataLabels: {
        show: !1
      }
    }
  }
};

const series3 = [55];

const options3 = {
  fill: {
    colors: ['#5b73e8']
  },
  chart: {
    sparkline: {
      enabled: !0
    }
  },
  dataLabels: {
    enabled: !1
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '60%'
      },
      track: {
        margin: 0
      },
      dataLabels: {
        show: !1
      }
    }
  }
};

const series4 = [{
  data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
}];

const options4 = {

  fill: {
    colors: ['#f1b44c']
  },
  chart: {
    width: 70,
    sparkline: {
      enabled: !0
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  tooltip: {
    fixed: {
      enabled: !1
    },
    x: {
      show: !1
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return '';
        }
      }
    },
    marker: {
      show: !1
    }
  }
};

const Dashboard = () => {

  const [totalBikes, settotalBikes] = useState()
  const [cancelledOrders, setcancelledOrders] = useState()
  const [thisMonth, setthisMonth] = useState()

  const { userId } = useParams();
  if (totalBikes || cancelledOrders || thisMonth === '0') {
    var value = 0;
  }

  var reports = [
    {
      id: 1,
      icon: "mdi mdi-arrow-up-bold",
      title: "Total Bookings",
      value: totalBikes,
      prefix: "",
      suffix: "",
      badgeValue: "2.65%",
      decimal: 0,
      charttype: "bar",
      chartheight: 40,
      chartwidth: 70,
      color: "success",
      desc: "since last week",
      series: series1,
      options: options1,

    },
    {
      id: 2,
      icon: "mdi mdi-arrow-down-bold",
      title: "Cancelled Orders",
      value: cancelledOrders,
      decimal: 0,
      charttype: "radialBar",
      chartheight: 45,
      chartwidth: 45,
      prefix: "",
      suffix: "",
      badgeValue: "0.82%",
      color: "danger",
      desc: "since last week",
      series: series2,
      options: options2,
    },
    {
      id: 3,
      icon: "mdi mdi-arrow-down-bold",
      title: "This Month",
      value: thisMonth,
      decimal: 0,
      prefix: "",
      suffix: "",
      charttype: "radialBar",
      chartheight: 45,
      chartwidth: 45,
      badgeValue: "6.24%",
      color: "danger",
      desc: "since last week",
      series: series3,
      options: options3,
    },
    {
      id: 4,
      icon: "mdi mdi-arrow-up-bold",
      title: "This Year",
      value: 2.48,
      decimal: 2,
      prefix: "+",
      suffix: "%",
      charttype: "bar",
      chartheight: 40,
      chartwidth: 70,
      badgeValue: "10.51%",
      color: "success",
      desc: "since last week",
      series: series4,
      options: options4,
    },
  ];

  const getAllData = async () => {
    let token = localStorage.getItem('token');
    let total = await fetch(BaseUrl + `client/dashboard?userId=${userId}`, {
      method: 'GET',
      headers: {
        'Content-type': 'Application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    let result = await total.json();
    if (total.status === 200) {
      console.log(result);
      settotalBikes(result.totalorders);
      setcancelledOrders(result.cancelledOrders);
      setthisMonth(result.thisMonth[0].total);
    }
    else alert(result.message);
  }


  useEffect(() => {
    getAllData();
  }, [])

  return (
    <React.Fragment>
      <Container fluid>
        <Row className="mt-4 mb-5 pb-3">
          {
            totalBikes &&
            <MiniWidget reports={reports} />
          }
        </Row>
        <LatestTransaction />
      </Container>

    </React.Fragment >
  );
};

export default Dashboard;