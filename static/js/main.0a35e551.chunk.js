(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(6),i=a.n(s),l=(a(13),a(1)),u=a(2),c=a(4),o=a(3),d=a(7);var m=function(e){return n.a.createElement("button",{className:"square",onClick:e.onClick},e.value)};function h(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(d.a)(t[a],3),n=r[0],s=r[1],i=r[2];if(e[n]&&e[n]===e[s]&&e[n]===e[i])return e[n]}return null}var v=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0},r}return Object(u.a)(a,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();if(!h(t)&&!t[e]){if(this.state.xIsNext)t[e]="X",t[function(e,t,a){var r=Math.floor(Math.random()*(t-e))+e;if(null==a[r])return r;for(var n=0;n<a.length;n++)if(null==a[n]){r=n;break}return r}(1,9,t)]="O";this.setState({squares:t,xIsNext:this.state.xIsNext})}}},{key:"renderSquare",value:function(e){var t=this;return n.a.createElement(m,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=h(this.state.squares);return t&&(e="Winner is: "+t),n.a.createElement("div",null,n.a.createElement("div",{className:"status"},e),n.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),n.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),n.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(n.a.Component),f=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game-board"},n.a.createElement(v,null)),n.a.createElement("div",{className:"game-info"},n.a.createElement("div",null),n.a.createElement("ol",null)))}}]),a}(n.a.Component);i.a.render(n.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.0a35e551.chunk.js.map