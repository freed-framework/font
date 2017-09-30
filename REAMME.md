### 简介
    这个模块是雅堂内部图标字体管理模块，适用于react项目

### 安装

```
npm install --save https://github.com/freed-framework/font.git
```

### 使用

```
 import Font from 'font';
 ...
 <Font type="xxx|string" size="xxx|number" color="xxx|string" style="xxx|object" />
 type 是图标类型
 size 是图标大小，不用写单位，单位是px
 color 图标颜色
 style 给图标设置样式， size和color优先级更高
```