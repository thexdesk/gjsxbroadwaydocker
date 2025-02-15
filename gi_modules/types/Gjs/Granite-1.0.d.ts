// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Granite-1.0
 */

import type * as Gjs from './Gjs';
import type Pango from './Pango-1.0';
import type cairo from './cairo-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-3.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';
import type Gee from './Gee-0.8';

export namespace Granite {

enum ServicesLogLevel {
    DEBUG,
    INFO,
    NOTIFY,
    WARN,
    ERROR,
    FATAL,
}
enum ServicesContractorError {
    SERVICE_NOT_AVAILABLE,
}
enum WidgetsDynamicNotebookTabBarBehavior {
    ALWAYS,
    SINGLE,
    NEVER,
}
enum WidgetsStorageBarItemDescription {
    OTHER,
    AUDIO,
    VIDEO,
    PHOTO,
    APP,
    FILES,
}
enum CollapseMode {
    NONE,
    LEFT,
    TOP,
    FIRST,
    RIGHT,
    BOTTOM,
    LAST,
}
enum TextStyle {
    TITLE,
    H1,
    H2,
    H3,
}
enum CloseButtonPosition {
    LEFT,
    RIGHT,
}
enum SettingsPageStatusType {
    ERROR,
    OFFLINE,
    SUCCESS,
    WARNING,
    NONE,
}
enum SettingsColorScheme {
    NO_PREFERENCE,
    DARK,
    LIGHT,
}
const StyleClassBADGE: string
const StyleClassCATEGORY_EXPANDER: string
const StyleClassCONTENT_VIEW: string
const StyleClassCONTENT_VIEW_WINDOW: string
const StyleClassCOMPOSITED: string
const StyleClassDECORATED_WINDOW: string
const StyleClassH1_TEXT: string
const StyleClassH2_TEXT: string
const StyleClassH3_TEXT: string
const StyleClassHELP_BUTTON: string
const StyleClassOVERLAY_BAR: string
const StyleClassPOPOVER: string
const StyleClassPOPOVER_BG: string
const StyleClassSOURCE_LIST: string
const StyleClassTHIN_PANE_SEPARATOR: string
const StyleClassTITLE_TEXT: string
const STYLE_CLASS_ACCENT: string
const STYLE_CLASS_AVATAR: string
const STYLE_CLASS_BACK_BUTTON: string
const STYLE_CLASS_BADGE: string
const STYLE_CLASS_CARD: string
const STYLE_CLASS_CATEGORY_EXPANDER: string
const STYLE_CLASS_CHECKERBOARD: string
const STYLE_CLASS_COLOR_BUTTON: string
const STYLE_CLASS_DEFAULT_DECORATION: string
const STYLE_CLASS_H1_LABEL: string
const STYLE_CLASS_H2_LABEL: string
const STYLE_CLASS_H3_LABEL: string
const STYLE_CLASS_H4_LABEL: string
const STYLE_CLASS_KEYCAP: string
const STYLE_CLASS_MODE_SWITCH: string
const STYLE_CLASS_OVERLAY_BAR: string
const STYLE_CLASS_PRIMARY_LABEL: string
const STYLE_CLASS_ROUNDED: string
const STYLE_CLASS_SEEKBAR: string
const STYLE_CLASS_SMALL_LABEL: string
const STYLE_CLASS_SOURCE_LIST: string
const STYLE_CLASS_STORAGEBAR: string
const STYLE_CLASS_TERMINAL: string
const STYLE_CLASS_WELCOME: string
const STYLE_CLASS_WARMTH: string
const STYLE_CLASS_TEMPERATURE: string
const TRANSITION_DURATION_CLOSE: number
const TRANSITION_DURATION_IN_PLACE: number
const TRANSITION_DURATION_OPEN: number
const TOOLTIP_SECONDARY_TEXT_MARKUP: string
function date_time_get_default_time_format(is_12h: boolean, with_second: boolean): string
function date_time_get_relative_datetime(date_time: GLib.DateTime): string
function date_time_is_same_day(day1: GLib.DateTime, day2: GLib.DateTime): boolean
function date_time_get_default_date_format(with_weekday: boolean, with_day: boolean, with_year: boolean): string
function date_time_seconds_to_time(seconds: number): string
function services_application_set_badge(count: number, _callback_: Gio.AsyncReadyCallback | null): void
function services_application_set_badge_finish(_res_: Gio.AsyncResult): boolean
function services_application_set_badge_visible(visible: boolean, _callback_: Gio.AsyncReadyCallback | null): void
function services_application_set_badge_visible_finish(_res_: Gio.AsyncResult): boolean
function services_application_set_progress(progress: number, _callback_: Gio.AsyncReadyCallback | null): void
function services_application_set_progress_finish(_res_: Gio.AsyncResult): boolean
function services_application_set_progress_visible(visible: boolean, _callback_: Gio.AsyncReadyCallback | null): void
function services_application_set_progress_visible_finish(_res_: Gio.AsyncResult): boolean
function widgets_utils_set_color_primary(window: Gtk.Widget, color: Gdk.RGBA, priority: number): Gtk.CssProvider | null
function widgets_utils_set_theming(widget: Gtk.Widget, stylesheet: string, class_name: string | null, priority: number): Gtk.CssProvider | null
function widgets_utils_set_theming_for_screen(screen: Gdk.Screen, stylesheet: string, priority: number): Gtk.CssProvider | null
function widgets_utils_get_css_provider(stylesheet: string): Gtk.CssProvider | null
function widgets_utils_apply_text_style_to_label(text_style: TextStyle, label: Gtk.Label): void
function widgets_utils_get_default_close_button_position(): [ /* returnType */ boolean, /* position */ CloseButtonPosition ]
function widgets_utils_get_button_layout_schema(): string | null
function widgets_storage_bar_item_description_get_class(description: WidgetsStorageBarItemDescription): string | null
function widgets_storage_bar_item_description_get_name(description: WidgetsStorageBarItemDescription): string
function text_style_get_stylesheet(): [ /* returnType */ string, /* style_class */ string ]
function accel_to_string(accel: string | null): string
function markup_accel_tooltip(accels: string[] | null, description: string | null): string
function contrasting_foreground_color(bg_color: Gdk.RGBA): /* result */ Gdk.RGBA
interface WidgetsDroppedDelegate {
    (): void
}
interface ServicesContract_ConstructProps extends GObject.Object_ConstructProps {
}

interface ServicesContract extends GObject.Object {

    // Owm methods of Granite-1.0.Granite.ServicesContract

    get_display_name(): string
    get_description(): string
    get_icon(): Gio.Icon
    execute_with_file(file: Gio.File): void
    execute_with_files(files: Gio.File[]): void

    // Own virtual methods of Granite-1.0.Granite.ServicesContract

    vfunc_get_display_name(): string
    vfunc_get_description(): string
    vfunc_get_icon(): Gio.Icon
    vfunc_execute_with_file(file: Gio.File): void
    vfunc_execute_with_files(files: Gio.File[]): void

    // Class property signals of Granite-1.0.Granite.ServicesContract

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ServicesContract {

    // Own properties of Granite-1.0.Granite.ServicesContract

    static name: string
    static $gtype: GObject.GType<ServicesContract>

    // Constructors of Granite-1.0.Granite.ServicesContract

    constructor(config?: ServicesContract_ConstructProps) 
    _init(config?: ServicesContract_ConstructProps): void
}

interface ServicesSettingsSerializable_ConstructProps extends GObject.Object_ConstructProps {
}

interface ServicesSettingsSerializable extends GObject.Object {

    // Owm methods of Granite-1.0.Granite.ServicesSettingsSerializable

    settings_serialize(): string
    settings_deserialize(s: string): void

    // Own virtual methods of Granite-1.0.Granite.ServicesSettingsSerializable

    vfunc_settings_serialize(): string
    vfunc_settings_deserialize(s: string): void

    // Class property signals of Granite-1.0.Granite.ServicesSettingsSerializable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ServicesSettingsSerializable {

    // Own properties of Granite-1.0.Granite.ServicesSettingsSerializable

    static name: string
    static $gtype: GObject.GType<ServicesSettingsSerializable>

    // Constructors of Granite-1.0.Granite.ServicesSettingsSerializable

    constructor(config?: ServicesSettingsSerializable_ConstructProps) 
    _init(config?: ServicesSettingsSerializable_ConstructProps): void
}

interface WidgetsSourceListSortable_ConstructProps extends WidgetsSourceListExpandableItem_ConstructProps, GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `user-moved-item`
 */
interface WidgetsSourceListSortable_UserMovedItemSignalCallback {
    ($obj: WidgetsSourceListSortable, moved: WidgetsSourceListItem): void
}

interface WidgetsSourceListSortable extends WidgetsSourceListExpandableItem {

    // Owm methods of Granite-1.0.Granite.WidgetsSourceListSortable

    allow_dnd_sorting(): boolean
    compare(a: WidgetsSourceListItem, b: WidgetsSourceListItem): number

    // Own virtual methods of Granite-1.0.Granite.WidgetsSourceListSortable

    vfunc_allow_dnd_sorting(): boolean
    vfunc_compare(a: WidgetsSourceListItem, b: WidgetsSourceListItem): number

    // Own signals of Granite-1.0.Granite.WidgetsSourceListSortable

    connect(sigName: "user-moved-item", callback: WidgetsSourceListSortable_UserMovedItemSignalCallback): number
    connect_after(sigName: "user-moved-item", callback: WidgetsSourceListSortable_UserMovedItemSignalCallback): number
    emit(sigName: "user-moved-item", moved: WidgetsSourceListItem, ...args: any[]): void

    // Class property signals of Granite-1.0.Granite.WidgetsSourceListSortable

    connect(sigName: "notify::collapsible", callback: (($obj: WidgetsSourceListSortable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsible", callback: (($obj: WidgetsSourceListSortable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::collapsible", ...args: any[]): void
    connect(sigName: "notify::expanded", callback: (($obj: WidgetsSourceListSortable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expanded", callback: (($obj: WidgetsSourceListSortable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expanded", ...args: any[]): void
    connect(sigName: "notify::n-children", callback: (($obj: WidgetsSourceListSortable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-children", callback: (($obj: WidgetsSourceListSortable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-children", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: WidgetsSourceListSortable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: WidgetsSourceListSortable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WidgetsSourceListSortable extends GObject.Object {

    // Own properties of Granite-1.0.Granite.WidgetsSourceListSortable

    static name: string
    static $gtype: GObject.GType<WidgetsSourceListSortable>

    // Constructors of Granite-1.0.Granite.WidgetsSourceListSortable

    constructor(config?: WidgetsSourceListSortable_ConstructProps) 
    _init(config?: WidgetsSourceListSortable_ConstructProps): void

    // Conflicting static methods

    static new(...args: any[]): any
}

interface WidgetsSourceListDragSource_ConstructProps extends WidgetsSourceListItem_ConstructProps, GObject.Object_ConstructProps {
}

interface WidgetsSourceListDragSource extends WidgetsSourceListItem {

    // Owm methods of Granite-1.0.Granite.WidgetsSourceListDragSource

    draggable(): boolean
    prepare_selection_data(selection_data: Gtk.SelectionData): void

    // Own virtual methods of Granite-1.0.Granite.WidgetsSourceListDragSource

    vfunc_draggable(): boolean
    vfunc_prepare_selection_data(selection_data: Gtk.SelectionData): void

    // Class property signals of Granite-1.0.Granite.WidgetsSourceListDragSource

    connect(sigName: "notify::parent", callback: (($obj: WidgetsSourceListDragSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WidgetsSourceListDragSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WidgetsSourceListDragSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetsSourceListDragSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: WidgetsSourceListDragSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: WidgetsSourceListDragSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::markup", callback: (($obj: WidgetsSourceListDragSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: (($obj: WidgetsSourceListDragSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::markup", ...args: any[]): void
    connect(sigName: "notify::badge", callback: (($obj: WidgetsSourceListDragSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::badge", callback: (($obj: WidgetsSourceListDragSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::badge", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: WidgetsSourceListDragSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: WidgetsSourceListDragSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WidgetsSourceListDragSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsSourceListDragSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: (($obj: WidgetsSourceListDragSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: WidgetsSourceListDragSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectable", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: WidgetsSourceListDragSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: WidgetsSourceListDragSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: (($obj: WidgetsSourceListDragSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable", callback: (($obj: WidgetsSourceListDragSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::activatable-tooltip", callback: (($obj: WidgetsSourceListDragSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable-tooltip", callback: (($obj: WidgetsSourceListDragSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activatable-tooltip", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WidgetsSourceListDragSource extends GObject.Object {

    // Own properties of Granite-1.0.Granite.WidgetsSourceListDragSource

    static name: string
    static $gtype: GObject.GType<WidgetsSourceListDragSource>

    // Constructors of Granite-1.0.Granite.WidgetsSourceListDragSource

    constructor(config?: WidgetsSourceListDragSource_ConstructProps) 
    _init(config?: WidgetsSourceListDragSource_ConstructProps): void
}

interface WidgetsSourceListDragDest_ConstructProps extends WidgetsSourceListItem_ConstructProps, GObject.Object_ConstructProps {
}

interface WidgetsSourceListDragDest extends WidgetsSourceListItem {

    // Owm methods of Granite-1.0.Granite.WidgetsSourceListDragDest

    data_drop_possible(context: Gdk.DragContext, data: Gtk.SelectionData): boolean
    data_received(context: Gdk.DragContext, data: Gtk.SelectionData): Gdk.DragAction

    // Own virtual methods of Granite-1.0.Granite.WidgetsSourceListDragDest

    vfunc_data_drop_possible(context: Gdk.DragContext, data: Gtk.SelectionData): boolean
    vfunc_data_received(context: Gdk.DragContext, data: Gtk.SelectionData): Gdk.DragAction

    // Class property signals of Granite-1.0.Granite.WidgetsSourceListDragDest

    connect(sigName: "notify::parent", callback: (($obj: WidgetsSourceListDragDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WidgetsSourceListDragDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WidgetsSourceListDragDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetsSourceListDragDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: WidgetsSourceListDragDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: WidgetsSourceListDragDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::markup", callback: (($obj: WidgetsSourceListDragDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: (($obj: WidgetsSourceListDragDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::markup", ...args: any[]): void
    connect(sigName: "notify::badge", callback: (($obj: WidgetsSourceListDragDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::badge", callback: (($obj: WidgetsSourceListDragDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::badge", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: WidgetsSourceListDragDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: WidgetsSourceListDragDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WidgetsSourceListDragDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsSourceListDragDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: (($obj: WidgetsSourceListDragDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: WidgetsSourceListDragDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectable", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: WidgetsSourceListDragDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: WidgetsSourceListDragDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: (($obj: WidgetsSourceListDragDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable", callback: (($obj: WidgetsSourceListDragDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::activatable-tooltip", callback: (($obj: WidgetsSourceListDragDest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable-tooltip", callback: (($obj: WidgetsSourceListDragDest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activatable-tooltip", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WidgetsSourceListDragDest extends GObject.Object {

    // Own properties of Granite-1.0.Granite.WidgetsSourceListDragDest

    static name: string
    static $gtype: GObject.GType<WidgetsSourceListDragDest>

    // Constructors of Granite-1.0.Granite.WidgetsSourceListDragDest

    constructor(config?: WidgetsSourceListDragDest_ConstructProps) 
    _init(config?: WidgetsSourceListDragDest_ConstructProps): void
}

// Workaround
/** @ignore */
export interface GraniteServicesSettingsSerializable_ConstructProps extends ServicesSettingsSerializable_ConstructProps {}
/** @ignore */
export interface GraniteServicesSettingsSerializable extends ServicesSettingsSerializable {}
interface DrawingBufferSurface_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.DrawingBufferSurface

    surface?: cairo.Surface | null
    width?: number | null
    height?: number | null
}

interface DrawingBufferSurface {

    // Own properties of Granite-1.0.Granite.DrawingBufferSurface

    surface: cairo.Surface
    width: number
    height: number
    readonly context: cairo.Context

    // Owm methods of Granite-1.0.Granite.DrawingBufferSurface

    get_surface(): cairo.Surface
    get_width(): number
    get_height(): number
    get_context(): cairo.Context
    clear(): void
    load_to_pixbuf(): GdkPixbuf.Pixbuf
    average_color(): DrawingColor
    fast_blur(radius: number, process_count: number): void
    exponential_blur(radius: number): void
    gaussian_blur(radius: number): void

    // Class property signals of Granite-1.0.Granite.DrawingBufferSurface

    connect(sigName: "notify::surface", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::context", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: DrawingBufferSurface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DrawingBufferSurface extends GObject.Object {

    // Own properties of Granite-1.0.Granite.DrawingBufferSurface

    static name: string
    static $gtype: GObject.GType<DrawingBufferSurface>

    // Constructors of Granite-1.0.Granite.DrawingBufferSurface

    constructor(config?: DrawingBufferSurface_ConstructProps) 
    constructor(width: number, height: number) 
    static new(width: number, height: number): DrawingBufferSurface
    static with_surface(width: number, height: number, model: cairo.Surface): DrawingBufferSurface
    static with_buffer_surface(width: number, height: number, model: DrawingBufferSurface): DrawingBufferSurface
    _init(config?: DrawingBufferSurface_ConstructProps): void
}

interface DrawingColor_ConstructProps extends GraniteServicesSettingsSerializable_ConstructProps, GObject.Object_ConstructProps {
}

interface DrawingColor extends GraniteServicesSettingsSerializable {

    // Own fields of Granite-1.0.Granite.DrawingColor

    R: number
    G: number
    B: number
    A: number

    // Owm methods of Granite-1.0.Granite.DrawingColor

    set_hue(hue: number): DrawingColor
    set_sat(sat: number): DrawingColor
    set_val(val: number): DrawingColor
    set_alpha(alpha: number): DrawingColor
    get_hue(): number
    get_sat(): number
    get_val(): number
    add_hue(val: number): DrawingColor
    set_min_sat(sat: number): DrawingColor
    set_min_value(val: number): DrawingColor
    set_max_sat(sat: number): DrawingColor
    set_max_val(val: number): DrawingColor
    multiply_sat(amount: number): DrawingColor
    brighten_val(amount: number): DrawingColor
    darken_val(amount: number): DrawingColor
    darken_by_sat(amount: number): DrawingColor
    to_string(): string
    to_int(): number

    // Class property signals of Granite-1.0.Granite.DrawingColor

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DrawingColor extends GObject.Object {

    // Own properties of Granite-1.0.Granite.DrawingColor

    static name: string
    static $gtype: GObject.GType<DrawingColor>

    // Constructors of Granite-1.0.Granite.DrawingColor

    constructor(config?: DrawingColor_ConstructProps) 
    constructor(R: number, G: number, B: number, A: number) 
    static new(R: number, G: number, B: number, A: number): DrawingColor
    static from_gdk(color: Gdk.Color): DrawingColor
    static from_rgba(color: Gdk.RGBA): DrawingColor
    static from_string(color: string): DrawingColor
    static from_int(color: number): DrawingColor
    _init(config?: DrawingColor_ConstructProps): void
    static alpha_from_int(color: number): number
    static red_from_int(color: number): number
    static green_from_int(color: number): number
    static blue_from_int(color: number): number
}

interface DrawingUtilities_ConstructProps extends GObject.Object_ConstructProps {
}

interface DrawingUtilities {

    // Class property signals of Granite-1.0.Granite.DrawingUtilities

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DrawingUtilities extends GObject.Object {

    // Own properties of Granite-1.0.Granite.DrawingUtilities

    static name: string
    static $gtype: GObject.GType<DrawingUtilities>

    // Constructors of Granite-1.0.Granite.DrawingUtilities

    constructor(config?: DrawingUtilities_ConstructProps) 
    constructor() 
    static new(): DrawingUtilities
    _init(config?: DrawingUtilities_ConstructProps): void
    static cairo_rounded_rectangle(cr: cairo.Context, x: number, y: number, width: number, height: number, radius: number): void
    static average_color(source: GdkPixbuf.Pixbuf): DrawingColor
}

interface ServicesContractorProxy_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `contracts-changed`
 */
interface ServicesContractorProxy_ContractsChangedSignalCallback {
    ($obj: ServicesContractorProxy): void
}

interface ServicesContractorProxy {

    // Own signals of Granite-1.0.Granite.ServicesContractorProxy

    connect(sigName: "contracts-changed", callback: ServicesContractorProxy_ContractsChangedSignalCallback): number
    connect_after(sigName: "contracts-changed", callback: ServicesContractorProxy_ContractsChangedSignalCallback): number
    emit(sigName: "contracts-changed", ...args: any[]): void

    // Class property signals of Granite-1.0.Granite.ServicesContractorProxy

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ServicesContractorProxy extends GObject.Object {

    // Own properties of Granite-1.0.Granite.ServicesContractorProxy

    static name: string
    static $gtype: GObject.GType<ServicesContractorProxy>

    // Constructors of Granite-1.0.Granite.ServicesContractorProxy

    constructor(config?: ServicesContractorProxy_ConstructProps) 
    _init(config?: ServicesContractorProxy_ConstructProps): void
    static get_instance(): any
    static get_all_contracts(): Gee.List
    static get_contracts_by_mime(mime_type: string): Gee.List
    static get_contracts_by_mimelist(mime_types: string[]): Gee.List
    static get_contracts_for_file(file: Gio.File): Gee.List
    static get_contracts_for_files(files: Gio.File[]): Gee.List
}

interface ServicesIconFactory_ConstructProps extends GObject.Object_ConstructProps {
}

interface ServicesIconFactory {

    // Owm methods of Granite-1.0.Granite.ServicesIconFactory

    load_symbolic_icon_from_gicon(style: Gtk.StyleContext, gicon: Gio.Icon, size: number): GdkPixbuf.Pixbuf | null
    load_symbolic_icon(style: Gtk.StyleContext, iconname: string, size: number): GdkPixbuf.Pixbuf | null

    // Class property signals of Granite-1.0.Granite.ServicesIconFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ServicesIconFactory extends GObject.Object {

    // Own properties of Granite-1.0.Granite.ServicesIconFactory

    static name: string
    static $gtype: GObject.GType<ServicesIconFactory>

    // Constructors of Granite-1.0.Granite.ServicesIconFactory

    constructor(config?: ServicesIconFactory_ConstructProps) 
    constructor() 
    static new(): ServicesIconFactory
    _init(config?: ServicesIconFactory_ConstructProps): void
    static get_default(): any
}

interface ServicesLogger_ConstructProps extends GObject.Object_ConstructProps {
}

interface ServicesLogger {

    // Class property signals of Granite-1.0.Granite.ServicesLogger

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ServicesLogger extends GObject.Object {

    // Own properties of Granite-1.0.Granite.ServicesLogger

    static name: string
    static $gtype: GObject.GType<ServicesLogger>

    // Constructors of Granite-1.0.Granite.ServicesLogger

    constructor(config?: ServicesLogger_ConstructProps) 
    constructor() 
    static new(): ServicesLogger
    _init(config?: ServicesLogger_ConstructProps): void
    static get_DisplayLevel(): any
    static set_DisplayLevel(value: any): void
    static initialize(app_name: string): void
    static notification(msg: string): void
}

interface ServicesPaths_ConstructProps extends GObject.Object_ConstructProps {
}

interface ServicesPaths {

    // Class property signals of Granite-1.0.Granite.ServicesPaths

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ServicesPaths extends GObject.Object {

    // Own properties of Granite-1.0.Granite.ServicesPaths

    static name: string
    static $gtype: GObject.GType<ServicesPaths>

    // Constructors of Granite-1.0.Granite.ServicesPaths

    constructor(config?: ServicesPaths_ConstructProps) 
    constructor() 
    static new(): ServicesPaths
    _init(config?: ServicesPaths_ConstructProps): void
    static get_home_folder(): Gio.File
    static set_home_folder(value: Gio.File): void
    static get_data_folder(): Gio.File
    static set_data_folder(value: Gio.File): void
    static get_xdg_config_home_folder(): Gio.File
    static set_xdg_config_home_folder(value: Gio.File): void
    static get_xdg_data_home_folder(): Gio.File
    static set_xdg_data_home_folder(value: Gio.File): void
    static get_xdg_cache_home_folder(): Gio.File
    static set_xdg_cache_home_folder(value: Gio.File): void
    static get_xdg_data_dir_folders(): Gio.File[]
    static set_xdg_data_dir_folders(value: Gio.File[]): void
    static get_user_config_folder(): Gio.File
    static set_user_config_folder(value: Gio.File): void
    static get_user_data_folder(): Gio.File
    static set_user_data_folder(value: Gio.File): void
    static get_user_cache_folder(): Gio.File
    static set_user_cache_folder(value: Gio.File): void
    static initialize(app_name: string, data_folder_path: string): void
    static ensure_directory_exists(dir: Gio.File): boolean
}

interface ServicesSettings_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.ServicesSettings

    schema?: Gio.Settings | null
}

/**
 * Signal callback interface for `changed`
 */
interface ServicesSettings_ChangedSignalCallback {
    ($obj: ServicesSettings): void
}

interface ServicesSettings {

    // Own properties of Granite-1.0.Granite.ServicesSettings

    readonly schema: Gio.Settings

    // Owm methods of Granite-1.0.Granite.ServicesSettings

    get_schema(): Gio.Settings
    verify(key: string): void

    // Own virtual methods of Granite-1.0.Granite.ServicesSettings

    vfunc_verify(key: string): void

    // Own signals of Granite-1.0.Granite.ServicesSettings

    connect(sigName: "changed", callback: ServicesSettings_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: ServicesSettings_ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Granite-1.0.Granite.ServicesSettings

    connect(sigName: "notify::schema", callback: (($obj: ServicesSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: ServicesSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ServicesSettings extends GObject.Object {

    // Own properties of Granite-1.0.Granite.ServicesSettings

    static name: string
    static $gtype: GObject.GType<ServicesSettings>

    // Constructors of Granite-1.0.Granite.ServicesSettings

    constructor(config?: ServicesSettings_ConstructProps) 
    _init(config?: ServicesSettings_ConstructProps): void
}

interface ServicesSimpleCommand_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `done`
 */
interface ServicesSimpleCommand_DoneSignalCallback {
    ($obj: ServicesSimpleCommand, exit: number): void
}

/**
 * Signal callback interface for `output-changed`
 */
interface ServicesSimpleCommand_OutputChangedSignalCallback {
    ($obj: ServicesSimpleCommand, text: string): void
}

/**
 * Signal callback interface for `standard-changed`
 */
interface ServicesSimpleCommand_StandardChangedSignalCallback {
    ($obj: ServicesSimpleCommand, text: string): void
}

/**
 * Signal callback interface for `error-changed`
 */
interface ServicesSimpleCommand_ErrorChangedSignalCallback {
    ($obj: ServicesSimpleCommand, text: string): void
}

interface ServicesSimpleCommand {

    // Own fields of Granite-1.0.Granite.ServicesSimpleCommand

    standard_output_str: string
    error_output_str: string
    output_str: string

    // Owm methods of Granite-1.0.Granite.ServicesSimpleCommand

    run(): void

    // Own signals of Granite-1.0.Granite.ServicesSimpleCommand

    connect(sigName: "done", callback: ServicesSimpleCommand_DoneSignalCallback): number
    connect_after(sigName: "done", callback: ServicesSimpleCommand_DoneSignalCallback): number
    emit(sigName: "done", exit: number, ...args: any[]): void
    connect(sigName: "output-changed", callback: ServicesSimpleCommand_OutputChangedSignalCallback): number
    connect_after(sigName: "output-changed", callback: ServicesSimpleCommand_OutputChangedSignalCallback): number
    emit(sigName: "output-changed", text: string, ...args: any[]): void
    connect(sigName: "standard-changed", callback: ServicesSimpleCommand_StandardChangedSignalCallback): number
    connect_after(sigName: "standard-changed", callback: ServicesSimpleCommand_StandardChangedSignalCallback): number
    emit(sigName: "standard-changed", text: string, ...args: any[]): void
    connect(sigName: "error-changed", callback: ServicesSimpleCommand_ErrorChangedSignalCallback): number
    connect_after(sigName: "error-changed", callback: ServicesSimpleCommand_ErrorChangedSignalCallback): number
    emit(sigName: "error-changed", text: string, ...args: any[]): void

    // Class property signals of Granite-1.0.Granite.ServicesSimpleCommand

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ServicesSimpleCommand extends GObject.Object {

    // Own properties of Granite-1.0.Granite.ServicesSimpleCommand

    static name: string
    static $gtype: GObject.GType<ServicesSimpleCommand>

    // Constructors of Granite-1.0.Granite.ServicesSimpleCommand

    constructor(config?: ServicesSimpleCommand_ConstructProps) 
    constructor(dir: string, command: string) 
    static new(dir: string, command: string): ServicesSimpleCommand
    _init(config?: ServicesSimpleCommand_ConstructProps): void
}

interface ServicesSystem_ConstructProps extends GObject.Object_ConstructProps {
}

interface ServicesSystem {

    // Class property signals of Granite-1.0.Granite.ServicesSystem

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ServicesSystem extends GObject.Object {

    // Own properties of Granite-1.0.Granite.ServicesSystem

    static name: string
    static $gtype: GObject.GType<ServicesSystem>

    // Constructors of Granite-1.0.Granite.ServicesSystem

    constructor(config?: ServicesSystem_ConstructProps) 
    constructor() 
    static new(): ServicesSystem
    _init(config?: ServicesSystem_ConstructProps): void
    static open_uri(uri: string): void
    static open(file: Gio.File): void
    static open_files(files: Gio.File[]): void
    static launch(app: Gio.File): void
    static execute_command(command: string): boolean
    static launch_with_files(app: Gio.File | null, files: Gio.File[]): void
    static history_is_enabled(): boolean
}

interface WidgetsAlertView_ConstructProps extends Gtk.Grid_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.WidgetsAlertView

    title?: string | null
    description?: string | null
    icon_name?: string | null
}

/**
 * Signal callback interface for `action-activated`
 */
interface WidgetsAlertView_ActionActivatedSignalCallback {
    ($obj: WidgetsAlertView): void
}

interface WidgetsAlertView {

    // Own properties of Granite-1.0.Granite.WidgetsAlertView

    title: string
    description: string
    icon_name: string

    // Owm methods of Granite-1.0.Granite.WidgetsAlertView

    get_title(): string
    set_title(value: string): void
    get_description(): string
    set_description(value: string): void
    get_icon_name(): string
    set_icon_name(value: string): void
    show_action(label: string | null): void
    hide_action(): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own signals of Granite-1.0.Granite.WidgetsAlertView

    connect(sigName: "action-activated", callback: WidgetsAlertView_ActionActivatedSignalCallback): number
    connect_after(sigName: "action-activated", callback: WidgetsAlertView_ActionActivatedSignalCallback): number
    emit(sigName: "action-activated", ...args: any[]): void

    // Class property signals of Granite-1.0.Granite.WidgetsAlertView

    connect(sigName: "notify::title", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::baseline-row", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WidgetsAlertView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WidgetsAlertView extends Gtk.Grid {

    // Own properties of Granite-1.0.Granite.WidgetsAlertView

    static name: string
    static $gtype: GObject.GType<WidgetsAlertView>

    // Constructors of Granite-1.0.Granite.WidgetsAlertView

    constructor(config?: WidgetsAlertView_ConstructProps) 
    constructor(title: string, description: string, icon_name: string) 
    static new(title: string, description: string, icon_name: string): WidgetsAlertView

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     */
    static new(): Gtk.Grid
    _init(config?: WidgetsAlertView_ConstructProps): void
}

interface WidgetsAvatar_ConstructProps extends Gtk.EventBox_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.WidgetsAvatar

    pixbuf?: GdkPixbuf.Pixbuf | null
}

interface WidgetsAvatar {

    // Own properties of Granite-1.0.Granite.WidgetsAvatar

    pixbuf: GdkPixbuf.Pixbuf

    // Owm methods of Granite-1.0.Granite.WidgetsAvatar

    get_pixbuf(): GdkPixbuf.Pixbuf | null
    set_pixbuf(value: GdkPixbuf.Pixbuf | null): void
    show_default(pixel_size: number): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Granite-1.0.Granite.WidgetsAvatar

    connect(sigName: "notify::pixbuf", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf", ...args: any[]): void
    connect(sigName: "notify::above-child", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::above-child", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::above-child", ...args: any[]): void
    connect(sigName: "notify::visible-window", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-window", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-window", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WidgetsAvatar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WidgetsAvatar extends Gtk.EventBox {

    // Own properties of Granite-1.0.Granite.WidgetsAvatar

    static name: string
    static $gtype: GObject.GType<WidgetsAvatar>

    // Constructors of Granite-1.0.Granite.WidgetsAvatar

    constructor(config?: WidgetsAvatar_ConstructProps) 
    constructor() 
    static new(): WidgetsAvatar

    // Overloads of new

    /**
     * Creates a new #GtkEventBox.
     * @constructor 
     */
    static new(): Gtk.EventBox
    static from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): WidgetsAvatar
    static from_file(filepath: string, pixel_size: number): WidgetsAvatar
    static with_default_icon(pixel_size: number): WidgetsAvatar
    _init(config?: WidgetsAvatar_ConstructProps): void
}

interface WidgetsCellRendererBadge_ConstructProps extends Gtk.CellRenderer_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.WidgetsCellRendererBadge

    text?: string | null
}

interface WidgetsCellRendererBadge {

    // Own properties of Granite-1.0.Granite.WidgetsCellRendererBadge

    text: string

    // Owm methods of Granite-1.0.Granite.WidgetsCellRendererBadge

    get_text(): string
    set_text(value: string): void

    // Class property signals of Granite-1.0.Granite.WidgetsCellRendererBadge

    connect(sigName: "notify::text", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::cell-background", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background", ...args: any[]): void
    connect(sigName: "notify::cell-background-gdk", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-gdk", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-gdk", ...args: any[]): void
    connect(sigName: "notify::cell-background-rgba", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-rgba", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-rgba", ...args: any[]): void
    connect(sigName: "notify::cell-background-set", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-set", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-set", ...args: any[]): void
    connect(sigName: "notify::editing", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::is-expanded", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expanded", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expanded", ...args: any[]): void
    connect(sigName: "notify::is-expander", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expander", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expander", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: WidgetsCellRendererBadge, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WidgetsCellRendererBadge extends Gtk.CellRenderer {

    // Own properties of Granite-1.0.Granite.WidgetsCellRendererBadge

    static name: string
    static $gtype: GObject.GType<WidgetsCellRendererBadge>

    // Constructors of Granite-1.0.Granite.WidgetsCellRendererBadge

    constructor(config?: WidgetsCellRendererBadge_ConstructProps) 
    constructor() 
    static new(): WidgetsCellRendererBadge
    _init(config?: WidgetsCellRendererBadge_ConstructProps): void
}

interface WidgetsCellRendererExpander_ConstructProps extends Gtk.CellRenderer_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.WidgetsCellRendererExpander

    is_category_expander?: boolean | null
}

interface WidgetsCellRendererExpander {

    // Own properties of Granite-1.0.Granite.WidgetsCellRendererExpander

    is_category_expander: boolean

    // Owm methods of Granite-1.0.Granite.WidgetsCellRendererExpander

    get_is_category_expander(): boolean
    set_is_category_expander(value: boolean): void
    get_arrow_size(widget: Gtk.Widget): number

    // Own virtual methods of Granite-1.0.Granite.WidgetsCellRendererExpander

    vfunc_get_arrow_size(widget: Gtk.Widget): number

    // Class property signals of Granite-1.0.Granite.WidgetsCellRendererExpander

    connect(sigName: "notify::is-category-expander", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-category-expander", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-category-expander", ...args: any[]): void
    connect(sigName: "notify::cell-background", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background", ...args: any[]): void
    connect(sigName: "notify::cell-background-gdk", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-gdk", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-gdk", ...args: any[]): void
    connect(sigName: "notify::cell-background-rgba", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-rgba", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-rgba", ...args: any[]): void
    connect(sigName: "notify::cell-background-set", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-set", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-set", ...args: any[]): void
    connect(sigName: "notify::editing", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::is-expanded", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expanded", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expanded", ...args: any[]): void
    connect(sigName: "notify::is-expander", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expander", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expander", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: WidgetsCellRendererExpander, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WidgetsCellRendererExpander extends Gtk.CellRenderer {

    // Own properties of Granite-1.0.Granite.WidgetsCellRendererExpander

    static name: string
    static $gtype: GObject.GType<WidgetsCellRendererExpander>

    // Constructors of Granite-1.0.Granite.WidgetsCellRendererExpander

    constructor(config?: WidgetsCellRendererExpander_ConstructProps) 
    constructor() 
    static new(): WidgetsCellRendererExpander
    _init(config?: WidgetsCellRendererExpander_ConstructProps): void
}

interface WidgetsCollapsiblePaned_ConstructProps extends Gtk.Paned_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.WidgetsCollapsiblePaned

    collapse_mode?: CollapseMode | null
}

interface WidgetsCollapsiblePaned {

    // Own properties of Granite-1.0.Granite.WidgetsCollapsiblePaned

    collapse_mode: CollapseMode

    // Owm methods of Granite-1.0.Granite.WidgetsCollapsiblePaned

    get_collapse_mode(): CollapseMode
    set_collapse_mode(value: CollapseMode): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Granite-1.0.Granite.WidgetsCollapsiblePaned

    connect(sigName: "notify::collapse-mode", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapse-mode", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::collapse-mode", ...args: any[]): void
    connect(sigName: "notify::max-position", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-position", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-position", ...args: any[]): void
    connect(sigName: "notify::min-position", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-position", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-position", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::position-set", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position-set", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position-set", ...args: any[]): void
    connect(sigName: "notify::wide-handle", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wide-handle", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wide-handle", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WidgetsCollapsiblePaned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WidgetsCollapsiblePaned extends Gtk.Paned {

    // Own properties of Granite-1.0.Granite.WidgetsCollapsiblePaned

    static name: string
    static $gtype: GObject.GType<WidgetsCollapsiblePaned>

    // Constructors of Granite-1.0.Granite.WidgetsCollapsiblePaned

    constructor(config?: WidgetsCollapsiblePaned_ConstructProps) 
    constructor(orientation: Gtk.Orientation) 
    static new(orientation: Gtk.Orientation): WidgetsCollapsiblePaned

    // Overloads of new

    /**
     * Creates a new #GtkPaned widget.
     * @constructor 
     * @param orientation the paned’s orientation.
     */
    static new(orientation: Gtk.Orientation): Gtk.Paned
    _init(config?: WidgetsCollapsiblePaned_ConstructProps): void
}

interface WidgetsCompositedWindow_ConstructProps extends Gtk.Buildable_ConstructProps, Gtk.Window_ConstructProps {
}

interface WidgetsCompositedWindow extends Gtk.Buildable {

    // Conflicting methods

    mnemonic_activate(...args: any[]): any
    child_notify(...args: any[]): any

    // Class property signals of Granite-1.0.Granite.WidgetsCompositedWindow

    connect(sigName: "notify::accept-focus", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WidgetsCompositedWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WidgetsCompositedWindow extends Gtk.Window {

    // Own properties of Granite-1.0.Granite.WidgetsCompositedWindow

    static name: string
    static $gtype: GObject.GType<WidgetsCompositedWindow>

    // Constructors of Granite-1.0.Granite.WidgetsCompositedWindow

    constructor(config?: WidgetsCompositedWindow_ConstructProps) 
    constructor() 
    static new(): WidgetsCompositedWindow

    // Overloads of new

    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you’re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called “popups”.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don’t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: WidgetsCompositedWindow_ConstructProps): void
}

interface WidgetsDatePicker_ConstructProps extends Gtk.Buildable_ConstructProps, Gtk.Entry_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.WidgetsDatePicker

    format?: string | null
    date?: GLib.DateTime | null
}

/**
 * Signal callback interface for `date-changed`
 */
interface WidgetsDatePicker_DateChangedSignalCallback {
    ($obj: WidgetsDatePicker): void
}

interface WidgetsDatePicker extends Gtk.Buildable {

    // Own properties of Granite-1.0.Granite.WidgetsDatePicker

    readonly format: string
    date: GLib.DateTime

    // Own fields of Granite-1.0.Granite.WidgetsDatePicker

    dropdown: Gtk.EventBox
    calendar: Gtk.Calendar

    // Owm methods of Granite-1.0.Granite.WidgetsDatePicker

    get_format(): string
    get_date(): GLib.DateTime
    set_date(value: GLib.DateTime): void
    position_dropdown(): /* rect */ Gdk.Rectangle

    // Own virtual methods of Granite-1.0.Granite.WidgetsDatePicker

    vfunc_position_dropdown(): /* rect */ Gdk.Rectangle

    // Own signals of Granite-1.0.Granite.WidgetsDatePicker

    connect(sigName: "date-changed", callback: WidgetsDatePicker_DateChangedSignalCallback): number
    connect_after(sigName: "date-changed", callback: WidgetsDatePicker_DateChangedSignalCallback): number
    emit(sigName: "date-changed", ...args: any[]): void

    // Class property signals of Granite-1.0.Granite.WidgetsDatePicker

    connect(sigName: "notify::format", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::date", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::activates-default", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activates-default", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activates-default", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::caps-lock-warning", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-warning", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caps-lock-warning", ...args: any[]): void
    connect(sigName: "notify::completion", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::cursor-position", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-position", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::enable-emoji-completion", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-emoji-completion", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-emoji-completion", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::inner-border", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inner-border", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inner-border", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::invisible-char", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char", ...args: any[]): void
    connect(sigName: "notify::invisible-char-set", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char-set", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char-set", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-length", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::max-width-chars", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width-chars", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-width-chars", ...args: any[]): void
    connect(sigName: "notify::overwrite-mode", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite-mode", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overwrite-mode", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::populate-all", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::populate-all", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::populate-all", ...args: any[]): void
    connect(sigName: "notify::primary-icon-activatable", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-activatable", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-gicon", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-name", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-pixbuf", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-pixbuf", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::primary-icon-sensitive", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-sensitive", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::primary-icon-stock", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-stock", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::primary-icon-storage-type", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-storage-type", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::progress-fraction", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-fraction", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-fraction", ...args: any[]): void
    connect(sigName: "notify::progress-pulse-step", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-pulse-step", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-pulse-step", ...args: any[]): void
    connect(sigName: "notify::scroll-offset", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-offset", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scroll-offset", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-activatable", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-activatable", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-gicon", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-name", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-sensitive", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-sensitive", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-stock", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-stock", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-storage-type", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-storage-type", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::selection-bound", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-bound", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selection-bound", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::show-emoji-icon", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-emoji-icon", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-emoji-icon", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::text-length", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-length", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-length", ...args: any[]): void
    connect(sigName: "notify::truncate-multiline", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::truncate-multiline", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::truncate-multiline", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::width-chars", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-chars", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-chars", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WidgetsDatePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WidgetsDatePicker extends Gtk.Entry {

    // Own properties of Granite-1.0.Granite.WidgetsDatePicker

    static name: string
    static $gtype: GObject.GType<WidgetsDatePicker>

    // Constructors of Granite-1.0.Granite.WidgetsDatePicker

    constructor(config?: WidgetsDatePicker_ConstructProps) 
    static with_format(format: string): WidgetsDatePicker
    constructor() 
    static new(): WidgetsDatePicker

    // Overloads of new

    /**
     * Creates a new entry.
     * @constructor 
     */
    static new(): Gtk.Entry
    _init(config?: WidgetsDatePicker_ConstructProps): void
}

interface WidgetsTab_ConstructProps extends Gtk.EventBox_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.WidgetsTab

    label?: string | null
    tooltip?: string | null
    pinned?: boolean | null
    pinnable?: boolean | null
    restore_data?: string | null
    close_tab_label?: AccelLabel | null
    duplicate_tab_label?: AccelLabel | null
    new_window_label?: AccelLabel | null
    page?: Gtk.Widget | null
    icon?: Gio.Icon | null
    working?: boolean | null
    ellipsize_mode?: Pango.EllipsizeMode | null
    menu?: Gtk.Menu | null
}

interface WidgetsTab {

    // Own properties of Granite-1.0.Granite.WidgetsTab

    label: string
    tooltip: string
    pinned: boolean
    pinnable: boolean
    restore_data: string
    readonly close_tab_label: AccelLabel
    readonly duplicate_tab_label: AccelLabel
    readonly new_window_label: AccelLabel
    page: Gtk.Widget
    icon: Gio.Icon
    working: boolean
    ellipsize_mode: Pango.EllipsizeMode
    menu: Gtk.Menu

    // Own fields of Granite-1.0.Granite.WidgetsTab

    dropped_callback: WidgetsDroppedDelegate
    dropped_callback_target: object
    dropped_callback_target_destroy_notify: GLib.DestroyNotify
    page_container: any
    _icon: Gtk.Image
    new_window_m: Gtk.MenuItem
    duplicate_m: Gtk.MenuItem
    pin_m: Gtk.MenuItem

    // Owm methods of Granite-1.0.Granite.WidgetsTab

    get_label(): string
    set_label(value: string): void
    set_tooltip(value: string): void
    get_pinned(): boolean
    set_pinned(value: boolean): void
    get_pinnable(): boolean
    set_pinnable(value: boolean): void
    get_restore_data(): string
    set_restore_data(value: string): void
    get_close_tab_label(): AccelLabel | null
    get_duplicate_tab_label(): AccelLabel | null
    get_new_window_label(): AccelLabel | null
    get_page(): Gtk.Widget
    set_page(value: Gtk.Widget): void
    get_icon(): Gio.Icon | null
    set_icon(value: Gio.Icon | null): void
    get_working(): boolean
    set_working(value: boolean): void
    get_ellipsize_mode(): Pango.EllipsizeMode
    set_ellipsize_mode(value: Pango.EllipsizeMode): void
    get_menu(): Gtk.Menu
    set_menu(value: Gtk.Menu): void
    close(): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Granite-1.0.Granite.WidgetsTab

    connect(sigName: "notify::label", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::pinned", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pinned", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pinned", ...args: any[]): void
    connect(sigName: "notify::pinnable", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pinnable", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pinnable", ...args: any[]): void
    connect(sigName: "notify::restore-data", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restore-data", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::restore-data", ...args: any[]): void
    connect(sigName: "notify::close-tab-label", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-tab-label", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::close-tab-label", ...args: any[]): void
    connect(sigName: "notify::duplicate-tab-label", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duplicate-tab-label", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duplicate-tab-label", ...args: any[]): void
    connect(sigName: "notify::new-window-label", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::new-window-label", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::new-window-label", ...args: any[]): void
    connect(sigName: "notify::page", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::working", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::working", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::working", ...args: any[]): void
    connect(sigName: "notify::ellipsize-mode", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize-mode", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ellipsize-mode", ...args: any[]): void
    connect(sigName: "notify::menu", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::menu", ...args: any[]): void
    connect(sigName: "notify::above-child", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::above-child", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::above-child", ...args: any[]): void
    connect(sigName: "notify::visible-window", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-window", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-window", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WidgetsTab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WidgetsTab extends Gtk.EventBox {

    // Own properties of Granite-1.0.Granite.WidgetsTab

    static name: string
    static $gtype: GObject.GType<WidgetsTab>

    // Constructors of Granite-1.0.Granite.WidgetsTab

    constructor(config?: WidgetsTab_ConstructProps) 
    constructor(label: string | null, icon: Gio.Icon | null, page: Gtk.Widget | null) 
    static new(label: string | null, icon: Gio.Icon | null, page: Gtk.Widget | null): WidgetsTab

    // Overloads of new

    /**
     * Creates a new #GtkEventBox.
     * @constructor 
     */
    static new(): Gtk.EventBox
    static with_accellabels(label: string | null, icon: Gio.Icon | null, page: Gtk.Widget | null, _close_tab_label: AccelLabel | null, _duplicate_tab_label: AccelLabel | null, _new_window_label: AccelLabel | null): WidgetsTab
    _init(config?: WidgetsTab_ConstructProps): void
}

interface WidgetsDynamicNotebook_ConstructProps extends Gtk.EventBox_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.WidgetsDynamicNotebook

    show_tabs?: boolean | null
    tabs_closable?: boolean | null
    allow_drag?: boolean | null
    allow_new_window?: boolean | null
    allow_duplication?: boolean | null
    allow_restoring?: boolean | null
    max_restorable_tabs?: number | null
    add_button_visible?: boolean | null
    allow_pinning?: boolean | null
    force_left?: boolean | null
    add_button_tooltip?: string | null
    new_tab_label?: AccelLabel | null
    restore_tab_label?: AccelLabel | null
    current?: WidgetsTab | null
    group_name?: string | null
    tab_bar_behavior?: WidgetsDynamicNotebookTabBarBehavior | null
    menu?: Gtk.Menu | null
}

/**
 * Signal callback interface for `tab-added`
 */
interface WidgetsDynamicNotebook_TabAddedSignalCallback {
    ($obj: WidgetsDynamicNotebook, tab: WidgetsTab): void
}

/**
 * Signal callback interface for `tab-removed`
 */
interface WidgetsDynamicNotebook_TabRemovedSignalCallback {
    ($obj: WidgetsDynamicNotebook, tab: WidgetsTab): void
}

/**
 * Signal callback interface for `tab-switched`
 */
interface WidgetsDynamicNotebook_TabSwitchedSignalCallback {
    ($obj: WidgetsDynamicNotebook, old_tab: WidgetsTab | null, new_tab: WidgetsTab): void
}

/**
 * Signal callback interface for `tab-reordered`
 */
interface WidgetsDynamicNotebook_TabReorderedSignalCallback {
    ($obj: WidgetsDynamicNotebook, tab: WidgetsTab, new_pos: number): void
}

/**
 * Signal callback interface for `tab-moved`
 */
interface WidgetsDynamicNotebook_TabMovedSignalCallback {
    ($obj: WidgetsDynamicNotebook, tab: WidgetsTab, x: number, y: number): void
}

/**
 * Signal callback interface for `tab-duplicated`
 */
interface WidgetsDynamicNotebook_TabDuplicatedSignalCallback {
    ($obj: WidgetsDynamicNotebook, duplicated_tab: WidgetsTab): void
}

/**
 * Signal callback interface for `tab-restored`
 */
interface WidgetsDynamicNotebook_TabRestoredSignalCallback {
    ($obj: WidgetsDynamicNotebook, label: string, data: string, icon: Gio.Icon | null): void
}

/**
 * Signal callback interface for `new-tab-requested`
 */
interface WidgetsDynamicNotebook_NewTabRequestedSignalCallback {
    ($obj: WidgetsDynamicNotebook): void
}

/**
 * Signal callback interface for `close-tab-requested`
 */
interface WidgetsDynamicNotebook_CloseTabRequestedSignalCallback {
    ($obj: WidgetsDynamicNotebook, tab: WidgetsTab): boolean
}

interface WidgetsDynamicNotebook {

    // Own properties of Granite-1.0.Granite.WidgetsDynamicNotebook

    readonly n_tabs: number
    show_tabs: boolean
    tabs_closable: boolean
    allow_drag: boolean
    allow_new_window: boolean
    allow_duplication: boolean
    allow_restoring: boolean
    max_restorable_tabs: number
    add_button_visible: boolean
    allow_pinning: boolean
    force_left: boolean
    add_button_tooltip: string
    readonly new_tab_label: AccelLabel
    readonly restore_tab_label: AccelLabel
    current: WidgetsTab
    readonly tabs: WidgetsTab[]
    group_name: string
    tab_bar_behavior: WidgetsDynamicNotebookTabBarBehavior
    menu: Gtk.Menu

    // Owm methods of Granite-1.0.Granite.WidgetsDynamicNotebook

    get_n_tabs(): number
    get_show_tabs(): boolean
    set_show_tabs(value: boolean): void
    get_tabs_closable(): boolean
    set_tabs_closable(value: boolean): void
    get_allow_drag(): boolean
    set_allow_drag(value: boolean): void
    get_allow_new_window(): boolean
    set_allow_new_window(value: boolean): void
    get_allow_duplication(): boolean
    set_allow_duplication(value: boolean): void
    get_allow_restoring(): boolean
    set_allow_restoring(value: boolean): void
    get_max_restorable_tabs(): number
    set_max_restorable_tabs(value: number): void
    get_add_button_visible(): boolean
    set_add_button_visible(value: boolean): void
    get_allow_pinning(): boolean
    set_allow_pinning(value: boolean): void
    get_force_left(): boolean
    set_force_left(value: boolean): void
    get_add_button_tooltip(): string
    set_add_button_tooltip(value: string): void
    get_new_tab_label(): AccelLabel
    get_restore_tab_label(): AccelLabel
    get_current(): WidgetsTab
    set_current(value: WidgetsTab): void
    get_tabs(): WidgetsTab[]
    get_group_name(): string
    set_group_name(value: string): void
    get_tab_bar_behavior(): WidgetsDynamicNotebookTabBarBehavior
    set_tab_bar_behavior(value: WidgetsDynamicNotebookTabBarBehavior): void
    get_menu(): Gtk.Menu
    remove_tab(tab: WidgetsTab): void
    next_page(): void
    previous_page(): void
    get_children(): Gtk.Widget[]
    get_tab_position(tab: WidgetsTab): number
    set_tab_position(tab: WidgetsTab, position: number): void
    get_tab_by_index(index: number): WidgetsTab | null
    get_tab_by_widget(widget: Gtk.Widget): WidgetsTab | null
    get_nth_page(index: number): Gtk.Widget
    insert_tab(tab: WidgetsTab, index: number): number

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own signals of Granite-1.0.Granite.WidgetsDynamicNotebook

    connect(sigName: "tab-added", callback: WidgetsDynamicNotebook_TabAddedSignalCallback): number
    connect_after(sigName: "tab-added", callback: WidgetsDynamicNotebook_TabAddedSignalCallback): number
    emit(sigName: "tab-added", tab: WidgetsTab, ...args: any[]): void
    connect(sigName: "tab-removed", callback: WidgetsDynamicNotebook_TabRemovedSignalCallback): number
    connect_after(sigName: "tab-removed", callback: WidgetsDynamicNotebook_TabRemovedSignalCallback): number
    emit(sigName: "tab-removed", tab: WidgetsTab, ...args: any[]): void
    connect(sigName: "tab-switched", callback: WidgetsDynamicNotebook_TabSwitchedSignalCallback): number
    connect_after(sigName: "tab-switched", callback: WidgetsDynamicNotebook_TabSwitchedSignalCallback): number
    emit(sigName: "tab-switched", old_tab: WidgetsTab | null, new_tab: WidgetsTab, ...args: any[]): void
    connect(sigName: "tab-reordered", callback: WidgetsDynamicNotebook_TabReorderedSignalCallback): number
    connect_after(sigName: "tab-reordered", callback: WidgetsDynamicNotebook_TabReorderedSignalCallback): number
    emit(sigName: "tab-reordered", tab: WidgetsTab, new_pos: number, ...args: any[]): void
    connect(sigName: "tab-moved", callback: WidgetsDynamicNotebook_TabMovedSignalCallback): number
    connect_after(sigName: "tab-moved", callback: WidgetsDynamicNotebook_TabMovedSignalCallback): number
    emit(sigName: "tab-moved", tab: WidgetsTab, x: number, y: number, ...args: any[]): void
    connect(sigName: "tab-duplicated", callback: WidgetsDynamicNotebook_TabDuplicatedSignalCallback): number
    connect_after(sigName: "tab-duplicated", callback: WidgetsDynamicNotebook_TabDuplicatedSignalCallback): number
    emit(sigName: "tab-duplicated", duplicated_tab: WidgetsTab, ...args: any[]): void
    connect(sigName: "tab-restored", callback: WidgetsDynamicNotebook_TabRestoredSignalCallback): number
    connect_after(sigName: "tab-restored", callback: WidgetsDynamicNotebook_TabRestoredSignalCallback): number
    emit(sigName: "tab-restored", label: string, data: string, icon: Gio.Icon | null, ...args: any[]): void
    connect(sigName: "new-tab-requested", callback: WidgetsDynamicNotebook_NewTabRequestedSignalCallback): number
    connect_after(sigName: "new-tab-requested", callback: WidgetsDynamicNotebook_NewTabRequestedSignalCallback): number
    emit(sigName: "new-tab-requested", ...args: any[]): void
    connect(sigName: "close-tab-requested", callback: WidgetsDynamicNotebook_CloseTabRequestedSignalCallback): number
    connect_after(sigName: "close-tab-requested", callback: WidgetsDynamicNotebook_CloseTabRequestedSignalCallback): number
    emit(sigName: "close-tab-requested", tab: WidgetsTab, ...args: any[]): void

    // Class property signals of Granite-1.0.Granite.WidgetsDynamicNotebook

    connect(sigName: "notify::n-tabs", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-tabs", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-tabs", ...args: any[]): void
    connect(sigName: "notify::show-tabs", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-tabs", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-tabs", ...args: any[]): void
    connect(sigName: "notify::tabs-closable", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs-closable", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs-closable", ...args: any[]): void
    connect(sigName: "notify::allow-drag", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-drag", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-drag", ...args: any[]): void
    connect(sigName: "notify::allow-new-window", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-new-window", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-new-window", ...args: any[]): void
    connect(sigName: "notify::allow-duplication", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-duplication", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-duplication", ...args: any[]): void
    connect(sigName: "notify::allow-restoring", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-restoring", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-restoring", ...args: any[]): void
    connect(sigName: "notify::max-restorable-tabs", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-restorable-tabs", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-restorable-tabs", ...args: any[]): void
    connect(sigName: "notify::add-button-visible", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::add-button-visible", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::add-button-visible", ...args: any[]): void
    connect(sigName: "notify::allow-pinning", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-pinning", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-pinning", ...args: any[]): void
    connect(sigName: "notify::force-left", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force-left", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::force-left", ...args: any[]): void
    connect(sigName: "notify::add-button-tooltip", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::add-button-tooltip", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::add-button-tooltip", ...args: any[]): void
    connect(sigName: "notify::new-tab-label", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::new-tab-label", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::new-tab-label", ...args: any[]): void
    connect(sigName: "notify::restore-tab-label", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restore-tab-label", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::restore-tab-label", ...args: any[]): void
    connect(sigName: "notify::current", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::group-name", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group-name", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::group-name", ...args: any[]): void
    connect(sigName: "notify::tab-bar-behavior", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-bar-behavior", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tab-bar-behavior", ...args: any[]): void
    connect(sigName: "notify::menu", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::menu", ...args: any[]): void
    connect(sigName: "notify::above-child", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::above-child", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::above-child", ...args: any[]): void
    connect(sigName: "notify::visible-window", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-window", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-window", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WidgetsDynamicNotebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WidgetsDynamicNotebook extends Gtk.EventBox {

    // Own properties of Granite-1.0.Granite.WidgetsDynamicNotebook

    static name: string
    static $gtype: GObject.GType<WidgetsDynamicNotebook>

    // Constructors of Granite-1.0.Granite.WidgetsDynamicNotebook

    constructor(config?: WidgetsDynamicNotebook_ConstructProps) 
    constructor() 
    static new(): WidgetsDynamicNotebook

    // Overloads of new

    /**
     * Creates a new #GtkEventBox.
     * @constructor 
     */
    static new(): Gtk.EventBox
    static with_accellabels(new_tab_label: AccelLabel, restore_tab_label: AccelLabel): WidgetsDynamicNotebook
    _init(config?: WidgetsDynamicNotebook_ConstructProps): void
}

interface WidgetsModeButton_ConstructProps extends Gtk.Box_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.WidgetsModeButton

    selected?: number | null
}

/**
 * Signal callback interface for `mode-added`
 */
interface WidgetsModeButton_ModeAddedSignalCallback {
    ($obj: WidgetsModeButton, index: number, widget: Gtk.Widget): void
}

/**
 * Signal callback interface for `mode-removed`
 */
interface WidgetsModeButton_ModeRemovedSignalCallback {
    ($obj: WidgetsModeButton, index: number, widget: Gtk.Widget): void
}

/**
 * Signal callback interface for `mode-changed`
 */
interface WidgetsModeButton_ModeChangedSignalCallback {
    ($obj: WidgetsModeButton, widget: Gtk.Widget): void
}

interface WidgetsModeButton {

    // Own properties of Granite-1.0.Granite.WidgetsModeButton

    selected: number
    readonly n_items: number

    // Owm methods of Granite-1.0.Granite.WidgetsModeButton

    get_selected(): number
    set_selected(value: number): void
    get_n_items(): number
    append_pixbuf(pixbuf: GdkPixbuf.Pixbuf): number
    append_text(text: string): number
    append_icon(icon_name: string, size: Gtk.IconSize): number
    append(w: Gtk.Widget): number
    set_active(new_active_index: number): void
    set_item_visible(index: number, val: boolean): void
    remove(index: number): void

    // Overloads of remove

    /**
     * Removes `widget` from `container`. `widget` must be inside `container`.
     * Note that `container` will own a reference to `widget,` and that this
     * may be the last reference held; so removing a widget from its
     * container can destroy that widget. If you want to use `widget`
     * again, you need to add a reference to it before removing it from
     * a container, using g_object_ref(). If you don’t want to use `widget`
     * again it’s usually more efficient to simply destroy it directly
     * using gtk_widget_destroy() since this will remove it from the
     * container and help break any circular reference count cycles.
     * @param widget a current child of `container`
     */
    remove(widget: Gtk.Widget): void
    remove(...args: any[]): any
    remove(args_or_widget: any[] | Gtk.Widget): void | any
    clear_children(): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own signals of Granite-1.0.Granite.WidgetsModeButton

    connect(sigName: "mode-added", callback: WidgetsModeButton_ModeAddedSignalCallback): number
    connect_after(sigName: "mode-added", callback: WidgetsModeButton_ModeAddedSignalCallback): number
    emit(sigName: "mode-added", index: number, widget: Gtk.Widget, ...args: any[]): void
    connect(sigName: "mode-removed", callback: WidgetsModeButton_ModeRemovedSignalCallback): number
    connect_after(sigName: "mode-removed", callback: WidgetsModeButton_ModeRemovedSignalCallback): number
    emit(sigName: "mode-removed", index: number, widget: Gtk.Widget, ...args: any[]): void
    connect(sigName: "mode-changed", callback: WidgetsModeButton_ModeChangedSignalCallback): number
    connect_after(sigName: "mode-changed", callback: WidgetsModeButton_ModeChangedSignalCallback): number
    emit(sigName: "mode-changed", widget: Gtk.Widget, ...args: any[]): void

    // Class property signals of Granite-1.0.Granite.WidgetsModeButton

    connect(sigName: "notify::selected", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selected", ...args: any[]): void
    connect(sigName: "notify::n-items", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-items", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-items", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WidgetsModeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WidgetsModeButton extends Gtk.Box {

    // Own properties of Granite-1.0.Granite.WidgetsModeButton

    static name: string
    static $gtype: GObject.GType<WidgetsModeButton>

    // Constructors of Granite-1.0.Granite.WidgetsModeButton

    constructor(config?: WidgetsModeButton_ConstructProps) 
    constructor() 
    static new(): WidgetsModeButton

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: WidgetsModeButton_ConstructProps): void
}

interface WidgetsOverlayBar_ConstructProps extends Gtk.EventBox_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.WidgetsOverlayBar

    overlay?: Gtk.Overlay | null
    status?: string | null
    label?: string | null
    active?: boolean | null
}

interface WidgetsOverlayBar {

    // Own properties of Granite-1.0.Granite.WidgetsOverlayBar

    readonly overlay: Gtk.Overlay
    status: string
    label: string
    active: boolean

    // Owm methods of Granite-1.0.Granite.WidgetsOverlayBar

    get_overlay(): Gtk.Overlay | null
    get_status(): string
    set_status(value: string): void
    get_label(): string
    set_label(value: string): void
    get_active(): boolean
    set_active(value: boolean): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Granite-1.0.Granite.WidgetsOverlayBar

    connect(sigName: "notify::overlay", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overlay", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overlay", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::above-child", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::above-child", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::above-child", ...args: any[]): void
    connect(sigName: "notify::visible-window", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-window", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-window", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WidgetsOverlayBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WidgetsOverlayBar extends Gtk.EventBox {

    // Own properties of Granite-1.0.Granite.WidgetsOverlayBar

    static name: string
    static $gtype: GObject.GType<WidgetsOverlayBar>

    // Constructors of Granite-1.0.Granite.WidgetsOverlayBar

    constructor(config?: WidgetsOverlayBar_ConstructProps) 
    constructor(overlay: Gtk.Overlay | null) 
    static new(overlay: Gtk.Overlay | null): WidgetsOverlayBar

    // Overloads of new

    /**
     * Creates a new #GtkEventBox.
     * @constructor 
     */
    static new(): Gtk.EventBox
    _init(config?: WidgetsOverlayBar_ConstructProps): void
}

interface WidgetsSourceList_ConstructProps extends Gtk.ScrolledWindow_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.WidgetsSourceList

    root?: WidgetsSourceListExpandableItem | null
    selected?: WidgetsSourceListItem | null
    ellipsize_mode?: Pango.EllipsizeMode | null
}

/**
 * Signal callback interface for `item-selected`
 */
interface WidgetsSourceList_ItemSelectedSignalCallback {
    ($obj: WidgetsSourceList, item: WidgetsSourceListItem | null): void
}

interface WidgetsSourceList {

    // Own properties of Granite-1.0.Granite.WidgetsSourceList

    root: WidgetsSourceListExpandableItem
    selected: WidgetsSourceListItem
    ellipsize_mode: Pango.EllipsizeMode
    readonly editing: boolean

    // Conflicting properties

    container: any

    // Owm methods of Granite-1.0.Granite.WidgetsSourceList

    get_root(): WidgetsSourceListExpandableItem
    set_root(value: WidgetsSourceListExpandableItem): void
    get_selected(): WidgetsSourceListItem | null
    set_selected(value: WidgetsSourceListItem | null): void
    get_ellipsize_mode(): Pango.EllipsizeMode
    set_ellipsize_mode(value: Pango.EllipsizeMode): void
    get_editing(): boolean
    has_item(item: WidgetsSourceListItem): boolean
    set_filter_func(visible_func: any | null, refilter: boolean): void
    refilter(): void
    is_item_expanded(item: WidgetsSourceListItem): boolean
    start_editing_item(item: WidgetsSourceListItem): boolean
    stop_editing(): void
    enable_drag_source(src_entries: Gtk.TargetEntry[]): void
    disable_drag_source(): void
    enable_drag_dest(dest_entries: Gtk.TargetEntry[], actions: Gdk.DragAction): void
    disable_drag_dest(): void
    scroll_to_item(item: WidgetsSourceListItem, expand_parents: boolean, use_align: boolean, row_align: number): boolean
    get_previous_item(reference: WidgetsSourceListItem): WidgetsSourceListItem | null
    get_next_item(reference: WidgetsSourceListItem): WidgetsSourceListItem | null
    get_first_child(parent: WidgetsSourceListExpandableItem): WidgetsSourceListItem | null
    get_last_child(parent: WidgetsSourceListExpandableItem): WidgetsSourceListItem | null
    get_n_visible_children(parent: WidgetsSourceListExpandableItem): number

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own virtual methods of Granite-1.0.Granite.WidgetsSourceList

    vfunc_item_selected(item: WidgetsSourceListItem | null): void

    // Own signals of Granite-1.0.Granite.WidgetsSourceList

    connect(sigName: "item-selected", callback: WidgetsSourceList_ItemSelectedSignalCallback): number
    connect_after(sigName: "item-selected", callback: WidgetsSourceList_ItemSelectedSignalCallback): number
    emit(sigName: "item-selected", item: WidgetsSourceListItem | null, ...args: any[]): void

    // Class property signals of Granite-1.0.Granite.WidgetsSourceList

    connect(sigName: "notify::root", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::selected", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selected", ...args: any[]): void
    connect(sigName: "notify::ellipsize-mode", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize-mode", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ellipsize-mode", ...args: any[]): void
    connect(sigName: "notify::editing", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscrollbar-policy", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscrollbar-policy", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscrollbar-policy", ...args: any[]): void
    connect(sigName: "notify::kinetic-scrolling", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kinetic-scrolling", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::kinetic-scrolling", ...args: any[]): void
    connect(sigName: "notify::max-content-height", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-content-height", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-content-height", ...args: any[]): void
    connect(sigName: "notify::max-content-width", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-content-width", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-content-width", ...args: any[]): void
    connect(sigName: "notify::min-content-height", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-content-height", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-content-height", ...args: any[]): void
    connect(sigName: "notify::min-content-width", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-content-width", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-content-width", ...args: any[]): void
    connect(sigName: "notify::overlay-scrolling", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overlay-scrolling", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overlay-scrolling", ...args: any[]): void
    connect(sigName: "notify::propagate-natural-height", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::propagate-natural-height", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::propagate-natural-height", ...args: any[]): void
    connect(sigName: "notify::propagate-natural-width", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::propagate-natural-width", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::propagate-natural-width", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscrollbar-policy", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscrollbar-policy", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscrollbar-policy", ...args: any[]): void
    connect(sigName: "notify::window-placement", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-placement", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-placement", ...args: any[]): void
    connect(sigName: "notify::window-placement-set", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-placement-set", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-placement-set", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WidgetsSourceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WidgetsSourceList extends Gtk.ScrolledWindow {

    // Own properties of Granite-1.0.Granite.WidgetsSourceList

    static name: string
    static $gtype: GObject.GType<WidgetsSourceList>

    // Constructors of Granite-1.0.Granite.WidgetsSourceList

    constructor(config?: WidgetsSourceList_ConstructProps) 
    constructor(root: WidgetsSourceListExpandableItem) 
    static new(root: WidgetsSourceListExpandableItem): WidgetsSourceList

    // Overloads of new

    /**
     * Creates a new scrolled window.
     * 
     * The two arguments are the scrolled window’s adjustments; these will be
     * shared with the scrollbars and the child widget to keep the bars in sync
     * with the child. Usually you want to pass %NULL for the adjustments, which
     * will cause the scrolled window to create them for you.
     * @constructor 
     * @param hadjustment horizontal adjustment
     * @param vadjustment vertical adjustment
     */
    static new(hadjustment: Gtk.Adjustment | null, vadjustment: Gtk.Adjustment | null): Gtk.ScrolledWindow
    _init(config?: WidgetsSourceList_ConstructProps): void
}

interface WidgetsSourceListItem_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.WidgetsSourceListItem

    parent?: WidgetsSourceListExpandableItem | null
    name?: string | null
    tooltip?: string | null
    markup?: string | null
    badge?: string | null
    editable?: boolean | null
    visible?: boolean | null
    selectable?: boolean | null
    icon?: Gio.Icon | null
    activatable?: Gio.Icon | null
    activatable_tooltip?: string | null
}

/**
 * Signal callback interface for `edited`
 */
interface WidgetsSourceListItem_EditedSignalCallback {
    ($obj: WidgetsSourceListItem, new_name: string): void
}

/**
 * Signal callback interface for `action-activated`
 */
interface WidgetsSourceListItem_ActionActivatedSignalCallback {
    ($obj: WidgetsSourceListItem): void
}

/**
 * Signal callback interface for `activated`
 */
interface WidgetsSourceListItem_ActivatedSignalCallback {
    ($obj: WidgetsSourceListItem): void
}

interface WidgetsSourceListItem {

    // Own properties of Granite-1.0.Granite.WidgetsSourceListItem

    parent: WidgetsSourceListExpandableItem
    name: string
    tooltip: string
    markup: string
    badge: string
    editable: boolean
    visible: boolean
    selectable: boolean
    icon: Gio.Icon
    activatable: Gio.Icon
    activatable_tooltip: string

    // Owm methods of Granite-1.0.Granite.WidgetsSourceListItem

    get_parent(): WidgetsSourceListExpandableItem
    get_name(): string
    set_name(value: string): void
    get_tooltip(): string | null
    set_tooltip(value: string | null): void
    get_markup(): string | null
    set_markup(value: string | null): void
    get_badge(): string
    set_badge(value: string): void
    get_editable(): boolean
    set_editable(value: boolean): void
    get_visible(): boolean
    set_visible(value: boolean): void
    get_selectable(): boolean
    set_selectable(value: boolean): void
    get_icon(): Gio.Icon
    set_icon(value: Gio.Icon): void
    get_activatable(): Gio.Icon
    set_activatable(value: Gio.Icon): void
    get_activatable_tooltip(): string
    set_activatable_tooltip(value: string): void
    get_context_menu(): Gtk.Menu | null

    // Own virtual methods of Granite-1.0.Granite.WidgetsSourceListItem

    vfunc_edited(new_name: string): void
    vfunc_action_activated(): void
    vfunc_activated(): void
    vfunc_get_context_menu(): Gtk.Menu | null

    // Own signals of Granite-1.0.Granite.WidgetsSourceListItem

    connect(sigName: "edited", callback: WidgetsSourceListItem_EditedSignalCallback): number
    connect_after(sigName: "edited", callback: WidgetsSourceListItem_EditedSignalCallback): number
    emit(sigName: "edited", new_name: string, ...args: any[]): void
    connect(sigName: "action-activated", callback: WidgetsSourceListItem_ActionActivatedSignalCallback): number
    connect_after(sigName: "action-activated", callback: WidgetsSourceListItem_ActionActivatedSignalCallback): number
    emit(sigName: "action-activated", ...args: any[]): void
    connect(sigName: "activated", callback: WidgetsSourceListItem_ActivatedSignalCallback): number
    connect_after(sigName: "activated", callback: WidgetsSourceListItem_ActivatedSignalCallback): number
    emit(sigName: "activated", ...args: any[]): void

    // Class property signals of Granite-1.0.Granite.WidgetsSourceListItem

    connect(sigName: "notify::parent", callback: (($obj: WidgetsSourceListItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WidgetsSourceListItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WidgetsSourceListItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetsSourceListItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: WidgetsSourceListItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: WidgetsSourceListItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::markup", callback: (($obj: WidgetsSourceListItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: (($obj: WidgetsSourceListItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::markup", ...args: any[]): void
    connect(sigName: "notify::badge", callback: (($obj: WidgetsSourceListItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::badge", callback: (($obj: WidgetsSourceListItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::badge", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: WidgetsSourceListItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: WidgetsSourceListItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WidgetsSourceListItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsSourceListItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: (($obj: WidgetsSourceListItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: WidgetsSourceListItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectable", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: WidgetsSourceListItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: WidgetsSourceListItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: (($obj: WidgetsSourceListItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable", callback: (($obj: WidgetsSourceListItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::activatable-tooltip", callback: (($obj: WidgetsSourceListItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable-tooltip", callback: (($obj: WidgetsSourceListItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activatable-tooltip", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WidgetsSourceListItem extends GObject.Object {

    // Own properties of Granite-1.0.Granite.WidgetsSourceListItem

    static name: string
    static $gtype: GObject.GType<WidgetsSourceListItem>

    // Constructors of Granite-1.0.Granite.WidgetsSourceListItem

    constructor(config?: WidgetsSourceListItem_ConstructProps) 
    constructor(name: string) 
    static new(name: string): WidgetsSourceListItem
    _init(config?: WidgetsSourceListItem_ConstructProps): void
}

interface WidgetsSourceListExpandableItem_ConstructProps extends WidgetsSourceListItem_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.WidgetsSourceListExpandableItem

    collapsible?: boolean | null
    expanded?: boolean | null
}

/**
 * Signal callback interface for `child-added`
 */
interface WidgetsSourceListExpandableItem_ChildAddedSignalCallback {
    ($obj: WidgetsSourceListExpandableItem, item: WidgetsSourceListItem): void
}

/**
 * Signal callback interface for `child-removed`
 */
interface WidgetsSourceListExpandableItem_ChildRemovedSignalCallback {
    ($obj: WidgetsSourceListExpandableItem, item: WidgetsSourceListItem): void
}

/**
 * Signal callback interface for `toggled`
 */
interface WidgetsSourceListExpandableItem_ToggledSignalCallback {
    ($obj: WidgetsSourceListExpandableItem): void
}

interface WidgetsSourceListExpandableItem {

    // Own properties of Granite-1.0.Granite.WidgetsSourceListExpandableItem

    collapsible: boolean
    expanded: boolean
    readonly n_children: number
    readonly children: Gee.Collection

    // Owm methods of Granite-1.0.Granite.WidgetsSourceListExpandableItem

    get_collapsible(): boolean
    set_collapsible(value: boolean): void
    get_expanded(): boolean
    set_expanded(value: boolean): void
    get_n_children(): number
    get_children(): Gee.Collection
    contains(item: WidgetsSourceListItem): boolean
    add(item: WidgetsSourceListItem): void
    remove(item: WidgetsSourceListItem): void
    clear(): void
    expand_all(inclusive: boolean, recursive: boolean): void
    collapse_all(inclusive: boolean, recursive: boolean): void
    expand_with_parents(): void
    collapse_with_parents(): void

    // Own virtual methods of Granite-1.0.Granite.WidgetsSourceListExpandableItem

    vfunc_toggled(): void

    // Own signals of Granite-1.0.Granite.WidgetsSourceListExpandableItem

    connect(sigName: "child-added", callback: WidgetsSourceListExpandableItem_ChildAddedSignalCallback): number
    connect_after(sigName: "child-added", callback: WidgetsSourceListExpandableItem_ChildAddedSignalCallback): number
    emit(sigName: "child-added", item: WidgetsSourceListItem, ...args: any[]): void
    connect(sigName: "child-removed", callback: WidgetsSourceListExpandableItem_ChildRemovedSignalCallback): number
    connect_after(sigName: "child-removed", callback: WidgetsSourceListExpandableItem_ChildRemovedSignalCallback): number
    emit(sigName: "child-removed", item: WidgetsSourceListItem, ...args: any[]): void
    connect(sigName: "toggled", callback: WidgetsSourceListExpandableItem_ToggledSignalCallback): number
    connect_after(sigName: "toggled", callback: WidgetsSourceListExpandableItem_ToggledSignalCallback): number
    emit(sigName: "toggled", ...args: any[]): void

    // Class property signals of Granite-1.0.Granite.WidgetsSourceListExpandableItem

    connect(sigName: "notify::collapsible", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::collapsible", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::collapsible", ...args: any[]): void
    connect(sigName: "notify::expanded", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expanded", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expanded", ...args: any[]): void
    connect(sigName: "notify::n-children", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-children", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-children", ...args: any[]): void
    connect(sigName: "notify::children", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::markup", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::markup", ...args: any[]): void
    connect(sigName: "notify::badge", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::badge", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::badge", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectable", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::activatable-tooltip", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable-tooltip", callback: (($obj: WidgetsSourceListExpandableItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activatable-tooltip", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WidgetsSourceListExpandableItem extends WidgetsSourceListItem {

    // Own properties of Granite-1.0.Granite.WidgetsSourceListExpandableItem

    static name: string
    static $gtype: GObject.GType<WidgetsSourceListExpandableItem>

    // Constructors of Granite-1.0.Granite.WidgetsSourceListExpandableItem

    constructor(config?: WidgetsSourceListExpandableItem_ConstructProps) 
    constructor(name: string) 
    static new(name: string): WidgetsSourceListExpandableItem

    // Overloads of new

    static new(name: string): WidgetsSourceListItem
    _init(config?: WidgetsSourceListExpandableItem_ConstructProps): void
}

interface WidgetsStorageBar_ConstructProps extends Gtk.Box_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.WidgetsStorageBar

    storage?: number | null
    total_usage?: number | null
    inner_margin_sides?: number | null
}

interface WidgetsStorageBar {

    // Own properties of Granite-1.0.Granite.WidgetsStorageBar

    storage: number
    total_usage: number
    inner_margin_sides: number

    // Owm methods of Granite-1.0.Granite.WidgetsStorageBar

    get_storage(): number
    set_storage(value: number): void
    get_total_usage(): number
    set_total_usage(value: number): void
    get_inner_margin_sides(): number
    set_inner_margin_sides(value: number): void
    update_block_size(description: WidgetsStorageBarItemDescription, size: number): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Granite-1.0.Granite.WidgetsStorageBar

    connect(sigName: "notify::storage", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::storage", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::storage", ...args: any[]): void
    connect(sigName: "notify::total-usage", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-usage", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-usage", ...args: any[]): void
    connect(sigName: "notify::inner-margin-sides", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inner-margin-sides", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inner-margin-sides", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WidgetsStorageBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WidgetsStorageBar extends Gtk.Box {

    // Own properties of Granite-1.0.Granite.WidgetsStorageBar

    static name: string
    static $gtype: GObject.GType<WidgetsStorageBar>

    // Constructors of Granite-1.0.Granite.WidgetsStorageBar

    constructor(config?: WidgetsStorageBar_ConstructProps) 
    constructor(storage: number) 
    static new(storage: number): WidgetsStorageBar

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    static with_total_usage(storage: number, total_usage: number): WidgetsStorageBar
    _init(config?: WidgetsStorageBar_ConstructProps): void
}

interface WidgetsTimePicker_ConstructProps extends Gtk.Entry_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.WidgetsTimePicker

    format_12?: string | null
    format_24?: string | null
    time?: GLib.DateTime | null
}

/**
 * Signal callback interface for `time-changed`
 */
interface WidgetsTimePicker_TimeChangedSignalCallback {
    ($obj: WidgetsTimePicker): void
}

interface WidgetsTimePicker {

    // Own properties of Granite-1.0.Granite.WidgetsTimePicker

    readonly format_12: string
    readonly format_24: string
    time: GLib.DateTime

    // Owm methods of Granite-1.0.Granite.WidgetsTimePicker

    get_format_12(): string
    get_format_24(): string
    get_time(): GLib.DateTime
    set_time(value: GLib.DateTime): void
    position_dropdown(): [ /* x */ number, /* y */ number ]

    // Own virtual methods of Granite-1.0.Granite.WidgetsTimePicker

    vfunc_position_dropdown(): [ /* x */ number, /* y */ number ]

    // Own signals of Granite-1.0.Granite.WidgetsTimePicker

    connect(sigName: "time-changed", callback: WidgetsTimePicker_TimeChangedSignalCallback): number
    connect_after(sigName: "time-changed", callback: WidgetsTimePicker_TimeChangedSignalCallback): number
    emit(sigName: "time-changed", ...args: any[]): void

    // Class property signals of Granite-1.0.Granite.WidgetsTimePicker

    connect(sigName: "notify::format-12", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format-12", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format-12", ...args: any[]): void
    connect(sigName: "notify::format-24", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format-24", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format-24", ...args: any[]): void
    connect(sigName: "notify::time", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time", ...args: any[]): void
    connect(sigName: "notify::activates-default", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activates-default", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activates-default", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::caps-lock-warning", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-warning", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caps-lock-warning", ...args: any[]): void
    connect(sigName: "notify::completion", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::cursor-position", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-position", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::enable-emoji-completion", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-emoji-completion", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-emoji-completion", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::inner-border", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inner-border", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inner-border", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::invisible-char", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char", ...args: any[]): void
    connect(sigName: "notify::invisible-char-set", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char-set", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char-set", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-length", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::max-width-chars", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width-chars", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-width-chars", ...args: any[]): void
    connect(sigName: "notify::overwrite-mode", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite-mode", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overwrite-mode", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::populate-all", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::populate-all", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::populate-all", ...args: any[]): void
    connect(sigName: "notify::primary-icon-activatable", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-activatable", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-gicon", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-name", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-pixbuf", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-pixbuf", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::primary-icon-sensitive", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-sensitive", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::primary-icon-stock", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-stock", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::primary-icon-storage-type", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-storage-type", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::progress-fraction", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-fraction", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-fraction", ...args: any[]): void
    connect(sigName: "notify::progress-pulse-step", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-pulse-step", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-pulse-step", ...args: any[]): void
    connect(sigName: "notify::scroll-offset", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-offset", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scroll-offset", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-activatable", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-activatable", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-gicon", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-name", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-sensitive", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-sensitive", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-stock", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-stock", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-storage-type", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-storage-type", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::selection-bound", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-bound", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selection-bound", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::show-emoji-icon", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-emoji-icon", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-emoji-icon", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::text-length", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-length", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-length", ...args: any[]): void
    connect(sigName: "notify::truncate-multiline", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::truncate-multiline", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::truncate-multiline", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::width-chars", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-chars", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-chars", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WidgetsTimePicker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WidgetsTimePicker extends Gtk.Entry {

    // Own properties of Granite-1.0.Granite.WidgetsTimePicker

    static name: string
    static $gtype: GObject.GType<WidgetsTimePicker>

    // Constructors of Granite-1.0.Granite.WidgetsTimePicker

    constructor(config?: WidgetsTimePicker_ConstructProps) 
    static with_format(format_12: string, format_24: string): WidgetsTimePicker
    constructor() 
    static new(): WidgetsTimePicker

    // Overloads of new

    /**
     * Creates a new entry.
     * @constructor 
     */
    static new(): Gtk.Entry
    _init(config?: WidgetsTimePicker_ConstructProps): void
}

interface WidgetsToast_ConstructProps extends Gtk.Revealer_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.WidgetsToast

    title?: string | null
}

/**
 * Signal callback interface for `closed`
 */
interface WidgetsToast_ClosedSignalCallback {
    ($obj: WidgetsToast): void
}

/**
 * Signal callback interface for `default-action`
 */
interface WidgetsToast_DefaultActionSignalCallback {
    ($obj: WidgetsToast): void
}

interface WidgetsToast {

    // Own properties of Granite-1.0.Granite.WidgetsToast

    title: string

    // Conflicting properties

    parent_instance: any

    // Owm methods of Granite-1.0.Granite.WidgetsToast

    get_title(): string
    set_title(value: string): void
    set_default_action(label: string | null): void
    send_notification(): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own signals of Granite-1.0.Granite.WidgetsToast

    connect(sigName: "closed", callback: WidgetsToast_ClosedSignalCallback): number
    connect_after(sigName: "closed", callback: WidgetsToast_ClosedSignalCallback): number
    emit(sigName: "closed", ...args: any[]): void
    connect(sigName: "default-action", callback: WidgetsToast_DefaultActionSignalCallback): number
    connect_after(sigName: "default-action", callback: WidgetsToast_DefaultActionSignalCallback): number
    emit(sigName: "default-action", ...args: any[]): void

    // Class property signals of Granite-1.0.Granite.WidgetsToast

    connect(sigName: "notify::title", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::child-revealed", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-revealed", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-revealed", ...args: any[]): void
    connect(sigName: "notify::reveal-child", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reveal-child", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reveal-child", ...args: any[]): void
    connect(sigName: "notify::transition-duration", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transition-duration", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transition-duration", ...args: any[]): void
    connect(sigName: "notify::transition-type", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transition-type", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transition-type", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WidgetsToast, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WidgetsToast extends Gtk.Revealer {

    // Own properties of Granite-1.0.Granite.WidgetsToast

    static name: string
    static $gtype: GObject.GType<WidgetsToast>

    // Constructors of Granite-1.0.Granite.WidgetsToast

    constructor(config?: WidgetsToast_ConstructProps) 
    constructor(title: string) 
    static new(title: string): WidgetsToast

    // Overloads of new

    /**
     * Creates a new #GtkRevealer.
     * @constructor 
     */
    static new(): Gtk.Revealer
    _init(config?: WidgetsToast_ConstructProps): void
}

interface WidgetsWelcomeButton_ConstructProps extends Gtk.Button_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.WidgetsWelcomeButton

    title?: string | null
    description?: string | null
    icon?: Gtk.Image | null
}

interface WidgetsWelcomeButton {

    // Own properties of Granite-1.0.Granite.WidgetsWelcomeButton

    title: string
    description: string
    icon: Gtk.Image

    // Owm methods of Granite-1.0.Granite.WidgetsWelcomeButton

    get_title(): string
    set_title(value: string): void
    get_description(): string
    set_description(value: string): void
    get_icon(): Gtk.Image | null
    set_icon(value: Gtk.Image | null): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Granite-1.0.Granite.WidgetsWelcomeButton

    connect(sigName: "notify::title", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::always-show-image", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-show-image", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-show-image", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: "notify::image-position", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-position", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-position", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relief", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relief", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relief", ...args: any[]): void
    connect(sigName: "notify::use-stock", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-stock", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-stock", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WidgetsWelcomeButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WidgetsWelcomeButton extends Gtk.Button {

    // Own properties of Granite-1.0.Granite.WidgetsWelcomeButton

    static name: string
    static $gtype: GObject.GType<WidgetsWelcomeButton>

    // Constructors of Granite-1.0.Granite.WidgetsWelcomeButton

    constructor(config?: WidgetsWelcomeButton_ConstructProps) 
    constructor(image: Gtk.Image | null, option_text: string, description_text: string) 
    static new(image: Gtk.Image | null, option_text: string, description_text: string): WidgetsWelcomeButton

    // Overloads of new

    /**
     * Creates a new #GtkButton widget. To add a child widget to the button,
     * use gtk_container_add().
     * @constructor 
     */
    static new(): Gtk.Button
    _init(config?: WidgetsWelcomeButton_ConstructProps): void
}

interface WidgetsWelcome_ConstructProps extends Gtk.EventBox_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.WidgetsWelcome

    title?: string | null
    subtitle?: string | null
}

/**
 * Signal callback interface for `activated`
 */
interface WidgetsWelcome_ActivatedSignalCallback {
    ($obj: WidgetsWelcome, index: number): void
}

interface WidgetsWelcome {

    // Own properties of Granite-1.0.Granite.WidgetsWelcome

    title: string
    subtitle: string

    // Own fields of Granite-1.0.Granite.WidgetsWelcome

    children: Gtk.Button[]
    options: Gtk.Grid

    // Owm methods of Granite-1.0.Granite.WidgetsWelcome

    get_title(): string
    set_title(value: string): void
    get_subtitle(): string
    set_subtitle(value: string): void
    set_item_visible(index: number, val: boolean): void
    remove_item(index: number): void
    set_item_sensitivity(index: number, val: boolean): void
    append(icon_name: string, option_text: string, description_text: string): number
    append_with_pixbuf(pixbuf: GdkPixbuf.Pixbuf | null, option_text: string, description_text: string): number
    append_with_image(image: Gtk.Image | null, option_text: string, description_text: string): number
    get_button_from_index(index: number): WidgetsWelcomeButton | null

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own signals of Granite-1.0.Granite.WidgetsWelcome

    connect(sigName: "activated", callback: WidgetsWelcome_ActivatedSignalCallback): number
    connect_after(sigName: "activated", callback: WidgetsWelcome_ActivatedSignalCallback): number
    emit(sigName: "activated", index: number, ...args: any[]): void

    // Class property signals of Granite-1.0.Granite.WidgetsWelcome

    connect(sigName: "notify::title", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::above-child", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::above-child", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::above-child", ...args: any[]): void
    connect(sigName: "notify::visible-window", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-window", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-window", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WidgetsWelcome, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WidgetsWelcome extends Gtk.EventBox {

    // Own properties of Granite-1.0.Granite.WidgetsWelcome

    static name: string
    static $gtype: GObject.GType<WidgetsWelcome>

    // Constructors of Granite-1.0.Granite.WidgetsWelcome

    constructor(config?: WidgetsWelcome_ConstructProps) 
    constructor(title_text: string, subtitle_text: string) 
    static new(title_text: string, subtitle_text: string): WidgetsWelcome

    // Overloads of new

    /**
     * Creates a new #GtkEventBox.
     * @constructor 
     */
    static new(): Gtk.EventBox
    _init(config?: WidgetsWelcome_ConstructProps): void
}

interface Application_ConstructProps extends Gtk.Application_ConstructProps {
}

interface Application {

    // Own fields of Granite-1.0.Granite.Application

    build_data_dir: string
    build_pkg_data_dir: string
    build_release_name: string
    build_version: string
    build_version_info: string
    program_name: string
    exec_name: string
    app_copyright: string
    app_years: string
    app_icon: string
    app_launcher: string
    main_url: string
    bug_url: string
    help_url: string
    translate_url: string
    about_authors: string[]
    about_authors_length1: number
    about_documenters: string[]
    about_documenters_length1: number
    about_artists: string[]
    about_artists_length1: number
    about_comments: string
    about_translators: string
    about_license: string
    about_license_type: Gtk.License
    granite_application_DEBUG: boolean

    // Owm methods of Granite-1.0.Granite.Application

    run(args: string[]): number

    // Overloads of run

    /**
     * Runs the application.
     * 
     * This function is intended to be run from main() and its return value
     * is intended to be returned by main(). Although you are expected to pass
     * the `argc,` `argv` parameters from main() to this function, it is possible
     * to pass %NULL if `argv` is not available or commandline handling is not
     * required.  Note that on Windows, `argc` and `argv` are ignored, and
     * g_win32_get_command_line() is called internally (for proper support
     * of Unicode commandline arguments).
     * 
     * #GApplication will attempt to parse the commandline arguments.  You
     * can add commandline flags to the list of recognised options by way of
     * g_application_add_main_option_entries().  After this, the
     * #GApplication::handle-local-options signal is emitted, from which the
     * application can inspect the values of its #GOptionEntrys.
     * 
     * #GApplication::handle-local-options is a good place to handle options
     * such as `--version`, where an immediate reply from the local process is
     * desired (instead of communicating with an already-running instance).
     * A #GApplication::handle-local-options handler can stop further processing
     * by returning a non-negative value, which then becomes the exit status of
     * the process.
     * 
     * What happens next depends on the flags: if
     * %G_APPLICATION_HANDLES_COMMAND_LINE was specified then the remaining
     * commandline arguments are sent to the primary instance, where a
     * #GApplication::command-line signal is emitted.  Otherwise, the
     * remaining commandline arguments are assumed to be a list of files.
     * If there are no files listed, the application is activated via the
     * #GApplication::activate signal.  If there are one or more files, and
     * %G_APPLICATION_HANDLES_OPEN was specified then the files are opened
     * via the #GApplication::open signal.
     * 
     * If you are interested in doing more complicated local handling of the
     * commandline then you should implement your own #GApplication subclass
     * and override local_command_line(). In this case, you most likely want
     * to return %TRUE from your local_command_line() implementation to
     * suppress the default handling. See
     * [gapplication-example-cmdline2.c][https://gitlab.gnome.org/GNOME/glib/-/blob/HEAD/gio/tests/gapplication-example-cmdline2.c]
     * for an example.
     * 
     * If, after the above is done, the use count of the application is zero
     * then the exit status is returned immediately.  If the use count is
     * non-zero then the default main context is iterated until the use count
     * falls to zero, at which point 0 is returned.
     * 
     * If the %G_APPLICATION_IS_SERVICE flag is set, then the service will
     * run for as much as 10 seconds with a use count of zero while waiting
     * for the message that caused the activation to arrive.  After that,
     * if the use count falls to zero the application will exit immediately,
     * except in the case that g_application_set_inactivity_timeout() is in
     * use.
     * 
     * This function sets the prgname (g_set_prgname()), if not already set,
     * to the basename of argv[0].
     * 
     * Much like g_main_loop_run(), this function will acquire the main context
     * for the duration that the application is running.
     * 
     * Since 2.40, applications that are not explicitly flagged as services
     * or launchers (ie: neither %G_APPLICATION_IS_SERVICE or
     * %G_APPLICATION_IS_LAUNCHER are given as flags) will check (from the
     * default handler for local_command_line) if "--gapplication-service"
     * was given in the command line.  If this flag is present then normal
     * commandline processing is interrupted and the
     * %G_APPLICATION_IS_SERVICE flag is set.  This provides a "compromise"
     * solution whereby running an application directly from the commandline
     * will invoke it in the normal way (which can be useful for debugging)
     * while still allowing applications to be D-Bus activated in service
     * mode.  The D-Bus service file should invoke the executable with
     * "--gapplication-service" as the sole commandline argument.  This
     * approach is suitable for use by most graphical applications but
     * should not be used from applications like editors that need precise
     * control over when processes invoked via the commandline will exit and
     * what their exit status will be.
     * @param argv      the argv from main(), or %NULL
     */
    run(argv: string[] | null): number
    run(...args: any[]): any
    run(args_or_argv: any[] | string[] | null): number | any
    set_options(): void

    // Own virtual methods of Granite-1.0.Granite.Application

    vfunc_set_options(): void

    // Class property signals of Granite-1.0.Granite.Application

    connect(sigName: "notify::active-window", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-window", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-window", ...args: any[]): void
    connect(sigName: "notify::app-menu", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-menu", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-menu", ...args: any[]): void
    connect(sigName: "notify::menubar", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menubar", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::menubar", ...args: any[]): void
    connect(sigName: "notify::register-session", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::register-session", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::register-session", ...args: any[]): void
    connect(sigName: "notify::screensaver-active", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screensaver-active", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screensaver-active", ...args: any[]): void
    connect(sigName: "notify::action-group", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-group", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-group", ...args: any[]): void
    connect(sigName: "notify::application-id", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application-id", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::inactivity-timeout", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inactivity-timeout", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inactivity-timeout", ...args: any[]): void
    connect(sigName: "notify::is-busy", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-busy", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-busy", ...args: any[]): void
    connect(sigName: "notify::is-registered", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-registered", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-registered", ...args: any[]): void
    connect(sigName: "notify::is-remote", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-remote", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-remote", ...args: any[]): void
    connect(sigName: "notify::resource-base-path", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-base-path", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource-base-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Application extends Gtk.Application {

    // Own properties of Granite-1.0.Granite.Application

    static name: string
    static $gtype: GObject.GType<Application>

    // Constructors of Granite-1.0.Granite.Application

    constructor(config?: Application_ConstructProps) 
    _init(config?: Application_ConstructProps): void

    // Conflicting static methods

    static new(...args: any[]): any
}

interface SettingsPage_ConstructProps extends Gtk.ScrolledWindow_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.SettingsPage

    status_type?: SettingsPageStatusType | null
    display_widget?: Gtk.Widget | null
    header?: string | null
    status?: string | null
    icon_name?: string | null
    title?: string | null
}

interface SettingsPage {

    // Own properties of Granite-1.0.Granite.SettingsPage

    status_type: SettingsPageStatusType
    readonly display_widget: Gtk.Widget
    readonly header: string
    status: string
    icon_name: string
    title: string

    // Conflicting properties

    container: any

    // Own fields of Granite-1.0.Granite.SettingsPage

    _icon_name: string
    _title: string

    // Owm methods of Granite-1.0.Granite.SettingsPage

    get_status_type(): SettingsPageStatusType
    set_status_type(value: SettingsPageStatusType): void
    get_display_widget(): Gtk.Widget | null
    get_header(): string | null
    get_status(): string
    set_status(value: string): void
    get_icon_name(): string | null
    set_icon_name(value: string | null): void
    get_title(): string
    set_title(value: string): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Granite-1.0.Granite.SettingsPage

    connect(sigName: "notify::status-type", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-type", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status-type", ...args: any[]): void
    connect(sigName: "notify::display-widget", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-widget", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-widget", ...args: any[]): void
    connect(sigName: "notify::header", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::header", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::header", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscrollbar-policy", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscrollbar-policy", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscrollbar-policy", ...args: any[]): void
    connect(sigName: "notify::kinetic-scrolling", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kinetic-scrolling", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::kinetic-scrolling", ...args: any[]): void
    connect(sigName: "notify::max-content-height", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-content-height", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-content-height", ...args: any[]): void
    connect(sigName: "notify::max-content-width", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-content-width", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-content-width", ...args: any[]): void
    connect(sigName: "notify::min-content-height", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-content-height", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-content-height", ...args: any[]): void
    connect(sigName: "notify::min-content-width", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-content-width", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-content-width", ...args: any[]): void
    connect(sigName: "notify::overlay-scrolling", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overlay-scrolling", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overlay-scrolling", ...args: any[]): void
    connect(sigName: "notify::propagate-natural-height", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::propagate-natural-height", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::propagate-natural-height", ...args: any[]): void
    connect(sigName: "notify::propagate-natural-width", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::propagate-natural-width", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::propagate-natural-width", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscrollbar-policy", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscrollbar-policy", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscrollbar-policy", ...args: any[]): void
    connect(sigName: "notify::window-placement", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-placement", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-placement", ...args: any[]): void
    connect(sigName: "notify::window-placement-set", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-placement-set", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-placement-set", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: SettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SettingsPage extends Gtk.ScrolledWindow {

    // Own properties of Granite-1.0.Granite.SettingsPage

    static name: string
    static $gtype: GObject.GType<SettingsPage>

    // Constructors of Granite-1.0.Granite.SettingsPage

    constructor(config?: SettingsPage_ConstructProps) 
    _init(config?: SettingsPage_ConstructProps): void
}

interface SimpleSettingsPage_ConstructProps extends SettingsPage_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.SimpleSettingsPage

    action_area?: Gtk.ButtonBox | null
    content_area?: Gtk.Grid | null
    status_switch?: Gtk.Switch | null
    activatable?: boolean | null
    description?: string | null
    icon_name?: string | null
    title?: string | null
}

interface SimpleSettingsPage {

    // Own properties of Granite-1.0.Granite.SimpleSettingsPage

    readonly action_area: Gtk.ButtonBox
    readonly content_area: Gtk.Grid
    readonly status_switch: Gtk.Switch
    readonly activatable: boolean
    description: string
    icon_name: string
    title: string

    // Conflicting properties

    container: any

    // Owm methods of Granite-1.0.Granite.SimpleSettingsPage

    get_action_area(): Gtk.ButtonBox
    get_content_area(): Gtk.Grid
    get_status_switch(): Gtk.Switch | null
    get_activatable(): boolean
    get_description(): string
    set_description(value: string): void
    get_icon_name(): string

    // Overloads of get_icon_name

    get_icon_name(): string | null
    get_icon_name(...args: any[]): any
    get_icon_name(...args: any[]): string | string | null | any
    set_icon_name(value: string): void

    // Overloads of set_icon_name

    set_icon_name(value: string | null): void
    set_icon_name(...args: any[]): any
    set_icon_name(args_or_value: any[] | string | null): void | any
    get_title(): string
    set_title(value: string): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Granite-1.0.Granite.SimpleSettingsPage

    connect(sigName: "notify::action-area", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-area", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-area", ...args: any[]): void
    connect(sigName: "notify::content-area", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-area", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-area", ...args: any[]): void
    connect(sigName: "notify::status-switch", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-switch", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status-switch", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::status-type", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-type", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status-type", ...args: any[]): void
    connect(sigName: "notify::display-widget", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-widget", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-widget", ...args: any[]): void
    connect(sigName: "notify::header", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::header", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::header", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscrollbar-policy", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscrollbar-policy", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscrollbar-policy", ...args: any[]): void
    connect(sigName: "notify::kinetic-scrolling", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kinetic-scrolling", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::kinetic-scrolling", ...args: any[]): void
    connect(sigName: "notify::max-content-height", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-content-height", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-content-height", ...args: any[]): void
    connect(sigName: "notify::max-content-width", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-content-width", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-content-width", ...args: any[]): void
    connect(sigName: "notify::min-content-height", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-content-height", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-content-height", ...args: any[]): void
    connect(sigName: "notify::min-content-width", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-content-width", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-content-width", ...args: any[]): void
    connect(sigName: "notify::overlay-scrolling", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overlay-scrolling", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overlay-scrolling", ...args: any[]): void
    connect(sigName: "notify::propagate-natural-height", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::propagate-natural-height", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::propagate-natural-height", ...args: any[]): void
    connect(sigName: "notify::propagate-natural-width", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::propagate-natural-width", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::propagate-natural-width", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscrollbar-policy", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscrollbar-policy", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscrollbar-policy", ...args: any[]): void
    connect(sigName: "notify::window-placement", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-placement", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-placement", ...args: any[]): void
    connect(sigName: "notify::window-placement-set", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-placement-set", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-placement-set", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: SimpleSettingsPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SimpleSettingsPage extends SettingsPage {

    // Own properties of Granite-1.0.Granite.SimpleSettingsPage

    static name: string
    static $gtype: GObject.GType<SimpleSettingsPage>

    // Constructors of Granite-1.0.Granite.SimpleSettingsPage

    constructor(config?: SimpleSettingsPage_ConstructProps) 
    _init(config?: SimpleSettingsPage_ConstructProps): void
}

interface AccelLabel_ConstructProps extends Gtk.Grid_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.AccelLabel

    action_name?: string | null
    accel_string?: string | null
    label?: string | null
}

interface AccelLabel {

    // Own properties of Granite-1.0.Granite.AccelLabel

    action_name: string
    accel_string: string
    label: string

    // Owm methods of Granite-1.0.Granite.AccelLabel

    get_action_name(): string
    set_action_name(value: string): void
    get_accel_string(): string | null
    set_accel_string(value: string | null): void
    get_label(): string
    set_label(value: string): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Granite-1.0.Granite.AccelLabel

    connect(sigName: "notify::action-name", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::accel-string", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accel-string", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accel-string", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::baseline-row", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: AccelLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AccelLabel extends Gtk.Grid {

    // Own properties of Granite-1.0.Granite.AccelLabel

    static name: string
    static $gtype: GObject.GType<AccelLabel>

    // Constructors of Granite-1.0.Granite.AccelLabel

    constructor(config?: AccelLabel_ConstructProps) 
    constructor(label: string, accel_string: string | null) 
    static new(label: string, accel_string: string | null): AccelLabel

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     */
    static new(): Gtk.Grid
    static from_action_name(label: string, action_name: string): AccelLabel
    _init(config?: AccelLabel_ConstructProps): void
}

interface AsyncImage_ConstructProps extends Gtk.Image_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.AsyncImage

    load_on_realize?: boolean | null
    auto_size_request?: boolean | null
    gicon_async?: Gio.Icon | null
    size_async?: number | null
}

interface AsyncImage {

    // Own properties of Granite-1.0.Granite.AsyncImage

    readonly load_on_realize: boolean
    readonly auto_size_request: boolean
    gicon_async: Gio.Icon
    size_async: number

    // Owm methods of Granite-1.0.Granite.AsyncImage

    get_gicon_async(): Gio.Icon | null
    get_size_async(): number
    set_from_gicon_async(icon: Gio.Icon, size: number, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    set_from_gicon_finish(_res_: Gio.AsyncResult): void
    set_from_icon_name_async(icon_name: string, icon_size: Gtk.IconSize, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    set_from_icon_name_finish(_res_: Gio.AsyncResult): void
    set_from_file_async(file: Gio.File, width: number, height: number, preserve_aspect_ratio: boolean, cancellable: Gio.Cancellable | null, _callback_: Gio.AsyncReadyCallback | null): void
    set_from_file_finish(_res_: Gio.AsyncResult): void

    // Class property signals of Granite-1.0.Granite.AsyncImage

    connect(sigName: "notify::load-on-realize", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::load-on-realize", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::load-on-realize", ...args: any[]): void
    connect(sigName: "notify::auto-size-request", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-size-request", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auto-size-request", ...args: any[]): void
    connect(sigName: "notify::gicon-async", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gicon-async", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gicon-async", ...args: any[]): void
    connect(sigName: "notify::size-async", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-async", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size-async", ...args: any[]): void
    connect(sigName: "notify::file", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::gicon", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gicon", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gicon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::icon-set", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-set", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-set", ...args: any[]): void
    connect(sigName: "notify::icon-size", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-size", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-size", ...args: any[]): void
    connect(sigName: "notify::pixbuf", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf", ...args: any[]): void
    connect(sigName: "notify::pixbuf-animation", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf-animation", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf-animation", ...args: any[]): void
    connect(sigName: "notify::pixel-size", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixel-size", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixel-size", ...args: any[]): void
    connect(sigName: "notify::resource", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource", ...args: any[]): void
    connect(sigName: "notify::stock", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stock", ...args: any[]): void
    connect(sigName: "notify::storage-type", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::storage-type", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::storage-type", ...args: any[]): void
    connect(sigName: "notify::surface", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: "notify::use-fallback", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-fallback", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-fallback", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: AsyncImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AsyncImage extends Gtk.Image {

    // Own properties of Granite-1.0.Granite.AsyncImage

    static name: string
    static $gtype: GObject.GType<AsyncImage>

    // Constructors of Granite-1.0.Granite.AsyncImage

    constructor(config?: AsyncImage_ConstructProps) 
    constructor(load_on_realize: boolean, auto_size_request: boolean) 
    static new(load_on_realize: boolean, auto_size_request: boolean): AsyncImage

    // Overloads of new

    /**
     * Creates a new empty #GtkImage widget.
     * @constructor 
     */
    static new(): Gtk.Image
    static from_gicon_async(icon: Gio.Icon, size: number, load_on_realize: boolean, auto_size_request: boolean): AsyncImage
    static from_icon_name_async(icon_name: string, icon_size: Gtk.IconSize, load_on_realize: boolean, auto_size_request: boolean): AsyncImage
    _init(config?: AsyncImage_ConstructProps): void
}

interface Dialog_ConstructProps extends Gtk.Dialog_ConstructProps {
}

interface Dialog {

    // Conflicting properties

    window: any

    // Conflicting methods

    mnemonic_activate(...args: any[]): any
    child_notify(...args: any[]): any

    // Class property signals of Granite-1.0.Granite.Dialog

    connect(sigName: "notify::use-header-bar", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-header-bar", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
    connect(sigName: "notify::accept-focus", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Dialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Dialog extends Gtk.Dialog {

    // Own properties of Granite-1.0.Granite.Dialog

    static name: string
    static $gtype: GObject.GType<Dialog>

    // Constructors of Granite-1.0.Granite.Dialog

    constructor(config?: Dialog_ConstructProps) 
    constructor() 
    static new(): Dialog

    // Overloads of new

    /**
     * Creates a new dialog box.
     * 
     * Widgets should not be packed into this #GtkWindow
     * directly, but into the `vbox` and `action_area,` as described above.
     * @constructor 
     */
    static new(): Gtk.Dialog
    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you’re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called “popups”.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don’t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: Dialog_ConstructProps): void
}

interface HeaderLabel_ConstructProps extends Gtk.Label_ConstructProps {
}

interface HeaderLabel {

    // Class property signals of Granite-1.0.Granite.HeaderLabel

    connect(sigName: "notify::angle", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::angle", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::angle", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::cursor-position", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-position", ...args: any[]): void
    connect(sigName: "notify::ellipsize", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ellipsize", ...args: any[]): void
    connect(sigName: "notify::justify", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justify", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::justify", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::lines", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lines", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::lines", ...args: any[]): void
    connect(sigName: "notify::max-width-chars", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width-chars", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-width-chars", ...args: any[]): void
    connect(sigName: "notify::mnemonic-keyval", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonic-keyval", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonic-keyval", ...args: any[]): void
    connect(sigName: "notify::mnemonic-widget", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonic-widget", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonic-widget", ...args: any[]): void
    connect(sigName: "notify::pattern", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pattern", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pattern", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selectable", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selectable", ...args: any[]): void
    connect(sigName: "notify::selection-bound", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-bound", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selection-bound", ...args: any[]): void
    connect(sigName: "notify::single-line-mode", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::single-line-mode", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::single-line-mode", ...args: any[]): void
    connect(sigName: "notify::track-visited-links", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-visited-links", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::track-visited-links", ...args: any[]): void
    connect(sigName: "notify::use-markup", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-markup", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-markup", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::width-chars", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-chars", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-chars", ...args: any[]): void
    connect(sigName: "notify::wrap", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap", ...args: any[]): void
    connect(sigName: "notify::wrap-mode", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-mode", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: HeaderLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HeaderLabel extends Gtk.Label {

    // Own properties of Granite-1.0.Granite.HeaderLabel

    static name: string
    static $gtype: GObject.GType<HeaderLabel>

    // Constructors of Granite-1.0.Granite.HeaderLabel

    constructor(config?: HeaderLabel_ConstructProps) 
    constructor(label: string) 
    static new(label: string): HeaderLabel

    // Overloads of new

    /**
     * Creates a new label with the given text inside it. You can
     * pass %NULL to get an empty label widget.
     * @constructor 
     * @param str The text of the label
     */
    static new(str: string | null): Gtk.Label
    _init(config?: HeaderLabel_ConstructProps): void
}

interface HyperTextView_ConstructProps extends Gtk.TextView_ConstructProps {
}

interface HyperTextView {

    // Conflicting properties

    parent_instance: any

    // Conflicting methods

    get_window(...args: any[]): any
    child_notify(...args: any[]): any

    // Class property signals of Granite-1.0.Granite.HyperTextView

    connect(sigName: "notify::accepts-tab", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accepts-tab", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accepts-tab", ...args: any[]): void
    connect(sigName: "notify::bottom-margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bottom-margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bottom-margin", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::cursor-visible", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-visible", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-visible", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::indent", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indent", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::justification", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justification", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::justification", ...args: any[]): void
    connect(sigName: "notify::left-margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::left-margin", ...args: any[]): void
    connect(sigName: "notify::monospace", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monospace", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::monospace", ...args: any[]): void
    connect(sigName: "notify::overwrite", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overwrite", ...args: any[]): void
    connect(sigName: "notify::pixels-above-lines", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-above-lines", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixels-above-lines", ...args: any[]): void
    connect(sigName: "notify::pixels-below-lines", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-below-lines", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixels-below-lines", ...args: any[]): void
    connect(sigName: "notify::pixels-inside-wrap", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-inside-wrap", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixels-inside-wrap", ...args: any[]): void
    connect(sigName: "notify::populate-all", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::populate-all", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::populate-all", ...args: any[]): void
    connect(sigName: "notify::right-margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::right-margin", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::top-margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::top-margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::top-margin", ...args: any[]): void
    connect(sigName: "notify::wrap-mode", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-mode", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: HyperTextView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class HyperTextView extends Gtk.TextView {

    // Own properties of Granite-1.0.Granite.HyperTextView

    static name: string
    static $gtype: GObject.GType<HyperTextView>

    // Constructors of Granite-1.0.Granite.HyperTextView

    constructor(config?: HyperTextView_ConstructProps) 
    constructor() 
    static new(): HyperTextView

    // Overloads of new

    /**
     * Creates a new #GtkTextView. If you don’t call gtk_text_view_set_buffer()
     * before using the text view, an empty default buffer will be created
     * for you. Get the buffer with gtk_text_view_get_buffer(). If you want
     * to specify your own buffer, consider gtk_text_view_new_with_buffer().
     * @constructor 
     */
    static new(): Gtk.TextView
    _init(config?: HyperTextView_ConstructProps): void
}

interface MessageDialog_ConstructProps extends Dialog_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.MessageDialog

    primary_text?: string | null
    secondary_text?: string | null
    image_icon?: Gio.Icon | null
    badge_icon?: Gio.Icon | null
    primary_label?: Gtk.Label | null
    secondary_label?: Gtk.Label | null
    buttons?: Gtk.ButtonsType | null
    custom_bin?: Gtk.Bin | null
}

interface MessageDialog {

    // Own properties of Granite-1.0.Granite.MessageDialog

    primary_text: string
    secondary_text: string
    image_icon: Gio.Icon
    badge_icon: Gio.Icon
    readonly primary_label: Gtk.Label
    readonly secondary_label: Gtk.Label
    readonly buttons: Gtk.ButtonsType
    readonly custom_bin: Gtk.Bin

    // Conflicting properties

    window: any

    // Owm methods of Granite-1.0.Granite.MessageDialog

    get_primary_text(): string
    set_primary_text(value: string): void
    get_secondary_text(): string
    set_secondary_text(value: string): void
    get_image_icon(): Gio.Icon
    set_image_icon(value: Gio.Icon): void
    get_badge_icon(): Gio.Icon
    set_badge_icon(value: Gio.Icon): void
    get_primary_label(): Gtk.Label
    get_secondary_label(): Gtk.Label
    get_custom_bin(): Gtk.Bin
    show_error_details(error_message: string): void

    // Conflicting methods

    mnemonic_activate(...args: any[]): any
    child_notify(...args: any[]): any

    // Class property signals of Granite-1.0.Granite.MessageDialog

    connect(sigName: "notify::primary-text", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-text", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-text", ...args: any[]): void
    connect(sigName: "notify::secondary-text", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-text", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-text", ...args: any[]): void
    connect(sigName: "notify::image-icon", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-icon", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-icon", ...args: any[]): void
    connect(sigName: "notify::badge-icon", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::badge-icon", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::badge-icon", ...args: any[]): void
    connect(sigName: "notify::primary-label", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-label", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-label", ...args: any[]): void
    connect(sigName: "notify::secondary-label", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-label", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-label", ...args: any[]): void
    connect(sigName: "notify::buttons", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buttons", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buttons", ...args: any[]): void
    connect(sigName: "notify::custom-bin", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::custom-bin", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::custom-bin", ...args: any[]): void
    connect(sigName: "notify::use-header-bar", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-header-bar", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
    connect(sigName: "notify::accept-focus", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: MessageDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MessageDialog extends Dialog {

    // Own properties of Granite-1.0.Granite.MessageDialog

    static name: string
    static $gtype: GObject.GType<MessageDialog>

    // Constructors of Granite-1.0.Granite.MessageDialog

    constructor(config?: MessageDialog_ConstructProps) 
    constructor(primary_text: string, secondary_text: string, image_icon: Gio.Icon, buttons: Gtk.ButtonsType) 
    static new(primary_text: string, secondary_text: string, image_icon: Gio.Icon, buttons: Gtk.ButtonsType): MessageDialog

    // Overloads of new

    static new(): Dialog
    /**
     * Creates a new dialog box.
     * 
     * Widgets should not be packed into this #GtkWindow
     * directly, but into the `vbox` and `action_area,` as described above.
     * @constructor 
     */
    static new(): Gtk.Dialog
    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you’re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called “popups”.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don’t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     */
    static new(type: Gtk.WindowType): Gtk.Window
    static with_image_from_icon_name(primary_text: string, secondary_text: string, image_icon_name: string, buttons: Gtk.ButtonsType): MessageDialog
    _init(config?: MessageDialog_ConstructProps): void
}

interface ModeSwitch_ConstructProps extends Gtk.Grid_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.ModeSwitch

    active?: boolean | null
    primary_icon_gicon?: Gio.Icon | null
    primary_icon_name?: string | null
    primary_icon_tooltip_text?: string | null
    secondary_icon_gicon?: Gio.Icon | null
    secondary_icon_name?: string | null
    secondary_icon_tooltip_text?: string | null
}

interface ModeSwitch {

    // Own properties of Granite-1.0.Granite.ModeSwitch

    active: boolean
    primary_icon_gicon: Gio.Icon
    primary_icon_name: string
    primary_icon_tooltip_text: string
    secondary_icon_gicon: Gio.Icon
    secondary_icon_name: string
    secondary_icon_tooltip_text: string

    // Owm methods of Granite-1.0.Granite.ModeSwitch

    get_active(): boolean
    set_active(value: boolean): void
    get_primary_icon_gicon(): Gio.Icon
    set_primary_icon_gicon(value: Gio.Icon): void
    get_primary_icon_name(): string
    set_primary_icon_name(value: string): void
    get_primary_icon_tooltip_text(): string
    set_primary_icon_tooltip_text(value: string): void
    get_secondary_icon_gicon(): Gio.Icon
    set_secondary_icon_gicon(value: Gio.Icon): void
    get_secondary_icon_name(): string
    set_secondary_icon_name(value: string): void
    get_secondary_icon_tooltip_text(): string
    set_secondary_icon_tooltip_text(value: string): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Granite-1.0.Granite.ModeSwitch

    connect(sigName: "notify::active", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-gicon", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-name", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-gicon", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-name", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::baseline-row", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ModeSwitch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ModeSwitch extends Gtk.Grid {

    // Own properties of Granite-1.0.Granite.ModeSwitch

    static name: string
    static $gtype: GObject.GType<ModeSwitch>

    // Constructors of Granite-1.0.Granite.ModeSwitch

    constructor(config?: ModeSwitch_ConstructProps) 
    constructor(primary_icon_gicon: Gio.Icon, secondary_icon_gicon: Gio.Icon) 
    static new(primary_icon_gicon: Gio.Icon, secondary_icon_gicon: Gio.Icon): ModeSwitch

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     */
    static new(): Gtk.Grid
    static from_icon_name(primary_icon_name: string, secondary_icon_name: string): ModeSwitch
    _init(config?: ModeSwitch_ConstructProps): void
}

interface SeekBar_ConstructProps extends Gtk.Grid_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.SeekBar

    playback_duration?: number | null
    playback_progress?: number | null
    is_grabbing?: boolean | null
    is_hovering?: boolean | null
    progression_label?: Gtk.Label | null
    duration_label?: Gtk.Label | null
    scale?: Gtk.Scale | null
}

interface SeekBar {

    // Own properties of Granite-1.0.Granite.SeekBar

    playback_duration: number
    playback_progress: number
    is_grabbing: boolean
    is_hovering: boolean
    progression_label: Gtk.Label
    duration_label: Gtk.Label
    scale: Gtk.Scale

    // Owm methods of Granite-1.0.Granite.SeekBar

    get_playback_duration(): number
    set_playback_duration(value: number): void
    get_playback_progress(): number
    set_playback_progress(value: number): void
    get_is_grabbing(): boolean
    get_is_hovering(): boolean
    get_progression_label(): Gtk.Label
    set_progression_label(value: Gtk.Label): void
    get_duration_label(): Gtk.Label
    set_duration_label(value: Gtk.Label): void
    get_scale(): Gtk.Scale
    set_scale(value: Gtk.Scale): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Granite-1.0.Granite.SeekBar

    connect(sigName: "notify::playback-duration", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-duration", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::playback-duration", ...args: any[]): void
    connect(sigName: "notify::playback-progress", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-progress", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::playback-progress", ...args: any[]): void
    connect(sigName: "notify::is-grabbing", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-grabbing", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-grabbing", ...args: any[]): void
    connect(sigName: "notify::is-hovering", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-hovering", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-hovering", ...args: any[]): void
    connect(sigName: "notify::progression-label", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progression-label", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progression-label", ...args: any[]): void
    connect(sigName: "notify::duration-label", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-label", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration-label", ...args: any[]): void
    connect(sigName: "notify::scale", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::baseline-row", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: SeekBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SeekBar extends Gtk.Grid {

    // Own properties of Granite-1.0.Granite.SeekBar

    static name: string
    static $gtype: GObject.GType<SeekBar>

    // Constructors of Granite-1.0.Granite.SeekBar

    constructor(config?: SeekBar_ConstructProps) 
    constructor(playback_duration: number) 
    static new(playback_duration: number): SeekBar

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     */
    static new(): Gtk.Grid
    _init(config?: SeekBar_ConstructProps): void
}

interface SettingsSidebar_ConstructProps extends Gtk.ScrolledWindow_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.SettingsSidebar

    stack?: Gtk.Stack | null
    visible_child_name?: string | null
}

interface SettingsSidebar {

    // Own properties of Granite-1.0.Granite.SettingsSidebar

    readonly stack: Gtk.Stack
    visible_child_name: string

    // Conflicting properties

    container: any

    // Owm methods of Granite-1.0.Granite.SettingsSidebar

    get_stack(): Gtk.Stack
    get_visible_child_name(): string | null
    set_visible_child_name(value: string | null): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Granite-1.0.Granite.SettingsSidebar

    connect(sigName: "notify::stack", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stack", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stack", ...args: any[]): void
    connect(sigName: "notify::visible-child-name", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-child-name", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible-child-name", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscrollbar-policy", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscrollbar-policy", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscrollbar-policy", ...args: any[]): void
    connect(sigName: "notify::kinetic-scrolling", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kinetic-scrolling", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::kinetic-scrolling", ...args: any[]): void
    connect(sigName: "notify::max-content-height", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-content-height", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-content-height", ...args: any[]): void
    connect(sigName: "notify::max-content-width", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-content-width", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-content-width", ...args: any[]): void
    connect(sigName: "notify::min-content-height", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-content-height", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-content-height", ...args: any[]): void
    connect(sigName: "notify::min-content-width", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-content-width", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-content-width", ...args: any[]): void
    connect(sigName: "notify::overlay-scrolling", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overlay-scrolling", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overlay-scrolling", ...args: any[]): void
    connect(sigName: "notify::propagate-natural-height", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::propagate-natural-height", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::propagate-natural-height", ...args: any[]): void
    connect(sigName: "notify::propagate-natural-width", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::propagate-natural-width", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::propagate-natural-width", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscrollbar-policy", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscrollbar-policy", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscrollbar-policy", ...args: any[]): void
    connect(sigName: "notify::window-placement", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-placement", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-placement", ...args: any[]): void
    connect(sigName: "notify::window-placement-set", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-placement-set", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-placement-set", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: SettingsSidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SettingsSidebar extends Gtk.ScrolledWindow {

    // Own properties of Granite-1.0.Granite.SettingsSidebar

    static name: string
    static $gtype: GObject.GType<SettingsSidebar>

    // Constructors of Granite-1.0.Granite.SettingsSidebar

    constructor(config?: SettingsSidebar_ConstructProps) 
    constructor(stack: Gtk.Stack) 
    static new(stack: Gtk.Stack): SettingsSidebar

    // Overloads of new

    /**
     * Creates a new scrolled window.
     * 
     * The two arguments are the scrolled window’s adjustments; these will be
     * shared with the scrollbars and the child widget to keep the bars in sync
     * with the child. Usually you want to pass %NULL for the adjustments, which
     * will cause the scrolled window to create them for you.
     * @constructor 
     * @param hadjustment horizontal adjustment
     * @param vadjustment vertical adjustment
     */
    static new(hadjustment: Gtk.Adjustment | null, vadjustment: Gtk.Adjustment | null): Gtk.ScrolledWindow
    _init(config?: SettingsSidebar_ConstructProps): void
}

interface Settings_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.Settings

    prefers_color_scheme?: SettingsColorScheme | null
}

interface Settings {

    // Own properties of Granite-1.0.Granite.Settings

    prefers_color_scheme: SettingsColorScheme

    // Owm methods of Granite-1.0.Granite.Settings

    get_prefers_color_scheme(): SettingsColorScheme

    // Class property signals of Granite-1.0.Granite.Settings

    connect(sigName: "notify::prefers-color-scheme", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefers-color-scheme", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefers-color-scheme", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Settings extends GObject.Object {

    // Own properties of Granite-1.0.Granite.Settings

    static name: string
    static $gtype: GObject.GType<Settings>

    // Constructors of Granite-1.0.Granite.Settings

    constructor(config?: Settings_ConstructProps) 
    _init(config?: Settings_ConstructProps): void
    static get_default(): Settings
}

interface SwitchModelButton_ConstructProps extends Gtk.ToggleButton_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.SwitchModelButton

    text?: string | null
    description?: string | null
}

interface SwitchModelButton {

    // Own properties of Granite-1.0.Granite.SwitchModelButton

    text: string
    description: string

    // Owm methods of Granite-1.0.Granite.SwitchModelButton

    get_text(): string
    set_text(value: string): void
    get_description(): string | null
    set_description(value: string | null): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Granite-1.0.Granite.SwitchModelButton

    connect(sigName: "notify::text", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::draw-indicator", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-indicator", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::draw-indicator", ...args: any[]): void
    connect(sigName: "notify::inconsistent", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inconsistent", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inconsistent", ...args: any[]): void
    connect(sigName: "notify::always-show-image", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-show-image", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::always-show-image", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: "notify::image-position", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-position", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-position", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relief", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relief", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::relief", ...args: any[]): void
    connect(sigName: "notify::use-stock", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-stock", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-stock", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: SwitchModelButton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SwitchModelButton extends Gtk.ToggleButton {

    // Own properties of Granite-1.0.Granite.SwitchModelButton

    static name: string
    static $gtype: GObject.GType<SwitchModelButton>

    // Constructors of Granite-1.0.Granite.SwitchModelButton

    constructor(config?: SwitchModelButton_ConstructProps) 
    constructor(text: string) 
    static new(text: string): SwitchModelButton

    // Overloads of new

    /**
     * Creates a new toggle button. A widget should be packed into the button, as in gtk_button_new().
     * @constructor 
     */
    static new(): Gtk.ToggleButton
    _init(config?: SwitchModelButton_ConstructProps): void
}

interface ValidatedEntry_ConstructProps extends Gtk.Entry_ConstructProps {

    // Own constructor properties of Granite-1.0.Granite.ValidatedEntry

    is_valid?: boolean | null
    min_length?: number | null
    regex?: GLib.Regex | null
}

interface ValidatedEntry {

    // Own properties of Granite-1.0.Granite.ValidatedEntry

    is_valid: boolean
    min_length: number
    regex: GLib.Regex

    // Owm methods of Granite-1.0.Granite.ValidatedEntry

    get_is_valid(): boolean
    set_is_valid(value: boolean): void
    get_min_length(): number
    set_min_length(value: number): void
    get_regex(): GLib.Regex
    set_regex(value: GLib.Regex): void

    // Class property signals of Granite-1.0.Granite.ValidatedEntry

    connect(sigName: "notify::is-valid", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-valid", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-valid", ...args: any[]): void
    connect(sigName: "notify::min-length", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-length", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-length", ...args: any[]): void
    connect(sigName: "notify::regex", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::regex", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::regex", ...args: any[]): void
    connect(sigName: "notify::activates-default", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activates-default", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activates-default", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::caps-lock-warning", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-warning", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caps-lock-warning", ...args: any[]): void
    connect(sigName: "notify::completion", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::cursor-position", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-position", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::enable-emoji-completion", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-emoji-completion", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-emoji-completion", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::inner-border", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inner-border", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inner-border", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::invisible-char", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char", ...args: any[]): void
    connect(sigName: "notify::invisible-char-set", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char-set", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char-set", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-length", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::max-width-chars", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width-chars", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-width-chars", ...args: any[]): void
    connect(sigName: "notify::overwrite-mode", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite-mode", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overwrite-mode", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::populate-all", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::populate-all", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::populate-all", ...args: any[]): void
    connect(sigName: "notify::primary-icon-activatable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-activatable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-gicon", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-name", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-pixbuf", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-pixbuf", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::primary-icon-sensitive", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-sensitive", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::primary-icon-stock", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-stock", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::primary-icon-storage-type", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-storage-type", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::progress-fraction", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-fraction", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-fraction", ...args: any[]): void
    connect(sigName: "notify::progress-pulse-step", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-pulse-step", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-pulse-step", ...args: any[]): void
    connect(sigName: "notify::scroll-offset", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-offset", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scroll-offset", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-activatable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-activatable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-gicon", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-name", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-sensitive", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-sensitive", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-stock", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-stock", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-storage-type", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-storage-type", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::selection-bound", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-bound", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selection-bound", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::show-emoji-icon", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-emoji-icon", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-emoji-icon", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::text-length", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-length", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-length", ...args: any[]): void
    connect(sigName: "notify::truncate-multiline", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::truncate-multiline", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::truncate-multiline", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::width-chars", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-chars", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-chars", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ValidatedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ValidatedEntry extends Gtk.Entry {

    // Own properties of Granite-1.0.Granite.ValidatedEntry

    static name: string
    static $gtype: GObject.GType<ValidatedEntry>

    // Constructors of Granite-1.0.Granite.ValidatedEntry

    constructor(config?: ValidatedEntry_ConstructProps) 
    static from_regex(regex_arg: GLib.Regex): ValidatedEntry
    constructor() 
    static new(): ValidatedEntry

    // Overloads of new

    /**
     * Creates a new entry.
     * @constructor 
     */
    static new(): Gtk.Entry
    _init(config?: ValidatedEntry_ConstructProps): void
}

interface DrawingBufferSurfaceClass {
}

abstract class DrawingBufferSurfaceClass {

    // Own properties of Granite-1.0.Granite.DrawingBufferSurfaceClass

    static name: string
}

interface DrawingBufferSurfacePrivate {
}

class DrawingBufferSurfacePrivate {

    // Own properties of Granite-1.0.Granite.DrawingBufferSurfacePrivate

    static name: string
}

interface DrawingColorClass {
}

abstract class DrawingColorClass {

    // Own properties of Granite-1.0.Granite.DrawingColorClass

    static name: string
}

interface DrawingColorPrivate {
}

class DrawingColorPrivate {

    // Own properties of Granite-1.0.Granite.DrawingColorPrivate

    static name: string
}

interface DrawingUtilitiesClass {
}

abstract class DrawingUtilitiesClass {

    // Own properties of Granite-1.0.Granite.DrawingUtilitiesClass

    static name: string
}

interface DrawingUtilitiesPrivate {
}

class DrawingUtilitiesPrivate {

    // Own properties of Granite-1.0.Granite.DrawingUtilitiesPrivate

    static name: string
}

interface ServicesContractorProxyClass {
}

abstract class ServicesContractorProxyClass {

    // Own properties of Granite-1.0.Granite.ServicesContractorProxyClass

    static name: string
}

interface ServicesContractorProxyPrivate {
}

class ServicesContractorProxyPrivate {

    // Own properties of Granite-1.0.Granite.ServicesContractorProxyPrivate

    static name: string
}

interface ServicesIconFactoryClass {
}

abstract class ServicesIconFactoryClass {

    // Own properties of Granite-1.0.Granite.ServicesIconFactoryClass

    static name: string
}

interface ServicesIconFactoryPrivate {
}

class ServicesIconFactoryPrivate {

    // Own properties of Granite-1.0.Granite.ServicesIconFactoryPrivate

    static name: string
}

interface ServicesLoggerClass {
}

abstract class ServicesLoggerClass {

    // Own properties of Granite-1.0.Granite.ServicesLoggerClass

    static name: string
}

interface ServicesLoggerPrivate {
}

class ServicesLoggerPrivate {

    // Own properties of Granite-1.0.Granite.ServicesLoggerPrivate

    static name: string
}

interface ServicesPathsClass {
}

abstract class ServicesPathsClass {

    // Own properties of Granite-1.0.Granite.ServicesPathsClass

    static name: string
}

interface ServicesPathsPrivate {
}

class ServicesPathsPrivate {

    // Own properties of Granite-1.0.Granite.ServicesPathsPrivate

    static name: string
}

interface ServicesSettingsClass {

    // Own fields of Granite-1.0.Granite.ServicesSettingsClass

    verify: (self: any, key: string) => void
}

abstract class ServicesSettingsClass {

    // Own properties of Granite-1.0.Granite.ServicesSettingsClass

    static name: string
}

interface ServicesSettingsPrivate {
}

class ServicesSettingsPrivate {

    // Own properties of Granite-1.0.Granite.ServicesSettingsPrivate

    static name: string
}

interface ServicesSimpleCommandClass {
}

abstract class ServicesSimpleCommandClass {

    // Own properties of Granite-1.0.Granite.ServicesSimpleCommandClass

    static name: string
}

interface ServicesSimpleCommandPrivate {
}

class ServicesSimpleCommandPrivate {

    // Own properties of Granite-1.0.Granite.ServicesSimpleCommandPrivate

    static name: string
}

interface ServicesSystemClass {
}

abstract class ServicesSystemClass {

    // Own properties of Granite-1.0.Granite.ServicesSystemClass

    static name: string
}

interface ServicesSystemPrivate {
}

class ServicesSystemPrivate {

    // Own properties of Granite-1.0.Granite.ServicesSystemPrivate

    static name: string
}

interface ServicesContractIface {

    // Own fields of Granite-1.0.Granite.ServicesContractIface

    get_display_name: (self: any) => string
    get_description: (self: any) => string
    get_icon: (self: any) => Gio.Icon
    execute_with_file: (self: any, file: Gio.File) => void
    execute_with_files: (self: any, files: Gio.File[]) => void
}

abstract class ServicesContractIface {

    // Own properties of Granite-1.0.Granite.ServicesContractIface

    static name: string
}

interface ServicesSettingsSerializableIface {

    // Own fields of Granite-1.0.Granite.ServicesSettingsSerializableIface

    settings_serialize: (self: any) => string
    settings_deserialize: (self: any, s: string) => void
}

abstract class ServicesSettingsSerializableIface {

    // Own properties of Granite-1.0.Granite.ServicesSettingsSerializableIface

    static name: string
}

interface WidgetsAlertViewClass {
}

abstract class WidgetsAlertViewClass {

    // Own properties of Granite-1.0.Granite.WidgetsAlertViewClass

    static name: string
}

interface WidgetsAlertViewPrivate {
}

class WidgetsAlertViewPrivate {

    // Own properties of Granite-1.0.Granite.WidgetsAlertViewPrivate

    static name: string
}

interface WidgetsAvatarClass {
}

abstract class WidgetsAvatarClass {

    // Own properties of Granite-1.0.Granite.WidgetsAvatarClass

    static name: string
}

interface WidgetsAvatarPrivate {
}

class WidgetsAvatarPrivate {

    // Own properties of Granite-1.0.Granite.WidgetsAvatarPrivate

    static name: string
}

interface WidgetsCellRendererBadgeClass {
}

abstract class WidgetsCellRendererBadgeClass {

    // Own properties of Granite-1.0.Granite.WidgetsCellRendererBadgeClass

    static name: string
}

interface WidgetsCellRendererBadgePrivate {
}

class WidgetsCellRendererBadgePrivate {

    // Own properties of Granite-1.0.Granite.WidgetsCellRendererBadgePrivate

    static name: string
}

interface WidgetsCellRendererExpanderClass {

    // Own fields of Granite-1.0.Granite.WidgetsCellRendererExpanderClass

    get_arrow_size: (self: WidgetsCellRendererExpander, widget: Gtk.Widget) => number
}

abstract class WidgetsCellRendererExpanderClass {

    // Own properties of Granite-1.0.Granite.WidgetsCellRendererExpanderClass

    static name: string
}

interface WidgetsCellRendererExpanderPrivate {
}

class WidgetsCellRendererExpanderPrivate {

    // Own properties of Granite-1.0.Granite.WidgetsCellRendererExpanderPrivate

    static name: string
}

interface WidgetsCollapsiblePanedClass {
}

abstract class WidgetsCollapsiblePanedClass {

    // Own properties of Granite-1.0.Granite.WidgetsCollapsiblePanedClass

    static name: string
}

interface WidgetsCollapsiblePanedPrivate {
}

class WidgetsCollapsiblePanedPrivate {

    // Own properties of Granite-1.0.Granite.WidgetsCollapsiblePanedPrivate

    static name: string
}

interface WidgetsCompositedWindowClass {
}

abstract class WidgetsCompositedWindowClass {

    // Own properties of Granite-1.0.Granite.WidgetsCompositedWindowClass

    static name: string
}

interface WidgetsCompositedWindowPrivate {
}

class WidgetsCompositedWindowPrivate {

    // Own properties of Granite-1.0.Granite.WidgetsCompositedWindowPrivate

    static name: string
}

interface WidgetsDatePickerClass {

    // Own fields of Granite-1.0.Granite.WidgetsDatePickerClass

    position_dropdown: (self: WidgetsDatePicker) => /* rect */ Gdk.Rectangle
}

abstract class WidgetsDatePickerClass {

    // Own properties of Granite-1.0.Granite.WidgetsDatePickerClass

    static name: string
}

interface WidgetsDatePickerPrivate {
}

class WidgetsDatePickerPrivate {

    // Own properties of Granite-1.0.Granite.WidgetsDatePickerPrivate

    static name: string
}

interface WidgetsTabClass {
}

abstract class WidgetsTabClass {

    // Own properties of Granite-1.0.Granite.WidgetsTabClass

    static name: string
}

interface WidgetsTabPrivate {
}

class WidgetsTabPrivate {

    // Own properties of Granite-1.0.Granite.WidgetsTabPrivate

    static name: string
}

interface WidgetsDynamicNotebookClass {
}

abstract class WidgetsDynamicNotebookClass {

    // Own properties of Granite-1.0.Granite.WidgetsDynamicNotebookClass

    static name: string
}

interface WidgetsDynamicNotebookPrivate {
}

class WidgetsDynamicNotebookPrivate {

    // Own properties of Granite-1.0.Granite.WidgetsDynamicNotebookPrivate

    static name: string
}

interface WidgetsModeButtonClass {
}

abstract class WidgetsModeButtonClass {

    // Own properties of Granite-1.0.Granite.WidgetsModeButtonClass

    static name: string
}

interface WidgetsModeButtonPrivate {
}

class WidgetsModeButtonPrivate {

    // Own properties of Granite-1.0.Granite.WidgetsModeButtonPrivate

    static name: string
}

interface WidgetsOverlayBarClass {
}

abstract class WidgetsOverlayBarClass {

    // Own properties of Granite-1.0.Granite.WidgetsOverlayBarClass

    static name: string
}

interface WidgetsOverlayBarPrivate {
}

class WidgetsOverlayBarPrivate {

    // Own properties of Granite-1.0.Granite.WidgetsOverlayBarPrivate

    static name: string
}

interface WidgetsSourceListClass {

    // Own fields of Granite-1.0.Granite.WidgetsSourceListClass

    item_selected: (self: WidgetsSourceList, item: WidgetsSourceListItem | null) => void
}

abstract class WidgetsSourceListClass {

    // Own properties of Granite-1.0.Granite.WidgetsSourceListClass

    static name: string
}

interface WidgetsSourceListPrivate {
}

class WidgetsSourceListPrivate {

    // Own properties of Granite-1.0.Granite.WidgetsSourceListPrivate

    static name: string
}

interface WidgetsSourceListItemClass {

    // Own fields of Granite-1.0.Granite.WidgetsSourceListItemClass

    get_context_menu: (self: WidgetsSourceListItem) => Gtk.Menu | null
    edited: (self: WidgetsSourceListItem, new_name: string) => void
    action_activated: (self: WidgetsSourceListItem) => void
    activated: (self: WidgetsSourceListItem) => void
}

abstract class WidgetsSourceListItemClass {

    // Own properties of Granite-1.0.Granite.WidgetsSourceListItemClass

    static name: string
}

interface WidgetsSourceListItemPrivate {
}

class WidgetsSourceListItemPrivate {

    // Own properties of Granite-1.0.Granite.WidgetsSourceListItemPrivate

    static name: string
}

interface WidgetsSourceListExpandableItemClass {

    // Own fields of Granite-1.0.Granite.WidgetsSourceListExpandableItemClass

    toggled: (self: WidgetsSourceListExpandableItem) => void
}

abstract class WidgetsSourceListExpandableItemClass {

    // Own properties of Granite-1.0.Granite.WidgetsSourceListExpandableItemClass

    static name: string
}

interface WidgetsSourceListExpandableItemPrivate {
}

class WidgetsSourceListExpandableItemPrivate {

    // Own properties of Granite-1.0.Granite.WidgetsSourceListExpandableItemPrivate

    static name: string
}

interface WidgetsStorageBarClass {
}

abstract class WidgetsStorageBarClass {

    // Own properties of Granite-1.0.Granite.WidgetsStorageBarClass

    static name: string
}

interface WidgetsStorageBarPrivate {
}

class WidgetsStorageBarPrivate {

    // Own properties of Granite-1.0.Granite.WidgetsStorageBarPrivate

    static name: string
}

interface WidgetsTimePickerClass {

    // Own fields of Granite-1.0.Granite.WidgetsTimePickerClass

    position_dropdown: (self: WidgetsTimePicker) => [ /* x */ number, /* y */ number ]
}

abstract class WidgetsTimePickerClass {

    // Own properties of Granite-1.0.Granite.WidgetsTimePickerClass

    static name: string
}

interface WidgetsTimePickerPrivate {
}

class WidgetsTimePickerPrivate {

    // Own properties of Granite-1.0.Granite.WidgetsTimePickerPrivate

    static name: string
}

interface WidgetsToastClass {
}

abstract class WidgetsToastClass {

    // Own properties of Granite-1.0.Granite.WidgetsToastClass

    static name: string
}

interface WidgetsToastPrivate {
}

class WidgetsToastPrivate {

    // Own properties of Granite-1.0.Granite.WidgetsToastPrivate

    static name: string
}

interface WidgetsWelcomeButtonClass {
}

abstract class WidgetsWelcomeButtonClass {

    // Own properties of Granite-1.0.Granite.WidgetsWelcomeButtonClass

    static name: string
}

interface WidgetsWelcomeButtonPrivate {
}

class WidgetsWelcomeButtonPrivate {

    // Own properties of Granite-1.0.Granite.WidgetsWelcomeButtonPrivate

    static name: string
}

interface WidgetsWelcomeClass {
}

abstract class WidgetsWelcomeClass {

    // Own properties of Granite-1.0.Granite.WidgetsWelcomeClass

    static name: string
}

interface WidgetsWelcomePrivate {
}

class WidgetsWelcomePrivate {

    // Own properties of Granite-1.0.Granite.WidgetsWelcomePrivate

    static name: string
}

interface WidgetsSourceListSortableIface {

    // Own fields of Granite-1.0.Granite.WidgetsSourceListSortableIface

    allow_dnd_sorting: (self: WidgetsSourceListSortable) => boolean
    compare: (self: WidgetsSourceListSortable, a: WidgetsSourceListItem, b: WidgetsSourceListItem) => number
}

abstract class WidgetsSourceListSortableIface {

    // Own properties of Granite-1.0.Granite.WidgetsSourceListSortableIface

    static name: string
}

interface WidgetsSourceListDragSourceIface {

    // Own fields of Granite-1.0.Granite.WidgetsSourceListDragSourceIface

    draggable: (self: WidgetsSourceListDragSource) => boolean
    prepare_selection_data: (self: WidgetsSourceListDragSource, selection_data: Gtk.SelectionData) => void
}

abstract class WidgetsSourceListDragSourceIface {

    // Own properties of Granite-1.0.Granite.WidgetsSourceListDragSourceIface

    static name: string
}

interface WidgetsSourceListDragDestIface {

    // Own fields of Granite-1.0.Granite.WidgetsSourceListDragDestIface

    data_drop_possible: (self: WidgetsSourceListDragDest, context: Gdk.DragContext, data: Gtk.SelectionData) => boolean
    data_received: (self: WidgetsSourceListDragDest, context: Gdk.DragContext, data: Gtk.SelectionData) => Gdk.DragAction
}

abstract class WidgetsSourceListDragDestIface {

    // Own properties of Granite-1.0.Granite.WidgetsSourceListDragDestIface

    static name: string
}

interface ApplicationClass {

    // Own fields of Granite-1.0.Granite.ApplicationClass

    set_options: (self: Application) => void
}

abstract class ApplicationClass {

    // Own properties of Granite-1.0.Granite.ApplicationClass

    static name: string
}

interface ApplicationPrivate {
}

class ApplicationPrivate {

    // Own properties of Granite-1.0.Granite.ApplicationPrivate

    static name: string
}

interface SettingsPageClass {
}

abstract class SettingsPageClass {

    // Own properties of Granite-1.0.Granite.SettingsPageClass

    static name: string
}

interface SettingsPagePrivate {
}

class SettingsPagePrivate {

    // Own properties of Granite-1.0.Granite.SettingsPagePrivate

    static name: string
}

interface SimpleSettingsPageClass {
}

abstract class SimpleSettingsPageClass {

    // Own properties of Granite-1.0.Granite.SimpleSettingsPageClass

    static name: string
}

interface SimpleSettingsPagePrivate {
}

class SimpleSettingsPagePrivate {

    // Own properties of Granite-1.0.Granite.SimpleSettingsPagePrivate

    static name: string
}

interface AccelLabelClass {
}

abstract class AccelLabelClass {

    // Own properties of Granite-1.0.Granite.AccelLabelClass

    static name: string
}

interface AccelLabelPrivate {
}

class AccelLabelPrivate {

    // Own properties of Granite-1.0.Granite.AccelLabelPrivate

    static name: string
}

interface AsyncImageClass {
}

abstract class AsyncImageClass {

    // Own properties of Granite-1.0.Granite.AsyncImageClass

    static name: string
}

interface AsyncImagePrivate {
}

class AsyncImagePrivate {

    // Own properties of Granite-1.0.Granite.AsyncImagePrivate

    static name: string
}

interface DialogClass {
}

abstract class DialogClass {

    // Own properties of Granite-1.0.Granite.DialogClass

    static name: string
}

interface DialogPrivate {
}

class DialogPrivate {

    // Own properties of Granite-1.0.Granite.DialogPrivate

    static name: string
}

interface HeaderLabelClass {
}

abstract class HeaderLabelClass {

    // Own properties of Granite-1.0.Granite.HeaderLabelClass

    static name: string
}

interface HeaderLabelPrivate {
}

class HeaderLabelPrivate {

    // Own properties of Granite-1.0.Granite.HeaderLabelPrivate

    static name: string
}

interface HyperTextViewClass {
}

abstract class HyperTextViewClass {

    // Own properties of Granite-1.0.Granite.HyperTextViewClass

    static name: string
}

interface HyperTextViewPrivate {
}

class HyperTextViewPrivate {

    // Own properties of Granite-1.0.Granite.HyperTextViewPrivate

    static name: string
}

interface MessageDialogClass {
}

abstract class MessageDialogClass {

    // Own properties of Granite-1.0.Granite.MessageDialogClass

    static name: string
}

interface MessageDialogPrivate {
}

class MessageDialogPrivate {

    // Own properties of Granite-1.0.Granite.MessageDialogPrivate

    static name: string
}

interface ModeSwitchClass {
}

abstract class ModeSwitchClass {

    // Own properties of Granite-1.0.Granite.ModeSwitchClass

    static name: string
}

interface ModeSwitchPrivate {
}

class ModeSwitchPrivate {

    // Own properties of Granite-1.0.Granite.ModeSwitchPrivate

    static name: string
}

interface SeekBarClass {
}

abstract class SeekBarClass {

    // Own properties of Granite-1.0.Granite.SeekBarClass

    static name: string
}

interface SeekBarPrivate {
}

class SeekBarPrivate {

    // Own properties of Granite-1.0.Granite.SeekBarPrivate

    static name: string
}

interface SettingsSidebarClass {
}

abstract class SettingsSidebarClass {

    // Own properties of Granite-1.0.Granite.SettingsSidebarClass

    static name: string
}

interface SettingsSidebarPrivate {
}

class SettingsSidebarPrivate {

    // Own properties of Granite-1.0.Granite.SettingsSidebarPrivate

    static name: string
}

interface SettingsClass {
}

abstract class SettingsClass {

    // Own properties of Granite-1.0.Granite.SettingsClass

    static name: string
}

interface SettingsPrivate {
}

class SettingsPrivate {

    // Own properties of Granite-1.0.Granite.SettingsPrivate

    static name: string
}

interface SwitchModelButtonClass {
}

abstract class SwitchModelButtonClass {

    // Own properties of Granite-1.0.Granite.SwitchModelButtonClass

    static name: string
}

interface SwitchModelButtonPrivate {
}

class SwitchModelButtonPrivate {

    // Own properties of Granite-1.0.Granite.SwitchModelButtonPrivate

    static name: string
}

interface ValidatedEntryClass {
}

abstract class ValidatedEntryClass {

    // Own properties of Granite-1.0.Granite.ValidatedEntryClass

    static name: string
}

interface ValidatedEntryPrivate {
}

class ValidatedEntryPrivate {

    // Own properties of Granite-1.0.Granite.ValidatedEntryPrivate

    static name: string
}

}
export default Granite;