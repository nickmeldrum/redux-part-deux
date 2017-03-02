export function get(query) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!results[query]) resolve ([])
      else resolve(results[query])
    }, 2000)
  })
}

const results = { 
  'aubergine': [
    {
      id: 1,
      title: 'mixed aubergines',
      price: '5.99'
    },
    {
      id: 2,
      title: 'aubergine dip',
      price: '2.99'
    }
  ],
  'avocados': [
    {
      id: 3,
      title: 'large avocado',
      price: '0.99'
    },
    {
      id: 4,
      title: 'ripe and ready hass avocados (3)',
      price: '2.99'
    }
  ]
}
