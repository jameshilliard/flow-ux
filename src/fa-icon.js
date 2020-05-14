import {BaseElement, html, css} from './base-element.js';

/**
 *
 * @export
 * @class FaIcon
 * @extends {BaseElement}
 * @property {String} [style] inner svg tag style text
 * @example
 * <fa-icon class="fal fa-chart-network"></fa-icon>
 */
export class FaIcon extends BaseElement {
	static get properties() {
		return {
			color:String,
			src: String,
			style: String,
			size:Number,
			w:Number,
			h:Number,
			icon:String
		};
	}
	static get styles() {
		return css`
		:host {
			display: inline-block;
			padding: 0;
			margin: 0;
		}
		svg{
			width: var(--fa-icon-size);
			height: var(--fa-icon-size);
			fill: var(--fa-icon-color);
		}
		`;
	}
	constructor() {
		super();
		this.src = '';
		this.style = '';
		this.size = 19;
		this.color = '#000';
	}
	firstUpdated() {
		//this.src = this.getSources(this.class_);
	}
	render() {
		this.src = this.iconPath(this.icon);
		let {size, color, w, h} = this;
		w = (w||size)?`width:${w||size}px;`:'';
		h = (h||size)?`height:${h||size}px;`:'';
		color = color?`fill:${color};`:'';
		return html`
		<svg style="${w}${h}${color}${this.style};"><use href="${this.src}"></use></svg>
		`;
	}
}
FaIcon.define('fa-icon');