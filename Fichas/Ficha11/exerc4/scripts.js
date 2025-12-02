'use strict';

function Article(props) {
    return React.createElement(props.type, { className: props.className }, props.cont);
}

function NewsItem(props) {
    var item = props.item || [];
    var title = item[0] || '';
    var lead = item[1] || '';
    var body = item[2] || '';

    return React.createElement("article", { className: "artigo" },
        React.createElement(Article, { type: "h1", className: "titulo", cont: title }),
        React.createElement(Article, { type: "p", className: "lead", cont: lead }),
        React.createElement(Article, { type: "p", className: "corpo", cont: body })
    );
}

function NewsList(props) {
    var dados = props.dados || [];
    return React.createElement("div", null,
        dados.map(function(item, idx) {
            return React.createElement(NewsItem, { item: item, key: idx });
        })
    );
}

var news_a = [
    ["Notícia 1", "Lead 1", "Texto da notícia 1"],
    ["Notícia 2", "Lead 2", "Texto da notícia 2"],
    ["Notícia 3", "Lead 3", "Texto da notícia 3"],
    ["Notícia 4", "Lead 4", "Texto da notícia 4"]
];

ReactDOM.render(React.createElement(NewsList, { dados: news_a }), document.body);