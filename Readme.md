```sh
wget http://www.antlr.org/download/antlr-4.13.2-complete.jar
java -jar antlr-4.13.2-complete.jar -Dlanguage=TypeScript -visitor LME4.g4
java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -visitor LME4.g4
```

Make sure you have installed the toolset for grammar processing
```shell
sudo apt install antlr4 graphviz
```

__Note:__ The `graphviz` package is optional. It allow you to wizualize `DOT` files for the grammar lexer, parser etc.



Once the toolset is available generate the specification:
```shell
antlr4 -Dlanguage=JavaScript -ant -visitor LME4.g4
```

__Note:__ The `-ant` option provide extra `DOT` files for visualiztion.

