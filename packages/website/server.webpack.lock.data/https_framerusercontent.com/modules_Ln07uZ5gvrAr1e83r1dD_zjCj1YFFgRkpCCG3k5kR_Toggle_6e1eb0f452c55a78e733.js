import{jsx as _jsx}from"react/jsx-runtime";import*as React from"react";import{motion,addPropertyControls,ControlType,Color}from"framer";import{colorTokentoValue,usePadding,useRadius,paddingControl,borderRadiusControl}from"https://framer.com/m/framer/default-utils.js@^0.45.0";var /*
 ** TOGGLE
 */ DefaultColor;(function(DefaultColor){DefaultColor["blue"]="rgba(0,153,255,1.0)";DefaultColor["blue30"]="rgba(0,153,255,0.3)";DefaultColor["blue0"]="rgba(0,153,255,0.0)";DefaultColor["black"]="rgba(0,0,0,1.0)";DefaultColor["black8"]="rgba(0,0,0,.08)";DefaultColor["white"]="rgba(255,255,255,1.0)";DefaultColor["smoke"]="rgba(243,243,243,1.0)";DefaultColor["clear"]="rgba(255,255,255,0.0)";})(DefaultColor||(DefaultColor={}));var PropControlMenu;(function(PropControlMenu){PropControlMenu["Track"]="track";PropControlMenu["Knob"]="knob";})(PropControlMenu||(PropControlMenu={}));// @ts-ignore - Framer doesn't know about .values on Object
const propControlMenuVals=Object.values(PropControlMenu);const propControlMenuKeys=Object.keys(PropControlMenu);async function handleActions(callbacks){for(const cb of callbacks){if(!cb)continue;const value=await cb();if(value===false)break;}}/**
 * TOGGLE
 *
 * @framerIntrinsicWidth 54
 * @framerIntrinsicHeight 32
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 */ export function Toggle(props){const{// State
toggled,disabled,disabledOpacity=60,// Track
trackTransition,trackOffset,trackColorOff,trackColorOn,trackBorder,trackBorderColor,trackBorderSize,isTrackRadiusMixed,trackRadiusTL,trackRadiusTR,trackRadiusBR,trackRadiusBL,// Knob
knobTransition,knobSize,knobColorOff,knobColorOn,knobShadow,knobRadius,isKnobRadiusMixed,knobRadiusTL,knobRadiusTR,knobRadiusBR,knobRadiusBL,// Events
onToggle,onToggleOn,onToggleOff,// Initial Animation
initialAnimation}=props;// STATES //////////////////////////////////////////////////////////////////
const[isToggled,setIsToggled]=React.useState(toggled);const[isDisabled,setIsDisabled]=React.useState(disabled);const[opacity,setOpacity]=React.useState(getOpacity(isDisabled,disabledOpacity));// LIFECYCLE ///////////////////////////////////////////////////////////////
React.useEffect(()=>{setIsToggled(toggled);// if (onToggle) onToggle(null, null, toggled)
// if (onToggleOn && toggled) onToggleOn(null, null, toggled)
// if (onToggleOff && !toggled) onToggleOff(null, null, toggled)
},[toggled]);React.useEffect(()=>{setIsDisabled(disabled);setOpacity(getOpacity(disabled,disabledOpacity));},[disabled,disabledOpacity]);// Render Variables ////////////////////////////////////////////////////////
// Radiu
const fusedKnobRadius=getFusedRadius(knobRadius,isKnobRadiusMixed,knobRadiusTL,knobRadiusTR,knobRadiusBR,knobRadiusBL);// Shadow
const shadow=getShadow(isToggled,knobShadow,DefaultColor.black8,0,2,4,0);// Borders
const borderOff=getBorder(trackBorder,trackBorderColor,trackBorderSize);const borderOn=getBorder(trackBorder,trackBorderColor,trackBorderSize);// Knob Position
const padding=usePadding(props);const trackRadius=useRadius(props);// VARIANTS //////////////////////////////////////////////////////////////////
// RENDER //////////////////////////////////////////////////////////////////
return(/*#__PURE__*/ _jsx(motion.div,{// ref={container}
layout:true,layoutId:"track",style:{height:"100%",width:"100%",opacity,display:"flex",justifyContent:"flex-start",alignItems:"center",padding:padding,borderRadius:trackRadius,overflow:"hidden"},animate:{backgroundColor:isToggled?colorTokentoValue(trackColorOn):colorTokentoValue(trackColorOff),border:isToggled?colorTokentoValue(borderOn):colorTokentoValue(borderOff)},initial:false,transition:trackTransition,"data-framer-highlight":!disabled,onTap:(event,point)=>{if(isDisabled)return;handleActions([()=>onToggle&&onToggle(event,point,!isToggled),()=>onToggleOn&&onToggleOn(event,point,!isToggled),()=>onToggleOff&&onToggleOff(event,point,!isToggled),()=>setIsToggled(!isToggled),]);},children:/*#__PURE__*/ _jsx("div",{style:{width:"100%",display:"flex",justifyContent:isToggled?`flex-end`:"flex-start"},children:/*#__PURE__*/ _jsx(motion.div,{layout:true,layoutId:"knob",transition:knobTransition,initial:false,style:{background:isToggled?colorTokentoValue(knobColorOn):colorTokentoValue(knobColorOff),pointerEvents:"none",willChange:"transform",width:knobSize,height:knobSize,borderRadius:fusedKnobRadius,boxShadow:shadow}})})}));}////////////////////////////////////////////////////////////////////////////////
// DEFAULT PROPS ///////////////////////////////////////////////////////////////
const defaultSize={width:54,height:32,knob:32-8,trackRadius:32/2,trackBorder:1,knobRadius:(32-8)/2};const defaultProps={height:defaultSize.height,width:defaultSize.width,// PROP CONTROLS ONLY
designMenu:propControlMenuVals[0],// STATES
toggled:true,disabled:false,padding:4,borderRadius:32/2,// TRACK
trackOffset:0,trackColorOff:DefaultColor.smoke,trackColorOn:DefaultColor.blue,trackBorder:false,trackBorderColor:DefaultColor.blue30,trackBorderSize:0,trackRadius:defaultSize.trackRadius,isTrackRadiusMixed:false,trackRadiusTL:defaultSize.trackRadius,trackRadiusTR:defaultSize.trackRadius,trackRadiusBR:defaultSize.trackRadius,trackRadiusBL:defaultSize.trackRadius,// KNOB
knobSize:defaultSize.knob,knobColorOff:DefaultColor.white,knobColorOn:DefaultColor.white,knobShadow:true,knobRadius:defaultSize.knobRadius,isKnobRadiusMixed:false,knobRadiusTL:defaultSize.knobRadius,knobRadiusTR:defaultSize.knobRadius,knobRadiusBR:defaultSize.knobRadius,knobRadiusBL:defaultSize.knobRadius,// Events
onToggle:null,onToggleOn:null,onToggleOff:null,initialAnimation:false};Toggle.defaultProps=defaultProps;////////////////////////////////////////////////////////////////////////////////
// Framer Property Controls ////////////////////////////////////////////////////
// Use for more indentation
// const LVL1 = "⠂ "
// const LVL2 = "  ⠂ "
// Indentation Helpers
const LVL1="";const LVL2="   "+"";function overridePropControl(control,override){return Object.keys(control).reduce((result,key)=>{result[key]={...control[key],...override};return result;},{});}addPropertyControls(Toggle,{// States ///////////////////////////////////////////////////////////////////
toggled:{title:"Toggled",type:ControlType.Boolean,defaultValue:defaultProps.toggled,enabledTitle:"On",disabledTitle:"Off"},disabled:{title:"Disabled",type:ControlType.Boolean,defaultValue:defaultProps.disabled,enabledTitle:"Yes",disabledTitle:"No"},// removing for now, weird stuff going on
// initialAnimation: {
//     title: "On Load",
//     type: ControlType.Boolean,
//     enabledTitle: "Animate",
//     disabledTitle: "Instant",
// },
// Menu ////////////////////////////////////////////////////////////////////
designMenu:{title:"Style",type:ControlType.Enum,defaultValue:defaultProps.designMenu,options:propControlMenuVals,optionTitles:propControlMenuKeys,displaySegmentedControl:true},// Track ///////////////////////////////////////////////////////////////////
trackTransition:{title:`${LVL1}Transition`,type:ControlType.Transition,hidden:props=>props.designMenu!=PropControlMenu.Track},trackOffset:{title:`${LVL1}Offset`,type:ControlType.Number,defaultValue:defaultProps.trackOffset,step:0.5,displayStepper:true,hidden:props=>props.designMenu!==PropControlMenu.Track},...overridePropControl(paddingControl,{hidden:props=>props.designMenu!==PropControlMenu.Track}),...overridePropControl(borderRadiusControl,{hidden:props=>props.designMenu!==PropControlMenu.Track}),trackColorOff:{title:`${LVL1}Color Off`,type:ControlType.Color,defaultValue:defaultProps.trackColorOff,hidden:props=>props.designMenu!=PropControlMenu.Track},trackColorOn:{title:`${LVL1}Color On`,type:ControlType.Color,defaultValue:defaultProps.trackColorOn,hidden:props=>props.designMenu!=PropControlMenu.Track},trackBorder:{title:`${LVL1}Border`,type:ControlType.Boolean,defaultValue:defaultProps.trackBorder,enabledTitle:"Yes",disabledTitle:"No",hidden:props=>props.designMenu!=PropControlMenu.Track},trackBorderColor:{title:`${LVL2}Color`,type:ControlType.Color,defaultValue:defaultProps.trackBorderColor,hidden:props=>props.designMenu!=PropControlMenu.Track||!props.trackBorder},trackBorderSize:{title:`${LVL2}Size On`,type:ControlType.Number,defaultValue:defaultProps.trackBorderSize,min:0,step:0.5,displayStepper:true,hidden:props=>props.designMenu!=PropControlMenu.Track||!props.trackBorder},// Knob ////////////////////////////////////////////////////////////////////
knobTransition:{title:`${LVL1}Transition`,type:ControlType.Transition,hidden:props=>props.designMenu!=PropControlMenu.Knob},knobSize:{title:`${LVL1}Size`,type:ControlType.Number,defaultValue:defaultProps.knobSize,min:0,step:0.5,displayStepper:true,hidden:props=>props.designMenu!=PropControlMenu.Knob},knobRadius:{type:ControlType.FusedNumber,title:`${LVL1}Radius`,defaultValue:defaultProps.knobRadius,toggleKey:"isKnobRadiusMixed",toggleTitles:["All","Individual"],valueKeys:["knobRadiusTL","knobRadiusTR","knobRadiusBR","knobRadiusBL",],valueLabels:["TL","TR","BR","BL"],min:0,hidden:props=>props.designMenu!=PropControlMenu.Knob},knobColorOff:{title:`${LVL1}Color Off`,type:ControlType.Color,defaultValue:defaultProps.knobColorOff,hidden:props=>props.designMenu!=PropControlMenu.Knob},knobColorOn:{title:`${LVL1}Color On`,type:ControlType.Color,defaultValue:defaultProps.knobColorOn,hidden:props=>props.designMenu!=PropControlMenu.Knob},knobShadow:{title:`${LVL1}Shadow`,type:ControlType.Boolean,defaultValue:defaultProps.knobShadow,enabledTitle:"Yes",disabledTitle:"No",hidden:props=>props.designMenu!=PropControlMenu.Knob},// Events ////////////////////////////////////////////////////////////////////
onToggle:{type:ControlType.EventHandler},onToggleOn:{type:ControlType.EventHandler},onToggleOff:{type:ControlType.EventHandler}});////////////////////////////////////////////////////////////////////////////////
// ACTION CONTROLS
////////////////////////////////////////////////////////////////////////////////
// HELPER FUNCTIONS
const normalizeColor=color=>{// Translations between HSL to HEX and others are a problem
if(!Color.isColor(color))return color;const c=Color(color);const RGBA=Color.toRgb(c);return`rgba(${RGBA.r}, ${RGBA.g}, ${RGBA.b}, ${RGBA.a})`;};const getFusedRadius=(radius,isMixed,tl,tr,br,bl)=>{return isMixed?`${tl}px ${tr}px ${br}px ${bl}px`:`${radius}px`;};const getOpacity=(isDisabled,disabledOpacity)=>isDisabled?disabledOpacity/100:1;const getBorder=(hasBorder,color,size)=>{if(!hasBorder)return`0px solid ${DefaultColor.clear}`;return`${size}px solid ${normalizeColor(color)}`;};const getShadow=(toggled,hasShadow,color,x,y,blur,spread)=>{if(!hasShadow)return`0px 0px 0px 0px ${DefaultColor.clear}`;return`${x}px ${y}px ${blur}px ${spread}px ${color}`;};
export const __FramerMetadata__ = {"exports":{"Toggle":{"type":"reactComponent","name":"Toggle","slots":[],"annotations":{"framerSupportedLayoutHeight":"fixed","framerSupportedLayoutWidth":"fixed","framerIntrinsicHeight":"32","framerContractVersion":"1","framerIntrinsicWidth":"54"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./Toggle.map