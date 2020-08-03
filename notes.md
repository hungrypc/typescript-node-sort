# Notes

```
tsc --init
```
Creates tsconfig

```js
{
  // ...
  "outDir": "./build",
  "rootDir": "./src", 
  // ...
}
```

```
tsc -w
```

## Abstract Classes

- An abstract class cannot be used to create an object directly
- Only used as a parent class
- Can contain real implementation for some methods
- The implemented methods can reger to other methods that don't actually exist yet (we still have to provide names and types for the un-implemented methods)
- Can make child classes promise to implement some other method

