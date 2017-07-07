# vm-log

这个插件是为移动端查看console信息准备的, 它能截断console信息并展示在定制的页面中, 一般是在左下角点开`open`开启.

一般在下面的按钮有'console', 'storage'两个tab, 如果在Vimo框架中会显示Vimo按钮用于查看Vimo初始化情况.


## Install

npm to install:

```
 npm install vm-log
```

in your code: 

```
import vmLog from 'vm-log'
Vue.use(vmLog)
```

也可以直接加入script标签

```
<script src="http://vuejs.org/js/vue.min.js"></script>
<script type='text/javascript' src='./vm-log.min.js'></script>
```

```
var vm = Vue.prototype
Vue.use(vmLog)
console.log(vm.$log)
```
## Usage

使用window自带的console就可将信息记录到插件中, 此外已提供对等的API: 

- vm.$log.log(msg)
- vm.$log.debug(msg)
- vm.$log.info(msg)
- vm.$log.error(msg)
- vm.$log.error(msg,errType,position,lineNum)
- vm.$log.warn(msg)
- vm.$log.warn(msg,errType,position,lineNum)
- vm.$log.assert(isErr, msg)


此外还有控制界面开闭的API:

- open()
- close()

## 版本信息

- 0.0.1 first commit


## LICENSE

MIT