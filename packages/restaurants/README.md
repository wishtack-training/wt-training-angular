# Generate mock data

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
