# fibonacci server

Demonstration of CPU bound problem(fibonacci calculation) in NodeJS and solutions.

### Methods

- Regular fibonacci calculation
- Calback with `setImmediate`
- Try Promise or Async
- Napajs based solution
- Recursive napajs

### Tests

```
curl http://loalhost:3030/callback/30
```

```
ab -n 10 -a 10 http://loalhost:3030/callback/30
```
