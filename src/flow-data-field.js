import {BaseElement, html, css} from './base-element.js';

/**
* @class FlowDataField
* @extends BaseElement
* @example
*   <flow-data-field title="text">value</flow-data-field>
*
*/
export class FlowDataField extends BaseElement {
	static get properties() {
		return {
			disabled:{type:Boolean, reflect:true},
			title:{type:String},
			prefix : { type : String },
			suffix:{type:String},
			align:{type:String}
		}
	}

	static get styles(){
		return css`
			:host{
				display:inline-block;
				font-weight:bold;
				font-size:13px;
				text-transform:uppercase;
				cursor:pointer;
				font-family:var(--flow-data-field-font-family, "Julius Sans One");
				font-weight:var(--flow-data-field-font-weight, bold);
			}
			:host([disabled]){opacity:0.5;cursor:default;pointer-events:none;}
			.colon{display:none}
			:host(.has-colon) .colon{display:inline;}
			.container{
				white-space: nowrap;
				border: 2px solid var(--flow-primary-color,#333);
				xdisplay:flex;xflex-firection:column;xalign-items:center;padding:2px 6px;
				margin: 6px;
				box-shadow: 2px 2px 1px rgba(1, 123, 104, 0.1);
				border-radius: 10px;

			}
			.container>div{padding:2px;}
			.title{text-align:left; opacity:1;xmargin-top:7px; font-size: 10px; color: var(--flow-data-field-caption); xtext-shadow: 0px 0px 0px var(--flow-data-field-caption-shadow, #fff); }
			.value{text-align:right; opacity:1;font-size:14px;font-family:"Exo 2";font-weight:normal;}
			.prefix{opacity:0.9;margin-right:3px;margin-top:3px; font-size: 10px; }
			.suffix{opacity:0.9;margin-left:3px;margin-top:3px; font-size: 10px; }
			.col { display: flex; flex-direction: column; align-items: left; }
			.row { display: flex; flex-direction: row; }
		`;
	}

	render() {
		return html
		`<div class="container col">
			<div class="title">${this.title}<span class="colon">:</span></div>
			<div class="row">
				${ (!this.align || this.align == 'right') ? html`<div style="flex:1;"></div>` : '' }
				<div class="prefix">${this.prefix}</div>
				<div class="value"><slot></slot></div>
				<div class="suffix">${this.suffix}</div>
				${ (this.align == 'left') ? html`<div style="flex:1;"></div>` : '' }
			</div>
		</div>`;	
	}
}

FlowDataField.define('flow-data-field');