/**
 * @font.js
 * @author shijh
 *
 * react 图标字体组件
 * 
 * 使用：
 * import Font from 'font';
 * <Font type="xxx|string" size="xxx|number" color="xxx|string" style="xxx|object" />
 * type 是图标类型
 * size 是图标大小，不用写单位，单位是px
 * color 图标颜色
 * style 给图标设置样式， size和color优先级更高
 */

var React = require('react');
var classnames = require('classnames');

function Font(props) {
    var className = props.className;
    var type = props.type;

    return (
        React.createElement('span', {
            className: classnames('icon-font', 'icon-' + type, className),
            style: parseStyle(props)
        })
    )
}

function parseStyle(props) {
    var style = props.style || {};
    var size = props.size;
    var color = props.color;
    size && (style.fontSize = size + 'px');
    color && (style.color = color)
    return style;
}

export default Font;
