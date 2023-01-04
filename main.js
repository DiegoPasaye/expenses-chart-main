const canvas = document.querySelector(".canvas")
const datos = [
    {
      "day": "mon",
      "amount": 17.45,
      "color": "hsl(10, 79%, 65%)",
      "hover": "hsl(10, 79%, 65%, 75%)"
    },
    {
      "day": "tue",
      "amount": 34.91,
      "color": "hsl(10, 79%, 65%)",
      "hover": "hsl(10, 79%, 65%, 75%)"
    },
    {
      "day": "wed",
      "amount": 52.36,
      "color": "hsl(186, 34%, 60%)",
      "hover": "hsl(186, 34%, 60%, 75%)"
    },
    {
      "day": "thu",
      "amount": 31.07,
      "color": "hsl(10, 79%, 65%)",
      "hover": "hsl(10, 79%, 65%, 75%)"
    },
    {
      "day": "fri",
      "amount": 23.39,
      "color": "hsl(10, 79%, 65%)",
      "hover": "hsl(10, 79%, 65%, 75%)"
    },
    {
      "day": "sat",
      "amount": 43.28,
      "color": "hsl(10, 79%, 65%)",
      "hover": "hsl(10, 79%, 65%, 75%)"
    },
    {
      "day": "sun",
      "amount": 25.48,
      "color": "hsl(10, 79%, 65%)",
      "hover": "hsl(10, 79%, 65%, 75%)"
    }
  ]

new Chart (canvas, {
    type: "bar",
    data: {
        labels: datos.map(row => row.day),
        datasets: [
            {
                label: "Spendings - Last 7 days",
                data: datos.map(row => row.amount),
                backgroundColor: datos.map(row => row.color),
                hoverBackgroundColor: datos.map(row => row.hover),
                borderRadius: 5,
            }
        ],
    },
    
    options: {
        scales: {
            y: {
                display: false
            },
            x: {
                display: true
            }
        }
    }
})
