import{jsx as _jsx}from"react/jsx-runtime";import{addPropertyControls,ControlType}from"framer";/**
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */ export default function Text({text,fontSize,fontWeight,color,fontFamily,lineHeight}){return /*#__PURE__*/ _jsx("div",{style:{fontSize,fontFamily,fontWeight,color,lineHeight},children:text});};Text.defaultProps={text:"text",fontSize:16,fontWeight:400,color:"black",fontFamily:"Inter",lineHeight:1.5};addPropertyControls(Text,{text:{type:ControlType.String},fontSize:{type:ControlType.Number,displayStepper:true},fontWeight:{type:ControlType.Number,step:100,displayStepper:true},color:{type:ControlType.Color},fontFamily:{type:ControlType.String},lineHeight:{type:ControlType.Number,step:.1,displayStepper:true}});
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"Text","slots":[],"annotations":{"framerContractVersion":"1","framerSupportedLayoutHeight":"auto","framerSupportedLayoutWidth":"auto"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./Text.map