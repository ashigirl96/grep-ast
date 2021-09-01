# grep-ast-json

output ast as json.

fork from https://github.com/suchipi/grep-ast

## Usage

```sh
$ cat animal.txt
export const animal = {
    dog: 'cool',
    cat: 'cute',
    you: '...',
};

$ node dist/cli.js --patterns animal.txt 'VariableDeclarator:has([name="animal"]) > ObjectExpression[properties] > ObjectProperty[key] > Identifier[name]' | jq
✔
[
  {
    "type": "Identifier",
    "start": 28,
    "end": 31,
    "loc": {
      "start": {
        "line": 2,
        "column": 4
      },
      "end": {
        "line": 2,
        "column": 7
      },
      "identifierName": "dog"
    },
    "name": "dog"
  },
...

$ node dist/cli.js --patterns animal.txt 'VariableDeclarator:has([name="animal"]) > ObjectExpression[properties] > ObjectProperty[key] > Identifier[name]' 1| jq '.[].name'
✔
"dog"
"cat"
"you"
```

To quickly test your query syntax, you can use [esquery's live demo app](https://estools.github.io/esquery/).

To get an idea of the AST format you need to grep over, you can use [AST Explorer](https://astexplorer.net/). To match the default parser and parser options for grep-ast, choose JavaScript, babylon7, and then press the gear next to babylon7 to open its settings, and uncheck "estree".

## License

fork from https://github.com/suchipi/grep-ast

MIT
