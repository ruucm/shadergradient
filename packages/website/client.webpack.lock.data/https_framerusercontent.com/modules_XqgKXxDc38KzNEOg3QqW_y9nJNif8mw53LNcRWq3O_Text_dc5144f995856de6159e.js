import{jsx as _jsx}from"react/jsx-runtime";import{addPropertyControls,ControlType}from"framer";/**
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */ export default function Text({text,fontSize,fontWeight,color,fontFamily}){return /*#__PURE__*/ _jsx("span",{style:{fontSize,fontFamily,fontWeight,color},children:text});};Text.defaultProps={text:"text",fontSize:16,fontWeight:400,color:"black",fontFamily:'"Inter-SemiBold", "Inter", sans-serif'};addPropertyControls(Text,{text:{type:ControlType.String},fontSize:{type:ControlType.Number,displayStepper:true},fontWeight:{type:ControlType.Number,step:100,displayStepper:true},color:{type:ControlType.Color},fontFamily:{type:ControlType.String}});
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"Text","slots":[],"annotations":{"framerSupportedLayoutWidth":"auto","framerContractVersion":"1","framerSupportedLayoutHeight":"auto"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./Text.map