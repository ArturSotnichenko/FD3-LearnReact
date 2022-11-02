var GoodsList = React.createClass({
    displayName:'GoodsList',

    propTypes:{
        shopName: React.PropTypes.string.isRequired,
        productsArr: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                laptopName: React.PropTypes.string.isRequired,
                laptopPrice: React.PropTypes.number.isRequired,
                laptopURL: React.PropTypes.string,
                goodsLeft: React.PropTypes.number.isRequired,
                key: React.PropTypes.number.isRequired,
            })
        ),
        categoryNames: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                partName: React.PropTypes.string.isRequired,
                key: React.PropTypes.number.isRequired,
            })
        )
    },

    render:function() {
        var tableName = React.DOM.tr(null, this.props.categoryNames.map(v => React.DOM.td({key:v.key}, v.partName)));
        var tableString = this.props.productsArr.map(v =>
            React.DOM.tr({key:v.key},
                React.DOM.td({className:'laptopName'}, v.laptopName),
                React.DOM.td({className:'laptopPrice'}, v.laptopPrice),
                React.DOM.td(null, 
                    React.DOM.img({className:'laptopImg', src:v.laptopURL, alt:'laptop img'}, null)
                    ),
                React.DOM.td({className:'goodsLeft'}, v. goodsLeft),
                )
            );

        return React.DOM.div({className:'GoodsLisFrame'},
                React.DOM.h1({className:'ShopName'}, this.props.shopName),
                React.DOM.table({className:'ProductsList'},
                    React.DOM.tbody(null, tableName, tableString),
                )
        )
    }
})