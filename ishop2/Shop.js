var Shop = React.createClass({

    displayName: "Shop",

    propTypes: {
        name: React.PropTypes.string.isRequired,
        items: React.PropTypes.array.isRequired

    },



    getInitialState: function () {
        return {
            selectedItemCode: null,
            items: this.props.items
        }
    },

    itemSelected: function (code) {
        this.setState({ selectedItemCode: code })
    },



    deleteElement: function (deletedCode) {
        this.setState({ items: this.state.items.filter(item => item.code !== deletedCode) });
    },


    render: function () {

        var itemsCode = this.state.items.map(v =>
            React.createElement(ShopItem, {
                key: v.code, code: v.code,
                name: v.name, price: v.price, url: v.url, inStock: v.inStock,control: v.control,
                cbSelected: this.itemSelected, cbDeleted: this.deleteElement,
                isSelected: (v.code === this.state.selectedItemCode), 
            })
        );

        return React.DOM.div({ className: 'Ishop' },
            React.DOM.div({ className: 'ShopName' }, this.props.name),
            React.DOM.table({ className: 'table' },
                React.DOM.thead(null,
                    React.DOM.tr(null,
                        React.DOM.th(null, 'Name'),
                        React.DOM.th(null, 'Prise'),
                        React.DOM.th(null, 'URL'),
                        React.DOM.th(null, 'Quantity'),
                        React.DOM.th(null, 'Control')
                    )
                ),
                React.DOM.tbody({ className: 'body' }, itemsCode)
            ),

        );
    },
});