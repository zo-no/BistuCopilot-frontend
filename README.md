# 问题

提交代码时，出现如下警告,：

```c
The file will have its original line endings in your working directory
```

windows中的换行符为 CRLF，而在Linux下的换行符为LF，所以在执行git add . 时，会出现warning。

这里我修改了警告（git config core.autocrlf false），特此记录，改回时，改为true就行
