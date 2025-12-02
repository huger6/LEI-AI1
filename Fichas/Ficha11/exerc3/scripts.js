'use strict';

function article(props){
    return React.createElement(props.type,{className: props.class},props.cont);
}

function news(){
    return React.createElement("article", {class: "artigo"}, 
        React.createElement(article, {className: "titulo", type:"h1", cont:"Título da notícia..."}),
        React.createElement(article, {className: "lead", type:"p", cont:"Lead da notícia..."}),
        React.createElement(article, {className: "corpo", type:"p", cont:"Corpo da notícia..."})
    );
}

function newInfo() {
    return React.createElement("div", null,
        React.createElement(news),
        React.createElement(news)
    );
}

ReactDOM.render(newInfo(), document.body);