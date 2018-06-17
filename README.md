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
$ npm start
```

```
$ curl http://localhost:3030/fib/30
$ curl http://localhost:3030/callback/30
```

```
$ ab -n 10 -c 10 http://localhost:3030/fib/30
$ ab -n 10 -c 10 http://localhost:3030/callback/30
```
