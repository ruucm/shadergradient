import{jsx as _jsx,jsxs as _jsxs,Fragment as _Fragment}from"react/jsx-runtime";import React from"react";// import { jsx as _jsx } from 'react/jsx-runtime' // @ts-ignore
import{ControlType,addPropertyControls}from"framer";import{useCallback,useEffect,useRef,useMemo}from"react";import{fontStack,fontControls,fontSizeOptions,useOnEnter,useFontControls,useIsInPreview,usePadding,useRadius,paddingControl,borderRadiusControl,useControlledState}from"https://framer.com/m/framer/default-utils.js@^0.45.0";import{useIsomorphicLayoutEffect}from"https://framer.com/m/framer/useIsomorphicLayoutEffect.js@0.2.0";/**
 * Input
 *
 * @framerIntrinsicWidth 260
 * @framerIntrinsicHeight 50
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight any
 */ export const Input=/*#__PURE__*/ React.forwardRef((props,forwardedRef)=>{// export function Input(props) {
const{placeholder,backgroundColor,textColor,border,borderWidth,// password,
type,step,onSubmit,onFocus,onBlur,value,valueControl,textAlign,multiLine,placeholderColor,autoFocus,inputStyle,caretColor,fontFamily,blurOnSubmit,disabled,keyboard,truncate,onChange,forwardedKeyDown,onValueChange,min,max,minLength,maxLength,lineHeight,enableLimit,isRTL,style}=props;const[inputValue,setValue]=useControlledState(value);const ref=useRef();const inputEle=forwardedRef||ref;const Tag=useMemo(()=>multiLine?"textarea":"input",[multiLine]);const inPreview=useIsInPreview();const fontStyles=useFontControls(props);const paddingValue=usePadding(props);const borderRadius=useRadius(props);const handleChange=useCallback(event=>{const element=multiLine?event.nativeEvent.target:event.nativeEvent.target;const value=element.value;setValue(value);if(onChange)onChange(event);if(onValueChange)onValueChange(value);},[onChange,multiLine]);useOnEnter(()=>{var ref;if(inPreview&&autoFocus)(ref=inputEle.current)===null||ref===void 0?void 0:ref.focus();});useEffect(()=>{var ref;if(inPreview&&autoFocus)(ref=inputEle.current)===null||ref===void 0?void 0:ref.focus();},[autoFocus]);useIsomorphicLayoutEffect(()=>{// I only want to control my own height is auto-sizing is enabled
if(multiLine&&props.style.height!=="100%"){// Autosizing hack for multi-line textareas, may have perf impact
inputEle.current.style.height="auto";inputEle.current.style.height=inputEle.current.scrollHeight+"px";}},[inputValue,multiLine,style===null||style===void 0?void 0:style.height,placeholder,]);let limitProps={};if(enableLimit){if(type==="text")limitProps={minLength,maxLength};else if(type==="number")limitProps={min,max};}const compProps={onChange:handleChange,ref:inputEle,placeholder:placeholder,onKeyDown:e=>{if(e.keyCode===13){if(blurOnSubmit&&inputEle.current)inputEle.current.blur();if(onSubmit)onSubmit();}if(forwardedKeyDown)forwardedKeyDown(e);},disabled:disabled,onFocus:()=>{if(onFocus)onFocus();},onBlur:()=>{if(onBlur)onBlur();},// maxLength: enableLimit ? maxLength : 524288,
...limitProps,autoFocus:inPreview&&autoFocus,className:"framer-default-input",rows:1,style:{"--framer-default-input-border-width":`${props.borderWidth}px`,"--framer-default-input-border-color":props.focusColor,"--framer-default-input-placeholder-color":props.placeholderColor,...baseInputStyles,color:textColor,backgroundColor,borderRadius,textAlign,lineHeight,caretColor,margin:0,display:"flex",height:"auto",padding:paddingValue,direction:isRTL?"rtl":"ltr",overflow:"show",textOverflow:truncate?"ellipsis":"unset",boxShadow:!inPreview&&autoFocus?`inset 0 0 0 ${props.borderWidth}px ${props.focusColor}`:`inset 0 0 0 ${borderWidth}px ${border}`,...inputStyle,...style,...fontStyles},type,step,inputMode:keyboard};// don't need to pass value props if values are controlled by ref
// e.g) FormInput.tsx use forwardedRef to change values
if(valueControl==="prop")compProps.value=inputValue;return /*#__PURE__*/ _jsxs(_Fragment,{children:[/*#__PURE__*/ _jsx(Tag,{...compProps}),/*#__PURE__*/ _jsx("style",{children:`
                .framer-default-input { --framer-default-input-border-width: 1px; --framer-default-input-border-color: #09f; --framer-default-input-placeholder-color: #aaa; }
                .framer-default-input:focus { box-shadow: inset 0 0 0 var(--framer-default-input-border-width) var(--framer-default-input-border-color) !important; }
                .framer-default-input::placeholder { color: var(--framer-default-input-placeholder-color) !important; }
                `})]});// return /*#__PURE__*/ _jsx(Tag, )
});Input.defaultProps={value:"",placeholder:"Type something…",width:260,height:50,backgroundColor:"#EBEBEB",textColor:"#333",focusColor:"#09F",fontSize:16,fontWeight:400,borderRadius:8,lineHeight:1.4,padding:15,border:"rgba(0,0,0,0)",placeholderColor:"#aaa",borderWidth:1,type:"text",step:1,truncate:false,alignment:"left",caretColor:"#333",multiLine:false,maxLength:10,password:false,keyboard:""};addPropertyControls(Input,{placeholder:{type:ControlType.String,title:"Placeholder"},value:{type:ControlType.String,title:"Value"},valueControl:{type:ControlType.Enum,displaySegmentedControl:true,options:["prop","ref"]},textColor:{type:ControlType.Color,title:"Text"},caretColor:{type:ControlType.Color,title:"Caret"},placeholderColor:{type:ControlType.Color,title:"Placeholder"},backgroundColor:{type:ControlType.Color,title:"Background"},border:{type:ControlType.Color,title:"Border"},borderWidth:{type:ControlType.Number,title:" ",min:1,max:5,displayStepper:true},focusColor:{type:ControlType.Color,title:"Focus"},autoFocus:{type:ControlType.Boolean,title:"autoFocus",defaultValue:false,disabledTitle:"No",enabledTitle:"Yes"},...fontControls,fontSize:{...fontSizeOptions},lineHeight:{type:ControlType.Number,min:0,step:.1,max:2,displayStepper:true},...paddingControl,...borderRadiusControl,textAlign:{title:"Text Align",type:ControlType.Enum,displaySegmentedControl:true,optionTitles:["Left","Center","Right"],options:["left","center","right"]},isRTL:{type:ControlType.Boolean,title:"Direction",enabledTitle:"RTL",disabledTitle:"LTR",defaultValue:false},disabled:{type:ControlType.Boolean,title:"Disabled",defaultValue:false,disabledTitle:"No",enabledTitle:"Yes"},multiLine:{type:ControlType.Boolean,title:"Text Area",defaultValue:false,disabledTitle:"No",enabledTitle:"Yes"},truncate:{type:ControlType.Boolean,title:"Truncate",defaultValue:false,disabledTitle:"No",enabledTitle:"Yes",hidden:({multiLine})=>multiLine},// password: {
//   type: ControlType.Boolean,
//   title: 'Password',
//   hidden: ({ multiLine }) => multiLine,
//   defaultValue: false,
//   disabledTitle: 'No',
//   enabledTitle: 'Yes'
// },
type:{type:ControlType.String,title:"Type"},step:{type:ControlType.String},enableLimit:{title:"Limit",type:ControlType.Boolean,displayStepper:true,defaultValue:false,disabledTitle:"No",enabledTitle:"Yes"},min:{type:ControlType.Number,displayStepper:true},max:{type:ControlType.Number,displayStepper:true},minLength:{type:ControlType.Number,defaultValue:Input.defaultProps.minLength,displayStepper:true,min:1},maxLength:{type:ControlType.Number,defaultValue:Input.defaultProps.maxLength,displayStepper:true,min:1},keyboard:{type:ControlType.Enum,title:"Keyboard",defaultValue:"",options:["","numeric","tel","decimal","email","url","search"],optionTitles:["Default","Numeric","Phone","Decimal","Email","URL","Search",]},onChange:{type:ControlType.EventHandler},onSubmit:{type:ControlType.EventHandler},onFocus:{type:ControlType.EventHandler},onBlur:{type:ControlType.EventHandler},forwardedKeyDown:{type:ControlType.EventHandler},ref:{type:ControlType.EventHandler}});const baseInputStyles={pointerEvents:"auto",border:"none",width:"100%",boxSizing:"border-box",outline:"none",resize:"none",margin:0,fontFamily:fontStack,WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitAppearance:"none"} // export const __FramerMetadata__ = {
 //   exports: {
 //     Props: { type: 'tsType', annotations: { framerContractVersion: '1' } },
 //     Input: {
 //       type: 'reactComponent',
 //       name: 'Input',
 //       slots: [],
 //       annotations: {
 //         framerIntrinsicHeight: '50',
 //         framerSupportedLayoutHeight: 'any',
 //         framerSupportedLayoutWidth: 'fixed',
 //         framerIntrinsicWidth: '260',
 //         framerContractVersion: '1'
 //       }
 //     },
 //     __FramerMetadata__: { type: 'variable' }
 //   }
 // }
;
export const __FramerMetadata__ = {"exports":{"Input":{"type":"reactComponent","name":"Input","slots":[],"annotations":{"framerIntrinsicHeight":"50","framerContractVersion":"1","framerIntrinsicWidth":"260","framerSupportedLayoutWidth":"fixed","framerSupportedLayoutHeight":"any"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./Input.map