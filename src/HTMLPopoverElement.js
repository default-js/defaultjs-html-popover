import Component from "@default-js/defaultjs-html-components/src/Component";
import { toNodeName, define } from "@default-js/defaultjs-html-components/src/utils/DefineComponentHelper";
import { componentEventname } from "@default-js/defaultjs-html-components/src/utils/EventHelper";
import { defValue } from "@default-js/defaultjs-common-utils/src/ObjectUtils";
import { privateProperty } from "@default-js/defaultjs-common-utils/src/PrivateProperty";
import Renderer from "@default-js/defaultjs-template-language/src/Renderer";
import Template from "@default-js/defaultjs-template-language/src/Template";
import ExpressionResolver from "@default-js/defaultjs-expression-language/src/ExpressionResolver";

const NODENAME = toNodeName("popover");

const ATTRIBUTE_POSITION = "position"; //element, cursor - default: element
const ATTRIBUTES = [];

class HTMLPopoverElement{
	static get observedAttributes() {
		return ATTRIBUTES;
	}

	static get NODENAME() {
		return NODENAME;
	}

	constructor() {
		super();
	}
	
	async init() {
		await super.init();

		if (!this.ready.resolved) {
	
		}
	}
};



export default HTMLPopoverElement;