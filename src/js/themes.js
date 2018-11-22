import Kline from './kline'

export class Theme {

    static theme_color_id = 0;
    static theme_font_id = 0;

    static Color = {
        Positive: Theme.theme_color_id++,
        Negative: Theme.theme_color_id++,
        PositiveDark: Theme.theme_color_id++,
        NegativeDark: Theme.theme_color_id++,
        Unchanged: Theme.theme_color_id++,
        Background: Theme.theme_color_id++,
        Cursor: Theme.theme_color_id++,
        RangeMark: Theme.theme_color_id++,
        Indicator0: Theme.theme_color_id++,
        Indicator1: Theme.theme_color_id++,
        Indicator2: Theme.theme_color_id++,
        Indicator3: Theme.theme_color_id++,
        Indicator4: Theme.theme_color_id++,
        Indicator5: Theme.theme_color_id++,
        Grid0: Theme.theme_color_id++,
        Grid1: Theme.theme_color_id++,
        Grid2: Theme.theme_color_id++,
        Grid3: Theme.theme_color_id++,
        Grid4: Theme.theme_color_id++,
        TextPositive: Theme.theme_color_id++,
        TextNegative: Theme.theme_color_id++,
        Text0: Theme.theme_color_id++,
        Text1: Theme.theme_color_id++,
        Text2: Theme.theme_color_id++,
        Text3: Theme.theme_color_id++,
        Text4: Theme.theme_color_id++,
        LineColorNormal: Theme.theme_color_id++,
        LineColorSelected: Theme.theme_color_id++,
        CircleColorFill: Theme.theme_color_id++,
        CircleColorStroke: Theme.theme_color_id++
    };

    static Font = {
        Default: Theme.theme_font_id++
    };

    _colors;
    _fonts;

    getColor(which) {
        return this._colors[which];
    }

    getFont = function (which) {
        return this._fonts[which];
    }

}


export class DarkTheme extends Theme {

    constructor() {
        super();
        this._colors = [];
        var color_pos='',color_neg='';
        if (Kline.instance.reverseColor) {
            // this._colors[Theme.Color.Positive] = "#990e0e";
            color_pos='#2d7bff';
            this._colors[Theme.Color.Positive] =color_pos;//涨的颜色
            // this._colors[Theme.Color.Negative] = "#19b34c";
            color_neg='#ff577a';
            this._colors[Theme.Color.Negative] = "#ff577a"; //跌的颜色
            // this._colors[Theme.Color.PositiveDark] = "#3b0e08";
            this._colors[Theme.Color.PositiveDark] = "#5fd292";//深度图涨颜色
            // this._colors[Theme.Color.NegativeDark] = "#004718";
            this._colors[Theme.Color.NegativeDark] = "#ffb2ad";//深度图跌颜色
        } else {
            // this._colors[Theme.Color.Positive] = "#19b34c";
            color_pos='#ff577a';
            this._colors[Theme.Color.Positive] = color_pos;//k线涨的颜色
            // this._colors[Theme.Color.Negative] = "#990e0e";
            color_neg='#2d7bff';
            this._colors[Theme.Color.Negative] = color_neg;//k线跌的颜色
            // this._colors[Theme.Color.PositiveDark] = "#004718";
            this._colors[Theme.Color.PositiveDark] = "#ffb2ad";//深度图涨颜色
            // this._colors[Theme.Color.NegativeDark] = "#3b0e08";
            this._colors[Theme.Color.NegativeDark] = "#5fd292";//深度图跌颜色
        }
        // this._colors[Theme.Color.Unchanged] = "#fff";
        this._colors[Theme.Color.Unchanged] = "#f00";
        // this._colors[Theme.Color.Background] = "#0a0a0a";
        this._colors[Theme.Color.Background] = "#f3f9ff";//背景颜色
        this._colors[Theme.Color.Cursor] = "#aaa";//鼠标经过的十字线颜色
        this._colors[Theme.Color.RangeMark] = "#f4853c";//右边最低最高价位的标记颜色
        this._colors[Theme.Color.Indicator0] = "#ddd";//MA5线的颜色
        this._colors[Theme.Color.Indicator1] = "#f00";//MA10线的颜色
        this._colors[Theme.Color.Indicator2] = "#f600ff";//BOLL线颜色
        this._colors[Theme.Color.Indicator3] = "#6bf";//SAR线颜色
        this._colors[Theme.Color.Indicator4] = "#a5cf81";//未知
        this._colors[Theme.Color.Indicator5] = "#e18b89";//未知
        this._colors[Theme.Color.Grid0] = "#f3f9ff";// 水平线颜色 默认dash
        this._colors[Theme.Color.Grid1] = "#444";//网络颜色
        this._colors[Theme.Color.Grid2] = "#666";//未知
        this._colors[Theme.Color.Grid3] = "#888";//横向时间线标签提示边框颜色
        this._colors[Theme.Color.Grid4] = "#aaa";//竖向价格标签提示边框颜色
        this._colors[Theme.Color.TextPositive] = color_pos;//k线跌的颜色
        this._colors[Theme.Color.TextNegative] = color_neg;//k线涨的颜色
        this._colors[Theme.Color.Text0] = "#444";//未知
        this._colors[Theme.Color.Text1] = "#666";//未知
        this._colors[Theme.Color.Text2] = "#000";//时间线标签颜色 
        this._colors[Theme.Color.Text3] = "#aaa";//鼠标指针指向的提示文字颜色 
        this._colors[Theme.Color.Text4] = "#000";//高低收涨幅显示文字颜色
        this._colors[Theme.Color.LineColorNormal] = "#a6a6a6";//画线工具画出的颜色 
        this._colors[Theme.Color.LineColorSelected] = "#ffffff";//鼠标经过画线的颜色
        this._colors[Theme.Color.CircleColorFill] = "#000000";//画线工具画的线上圆点颜色
        this._colors[Theme.Color.CircleColorStroke] = "#393c40";//画线工具画的线上圆点边框颜色
        this._fonts = [];
        this._fonts[Theme.Font.Default] = "12px Tahoma";
    }

}


export class LightTheme extends Theme {

    constructor() {
        super();
        this._colors = [];
        var color_pos='',color_neg='';
        // if (Kline.instance.reverseColor) {
        //     this._colors[Theme.Color.Positive] = "#db5542";
        //     this._colors[Theme.Color.Negative] = "#53b37b";
        //     this._colors[Theme.Color.PositiveDark] = "#ffadaa";
        //     this._colors[Theme.Color.NegativeDark] = "#66d293";
        // } else {
        //     this._colors[Theme.Color.Positive] = "#53b37b";
        //     this._colors[Theme.Color.Negative] = "#db5542";
        //     this._colors[Theme.Color.PositiveDark] = "#66d293";
        //     this._colors[Theme.Color.NegativeDark] = "#ffadaa";
        // }
        // this._colors[Theme.Color.Unchanged] = "#fff";
        // this._colors[Theme.Color.Background] = "#fff";
        // this._colors[Theme.Color.Cursor] = "#aaa";
        // this._colors[Theme.Color.RangeMark] = "#f27935";
        // this._colors[Theme.Color.Indicator0] = "#2fd2b2";
        // this._colors[Theme.Color.Indicator1] = "#ffb400";
        // this._colors[Theme.Color.Indicator2] = "#e849b9";
        // this._colors[Theme.Color.Indicator3] = "#1478c8";
        // this._colors[Theme.Color.Grid0] = "#eee";
        // this._colors[Theme.Color.Grid1] = "#afb1b3";
        // this._colors[Theme.Color.Grid2] = "#ccc";
        // this._colors[Theme.Color.Grid3] = "#bbb";
        // this._colors[Theme.Color.Grid4] = "#aaa";
        // this._colors[Theme.Color.TextPositive] = "#53b37b";
        // this._colors[Theme.Color.TextNegative] = "#db5542";
        // this._colors[Theme.Color.Text0] = "#ccc";
        // this._colors[Theme.Color.Text1] = "#aaa";
        // this._colors[Theme.Color.Text2] = "#888";
        // this._colors[Theme.Color.Text3] = "#666";
        // this._colors[Theme.Color.Text4] = "#444";
        // this._colors[Theme.Color.LineColorNormal] = "#8c8c8c";
        // this._colors[Theme.Color.LineColorSelected] = "#393c40";
        // this._colors[Theme.Color.CircleColorFill] = "#ffffff";
        // this._colors[Theme.Color.CircleColorStroke] = "#393c40";
        // this._fonts = [];
        // this._fonts[Theme.Font.Default] = "12px Tahoma";
        if (Kline.instance.reverseColor) {
            // this._colors[Theme.Color.Positive] = "#990e0e";
            color_pos='#2d7bff';
            this._colors[Theme.Color.Positive] =color_pos;//涨的颜色
            // this._colors[Theme.Color.Negative] = "#19b34c";
            color_neg='#ff577a';
            this._colors[Theme.Color.Negative] = "#ff577a"; //跌的颜色
            // this._colors[Theme.Color.PositiveDark] = "#3b0e08";
            this._colors[Theme.Color.PositiveDark] = "#5fd292";//深度图涨颜色
            // this._colors[Theme.Color.NegativeDark] = "#004718";
            this._colors[Theme.Color.NegativeDark] = "#ffb2ad";//深度图跌颜色
        } else {
            // this._colors[Theme.Color.Positive] = "#19b34c";
            color_pos='#ff577a';
            this._colors[Theme.Color.Positive] = color_pos;//k线涨的颜色
            // this._colors[Theme.Color.Negative] = "#990e0e";
            color_neg='#2d7bff';
            this._colors[Theme.Color.Negative] = color_neg;//k线跌的颜色
            // this._colors[Theme.Color.PositiveDark] = "#004718";
            this._colors[Theme.Color.PositiveDark] = "#ffb2ad";//深度图涨颜色
            // this._colors[Theme.Color.NegativeDark] = "#3b0e08";
            this._colors[Theme.Color.NegativeDark] = "#5fd292";//深度图跌颜色
        }
        // this._colors[Theme.Color.Unchanged] = "#fff";
        this._colors[Theme.Color.Unchanged] = "#f00";
        // this._colors[Theme.Color.Background] = "#0a0a0a";
        this._colors[Theme.Color.Background] = "#f3f9ff";//背景颜色
        this._colors[Theme.Color.Cursor] = "#aaa";//鼠标经过的十字线颜色
        this._colors[Theme.Color.RangeMark] = "#f4853c";//右边最低最高价位的标记颜色
        this._colors[Theme.Color.Indicator0] = "#ddd";//MA5线的颜色
        this._colors[Theme.Color.Indicator1] = "#f4bc0e";//MA10线的颜色
        this._colors[Theme.Color.Indicator2] = "#f600ff";//BOLL线颜色
        this._colors[Theme.Color.Indicator3] = "#6bf";//SAR线颜色
        this._colors[Theme.Color.Indicator4] = "#a5cf81";//未知
        this._colors[Theme.Color.Indicator5] = "#e18b89";//未知
        this._colors[Theme.Color.Grid0] = "#f3f9ff";// 水平线颜色 默认dash
        this._colors[Theme.Color.Grid1] = "#444";//网络颜色
        this._colors[Theme.Color.Grid2] = "#666";//未知
        this._colors[Theme.Color.Grid3] = "#888";//横向时间线标签提示边框颜色
        this._colors[Theme.Color.Grid4] = "#aaa";//竖向价格标签提示边框颜色
        this._colors[Theme.Color.TextPositive] = color_pos;//k线跌的颜色
        this._colors[Theme.Color.TextNegative] = color_neg;//k线涨的颜色
        this._colors[Theme.Color.Text0] = "#444";//未知
        this._colors[Theme.Color.Text1] = "#666";//未知
        this._colors[Theme.Color.Text2] = "#000";//时间线标签颜色 
        this._colors[Theme.Color.Text3] = "#aaa";//鼠标指针指向的提示文字颜色 
        this._colors[Theme.Color.Text4] = "#000";//高低收涨幅显示文字颜色
        this._colors[Theme.Color.LineColorNormal] = "#a6a6a6";//画线工具画出的颜色 
        this._colors[Theme.Color.LineColorSelected] = "#ffffff";//鼠标经过画线的颜色
        this._colors[Theme.Color.CircleColorFill] = "#000000";//画线工具画的线上圆点颜色
        this._colors[Theme.Color.CircleColorStroke] = "#393c40";//画线工具画的线上圆点边框颜色
        this._fonts = [];
        this._fonts[Theme.Font.Default] = "12px Tahoma";
    }

}
