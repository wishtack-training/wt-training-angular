# Generate mock data

## Restaurants

https://www.json-generator.com/NJfKbQ-8I

```
[
  '{{repeat(100)}}',
  {
    id: '{{guid()}}',
    foodConstraints: [
      '{{repeat(1,3)}}',
      function (tags) {
        var values = ['gluten-intolerant', 'vegan'];
      return values[tags.integer(0, values.length - 1)];
    }
    ],
    name: '{{ company() }}',
    city: '{{ city() }}'
  }
]
```

## Sandwiches
```
[
  '{{repeat(20)}}',
  {
    id: '{{guid()}}',
    constraintList: function (tags) {
      
      var valueList = [];
      
      for (var i = 0; i < tags.integer(0,2); ++i) {
        var value = tags.random('gluten-intolerant', 'vegan', 'vegetarian');
        if (valueList.indexOf(value) >= 0) {
          continue;
        }
        valueList.push(value);
      }
      
      return valueList;
      
    },
    name: "{{ 'Le ' + country() }}",
    price: {
      amount: '{{ floating(2, 5, 1) }}',
      currency: 'EUR'
    },
    score: '{{ integer(0, 20) }}'
  }
]
```
