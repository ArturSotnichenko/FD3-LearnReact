var ShopItem = React.createClass({

    displayName: "ShopItem",

    propTypes: {
        code: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
        inStock: React.PropTypes.number.isRequired,
        control:React.PropTypes.string.isRequired,
        cbSelected: React.PropTypes.func.isRequired,
        isSelected: React.PropTypes.bool.isRequired,
       
    },


   

    itemClicked: function (eo) {
        if (eo.target.value === this.props.control) {
            return;
        }
        this.props.cbSelected(this.props.code);
    },

    deleteItem: function() {
        this.props.cbDeleted(this.props.code)
    },

    render: function () {

        return React.DOM.tr({key: this.props.code, className: 'item',
                onClick: this.itemClicked, className: ( (this.props.isSelected) ? 'itemSelected' : null )},
            React.DOM.td(null, this.props.name),
            React.DOM.td(null, this.props.price),
            React.DOM.td(null,  React.DOM.img({src:this.props.url, alt:'laptop img'}, null)
            ),
            React.DOM.td(null, this.props.inStock),
            React.DOM.td(null,
                React.DOM.input({type:'button', value:this.props.control, onClick: this.deleteItem})
            ),
        );

    },
}) ;

