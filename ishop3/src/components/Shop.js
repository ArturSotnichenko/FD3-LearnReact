import React from 'react';
import PropTypes from 'prop-types';

import './Shop.css';

import ShopItem from './ShopItem'
import ShopInfo from './ShopInfo'
import ShopChange from './ShopChange'


class Shop extends React.Component{
static displayName = "Shop"

static propTypes =  {
name: PropTypes.string.isRequired,
items: PropTypes.array.isRequired
};

static defaultProps () {
    return {name: "не задано"}
}


state =  {
    selectedItemCode: '',
    items: this.props.items,
    blockChange: false,
    mode: 0, 
    key: '0',
    add: false
}

itemSelected = (code) => {
    this.setState({selectedItemCode: code, mode: 1})
}

itemEdited = (code) => {
    this.setState({selectedItemCode: code, mode: 2, key: ++this.state.key})
}

setDeleteCode = (code) => {
    this.setState({selectedItemCode: code}, this.deleteElement)
}

deleteElement = () => {
    let answer = confirm('Вы действительно хотите удалить?');
    if (answer) {
        var filterArr = this.state.items.filter(item =>
            item.code !== this.state.selectedItemCode
        );
        this.setState({items: filterArr, mode: 0, selectedItemCode: ''});
    }
}
onChange = () => {
    this.setState({blockChange: true});
}

newProduct = () => {
    let key = ++this.state.key;
    let newKey = String(key);
    this.setState({mode: 2, key: newKey, add: true});
}

changeItems = (newItem) => {
    let items;
    if(this.state.add) {
        let item = {...newItem, code: this.state.key};
        items=this.state.items.slice();
        items.push(item);
    }else {
        items = this.state.items.map(v => v.code==newItem.code ? newItem : v);
    }
    this.setState({items: items, blockChange: false, mode: 0, add: false});
}

canceled = () => {
    this.setState({mode: 0, blockChange: false, add: false});
}

render() {

    let itemsCode = this.state.items.map(v =>
        <ShopItem key={v.code} code={v.code} blockChange={this.state.blockChange} add={this.state.add}
            name={v.name} price={v.price} url={v.url} inStock={v.inStock} mode={this.state.mode}
            cbSelected={this.itemSelected} cbDeleted={this.setDeleteCode}
            cbEdited={this.itemEdited}  isSelected={v.code == this.state.selectedItemCode}
        />
    );
    let item = this.state.items.find(v => v.code == this.state.selectedItemCode);
    let   addItem = {code: this.state.key,
                name: '',
                price: '',
                url:'',
                inStock:''};

                return (
                    <div className='Shop'>
                        <div className='ShopName'>{this.props.name}</div>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th className='field'>Name</th>
                                    <th className='field'>Price</th>
                                    <th className='field'>URL</th>
                                    <th className='field'>Quantity</th>
                                    <th className='field'>Control</th>
                                </tr>
                            </thead>
                            <tbody className='body'>{itemsCode}</tbody>
                        </table>
                        <input type='button' value='New Product' onClick={this.newProduct} hidden={this.state.add==true||this.state.mode==2}/>
                        {this.state.selectedItemCode && <ShopInfo item={item} mode={this.state.mode}/>}
                        {(this.state.selectedItemCode||this.state.add) &&
                        <ShopChange key={this.state.key} item = {this.state.add?addItem:item}
                                     mode={this.state.mode} add={this.state.add} cbChanged={this.changeItems}
                                     cbCanceled={this.canceled} cbOnChange={this.onChange}
                        />}
                    </div>
                );
            }
}

export default Shop;



