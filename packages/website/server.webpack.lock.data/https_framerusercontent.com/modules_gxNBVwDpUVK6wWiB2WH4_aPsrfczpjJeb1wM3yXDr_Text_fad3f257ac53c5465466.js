import{jsx as _jsx}from"react/jsx-runtime";import{addPropertyControls,ControlType}from"framer";/**
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */ export default function Text({text,fontWeight,color}){return /*#__PURE__*/ _jsx("span",{style:{fontFamily:'"Inter-SemiBold", "Inter", sans-serif',fontWeight,color},children:text});};Text.defaultProps={text:"text",fontWeight:400,color:"black"};addPropertyControls(Text,{text:{type:ControlType.String},fontWeight:{type:ControlType.Number,step:100,displayStepper:true},color:{type:ControlType.Color}});
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"Text","slots":[],"annotations":{"framerContractVersion":"1","framerSupportedLayoutWidth":"auto","framerSupportedLayoutHeight":"auto"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./Text.map