import React, {Component} from 'react';

class Invoice extends Component {
    /*发票抬头选择*/
    invoiceChoose(index) {
        if (typeof this.props.invoiceChoose === "function") {
            this.props.invoiceChoose(index);
        }
    }

    /*发票抬头改变*/
    invoiceChange(e) {
        if (typeof this.props.invoiceChange === "function") {
            this.props.invoiceChange(e.target.value);
        }
    }

    render() {
        return (
            <div className="gray-box">
                <div className="title">
                    <h2>发票信息</h2>
                </div>
                <div className="box-inner invoice-box js-invoice-box">
                    <p className="invoice-detail"> 发票类型：电子发票 </p>
                    <div className="invoice-detail"> 发票抬头：
                        <div className="radio-box">
                            {
                                this.props.radioValues.map( (item, index) => {
                                    return (
                                        <label key={index}>
                                            <input type="radio" className="hide"/>
                                            <span className={["blue-radio",
                                                this.props.index == index? "blue-radio-on" : ""].join(" ")}
                                                  onClick={this.invoiceChoose.bind(this, index)}
                                            ><a></a></span>  {item}
                                        </label>
                                    )
                                })
                            }
                        </div>
                        <div className="module-form-row form-item fn-hide js-invoice-title">
                            <div className="module-form-item-wrapper no-icon small-item">
                                <i style={{display: this.props.invoice ? "none" : "block"}}>请填写公司发票抬头</i>
                                <input type="text" className="js-verify"
                                       value={this.props.invoice}
                                       onChange={this.invoiceChange.bind(this)}
                                />
                            </div>
                        </div>
                    </div>
                    <p className="invoice-detail">发票内容：购买商品明细</p> <p className="invoice-label"> 电子发票是税务局认可的有效收付款凭证，可作为售后服务凭据。电子发票打印后可以用于企业报销。 </p>
                </div>
            </div>
        );
    }
}

Invoice.defaultProps = {
  radioValues: ["个人", "单位"]
};

export default Invoice;