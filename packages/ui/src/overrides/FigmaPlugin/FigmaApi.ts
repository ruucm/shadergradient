type ArgFreeEventType =
  | 'selectionchange'
  | 'currentpagechange'
  | 'close'
  | 'timerstart'
  | 'timerstop'
  | 'timerpause'
  | 'timerresume'
  | 'timeradjust'
  | 'timerdone'

export interface PluginAPI {
  readonly apiVersion: '1.0.0'
  readonly command: string
  readonly editorType: 'figma' | 'slides' | 'buzz'
  readonly pluginId?: string
  readonly widgetId?: string

  readonly fileKey: string | undefined

  skipInvisibleInstanceChildren: boolean

  readonly timer?: TimerAPI
  readonly viewport: ViewportAPI

  readonly currentUser: User | null
  readonly activeUsers: ActiveUser[]

  closePlugin(message?: string): void

  notify(message: string, options?: NotificationOptions): NotificationHandler

  commitUndo(): void
  triggerUndo(): void

  saveVersionHistoryAsync(
    title: string,
    description?: string
  ): Promise<VersionHistoryResult>

  showUI(html: string, options?: ShowUIOptions): void
  readonly ui: UIAPI

  readonly clientStorage: ClientStorageAPI

  readonly parameters: ParametersAPI

  getNodeById(id: string): BaseNode | null
  getStyleById(id: string): BaseStyle | null

  readonly root: DocumentNode
  currentPage: PageNode

  on(type: ArgFreeEventType, callback: () => void): void
  on(type: 'run', callback: (event: RunEvent) => void): void
  on(type: 'drop', callback: (event: DropEvent) => boolean): void

  once(type: ArgFreeEventType, callback: () => void): void
  once(type: 'run', callback: (event: RunEvent) => void): void
  once(type: 'drop', callback: (event: DropEvent) => boolean): void

  off(type: ArgFreeEventType, callback: () => void): void
  off(type: 'run', callback: (event: RunEvent) => void): void
  off(type: 'drop', callback: (event: DropEvent) => boolean): void

  readonly mixed: unique symbol

  createRectangle(): RectangleNode
  createLine(): LineNode
  createEllipse(): EllipseNode
  createPolygon(): PolygonNode
  createStar(): StarNode
  createVector(): VectorNode
  createText(): TextNode
  createFrame(): FrameNode
  createComponent(): ComponentNode
  createPage(): PageNode
  createSlice(): SliceNode
  createSticky(): StickyNode
  createConnector(): ConnectorNode
  createShapeWithText(): ShapeWithTextNode
  createCodeBlock(): CodeBlockNode
  createSection(): SectionNode
  /**
   * [DEPRECATED]: This API often fails to create a valid boolean operation. Use figma.union, figma.subtract, figma.intersect and figma.exclude instead.
   */
  createBooleanOperation(): BooleanOperationNode

  createPaintStyle(): PaintStyle
  createTextStyle(): TextStyle
  createEffectStyle(): EffectStyle
  createGridStyle(): GridStyle

  // The styles are returned in the same order as displayed in the UI. Only
  // local styles are returned. Never styles from team library.
  getLocalPaintStyles(): PaintStyle[]
  getLocalTextStyles(): TextStyle[]
  getLocalEffectStyles(): EffectStyle[]
  getLocalGridStyles(): GridStyle[]

  moveLocalPaintStyleAfter(
    targetNode: PaintStyle,
    reference: PaintStyle | null
  ): void
  moveLocalTextStyleAfter(
    targetNode: TextStyle,
    reference: TextStyle | null
  ): void
  moveLocalEffectStyleAfter(
    targetNode: EffectStyle,
    reference: EffectStyle | null
  ): void
  moveLocalGridStyleAfter(
    targetNode: GridStyle,
    reference: GridStyle | null
  ): void

  moveLocalPaintFolderAfter(
    targetFolder: string,
    reference: string | null
  ): void
  moveLocalTextFolderAfter(targetFolder: string, reference: string | null): void
  moveLocalEffectFolderAfter(
    targetFolder: string,
    reference: string | null
  ): void
  moveLocalGridFolderAfter(targetFolder: string, reference: string | null): void

  importComponentByKeyAsync(key: string): Promise<ComponentNode>
  importComponentSetByKeyAsync(key: string): Promise<ComponentSetNode>
  importStyleByKeyAsync(key: string): Promise<BaseStyle>

  listAvailableFontsAsync(): Promise<Font[]>
  loadFontAsync(fontName: FontName): Promise<void>
  readonly hasMissingFont: boolean

  createNodeFromSvg(svg: string): FrameNode

  createImage(data: Uint8Array): Image
  getImageByHash(hash: string): Image | null

  createLinkPreviewAsync(url: string): Promise<EmbedNode | LinkUnfurlNode>

  createGif(hash: string): MediaNode

  combineAsVariants(
    nodes: ReadonlyArray<ComponentNode>,
    parent: BaseNode & ChildrenMixin,
    index?: number
  ): ComponentSetNode
  group(
    nodes: ReadonlyArray<BaseNode>,
    parent: BaseNode & ChildrenMixin,
    index?: number
  ): GroupNode
  flatten(
    nodes: ReadonlyArray<BaseNode>,
    parent?: BaseNode & ChildrenMixin,
    index?: number
  ): VectorNode

  union(
    nodes: ReadonlyArray<BaseNode>,
    parent: BaseNode & ChildrenMixin,
    index?: number
  ): BooleanOperationNode
  subtract(
    nodes: ReadonlyArray<BaseNode>,
    parent: BaseNode & ChildrenMixin,
    index?: number
  ): BooleanOperationNode
  intersect(
    nodes: ReadonlyArray<BaseNode>,
    parent: BaseNode & ChildrenMixin,
    index?: number
  ): BooleanOperationNode
  exclude(
    nodes: ReadonlyArray<BaseNode>,
    parent: BaseNode & ChildrenMixin,
    index?: number
  ): BooleanOperationNode

  base64Encode(data: Uint8Array): string
  base64Decode(data: string): Uint8Array

  getFileThumbnailNode(): FrameNode | ComponentNode | ComponentSetNode | null
  setFileThumbnailNodeAsync(
    node: FrameNode | ComponentNode | ComponentSetNode | null
  ): Promise<void>
}

interface VersionHistoryResult {
  id: string
}

interface ClientStorageAPI {
  getAsync(key: string): Promise<any | undefined>
  setAsync(key: string, value: any): Promise<void>
  deleteAsync(key: string): Promise<void>
  keysAsync(): Promise<string[]>
}

interface NotificationOptions {
  timeout?: number
  error?: boolean
}

interface NotificationHandler {
  cancel: () => void
}

interface ShowUIOptions {
  visible?: boolean
  title?: string
  width?: number
  height?: number
  position?: { x: number; y: number }
}

interface UIPostMessageOptions {
  origin?: string
}

interface OnMessageProperties {
  origin: string
}

type MessageEventHandler = (
  pluginMessage: any,
  props: OnMessageProperties
) => void

interface UIAPI {
  show(): void
  hide(): void
  resize(width: number, height: number): void
  close(): void

  postMessage(pluginMessage: any, options?: UIPostMessageOptions): void
  onmessage: MessageEventHandler | undefined
  on(type: 'message', callback: MessageEventHandler): void
  once(type: 'message', callback: MessageEventHandler): void
  off(type: 'message', callback: MessageEventHandler): void
}

interface TimerAPI {
  readonly remaining: number
  readonly total: number
  readonly state: 'STOPPED' | 'PAUSED' | 'RUNNING'

  pause: () => void
  resume: () => void
  start: (seconds: number) => void
  stop: () => void
}

interface ViewportAPI {
  center: Vector
  zoom: number
  scrollAndZoomIntoView(nodes: ReadonlyArray<BaseNode>): void
  readonly bounds: Rect
}

interface ParameterValues {
  [key: string]: any
}

interface SuggestionResults {
  setSuggestions(
    suggestions: Array<
      | string
      | {
          name: string
          data?: any
          icon?: string | Uint8Array
          iconUrl?: string
        }
    >
  ): void
  setError(message: string): void
  setLoadingMessage(message: string): void
}

type ParameterInputEvent<ParametersType = ParameterValues> = {
  query: string
  key: string
  parameters: Partial<ParametersType>
  result: SuggestionResults
}

interface ParametersAPI {
  on(type: 'input', callback: (event: ParameterInputEvent) => void): void
  once(type: 'input', callback: (event: ParameterInputEvent) => void): void
  off(type: 'input', callback: (event: ParameterInputEvent) => void): void
}

interface RunEvent<ParametersType = ParameterValues | undefined> {
  command: string
  parameters: ParametersType
}

interface DropEvent {
  node: BaseNode | SceneNode
  x: number
  y: number
  absoluteX: number
  absoluteY: number
  items: DropItem[]
  files: DropFile[]
  dropMetadata?: any
}

interface DropItem {
  type: string
  data: string
}

interface DropFile {
  name: string
  type: string
  getBytesAsync(): Promise<Uint8Array>
  getTextAsync(): Promise<string>
}

////////////////////////////////////////////////////////////////////////////////
// Datatypes

type Transform = [[number, number, number], [number, number, number]]

interface Vector {
  readonly x: number
  readonly y: number
}

interface Rect {
  readonly x: number
  readonly y: number
  readonly width: number
  readonly height: number
}

interface RGB {
  readonly r: number
  readonly g: number
  readonly b: number
}

interface RGBA {
  readonly r: number
  readonly g: number
  readonly b: number
  readonly a: number
}

interface FontName {
  readonly family: string
  readonly style: string
}

type TextCase = 'ORIGINAL' | 'UPPER' | 'LOWER' | 'TITLE'

type TextDecoration = 'NONE' | 'UNDERLINE' | 'STRIKETHROUGH'

interface ArcData {
  readonly startingAngle: number
  readonly endingAngle: number
  readonly innerRadius: number
}

interface DropShadowEffect {
  readonly type: 'DROP_SHADOW'
  readonly color: RGBA
  readonly offset: Vector
  readonly radius: number
  readonly spread?: number
  readonly visible: boolean
  readonly blendMode: BlendMode
  readonly showShadowBehindNode?: boolean
}

interface InnerShadowEffect {
  readonly type: 'INNER_SHADOW'
  readonly color: RGBA
  readonly offset: Vector
  readonly radius: number
  readonly spread?: number
  readonly visible: boolean
  readonly blendMode: BlendMode
}

interface BlurEffect {
  readonly type: 'LAYER_BLUR' | 'BACKGROUND_BLUR'
  readonly radius: number
  readonly visible: boolean
}

type Effect = DropShadowEffect | InnerShadowEffect | BlurEffect

type ConstraintType = 'MIN' | 'CENTER' | 'MAX' | 'STRETCH' | 'SCALE'

interface Constraints {
  readonly horizontal: ConstraintType
  readonly vertical: ConstraintType
}

interface ColorStop {
  readonly position: number
  readonly color: RGBA
}

interface ImageFilters {
  readonly exposure?: number
  readonly contrast?: number
  readonly saturation?: number
  readonly temperature?: number
  readonly tint?: number
  readonly highlights?: number
  readonly shadows?: number
}

interface SolidPaint {
  readonly type: 'SOLID'
  readonly color: RGB

  readonly visible?: boolean
  readonly opacity?: number
  readonly blendMode?: BlendMode
}

interface GradientPaint {
  readonly type:
    | 'GRADIENT_LINEAR'
    | 'GRADIENT_RADIAL'
    | 'GRADIENT_ANGULAR'
    | 'GRADIENT_DIAMOND'
  readonly gradientTransform: Transform
  readonly gradientStops: ReadonlyArray<ColorStop>

  readonly visible?: boolean
  readonly opacity?: number
  readonly blendMode?: BlendMode
}

interface ImagePaint {
  readonly type: 'IMAGE'
  readonly scaleMode: 'FILL' | 'FIT' | 'CROP' | 'TILE'
  readonly imageHash: string | null
  readonly imageTransform?: Transform // setting for "CROP"
  readonly scalingFactor?: number // setting for "TILE"
  readonly rotation?: number // setting for "FILL" | "FIT" | "TILE"
  readonly filters?: ImageFilters

  readonly visible?: boolean
  readonly opacity?: number
  readonly blendMode?: BlendMode
}

type Paint = SolidPaint | GradientPaint | ImagePaint

interface Guide {
  readonly axis: 'X' | 'Y'
  readonly offset: number
}

interface RowsColsLayoutGrid {
  readonly pattern: 'ROWS' | 'COLUMNS'
  readonly alignment: 'MIN' | 'MAX' | 'STRETCH' | 'CENTER'
  readonly gutterSize: number

  readonly count: number // Infinity when "Auto" is set in the UI
  readonly sectionSize?: number // Not set for alignment: "STRETCH"
  readonly offset?: number // Not set for alignment: "CENTER"

  readonly visible?: boolean
  readonly color?: RGBA
}

interface GridLayoutGrid {
  readonly pattern: 'GRID'
  readonly sectionSize: number

  readonly visible?: boolean
  readonly color?: RGBA
}

type LayoutGrid = RowsColsLayoutGrid | GridLayoutGrid

interface ExportSettingsConstraints {
  readonly type: 'SCALE' | 'WIDTH' | 'HEIGHT'
  readonly value: number
}

interface ExportSettingsImage {
  readonly format: 'JPG' | 'PNG'
  readonly contentsOnly?: boolean // defaults to true
  readonly useAbsoluteBounds?: boolean // defaults to false
  readonly suffix?: string
  readonly constraint?: ExportSettingsConstraints
}

interface ExportSettingsSVG {
  readonly format: 'SVG'
  readonly contentsOnly?: boolean // defaults to true
  readonly useAbsoluteBounds?: boolean // defaults to false
  readonly suffix?: string
  readonly svgOutlineText?: boolean // defaults to true
  readonly svgIdAttribute?: boolean // defaults to false
  readonly svgSimplifyStroke?: boolean // defaults to true
}

interface ExportSettingsPDF {
  readonly format: 'PDF'
  readonly contentsOnly?: boolean // defaults to true
  readonly useAbsoluteBounds?: boolean // defaults to false
  readonly suffix?: string
}

type ExportSettings =
  | ExportSettingsImage
  | ExportSettingsSVG
  | ExportSettingsPDF

type WindingRule = 'NONZERO' | 'EVENODD'

interface VectorVertex {
  readonly x: number
  readonly y: number
  readonly strokeCap?: StrokeCap
  readonly strokeJoin?: StrokeJoin
  readonly cornerRadius?: number
  readonly handleMirroring?: HandleMirroring
}

interface VectorSegment {
  readonly start: number
  readonly end: number
  readonly tangentStart?: Vector // Defaults to { x: 0, y: 0 }
  readonly tangentEnd?: Vector // Defaults to { x: 0, y: 0 }
}

interface VectorRegion {
  readonly windingRule: WindingRule
  readonly loops: ReadonlyArray<ReadonlyArray<number>>
  readonly fills?: ReadonlyArray<Paint>
  readonly fillStyleId?: string
}

interface VectorNetwork {
  readonly vertices: ReadonlyArray<VectorVertex>
  readonly segments: ReadonlyArray<VectorSegment>
  readonly regions?: ReadonlyArray<VectorRegion> // Defaults to []
}

interface VectorPath {
  readonly windingRule: WindingRule | 'NONE'
  readonly data: string
}

type VectorPaths = ReadonlyArray<VectorPath>

interface LetterSpacing {
  readonly value: number
  readonly unit: 'PIXELS' | 'PERCENT'
}

type LineHeight =
  | {
      readonly value: number
      readonly unit: 'PIXELS' | 'PERCENT'
    }
  | {
      readonly unit: 'AUTO'
    }

type HyperlinkTarget = {
  type: 'URL' | 'NODE'
  value: string
}

type TextListOptions = {
  type: 'ORDERED' | 'UNORDERED' | 'NONE'
}

type BlendMode =
  | 'NORMAL'
  | 'DARKEN'
  | 'MULTIPLY'
  | 'LINEAR_BURN'
  | 'COLOR_BURN'
  | 'LIGHTEN'
  | 'SCREEN'
  | 'LINEAR_DODGE'
  | 'COLOR_DODGE'
  | 'OVERLAY'
  | 'SOFT_LIGHT'
  | 'HARD_LIGHT'
  | 'DIFFERENCE'
  | 'EXCLUSION'
  | 'HUE'
  | 'SATURATION'
  | 'COLOR'
  | 'LUMINOSITY'

interface Font {
  fontName: FontName
}

interface StyledTextSegment {
  characters: string
  start: number
  end: number
  fontSize: number
  fontName: FontName
  textDecoration: TextDecoration
  textCase: TextCase
  lineHeight: LineHeight
  letterSpacing: LetterSpacing
  fills: Paint[]
  textStyleId: string
  fillStyleId: string
  listOptions: TextListOptions
  indentation: number
  hyperlink: HyperlinkTarget | null
}

type Reaction = { action: Action | null; trigger: Trigger | null }

type Action =
  | { readonly type: 'BACK' | 'CLOSE' }
  | { readonly type: 'URL'; url: string }
  | {
      readonly type: 'NODE'
      readonly destinationId: string | null
      readonly navigation: Navigation
      readonly transition: Transition | null
      readonly preserveScrollPosition: boolean

      // Only present if navigation == "OVERLAY" and the destination uses
      // overlay position type "RELATIVE"
      readonly overlayRelativePosition?: Vector
    }

interface SimpleTransition {
  readonly type: 'DISSOLVE' | 'SMART_ANIMATE' | 'SCROLL_ANIMATE'
  readonly easing: Easing
  readonly duration: number
}

interface DirectionalTransition {
  readonly type: 'MOVE_IN' | 'MOVE_OUT' | 'PUSH' | 'SLIDE_IN' | 'SLIDE_OUT'
  readonly direction: 'LEFT' | 'RIGHT' | 'TOP' | 'BOTTOM'
  readonly matchLayers: boolean

  readonly easing: Easing
  readonly duration: number
}

type Transition = SimpleTransition | DirectionalTransition

type Trigger =
  | { readonly type: 'ON_CLICK' | 'ON_HOVER' | 'ON_PRESS' | 'ON_DRAG' }
  | {
      readonly type: 'AFTER_TIMEOUT'
      readonly timeout: number
    }
  | {
      readonly type: 'MOUSE_ENTER' | 'MOUSE_LEAVE' | 'MOUSE_UP' | 'MOUSE_DOWN'
      readonly delay: number
    }
  | {
      readonly type: 'ON_KEY_DOWN'
      readonly device:
        | 'KEYBOARD'
        | 'XBOX_ONE'
        | 'PS4'
        | 'SWITCH_PRO'
        | 'UNKNOWN_CONTROLLER'
      readonly keyCodes: ReadonlyArray<number>
    }

type Navigation = 'NAVIGATE' | 'SWAP' | 'OVERLAY' | 'SCROLL_TO' | 'CHANGE_TO'

interface Easing {
  readonly type:
    | 'EASE_IN'
    | 'EASE_OUT'
    | 'EASE_IN_AND_OUT'
    | 'LINEAR'
    | 'EASE_IN_BACK'
    | 'EASE_OUT_BACK'
    | 'EASE_IN_AND_OUT_BACK'
    | 'CUSTOM_CUBIC_BEZIER'
  readonly easingFunctionCubicBezier?: EasingFunctionBezier
}

interface EasingFunctionBezier {
  x1: number
  y1: number
  x2: number
  y2: number
}

type OverflowDirection = 'NONE' | 'HORIZONTAL' | 'VERTICAL' | 'BOTH'

type OverlayPositionType =
  | 'CENTER'
  | 'TOP_LEFT'
  | 'TOP_CENTER'
  | 'TOP_RIGHT'
  | 'BOTTOM_LEFT'
  | 'BOTTOM_CENTER'
  | 'BOTTOM_RIGHT'
  | 'MANUAL'

type OverlayBackground =
  | { readonly type: 'NONE' }
  | { readonly type: 'SOLID_COLOR'; readonly color: RGBA }

type OverlayBackgroundInteraction = 'NONE' | 'CLOSE_ON_CLICK_OUTSIDE'

type PublishStatus = 'UNPUBLISHED' | 'CURRENT' | 'CHANGED'

interface ConnectorEndpointPosition {
  position: { x: number; y: number }
}

interface ConnectorEndpointPositionAndEndpointNodeId {
  position: { x: number; y: number }
  endpointNodeId: string
}

interface ConnectorEndpointEndpointNodeIdAndMagnet {
  endpointNodeId: string
  magnet: 'NONE' | 'AUTO' | 'TOP' | 'LEFT' | 'BOTTOM' | 'RIGHT'
}

type ConnectorEndpoint =
  | ConnectorEndpointPosition
  | ConnectorEndpointEndpointNodeIdAndMagnet
  | ConnectorEndpointPositionAndEndpointNodeId

type ConnectorStrokeCap =
  | 'NONE'
  | 'ARROW_EQUILATERAL'
  | 'ARROW_LINES'
  | 'TRIANGLE_FILLED'
  | 'DIAMOND_FILLED'
  | 'CIRCLE_FILLED'

////////////////////////////////////////////////////////////////////////////////
// Mixins

interface BaseNodeMixin extends PluginDataMixin {
  readonly id: string
  readonly parent: (BaseNode & ChildrenMixin) | null
  name: string // Note: setting this also sets `autoRename` to false on TextNodes
  readonly removed: boolean
  toString(): string
  remove(): void

  setRelaunchData(data: { [command: string]: /* description */ string }): void
  getRelaunchData(): { [command: string]: /* description */ string }
}

interface PluginDataMixin {
  getPluginData(key: string): string
  setPluginData(key: string, value: string): void
  getPluginDataKeys(): string[]

  // Namespace is a string that must be at least 3 alphanumeric characters, and should
  // be a name related to your plugin. Other plugins will be able to read this data.
  getSharedPluginData(namespace: string, key: string): string
  setSharedPluginData(namespace: string, key: string, value: string): void
  getSharedPluginDataKeys(namespace: string): string[]
}

interface SceneNodeMixin {
  visible: boolean
  locked: boolean
  stuckNodes: SceneNode[]
}

interface StickableMixin {
  stuckTo: SceneNode | null
}

interface ChildrenMixin {
  readonly children: ReadonlyArray<SceneNode>

  appendChild(child: SceneNode): void
  insertChild(index: number, child: SceneNode): void

  findChildren(callback?: (node: SceneNode) => boolean): SceneNode[]
  findChild(callback: (node: SceneNode) => boolean): SceneNode | null

  /**
   * If you only need to search immediate children, it is much faster
   * to call node.children.filter(callback) or node.findChildren(callback)
   */
  findAll(callback?: (node: SceneNode) => boolean): SceneNode[]

  /**
   * If you only need to search immediate children, it is much faster
   * to call node.children.find(callback) or node.findChild(callback)
   */
  findOne(callback: (node: SceneNode) => boolean): SceneNode | null

  findAllWithCriteria<T extends NodeType[]>(criteria: {
    types: T
  }): Array<{ type: T[number] } & SceneNode>
}

interface ConstraintMixin {
  constraints: Constraints
}

interface LayoutMixin {
  readonly absoluteTransform: Transform
  relativeTransform: Transform
  x: number
  y: number
  rotation: number // In degrees

  readonly width: number
  readonly height: number
  readonly absoluteRenderBounds: Rect | null
  constrainProportions: boolean

  layoutAlign: 'MIN' | 'CENTER' | 'MAX' | 'STRETCH' | 'INHERIT' // applicable only inside auto-layout frames
  layoutGrow: number

  resize(width: number, height: number): void
  resizeWithoutConstraints(width: number, height: number): void
  rescale(scale: number): void
}

interface BlendMixin {
  opacity: number
  blendMode: 'PASS_THROUGH' | BlendMode
  isMask: boolean
  effects: ReadonlyArray<Effect>
  effectStyleId: string
}

interface ContainerMixin {
  expanded: boolean
  backgrounds: ReadonlyArray<Paint> // DEPRECATED: use 'fills' instead
  backgroundStyleId: string // DEPRECATED: use 'fillStyleId' instead
}

type StrokeCap =
  | 'NONE'
  | 'ROUND'
  | 'SQUARE'
  | 'ARROW_LINES'
  | 'ARROW_EQUILATERAL'
type StrokeJoin = 'MITER' | 'BEVEL' | 'ROUND'
type HandleMirroring = 'NONE' | 'ANGLE' | 'ANGLE_AND_LENGTH'

interface MinimalStrokesMixin {
  strokes: ReadonlyArray<Paint>
  strokeStyleId: string
  strokeWeight: number
  strokeJoin: StrokeJoin | PluginAPI['mixed']
  strokeAlign: 'CENTER' | 'INSIDE' | 'OUTSIDE'
  dashPattern: ReadonlyArray<number>
  strokeGeometry: VectorPaths
}

interface MinimalFillsMixin {
  fills: ReadonlyArray<Paint> | PluginAPI['mixed']
  fillStyleId: string | PluginAPI['mixed']
  fillGeometry: VectorPaths
}

interface GeometryMixin extends MinimalStrokesMixin, MinimalFillsMixin {
  strokeCap: StrokeCap | PluginAPI['mixed']
  strokeMiterLimit: number
  outlineStroke(): VectorNode | null
}

interface CornerMixin {
  cornerRadius: number | PluginAPI['mixed']
  cornerSmoothing: number
}

interface RectangleCornerMixin {
  topLeftRadius: number
  topRightRadius: number
  bottomLeftRadius: number
  bottomRightRadius: number
}

interface ExportMixin {
  exportSettings: ReadonlyArray<ExportSettings>
  exportAsync(settings?: ExportSettings): Promise<Uint8Array> // Defaults to PNG format
}

interface FramePrototypingMixin {
  overflowDirection: OverflowDirection
  numberOfFixedChildren: number

  readonly overlayPositionType: OverlayPositionType
  readonly overlayBackground: OverlayBackground
  readonly overlayBackgroundInteraction: OverlayBackgroundInteraction
}

interface VectorLikeMixin {
  vectorNetwork: VectorNetwork
  vectorPaths: VectorPaths
  handleMirroring: HandleMirroring | PluginAPI['mixed']
}
interface ReactionMixin {
  reactions: ReadonlyArray<Reaction>
}

interface DocumentationLink {
  readonly uri: string
}

interface PublishableMixin {
  description: string
  documentationLinks: ReadonlyArray<DocumentationLink>
  readonly remote: boolean
  readonly key: string // The key to use with "importComponentByKeyAsync", "importComponentSetByKeyAsync", and "importStyleByKeyAsync"
  getPublishStatusAsync(): Promise<PublishStatus>
}

interface DefaultShapeMixin
  extends BaseNodeMixin,
    SceneNodeMixin,
    ReactionMixin,
    BlendMixin,
    GeometryMixin,
    LayoutMixin,
    ExportMixin {}

interface BaseFrameMixin
  extends BaseNodeMixin,
    SceneNodeMixin,
    ChildrenMixin,
    ContainerMixin,
    GeometryMixin,
    CornerMixin,
    RectangleCornerMixin,
    BlendMixin,
    ConstraintMixin,
    LayoutMixin,
    ExportMixin {
  layoutMode: 'NONE' | 'HORIZONTAL' | 'VERTICAL'
  primaryAxisSizingMode: 'FIXED' | 'AUTO' // applicable only if layoutMode != "NONE"
  counterAxisSizingMode: 'FIXED' | 'AUTO' // applicable only if layoutMode != "NONE"

  primaryAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'SPACE_BETWEEN' // applicable only if layoutMode != "NONE"
  counterAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' // applicable only if layoutMode != "NONE"

  paddingLeft: number // applicable only if layoutMode != "NONE"
  paddingRight: number // applicable only if layoutMode != "NONE"
  paddingTop: number // applicable only if layoutMode != "NONE"
  paddingBottom: number // applicable only if layoutMode != "NONE"
  itemSpacing: number // applicable only if layoutMode != "NONE"

  horizontalPadding: number // DEPRECATED: use the individual paddings
  verticalPadding: number // DEPRECATED: use the individual paddings

  layoutGrids: ReadonlyArray<LayoutGrid>
  gridStyleId: string
  clipsContent: boolean
  guides: ReadonlyArray<Guide>
}

interface DefaultFrameMixin
  extends BaseFrameMixin,
    FramePrototypingMixin,
    ReactionMixin {}

interface OpaqueNodeMixin extends BaseNodeMixin, SceneNodeMixin, ExportMixin {
  readonly absoluteTransform: Transform
  relativeTransform: Transform
  x: number
  y: number
  readonly width: number
  readonly height: number
}

interface MinimalBlendMixin {
  readonly opacity?: number
  readonly blendMode?: BlendMode
}

interface VariantMixin {
  readonly variantProperties: { [property: string]: string } | null
}

interface TextSublayerNode {
  readonly hasMissingFont: boolean

  paragraphIndent: number
  paragraphSpacing: number

  fontSize: number | PluginAPI['mixed']
  fontName: FontName | PluginAPI['mixed']
  textCase: TextCase | PluginAPI['mixed']
  textDecoration: TextDecoration | PluginAPI['mixed']
  letterSpacing: LetterSpacing | PluginAPI['mixed']
  lineHeight: LineHeight | PluginAPI['mixed']
  hyperlink: HyperlinkTarget | null | PluginAPI['mixed']

  characters: string
  insertCharacters(
    start: number,
    characters: string,
    useStyle?: 'BEFORE' | 'AFTER'
  ): void
  deleteCharacters(start: number, end: number): void

  getRangeFontSize(start: number, end: number): number | PluginAPI['mixed']
  setRangeFontSize(start: number, end: number, value: number): void
  getRangeFontName(start: number, end: number): FontName | PluginAPI['mixed']
  setRangeFontName(start: number, end: number, value: FontName): void
  getRangeAllFontNames(start: number, end: number): FontName[]
  getRangeTextCase(start: number, end: number): TextCase | PluginAPI['mixed']
  setRangeTextCase(start: number, end: number, value: TextCase): void
  getRangeTextDecoration(
    start: number,
    end: number
  ): TextDecoration | PluginAPI['mixed']
  setRangeTextDecoration(
    start: number,
    end: number,
    value: TextDecoration
  ): void
  getRangeLetterSpacing(
    start: number,
    end: number
  ): LetterSpacing | PluginAPI['mixed']
  setRangeLetterSpacing(start: number, end: number, value: LetterSpacing): void
  getRangeLineHeight(
    start: number,
    end: number
  ): LineHeight | PluginAPI['mixed']
  setRangeLineHeight(start: number, end: number, value: LineHeight): void
  getRangeHyperlink(
    start: number,
    end: number
  ): HyperlinkTarget | null | PluginAPI['mixed']
  setRangeHyperlink(
    start: number,
    end: number,
    value: HyperlinkTarget | null
  ): void
  getRangeFills(start: number, end: number): Paint[] | PluginAPI['mixed']
  setRangeFills(start: number, end: number, value: Paint[]): void
  getRangeTextStyleId(start: number, end: number): string | PluginAPI['mixed']
  setRangeTextStyleId(start: number, end: number, value: string): void
  getRangeFillStyleId(start: number, end: number): string | PluginAPI['mixed']
  setRangeFillStyleId(start: number, end: number, value: string): void
  getRangeListOptions(
    start: number,
    end: number
  ): TextListOptions | PluginAPI['mixed']
  setRangeListOptions(start: number, end: number, value: TextListOptions): void
  getRangeIndentation(start: number, end: number): number | PluginAPI['mixed']
  setRangeIndentation(start: number, end: number, value: number): void
  getStyledTextSegments<
    StyledTextSegmentFields extends (keyof Omit<
      StyledTextSegment,
      'characters' | 'start' | 'end'
    >)[]
  >(
    fields: StyledTextSegmentFields,
    start?: number,
    end?: number
  ): Array<
    Pick<
      StyledTextSegment,
      StyledTextSegmentFields[number] | 'characters' | 'start' | 'end'
    >
  >
}

////////////////////////////////////////////////////////////////////////////////
// Nodes

interface DocumentNode extends BaseNodeMixin {
  readonly type: 'DOCUMENT'

  readonly children: ReadonlyArray<PageNode>

  appendChild(child: PageNode): void
  insertChild(index: number, child: PageNode): void
  findChildren(callback?: (node: PageNode) => boolean): Array<PageNode>
  findChild(callback: (node: PageNode) => boolean): PageNode | null

  /**
   * If you only need to search immediate children, it is much faster
   * to call node.children.filter(callback) or node.findChildren(callback)
   */
  findAll(
    callback?: (node: PageNode | SceneNode) => boolean
  ): Array<PageNode | SceneNode>

  /**
   * If you only need to search immediate children, it is much faster
   * to call node.children.find(callback) or node.findChild(callback)
   */
  findOne(
    callback: (node: PageNode | SceneNode) => boolean
  ): PageNode | SceneNode | null

  findAllWithCriteria<T extends NodeType[]>(criteria: {
    types: T
  }): Array<{ type: T[number] } & (PageNode | SceneNode)>
}

interface PageNode extends BaseNodeMixin, ChildrenMixin, ExportMixin {
  readonly type: 'PAGE'
  clone(): PageNode

  guides: ReadonlyArray<Guide>
  selection: ReadonlyArray<SceneNode>
  selectedTextRange: { node: TextNode; start: number; end: number } | null
  flowStartingPoints: ReadonlyArray<{ nodeId: string; name: string }>

  backgrounds: ReadonlyArray<Paint>

  prototypeBackgrounds: ReadonlyArray<Paint>

  readonly prototypeStartNode:
    | FrameNode
    | GroupNode
    | ComponentNode
    | InstanceNode
    | null
}

interface FrameNode extends DefaultFrameMixin {
  readonly type: 'FRAME'
  clone(): FrameNode
}

interface GroupNode
  extends BaseNodeMixin,
    SceneNodeMixin,
    ReactionMixin,
    ChildrenMixin,
    ContainerMixin,
    BlendMixin,
    LayoutMixin,
    ExportMixin {
  readonly type: 'GROUP'
  clone(): GroupNode
}

interface SliceNode
  extends BaseNodeMixin,
    SceneNodeMixin,
    LayoutMixin,
    ExportMixin {
  readonly type: 'SLICE'
  clone(): SliceNode
}

interface RectangleNode
  extends DefaultShapeMixin,
    ConstraintMixin,
    CornerMixin,
    RectangleCornerMixin {
  readonly type: 'RECTANGLE'
  clone(): RectangleNode
}

interface LineNode extends DefaultShapeMixin, ConstraintMixin {
  readonly type: 'LINE'
  clone(): LineNode
}

interface EllipseNode extends DefaultShapeMixin, ConstraintMixin, CornerMixin {
  readonly type: 'ELLIPSE'
  clone(): EllipseNode
  arcData: ArcData
}

interface PolygonNode extends DefaultShapeMixin, ConstraintMixin, CornerMixin {
  readonly type: 'POLYGON'
  clone(): PolygonNode
  pointCount: number
}

interface StarNode extends DefaultShapeMixin, ConstraintMixin, CornerMixin {
  readonly type: 'STAR'
  clone(): StarNode
  pointCount: number
  innerRadius: number
}

interface VectorNode
  extends DefaultShapeMixin,
    ConstraintMixin,
    CornerMixin,
    VectorLikeMixin {
  readonly type: 'VECTOR'
  clone(): VectorNode
}

interface TextNode
  extends DefaultShapeMixin,
    ConstraintMixin,
    TextSublayerNode {
  readonly type: 'TEXT'
  clone(): TextNode

  textAlignHorizontal: 'LEFT' | 'CENTER' | 'RIGHT' | 'JUSTIFIED'
  textAlignVertical: 'TOP' | 'CENTER' | 'BOTTOM'
  textAutoResize: 'NONE' | 'WIDTH_AND_HEIGHT' | 'HEIGHT'
  autoRename: boolean

  textStyleId: string | PluginAPI['mixed']
}

interface ComponentSetNode extends BaseFrameMixin, PublishableMixin {
  readonly type: 'COMPONENT_SET'
  clone(): ComponentSetNode
  readonly defaultVariant: ComponentNode
  readonly variantGroupProperties: {
    [property: string]: { values: string[] }
  }
}

interface ComponentNode
  extends DefaultFrameMixin,
    PublishableMixin,
    VariantMixin {
  readonly type: 'COMPONENT'
  clone(): ComponentNode
  createInstance(): InstanceNode
}

interface InstanceNode extends DefaultFrameMixin, VariantMixin {
  readonly type: 'INSTANCE'
  clone(): InstanceNode
  mainComponent: ComponentNode | null
  swapComponent(componentNode: ComponentNode): void
  setProperties(properties: { [property: string]: string }): void
  detachInstance(): FrameNode
  scaleFactor: number
}

interface BooleanOperationNode
  extends DefaultShapeMixin,
    ChildrenMixin,
    CornerMixin {
  readonly type: 'BOOLEAN_OPERATION'
  clone(): BooleanOperationNode
  booleanOperation: 'UNION' | 'INTERSECT' | 'SUBTRACT' | 'EXCLUDE'

  expanded: boolean
}

interface StickyNode
  extends OpaqueNodeMixin,
    MinimalFillsMixin,
    MinimalBlendMixin {
  readonly type: 'STICKY'
  readonly text: TextSublayerNode
  authorVisible: boolean
  authorName: string
  resize(width: number, height: number): void
  rescale(scale: number): void
  clone(): StickyNode
}

interface StampNode extends DefaultShapeMixin, ConstraintMixin, StickableMixin {
  readonly type: 'STAMP'
  clone(): StampNode
}

interface HighlightNode
  extends DefaultShapeMixin,
    ConstraintMixin,
    CornerMixin,
    ReactionMixin,
    VectorLikeMixin,
    StickableMixin {
  readonly type: 'HIGHLIGHT'
  clone(): HighlightNode
}

interface WashiTapeNode extends DefaultShapeMixin, StickableMixin {
  readonly type: 'WASHI_TAPE'
  clone(): WashiTapeNode
}

interface ShapeWithTextNode
  extends OpaqueNodeMixin,
    MinimalFillsMixin,
    MinimalBlendMixin,
    MinimalStrokesMixin {
  readonly type: 'SHAPE_WITH_TEXT'
  shapeType:
    | 'SQUARE'
    | 'ELLIPSE'
    | 'ROUNDED_RECTANGLE'
    | 'DIAMOND'
    | 'TRIANGLE_UP'
    | 'TRIANGLE_DOWN'
    | 'PARALLELOGRAM_RIGHT'
    | 'PARALLELOGRAM_LEFT'
    | 'ENG_DATABASE'
    | 'ENG_QUEUE'
    | 'ENG_FILE'
    | 'ENG_FOLDER'
  readonly text: TextSublayerNode
  readonly cornerRadius?: number

  resize(width: number, height: number): void
  rescale(scale: number): void
  clone(): ShapeWithTextNode
}

interface CodeBlockNode extends OpaqueNodeMixin, MinimalBlendMixin {
  readonly type: 'CODE_BLOCK'
  code: string
  codeLanguage:
    | 'TYPESCRIPT'
    | 'CPP'
    | 'RUBY'
    | 'CSS'
    | 'JAVASCRIPT'
    | 'HTML'
    | 'JSON'
    | 'GRAPHQL'
    | 'PYTHON'
    | 'GO'
    | 'SQL'
    | 'SWIFT'
    | 'KOTLIN'
    | 'RUST'
  clone(): CodeBlockNode
}

interface LayerSublayerNode {
  fills: Paint[] | PluginAPI['mixed']
}

interface ConnectorNode
  extends OpaqueNodeMixin,
    MinimalBlendMixin,
    MinimalStrokesMixin {
  readonly type: 'CONNECTOR'
  readonly text: TextSublayerNode
  readonly textBackground: LayerSublayerNode
  readonly cornerRadius?: number
  connectorLineType: 'ELBOWED' | 'STRAIGHT'
  connectorStart: ConnectorEndpoint
  connectorEnd: ConnectorEndpoint
  connectorStartStrokeCap: ConnectorStrokeCap
  connectorEndStrokeCap: ConnectorStrokeCap
  clone(): ConnectorNode
}

interface WidgetNode extends OpaqueNodeMixin, StickableMixin {
  readonly type: 'WIDGET'
  readonly widgetId: string
  readonly widgetSyncedState: { [key: string]: any }
  clone(): WidgetNode
  cloneWidget(
    syncedStateOverrides: { [name: string]: any },
    syncedMapOverrides?: { [mapName: string]: { [key: string]: any } }
  ): WidgetNode
}

interface EmbedData {
  srcUrl: string
  canonicalUrl: string | null
  title: string | null
  description: string | null
  provider: string | null
}
interface EmbedNode extends OpaqueNodeMixin, SceneNodeMixin {
  readonly type: 'EMBED'
  readonly embedData: EmbedData
  clone(): EmbedNode
}

interface LinkUnfurlData {
  url: string
  title: string | null
  description: string | null
  provider: string | null
}
interface LinkUnfurlNode extends OpaqueNodeMixin, SceneNodeMixin {
  readonly type: 'LINK_UNFURL'
  readonly linkUnfurlData: LinkUnfurlData
  clone(): LinkUnfurlNode
}

interface MediaData {
  hash: string
}
interface MediaNode extends OpaqueNodeMixin {
  readonly type: 'MEDIA'
  readonly mediaData: MediaData

  resize(width: number, height: number): void
  resizeWithoutConstraints(width: number, height: number): void
  clone(): MediaNode
}

interface SectionNode
  extends ChildrenMixin,
    MinimalFillsMixin,
    OpaqueNodeMixin {
  readonly type: 'SECTION'
  clone(): SectionNode
  resizeWithoutConstraints(width: number, height: number): void
}

type BaseNode = DocumentNode | PageNode | SceneNode

type SceneNode =
  | SliceNode
  | FrameNode
  | GroupNode
  | ComponentSetNode
  | ComponentNode
  | InstanceNode
  | BooleanOperationNode
  | VectorNode
  | StarNode
  | LineNode
  | EllipseNode
  | PolygonNode
  | RectangleNode
  | TextNode
  | StickyNode
  | ConnectorNode
  | ShapeWithTextNode
  | CodeBlockNode
  | StampNode
  | WidgetNode
  | EmbedNode
  | LinkUnfurlNode
  | MediaNode
  | SectionNode
  | HighlightNode
  | WashiTapeNode

type NodeType = BaseNode['type']

////////////////////////////////////////////////////////////////////////////////
// Styles
type StyleType = 'PAINT' | 'TEXT' | 'EFFECT' | 'GRID'

interface BaseStyle extends PublishableMixin, PluginDataMixin {
  readonly id: string
  readonly type: StyleType
  name: string
  remove(): void
}

interface PaintStyle extends BaseStyle {
  type: 'PAINT'
  paints: ReadonlyArray<Paint>
}

interface TextStyle extends BaseStyle {
  type: 'TEXT'
  fontSize: number
  textDecoration: TextDecoration
  fontName: FontName
  letterSpacing: LetterSpacing
  lineHeight: LineHeight
  paragraphIndent: number
  paragraphSpacing: number
  textCase: TextCase
}

interface EffectStyle extends BaseStyle {
  type: 'EFFECT'
  effects: ReadonlyArray<Effect>
}

interface GridStyle extends BaseStyle {
  type: 'GRID'
  layoutGrids: ReadonlyArray<LayoutGrid>
}

////////////////////////////////////////////////////////////////////////////////
// Other

interface Image {
  readonly hash: string
  getBytesAsync(): Promise<Uint8Array>
}

interface User {
  readonly id: string | null
  readonly name: string
  readonly photoUrl: string | null

  // The current user's multiplayer color. This will match the color of their
  // dot stamps and cursor.
  readonly color: string
  readonly sessionId: number
}

interface ActiveUser extends User {
  readonly position: Vector | null
  readonly viewport: Rect
  readonly selection: string[]
}

import { exportGIF } from './exportGIF'
import { exportImage, restoreCanvas } from './exportImage'
import { exportVideo } from './exportVideo'
import { useUIStore } from '../../store'

//@ts-ignore
export const figma: PluginAPI = {}

export const getCodeString = (func) => {
  //@ts-ignore
  const code = func.toString()
  const body = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'))
  return body
}

export const postFigmaMessage = async (func) => {
  parent.postMessage(
    {
      pluginMessage: {
        type: 'execute',
        code: getCodeString(func),
      },
    },
    '*'
  )
}

export const postFigmaMessageForExport = async (
  option,
  callback,
  controller
) => {
  const { setIsExporting } = useUIStore.getState()
  setIsExporting(true)

  let originalStyle = ''

  try {
    const supportsVideoOnCanvas =
      option.editorType === 'slides' || option.editorType === 'buzz'

    if (option.destination === 'onCanvas') {
      if (supportsVideoOnCanvas && option.format === 'webm') {
        // Slides and Buzz support video on canvas
        const result = await exportVideo(option, callback, controller)
        originalStyle = result.originalStyle
        if (result.bytes) {
          parent.postMessage(
            {
              pluginMessage: {
                type: 'SNAPSHOT_VIDEO',
                code: getCodeString(callback),
                bytes: result.bytes,
              },
            },
            '*'
          )
        }
        callback(-1)
      } else {
        // Figma/FigJam only support GIF on canvas
        const result = await exportGIF(option, callback, controller)
        originalStyle = result.originalStyle
        parent.postMessage(
          {
            pluginMessage: {
              type: 'SNAPSHOT_GIF',
              code: getCodeString(callback),
              bytes: result.bytes,
            },
          },
          '*'
        )
        callback(-1)
      }
    } else if (option.destination === 'localFile') {
      if (option.format === 'gif') {
        const result = await exportGIF(option, callback, controller)
        originalStyle = result.originalStyle
      } else if (option.format === 'webm') {
        const result = await exportVideo(option, callback, controller)
        originalStyle = result.originalStyle
      }
      callback(-1)
    }
  } finally {
    setIsExporting(false)
    // Restore canvas AFTER hiding loading overlay
    restoreCanvas(originalStyle)
  }
}

export const postFigmaMessageForSnapShot = async (
  func,
  nodeWidth?: number,
  nodeHeight?: number
) => {
  const { setIsExporting } = useUIStore.getState()
  setIsExporting(true)

  let originalStyle = ''
  try {
    const result = await exportImage(nodeWidth, nodeHeight)
    originalStyle = result.originalStyle

    parent.postMessage(
      {
        pluginMessage: {
          type: 'SNAPSHOT',
          //@ts-ignore
          code: getCodeString(func),
          bytes: result.bytes,
        },
      },
      '*'
    )
  } finally {
    setIsExporting(false)
    // Restore canvas AFTER hiding loading overlay
    restoreCanvas(originalStyle)
  }
}
