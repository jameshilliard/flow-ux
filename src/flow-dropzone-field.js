import {BaseElement, html, css} from './base-element.js';
import '../resources/extern/dz/min/dropzone.min.js';


/**
* @class FlowDropzoneField
* @extends BaseElement

* @property {Boolean} [disabled]
* @property {String} [btnText]
* @property {String} [value]
* @property {String} [label]
* @property {String} [type]
* @property {String} [pattern]
* @property {Function} [validator]
* @property {String} [placeholder]
* @property {Boolean} [readonly]
* @property {Object} [postData]
* @property {String} [uploadUrl]
*
*
* @cssvar {font-family} [--flow-font-family="Julius Sans One"]
* @cssvar {font-weight} [--flow-font-weight=bold]
* @cssvar {font-weight} [--flow-input-font-weight=400]
* @cssvar {font-size} [--flow-input-font-size-label=0.7rem]
* @cssvar {font-size} [--flow-input-font-size=1rem]
* @cssvar {width} [--flow-input-width=100%]
* @cssvar {min-width} [--flow-input-min-width=100px]
* @cssvar {max-width} [--flow-input-max-width=500px]
* @cssvar {height} [--flow-input-height]
* @cssvar {line-height} [--flow-input-line-height=1.2]
* @cssvar {background-color} [--flow-border-color, var(--flow-primary-color, rgba(0,151,115,1))]
* @cssvar {background-color} [--flow-border-hover-color, var(--flow-primary-color, rgba(0,151,115,1))]
* @cssvar {background-color} [--flow-input-bg=inherit]
* @cssvar {background-color} [--flow-input-bg=inherit]
* @cssvar {border} [--flow-input-label-border=2px solid  var(--flow-border-color, var(--flow-primary-color, rgba(0,151,115,1)))]
* @cssvar {border} [--flow-input-border=2px solid var(--flow-border-color, var(--flow-primary-color, rgba(0,151,115,1))]
* @cssvar {border-top-left-radius} [--flow-input-btn-tlbr=0px]
* @cssvar {border-bottom-left-radius} [--flow-input-btn-blbr=0px]
* @cssvar {border-color} [--flow-border-hover-color, var(--flow-primary-color, rgba(0,151,115,1)]
* @cssvar {color} [--flow-border-invert-color, var(--flow-primary-invert-color, #FFF)]
* @cssvar {color} [--flow-input-color=inherit]
* @cssvar {color} [--flow-input-placeholder=#888]
* @cssvar {color} [--flow-input-invalid-color=red]
* @cssvar {color} [--flow-dz-field-remove-icon-color=var(--flow-color,#000)]
* @cssvar {padding} [--flow-input-label-padding=2px 5px]
* @cssvar {margin} [--flow-input-margin=5px 0px]
* @cssvar {margin-top} [--flow-input-wrapper-margin-top=-0.5rem]
* @cssvar {margin-left} [--flow-input-label-margin-left=10px]
* @cssvar {z-index} [--flow-input-label-z-index=1]
* @cssvar {position} [--flow-input-label-position=relative]
* @cssvar {background} [--flow-dz-field-remove-icon-bg=#FFF]
* @cssvar {box-shadow} [--flow-dz-field-remove-icon-box-shadow=0px 0px 4px #ccc]
* @example
*   <flow-dz-field></flow-dz-field>
*
*/
export class FlowDropzoneField extends BaseElement {
	static get properties() {
		return {
			btnText:{type: String},
            value:{type:String},
            type:{type:String},
			disabled:{type:Boolean},
			pattern:{type:String},
			validator:{type:Function},
			placeholder:{type:String},
			label:{type:String},
			readonly:{type:Boolean},
			postData:{type:Object},
			uploadUrl:{type:String}
		}
	}

	static get styles(){
		return css`
			:host{
				display:inline-block;vertical-align:middle;
				font-family:var(--flow-font-family, "Julius Sans One");
				font-weight:var(--flow-font-weight, bold);
				width:var(--flow-input-width, 100%);
				min-width:var(--flow-input-min-width, 100px);
				max-width:var(--flow-input-max-width, 500px);
				margin:var(--flow-input-margin, 5px 0px);
				font-size:0px;
			}
			:host(:not([disabled])) .btn,
			:host(:not([disabled])) .input{
				cursor:pointer;
			}
			
			:host(:not([apply-btn])) .btn{
				display: none;
			}
			
			.wrapper{
				display:flex;
				align-items:stretch;
				min-width_:50px;
				text-align:center;
				justify-content:center;
				margin-top:var(--flow-input-wrapper-margin-top,-0.5rem);
				height:var(--flow-input-wrapper-height);
			}
			label{
				font-size:var(--flow-input-label-font-size, 0.7rem);
				padding:var(--flow-input-label-padding,2px 5px);
				border: var(--flow-input-label-border, 2px) solid  var(--flow-border-color, var(--flow-primary-color, rgba(0,151,115,1)));
				border-radius:var(--flow-input-label-border-radius, 8px);
				margin-left: var(--flow-input-label-margin-left,10px);
				z-index: var(--flow-input-label-z-index, 1);
				position: var(--flow-input-label-position, relative);
				background-color:var(--flow-input-bg, inherit);
			}
			.btn{
				position:relative;
				padding:5px;
				background-color:var(--flow-border-color, var(--flow-primary-color, rgba(0,151,115,1)));
				border: 2px solid var(--flow-border-color, var(--flow-primary-color, rgba(0,151,115,1)));
				overflow:hidden;
				border-radius:8px;
				border-top-left-radius: var(--flow-input-btn-tlbr, 0px);
    			border-bottom-left-radius: var(--flow-input-btn-blbr, 0px);
    			color:var(--flow-border-invert-color, var(--flow-primary-invert-color, #FFF));
    			display: flex;
			    justify-content: center;
			    align-items: center;
			}
			:host(:not([disabled])) .btn:hover{
				background-color:var(--flow-border-hover-color, var(--flow-primary-color, rgba(0,151,115,1)));
				border-color:var(--flow-border-hover-color, var(--flow-primary-color, rgba(0,151,115,1)))
			}
			.input{
				width:100px;flex:1;box-sizing:border-box;
				min-height:var(--flow-input-height);
				border: var(--flow-input-border, 2px) solid var(--flow-border-color, var(--flow-primary-color, rgba(0,151,115,1)));
				border-radius:var(--flow-input-border-radius, 8px);
    			margin:0px;
    			padding:16px 30px 10px 10px;
				background-color:var(--flow-input-bg, inherit);
				color:var(--flow-input-color, inherit);
				font-size:var(--flow-input-font-size, 1rem);
				font-weight:var(--flow-input-font-weight, 400);
				line-height:var(--flow-input-line-height, 1.2);
				box-shadow:var(--flow-input-box-shadow);
			}

			:host([apply-btn]) .input{
			    border-right-width:0px;
				border-top-right-radius: 0px;
				border-bottom-right-radius: 0px;
			}


			.input:focus{outline:none}
			.input::-webkit-input-placeholder { color: var(--flow-input-placeholder, #888 ); }
			:host([disabled]) .value{
				padding-right:10px;
			}
			.clear-btn{
				font-style: normal;
			    font-size: 25px;
			    padding: 0px 10px 0px 10px;
			    cursor: pointer;
			    display:none;
			    position: absolute;
			    right: 0px;
			    z-index: 1;
			}
			:host(:not([disabled])) [has-value] .clear-btn{display:block;}
			:host(.invalid) .input{color:var(--flow-input-invalid-color, red)}

			.dz-preview{
				position:relative;display:block;
			}
			.dz-preview .dz-progress{display:block;height:2px;}
			.dz-preview .dz-progress .dz-upload{
				display:block;height:100%;width:0;background:green
			}
			.dz-preview .dz-details{line-height:1.2;margin:2px;}
			.dz-preview .dz-error-message{color:red;display:none}
			.dz-preview.dz-error .dz-error-message,
			.dz-preview.dz-error .dz-error-mark{display:block}
			.dz-preview.dz-success .dz-success-mark{display:block}
			.dz-preview .dz-error-mark,
			.dz-preview .dz-success-mark{
				position:absolute;display:none;left:30px;top:30px;width:54px;height:58px;
				left:50%;margin-left:-27px
			}
			.dz-preview .dz-remove{
				position: absolute;
			    right:-15px;
			    top:-15px;
			    font-size:27px;
			    cursor: pointer;
			    color:var(--flow-dz-field-remove-icon-color, var(--flow-color,#000));
			    background:var(--flow-dz-field-remove-icon-bg, #FFF);
			    z-index:1;
			    box-shadow:var(--flow-dz-field-remove-icon-box-shadow, 0px 0px 4px #ccc);
			    padding: 5px;
			    border-radius:50%;
			    width: 20px;
			    height: 20px;
			    line-height:20px;
			}
			.dz-image-holder{
				position:relative;
				height:100px;
				background:var(--flow-dz-field-mage-holder-bg, rgba(0,0,0,0.1));
			}
			.dz-image-holder img{
				max-width:100%;
				max-height:100%;
			}
		`;
    }
    constructor() {
        super();
        this.type = 'text';
        this.value = '';
        this.postData = {};
    }
	render() {
		return html`<label ?hidden=${!this.label}>${this.label||""}</label>
		<div class="wrapper" @click=${this.onClick} ?has-value=${!!this.value}>
			<slot name="prefix"></slot>
			<div class="input"
				?disabled=${this.disabled} 
				@change=${this.onChange}>
			</div>
			<div class="btn">
				<div class="text"><flow-i18n text="${this.btnText || 'Select'}"></flow-i18n></div>
			</div>
			<slot name="sufix"></slot>
		</div>
		`;
	}

	firstUpdated(){
		super.firstUpdated();
		this.inputEl = this.renderRoot.querySelector(".input");
		let url = this.uploadUrl || "upload-file";
		this.dropzone = new Dropzone(this.inputEl, {
			url,
			acceptedFiles: this.acceptedFiles,
			withCredentials:true,
			paramName:this.paramName || "file",
			autoProcessQueue:this.autoProcessQueue || false,
			maxFiles:this.maxFiles || 1,
			uploadMultiple: false,
			maxFilesize : 500,
			//addRemoveLinks: true,
			previewTemplate:`<div class="dz-preview dz-file-preview">
			  <div class="dz-details">
			    <div class="dz-filename"><span data-dz-name></span></div>
			    <div class="dz-size" data-dz-size></div>
			    <div class="dz-image-holder">
			    	<img data-dz-thumbnail /> <div class="dz-remove" data-dz-remove>&times;</div>
			    </div>
			  </div>
			  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
			  <!--div class="dz-success-mark"><span>✔</span></div>
			  <div class="dz-error-mark"><span>✘</span></div-->
			  <div class="dz-error-message"><span data-dz-errormessage></span></div>
			</div>`,
			maxfilesexceeded:(file)=>{
				this.dropzone.removeFile(file);
			}
		});
		this.dropzone.on("addedfile", (file)=>{
			if (this._oldFile) {
				this.dropzone.removeFile(this._oldFile);
			};
			this._oldFile = file;
			//this.set('hasOfflinePreview', true);
			this.classList.toggle('offline-preview', true);
			this.msg = 'Offline preview';
		});
		this.dropzone.on("reset", (file)=>{
			this.classList.toggle('offline-preview', false);
			//this.set('hasOfflinePreview', false);
			//this.srcChanged();
			this._oldFile = false;
		});

		this.dropzone.on("sending", (file, xhr, formData)=>{
			Object.keys(this.postData).forEach(k=>{
				formData.append(k, this.postData[k]);
			})
		});
		this.dropzone.on("success", (file, xhr)=>{
			this.cancelFiles();
			this.fire('upload-success')
			//this.msg = "Online preview";
		});
		this.dropzone.on("error", (file, xhr)=>{
			this.cancelFiles();
			this.fire('upload-error')
			//this.msg = "Online preview";
		});
		
	}

	uploadFile(){
		this.dropzone?.processQueue();
	}
	cancelFiles(){
		this.dropzone?.removeAllFiles(true);
	}

	setClear(){
		this.setValue("");
	}

	onClick() {
		this.fire("flow-dz-click", {el:this})
	}

	validate(value){
		let {pattern} = this;
		if(pattern){
			try{
				pattern = new RegExp(pattern)
			}catch(e){
				this.log("pattern error:", e)
				return false;
			}
			if(!pattern.test(value))
				return false;
		}
		if(typeof this.validator == 'function'){
			return this.validator(value, this);
		}
		return true;
	}

	onChange(e) {
		let value = this.shadowRoot.querySelector("input").value;
		if(!this.validate(value)){
			this.classList.add("invalid")
			return
		}
		this.classList.remove("invalid")
		//this.log("value", value)

		this.value = value;
		this.fire("changed", {el:this, value})
	}

	setValue(value){
		this.value = value;
		this.shadowRoot.querySelector("input").value = "";
		this.fire("changed", {el:this, value:this.value})
	}
}

FlowDropzoneField.define('flow-dz-field');