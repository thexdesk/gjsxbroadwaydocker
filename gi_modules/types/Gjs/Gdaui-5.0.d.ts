// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gdaui-5.0
 */

import type * as Gjs from './Gjs';
import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';
import type Gda from './Gda-5.0';
import type libxml2 from './libxml2-2.0';

export namespace Gdaui {

enum Action {
    NEW_DATA,
    WRITE_MODIFIED_DATA,
    DELETE_SELECTED_DATA,
    UNDELETE_SELECTED_DATA,
    RESET_DATA,
    MOVE_FIRST_RECORD,
    MOVE_PREV_RECORD,
    MOVE_NEXT_RECORD,
    MOVE_LAST_RECORD,
    MOVE_FIRST_CHUNCK,
    MOVE_PREV_CHUNCK,
    MOVE_NEXT_CHUNCK,
    MOVE_LAST_CHUNCK,
}
enum BasicFormPart {
    LABELS,
    ENTRIES,
}
enum DataEntryError {
    FILE_NOT_FOUND_ERROR,
    INVALID_DATA_ERROR,
}
/**
 * Defines when the data modifications held in the underlying #GdaDataProxy are written to the
 * data model being proxied (using gda_data_proxy_apply_row_changes()).
 */
enum DataProxyWriteMode {
    /**
     * write only when explicitly requested
     */
    DEMAND,
    /**
     * write when the current selected row changes
     */
    ROW_CHANGE,
    /**
     * write when user activates a value change
     */
    VALUE_ACTIVATED,
    /**
     * write when a parameters's value changes
     */
    VALUE_CHANGE,
}
enum ActionMode {
    NAVIGATION_ARROWS,
    NAVIGATION_SCROLL,
    MODIF_AUTO_COMMIT,
    MODIF_COMMIT_IMMEDIATE,
    ASK_CONFIRM_UPDATE,
    ASK_CONFIRM_DELETE,
    ASK_CONFIRM_INSERT,
    REPORT_ERROR,
}
enum DataProxyInfoFlag {
    NONE,
    CURRENT_ROW,
    ROW_MODIFY_BUTTONS,
    ROW_MOVE_BUTTONS,
    CHUNCK_CHANGE_BUTTONS,
    NO_FILTER,
}
/**
 * Defines the aspect of the #GdauiLogin widget
 * @bitfield 
 */
enum LoginMode {
    ENABLE_CONTROL_CENTRE_MODE,
    HIDE_DSN_SELECTION_MODE,
    HIDE_DIRECT_CONNECTION_MODE,
}
const ATTRIBUTE_PLUGIN: string
const COLOR_NORMAL_DEFAULT: string
const COLOR_NORMAL_INVALID: string
const COLOR_NORMAL_MODIF: string
const COLOR_NORMAL_NULL: string
const COLOR_PRELIGHT_DEFAULT: string
const COLOR_PRELIGHT_INVALID: string
const COLOR_PRELIGHT_MODIF: string
const COLOR_PRELIGHT_NULL: string
const COLOR_UNKNOWN_MASK: number
function data_entry_error_quark(): GLib.Quark
/**
 * Creates a new #GdauiDataEntry widget, taking into account the requested entry name
 * if `plugin_name` is not %NULL (if no entry of that name is found, then the default data
 * entry widget will be created).
 * 
 * The `plugin_name` format is interpreted as two parts: &lt;plugin name&gt;:&lt;plugin options&gt;, and
 * if the plugins has no option, then the ":&lt;plugin options&gt;" part may be omitted.
 * @param type a #GType
 * @param plugin_name the name of an entry plugin, or %NULL
 */
function new_data_entry(type: GObject.GType, plugin_name: string | null): DataEntry
interface CloudWeightFunc {
    (model: Gda.DataModel, row: number, data: object | null): number
}
interface FormattedEntryInsertFunc {
    (entry: FormattedEntry, insert_char: string, virt_pos: number, data: object | null): void
}
interface RawGridFormatFunc {
    (cell: Gtk.CellRenderer, column: Gtk.TreeViewColumn, column_pos: number, model: Gda.DataModel, row: number, data: object | null): void
}
interface DataEntry_ConstructProps extends Gtk.Widget_ConstructProps, GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `contents-activated`
 */
interface DataEntry_ContentsActivatedSignalCallback {
    ($obj: DataEntry): void
}

/**
 * Signal callback interface for `contents-modified`
 */
interface DataEntry_ContentsModifiedSignalCallback {
    ($obj: DataEntry): void
}


/**
 * Signal callback interface for `expand-changed`
 */
interface DataEntry_ExpandChangedSignalCallback {
    ($obj: DataEntry): void
}

/**
 * Signal callback interface for `status-changed`
 */
interface DataEntry_StatusChangedSignalCallback {
    ($obj: DataEntry): void
}

interface DataEntry extends Gtk.Widget {

    // Owm methods of Gdaui-5.0.Gdaui.DataEntry

    /**
     * Used for the layout of #GdaDataEntry widgets in containers: queries if `de` requires
     * horizontal or vertical expansion, depending on `horiz`
     * @param horiz %TRUE to query horizontal expansion requirements, or %FALSE for vertical
     */
    can_expand(horiz: boolean): boolean
    /**
     * Retrieves the parameters of the GdauiDataEntry widget.
     */
    get_attributes(): Gda.ValueAttribute
    /**
     * Tells if `de` can be edited by the user
     */
    get_editable(): boolean
    /**
     * Fetch the GdaDataHandler the GdauiDataEntry is using
     */
    get_handler(): Gda.DataHandler
    /**
     * Fetch the reference value held in the #GdauiDataEntry widget
     */
    get_reference_value(): any
    /**
     * Fetch the value held in the GdauiDataEntry widget. If the value is set to NULL,
     * the returned value is of type GDA_TYPE_NULL. If the value is set to default,
     * then the returned value is of type GDA_TYPE_NULL or is the default value if it
     * has been provided to the widget (and is of the same type as the one provided by `de)`.
     */
    get_value(): any
    /**
     * Fetch the type of data the GdauiDataEntry handles
     */
    get_value_type(): GObject.GType
    /**
     * Makes `de` grab the focus for the window it's in
     */
    grab_focus(): void
    /**
     * Sets the parameters of the #GdauiDataEntry. Only the attributes corresponding to the
     * mask are set, the other ones are ignored.
     * @param attrs the attributes to set (OR'ed between them)
     * @param mask the mask corresponding to the considered attributes
     */
    set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void
    /**
     * Sets the default value for the GdauiDataEntry which gets displayed when the
     * user forces the default value. If it is not set then it is set to type GDA_TYPE_NULL.
     * The value parameter must either be:
     * <itemizedlist>
     *   <listitem><para>NULL or of type GDA_TYPE_NULL, or</para></listitem>
     *   <listitem><para>of type specified using gdaui_data_entry_set_value_type().</para></listitem>
     * </itemizedlist>
     * @param value a #GValue, or %NULL
     */
    set_default_value(value: any | null): void
    /**
     * Set if `de` can be modified or not by the user
     * @param editable set to %TRUE to have an editable data entry
     */
    set_editable(editable: boolean): void
    /**
     * Tells that the current value in `de` is to be considered as the reference value
     */
    set_reference_current(): void
    /**
     * Push a value into the GdauiDataEntry in the same way as gdaui_data_entry_set_value() but
     * also sets this value as the reference value.
     * @param value a #GValue, or %NULL
     */
    set_reference_value(value: any | null): void
    /**
     * Defines the color to be used when `de` displays an invalid value. Any value not
     * between 0. and 1. will result in the default hard coded values to be used (grayish).
     * @param red the red component of a color
     * @param green the green component of a color
     * @param blue the blue component of a color
     * @param alpha the alpha component of a color
     */
    set_unknown_color(red: number, green: number, blue: number, alpha: number): void
    /**
     * Push a value into the #GdauiDataEntry. The value parameter must either be:
     * <itemizedlist>
     *   <listitem><para>of type GDA_TYPE_NULL (may be created using gda_value_new_null()) to
     *      represent a NULL value (SQL NULL), or</para></listitem>
     *   <listitem><para>of type specified using gdaui_data_entry_set_value_type(), or</para></listitem>
     *   <listitem><para>NULL to represent an undetermined value (usually an error)</para></listitem>
     * </itemizedlist>
     * @param value a #GValue, or %NULL
     */
    set_value(value: any | null): void
    /**
     * Sets the type of value the GdauiDataEntry will handle. The type must be compatible with what
     * the widget can handle.
     * @param type the #GType of the data to be displayed
     */
    set_value_type(type: GObject.GType): void
    /**
     * Tests the validity of `de'`s contents. This function must be overrided by implementators.
     * 
     * Default implementation returns TRUE.
     */
    validate(): boolean

    // Own virtual methods of Gdaui-5.0.Gdaui.DataEntry

    /**
     * Used for the layout of #GdaDataEntry widgets in containers: queries if `de` requires
     * horizontal or vertical expansion, depending on `horiz`
     * @virtual 
     * @param horiz %TRUE to query horizontal expansion requirements, or %FALSE for vertical
     */
    vfunc_can_expand(horiz: boolean): boolean
    vfunc_contents_activated(): void
    vfunc_contents_modified(): void
    vfunc_contents_valid(): boolean
    vfunc_expand_changed(): void
    /**
     * Retrieves the parameters of the GdauiDataEntry widget.
     * @virtual 
     */
    vfunc_get_attributes(): Gda.ValueAttribute
    /**
     * Tells if `de` can be edited by the user
     * @virtual 
     */
    vfunc_get_editable(): boolean
    /**
     * Fetch the GdaDataHandler the GdauiDataEntry is using
     * @virtual 
     */
    vfunc_get_handler(): Gda.DataHandler
    vfunc_get_ref_value(): any
    /**
     * Fetch the value held in the GdauiDataEntry widget. If the value is set to NULL,
     * the returned value is of type GDA_TYPE_NULL. If the value is set to default,
     * then the returned value is of type GDA_TYPE_NULL or is the default value if it
     * has been provided to the widget (and is of the same type as the one provided by `de)`.
     * @virtual 
     */
    vfunc_get_value(): any
    /**
     * Fetch the type of data the GdauiDataEntry handles
     * @virtual 
     */
    vfunc_get_value_type(): GObject.GType
    /**
     * Makes `de` grab the focus for the window it's in
     * @virtual 
     */
    vfunc_grab_focus(): void
    /**
     * Sets the parameters of the #GdauiDataEntry. Only the attributes corresponding to the
     * mask are set, the other ones are ignored.
     * @virtual 
     * @param attrs the attributes to set (OR'ed between them)
     * @param mask the mask corresponding to the considered attributes
     */
    vfunc_set_attributes(attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute): void
    /**
     * Set if `de` can be modified or not by the user
     * @virtual 
     * @param editable set to %TRUE to have an editable data entry
     */
    vfunc_set_editable(editable: boolean): void
    vfunc_set_ref_value(value: any): void
    /**
     * Defines the color to be used when `de` displays an invalid value. Any value not
     * between 0. and 1. will result in the default hard coded values to be used (grayish).
     * @virtual 
     * @param red the red component of a color
     * @param green the green component of a color
     * @param blue the blue component of a color
     * @param alpha the alpha component of a color
     */
    vfunc_set_unknown_color(red: number, green: number, blue: number, alpha: number): void
    /**
     * Push a value into the #GdauiDataEntry. The value parameter must either be:
     * <itemizedlist>
     *   <listitem><para>of type GDA_TYPE_NULL (may be created using gda_value_new_null()) to
     *      represent a NULL value (SQL NULL), or</para></listitem>
     *   <listitem><para>of type specified using gdaui_data_entry_set_value_type(), or</para></listitem>
     *   <listitem><para>NULL to represent an undetermined value (usually an error)</para></listitem>
     * </itemizedlist>
     * @virtual 
     * @param value a #GValue, or %NULL
     */
    vfunc_set_value(value: any | null): void
    vfunc_set_value_default(value: any): void
    /**
     * Sets the type of value the GdauiDataEntry will handle. The type must be compatible with what
     * the widget can handle.
     * @virtual 
     * @param type the #GType of the data to be displayed
     */
    vfunc_set_value_type(type: GObject.GType): void
    vfunc_status_changed(): void
    /**
     * Tests the validity of `de'`s contents. This function must be overrided by implementators.
     * 
     * Default implementation returns TRUE.
     * @virtual 
     */
    vfunc_validate(): boolean

    // Own signals of Gdaui-5.0.Gdaui.DataEntry

    connect(sigName: "contents-activated", callback: DataEntry_ContentsActivatedSignalCallback): number
    connect_after(sigName: "contents-activated", callback: DataEntry_ContentsActivatedSignalCallback): number
    emit(sigName: "contents-activated", ...args: any[]): void
    connect(sigName: "contents-modified", callback: DataEntry_ContentsModifiedSignalCallback): number
    connect_after(sigName: "contents-modified", callback: DataEntry_ContentsModifiedSignalCallback): number
    emit(sigName: "contents-modified", ...args: any[]): void
    connect(sigName: "contents-valid", callback: (...args: any[]) => void): number
    connect_after(sigName: "contents-valid", callback: (...args: any[]) => void): number
    emit(sigName: "contents-valid", error: object | null, ...args: any[]): void
    connect(sigName: "expand-changed", callback: DataEntry_ExpandChangedSignalCallback): number
    connect_after(sigName: "expand-changed", callback: DataEntry_ExpandChangedSignalCallback): number
    emit(sigName: "expand-changed", ...args: any[]): void
    connect(sigName: "status-changed", callback: DataEntry_StatusChangedSignalCallback): number
    connect_after(sigName: "status-changed", callback: DataEntry_StatusChangedSignalCallback): number
    emit(sigName: "status-changed", ...args: any[]): void

    // Class property signals of Gdaui-5.0.Gdaui.DataEntry

    connect(sigName: "notify::app-paintable", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: DataEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataEntry extends GObject.Object {

    // Own properties of Gdaui-5.0.Gdaui.DataEntry

    static name: string
    static $gtype: GObject.GType<DataEntry>

    // Constructors of Gdaui-5.0.Gdaui.DataEntry

    constructor(config?: DataEntry_ConstructProps) 
    _init(config?: DataEntry_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface DataProxy_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `proxy-changed`
 */
interface DataProxy_ProxyChangedSignalCallback {
    ($obj: DataProxy, arg1: Gda.DataProxy): void
}

interface DataProxy {

    // Owm methods of Gdaui-5.0.Gdaui.DataProxy

    /**
     * Sets if the data entry in the `iface` widget at `column` (in the data model `iface` operates on)
     * can be edited or not.
     * @param column column number of the data
     * @param editable set to %TRUE to make the column editable
     */
    column_set_editable(column: number, editable: boolean): void
    /**
     * Sets if the data entry in the `iface` widget at `column` (in the data model `iface` operates on) must show its
     * actions menu or not.
     * @param column column number of the data, or -1 to apply the setting to all the columns
     * @param show_actions set to %TRUE if the actions menu must be shown
     */
    column_show_actions(column: number, show_actions: boolean): void
    /**
     * Each widget imlplementing the #GdauiDataProxy interface provides actions. Actions can be triggered
     * using the gdaui_data_proxy_perform_action() method, but using this method allows for the creation of
     * toolbars, menus, etc calling these actions.
     * 
     * The actions are among:
     * <itemizedlist><listitem><para>Data edition actions: "ActionNew", "ActionCommit",
     *    "ActionDelete", "ActionReset". Note that the "ActionDelete" action is actually a #GtkToggleAction
     *    action which can be used to delete a row or undelete it.</para></listitem>
     * <listitem><para>Record by record moving: "ActionFirstRecord", "ActionPrevRecord",
     *    "ActionNextRecord", "ActionLastRecord".</para></listitem>
     * <listitem><para>Chuncks of records moving: "ActionFirstChunck", "ActionPrevChunck",
     *     "ActionNextChunck", "ActionLastChunck".</para></listitem>
     * <listitem><para>Filtering: "ActionFilter".</para></listitem></itemizedlist>
     */
    get_actions_group(): Gtk.ActionGroup
    /**
     * Get a pointer to the #GdaDataProxy being used by `iface`
     */
    get_proxy(): Gda.DataProxy
    /**
     * Get the way the modifications stored in the #GdaDataProxy used internally by `iface` are written back to
     * the #GdaDataModel which holds the data displayed in `iface`.
     */
    get_write_mode(): DataProxyWriteMode
    /**
     * Forces the widget to perform the selected `action,` as if the user
     * had pressed on the corresponding action button in the `iface` widget,
     * if the corresponding action is possible and if the `iface` widget
     * supports the action.
     * @param action a #GdauiAction action
     */
    perform_action(action: Action): void
    /**
     * Specifies the way the modifications stored in the #GdaDataProxy used internally by `iface` are written back to
     * the #GdaDataModel which holds the data displayed in `iface`.
     * @param mode the requested #GdauiDataProxyWriteMode mode
     */
    set_write_mode(mode: DataProxyWriteMode): boolean

    // Own virtual methods of Gdaui-5.0.Gdaui.DataProxy

    /**
     * Each widget imlplementing the #GdauiDataProxy interface provides actions. Actions can be triggered
     * using the gdaui_data_proxy_perform_action() method, but using this method allows for the creation of
     * toolbars, menus, etc calling these actions.
     * 
     * The actions are among:
     * <itemizedlist><listitem><para>Data edition actions: "ActionNew", "ActionCommit",
     *    "ActionDelete", "ActionReset". Note that the "ActionDelete" action is actually a #GtkToggleAction
     *    action which can be used to delete a row or undelete it.</para></listitem>
     * <listitem><para>Record by record moving: "ActionFirstRecord", "ActionPrevRecord",
     *    "ActionNextRecord", "ActionLastRecord".</para></listitem>
     * <listitem><para>Chuncks of records moving: "ActionFirstChunck", "ActionPrevChunck",
     *     "ActionNextChunck", "ActionLastChunck".</para></listitem>
     * <listitem><para>Filtering: "ActionFilter".</para></listitem></itemizedlist>
     * @virtual 
     */
    vfunc_get_actions_group(): Gtk.ActionGroup
    /**
     * Get a pointer to the #GdaDataProxy being used by `iface`
     * @virtual 
     */
    vfunc_get_proxy(): Gda.DataProxy
    /**
     * Get the way the modifications stored in the #GdaDataProxy used internally by `iface` are written back to
     * the #GdaDataModel which holds the data displayed in `iface`.
     * @virtual 
     */
    vfunc_get_write_mode(): DataProxyWriteMode
    vfunc_proxy_changed(proxy: Gda.DataProxy): void
    vfunc_set_column_editable(column: number, editable: boolean): void
    /**
     * Specifies the way the modifications stored in the #GdaDataProxy used internally by `iface` are written back to
     * the #GdaDataModel which holds the data displayed in `iface`.
     * @virtual 
     * @param mode the requested #GdauiDataProxyWriteMode mode
     */
    vfunc_set_write_mode(mode: DataProxyWriteMode): boolean
    vfunc_show_column_actions(column: number, show_actions: boolean): void

    // Own signals of Gdaui-5.0.Gdaui.DataProxy

    connect(sigName: "proxy-changed", callback: DataProxy_ProxyChangedSignalCallback): number
    connect_after(sigName: "proxy-changed", callback: DataProxy_ProxyChangedSignalCallback): number
    emit(sigName: "proxy-changed", arg1: Gda.DataProxy, ...args: any[]): void

    // Class property signals of Gdaui-5.0.Gdaui.DataProxy

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataProxy extends GObject.Object {

    // Own properties of Gdaui-5.0.Gdaui.DataProxy

    static name: string
    static $gtype: GObject.GType<DataProxy>

    // Constructors of Gdaui-5.0.Gdaui.DataProxy

    constructor(config?: DataProxy_ConstructProps) 
    _init(config?: DataProxy_ConstructProps): void
}

interface DataSelector_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `selection-changed`
 */
interface DataSelector_SelectionChangedSignalCallback {
    ($obj: DataSelector): void
}

interface DataSelector {

    // Owm methods of Gdaui-5.0.Gdaui.DataSelector

    /**
     * Get the #GdaDataModelIter object represented the current selected row in `iface`. This
     * function may return either %NULL or an invalid iterator (see gda_data_model_iter_is_valid()) if
     * the selection cannot be represented by a single selected row.
     * 
     * Note that the returned #GdaDataModelIter is actually an iterator iterating on the #GdaDataModel
     * returned by the gdaui_data_selector_get_model() method.
     */
    get_data_set(): Gda.DataModelIter
    /**
     * Queries the #GdaDataModel from which the data displayed by the widget implementing `iface`
     * are. Beware that the returned data model may be different than the one used when the
     * widget was created in case it internally uses a #GdaDataProxy.
     */
    get_model(): Gda.DataModel
    /**
     * Gat an array of selected rows. If no row is selected, the the returned value is %NULL.
     * 
     * Please note that rows refers to the "visible" rows
     * at the time it's being called, which may change if the widget implementing this interface
     * uses a #GdaDataProxy (as is the case for example for the #GdauiRawForm, #GdauiForm, #GdauiRawGrid
     * and #GdauiGrid).
     */
    get_selected_rows(): number[]
    /**
     * Force the selection of a specific row.
     * 
     * Please note that `row` refers to the "visible" row
     * at the time it's being called, which may change if the widget implementing this interface
     * uses a #GdaDataProxy (as is the case for example for the #GdauiRawForm, #GdauiForm, #GdauiRawGrid
     * and #GdauiGrid).
     * @param row the row to select
     */
    select_row(row: number): boolean
    /**
     * Shows or hides the data at column `column`
     * @param column a column number, starting at %0, or -1 tp apply to all the columns
     * @param visible required visibility of the data in the `column` column
     */
    set_column_visible(column: number, visible: boolean): void
    /**
     * Sets the data model from which the data being displayed are. Also see gdaui_data_selector_get_model()
     * @param model a #GdaDataModel to use
     */
    set_model(model: Gda.DataModel): void
    /**
     * Please note that `row` refers to the "visible" row
     * at the time it's being called, which may change if the widget implementing this interface
     * uses a #GdaDataProxy (as is the case for example for the #GdauiRawForm, #GdauiForm, #GdauiRawGrid
     * and #GdauiGrid).
     * @param row the row to unselect
     */
    unselect_row(row: number): void

    // Own virtual methods of Gdaui-5.0.Gdaui.DataSelector

    /**
     * Get the #GdaDataModelIter object represented the current selected row in `iface`. This
     * function may return either %NULL or an invalid iterator (see gda_data_model_iter_is_valid()) if
     * the selection cannot be represented by a single selected row.
     * 
     * Note that the returned #GdaDataModelIter is actually an iterator iterating on the #GdaDataModel
     * returned by the gdaui_data_selector_get_model() method.
     * @virtual 
     */
    vfunc_get_data_set(): Gda.DataModelIter
    /**
     * Queries the #GdaDataModel from which the data displayed by the widget implementing `iface`
     * are. Beware that the returned data model may be different than the one used when the
     * widget was created in case it internally uses a #GdaDataProxy.
     * @virtual 
     */
    vfunc_get_model(): Gda.DataModel
    /**
     * Gat an array of selected rows. If no row is selected, the the returned value is %NULL.
     * 
     * Please note that rows refers to the "visible" rows
     * at the time it's being called, which may change if the widget implementing this interface
     * uses a #GdaDataProxy (as is the case for example for the #GdauiRawForm, #GdauiForm, #GdauiRawGrid
     * and #GdauiGrid).
     * @virtual 
     */
    vfunc_get_selected_rows(): number[]
    /**
     * Force the selection of a specific row.
     * 
     * Please note that `row` refers to the "visible" row
     * at the time it's being called, which may change if the widget implementing this interface
     * uses a #GdaDataProxy (as is the case for example for the #GdauiRawForm, #GdauiForm, #GdauiRawGrid
     * and #GdauiGrid).
     * @virtual 
     * @param row the row to select
     */
    vfunc_select_row(row: number): boolean
    vfunc_selection_changed(): void
    /**
     * Shows or hides the data at column `column`
     * @virtual 
     * @param column a column number, starting at %0, or -1 tp apply to all the columns
     * @param visible required visibility of the data in the `column` column
     */
    vfunc_set_column_visible(column: number, visible: boolean): void
    /**
     * Sets the data model from which the data being displayed are. Also see gdaui_data_selector_get_model()
     * @virtual 
     * @param model a #GdaDataModel to use
     */
    vfunc_set_model(model: Gda.DataModel): void
    /**
     * Please note that `row` refers to the "visible" row
     * at the time it's being called, which may change if the widget implementing this interface
     * uses a #GdaDataProxy (as is the case for example for the #GdauiRawForm, #GdauiForm, #GdauiRawGrid
     * and #GdauiGrid).
     * @virtual 
     * @param row the row to unselect
     */
    vfunc_unselect_row(row: number): void

    // Own signals of Gdaui-5.0.Gdaui.DataSelector

    connect(sigName: "selection-changed", callback: DataSelector_SelectionChangedSignalCallback): number
    connect_after(sigName: "selection-changed", callback: DataSelector_SelectionChangedSignalCallback): number
    emit(sigName: "selection-changed", ...args: any[]): void

    // Class property signals of Gdaui-5.0.Gdaui.DataSelector

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataSelector extends GObject.Object {

    // Own properties of Gdaui-5.0.Gdaui.DataSelector

    static name: string
    static $gtype: GObject.GType<DataSelector>

    // Constructors of Gdaui-5.0.Gdaui.DataSelector

    constructor(config?: DataSelector_ConstructProps) 
    _init(config?: DataSelector_ConstructProps): void
}

interface BasicForm_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Box_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.BasicForm

    entries_auto_default?: boolean | null
    /**
     * Deprecated
     */
    headers_sensitive?: boolean | null
    paramlist?: object | null
    show_actions?: boolean | null
    xml_layout?: object | null
}

/**
 * Signal callback interface for `activated`
 */
interface BasicForm_ActivatedSignalCallback {
    ($obj: BasicForm): void
}

/**
 * Signal callback interface for `holder-changed`
 */
interface BasicForm_HolderChangedSignalCallback {
    ($obj: BasicForm, param: Gda.Holder, is_user_modif: boolean): void
}

/**
 * Signal callback interface for `layout-changed`
 */
interface BasicForm_LayoutChangedSignalCallback {
    ($obj: BasicForm): void
}

/**
 * Signal callback interface for `populate-popup`
 */
interface BasicForm_PopulatePopupSignalCallback {
    ($obj: BasicForm, menu: Gtk.Menu): void
}

interface BasicForm extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gdaui-5.0.Gdaui.BasicForm

    readonly can_expand_v: boolean
    entries_auto_default: boolean
    /**
     * Deprecated
     */
    headers_sensitive: boolean
    paramlist: object
    show_actions: boolean
    xml_layout: object

    // Own fields of Gdaui-5.0.Gdaui.BasicForm

    object: Gtk.Box
    priv: BasicFormPriv

    // Owm methods of Gdaui-5.0.Gdaui.BasicForm

    /**
     * Add `form'`s widgets specified by `part` to `size_group`
     * (the widgets can then be removed using gdaui_basic_form_remove_from_size_group()).
     * @param size_group a #GtkSizeGroup object
     * @param part specifies which widgets in `form` are concerned
     */
    add_to_size_group(size_group: Gtk.SizeGroup, part: BasicFormPart): void
    /**
     * Makes the data entry corresponding to `holder` grab the focus for the window it's in. If `holder` is %NULL,
     * then the focus is on the first entry which needs attention.
     * @param holder a #GdaHolder object, or %NULL
     */
    entry_grab_focus(holder: Gda.Holder | null): void
    /**
     * Sets the #GdauiDataEntry in `form` which corresponds to the
     * `holder` parameter editable or not. If `holder` is %NULL, then all the parameters
     * are concerned.
     * @param holder a #GdaHolder object; or %NULL
     * @param editable %TRUE if corresponding data entry must be editable
     */
    entry_set_editable(holder: Gda.Holder | null, editable: boolean): void
    /**
     * Shows or hides the #GdauiDataEntry in `form` which corresponds to the
     * `holder` data holder
     * @param holder a #GdaHolder object
     * @param show set to %TRUE to show the data entry, and to %FALSE to hide it
     */
    entry_set_visible(holder: Gda.Holder, show: boolean): void
    /**
     * Get a pointer to the #GdaSet object which
     * is modified by `form`
     */
    get_data_set(): Gda.Set
    /**
     * Get the #GdauiDataEntry in `form` which corresponds to the `holder` place.
     * @param holder a #GdaHolder object
     */
    get_entry_widget(holder: Gda.Holder): Gtk.Widget
    /**
     * Get the label in `form` which corresponds to the `holder` holder.
     * @param holder a #GdaHolder object
     */
    get_label_widget(holder: Gda.Holder): Gtk.Widget
    /**
     * Retreives a pointer to a place holder widget. This feature is only available if a specific
     * layout has been defined for `form` using gdaui_basic_form_set_layout_from_file().
     * @param placeholder_id the name of the requested place holder
     */
    get_place_holder(placeholder_id: string): Gtk.Widget
    /**
     * Tells if the form has had at least on entry changed since `form` was created or
     * gdaui_basic_form_set_as_reference() has been called.
     */
    has_changed(): boolean
    /**
     * Tells if the form can be used as-is (if all the parameters do have some valid values)
     */
    is_valid(): boolean
    /**
     * Removes `form'`s widgets specified by `part` from `size_group`
     * (the widgets must have been added using gdaui_basic_form_add_to_size_group()).
     * @param size_group a #GtkSizeGroup object
     * @param part specifies which widgets in `form` are concerned
     */
    remove_from_size_group(size_group: Gtk.SizeGroup, part: BasicFormPart): void
    /**
     * Resets all the entries in the form to their
     * original values
     */
    reset(): void
    /**
     * Tells `form` that the current values in the different entries are
     * to be considered as the original values for all the entries; the immediate
     * consequence is that any sub-sequent call to gdaui_basic_form_has_changed()
     * will return %FALSE (of course until any entry is changed).
     */
    set_as_reference(): void
    /**
     * For each entry in the form, sets it to a default value if it is possible to do so.
     */
    set_entries_to_default(): void
    /**
     * Sets a form layout according an XML description contained in `file_name,` for the form identified
     * by the `form_name` name (as an XML layout file can contain the descriptions of several forms and grids).
     * @param file_name XML file name to use
     * @param form_name the name of the form to use, in `file_name`
     */
    set_layout_from_file(file_name: string, form_name: string): void
    /**
     * Defines the color to be used when `form` displays an invalid value. Any value not
     * between 0. and 1. will result in the default hard coded values to be used (grayish).
     * @param red the red component of a color
     * @param green the green component of a color
     * @param blue the blue component of a color
     * @param alpha the alpha component of a color
     */
    set_unknown_color(red: number, green: number, blue: number, alpha: number): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own virtual methods of Gdaui-5.0.Gdaui.BasicForm

    vfunc_activated(): void
    vfunc_holder_changed(holder: Gda.Holder, is_user_action: boolean): void
    vfunc_layout_changed(): void

    // Own signals of Gdaui-5.0.Gdaui.BasicForm

    connect(sigName: "activated", callback: BasicForm_ActivatedSignalCallback): number
    connect_after(sigName: "activated", callback: BasicForm_ActivatedSignalCallback): number
    emit(sigName: "activated", ...args: any[]): void
    connect(sigName: "holder-changed", callback: BasicForm_HolderChangedSignalCallback): number
    connect_after(sigName: "holder-changed", callback: BasicForm_HolderChangedSignalCallback): number
    emit(sigName: "holder-changed", param: Gda.Holder, is_user_modif: boolean, ...args: any[]): void
    connect(sigName: "layout-changed", callback: BasicForm_LayoutChangedSignalCallback): number
    connect_after(sigName: "layout-changed", callback: BasicForm_LayoutChangedSignalCallback): number
    emit(sigName: "layout-changed", ...args: any[]): void
    connect(sigName: "populate-popup", callback: BasicForm_PopulatePopupSignalCallback): number
    connect_after(sigName: "populate-popup", callback: BasicForm_PopulatePopupSignalCallback): number
    emit(sigName: "populate-popup", menu: Gtk.Menu, ...args: any[]): void

    // Class property signals of Gdaui-5.0.Gdaui.BasicForm

    connect(sigName: "notify::can-expand-v", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-expand-v", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-expand-v", ...args: any[]): void
    connect(sigName: "notify::entries-auto-default", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries-auto-default", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entries-auto-default", ...args: any[]): void
    connect(sigName: "notify::headers-sensitive", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-sensitive", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-sensitive", ...args: any[]): void
    connect(sigName: "notify::paramlist", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paramlist", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::paramlist", ...args: any[]): void
    connect(sigName: "notify::show-actions", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-actions", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-actions", ...args: any[]): void
    connect(sigName: "notify::xml-layout", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xml-layout", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xml-layout", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: BasicForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BasicForm extends Gtk.Box {

    // Own properties of Gdaui-5.0.Gdaui.BasicForm

    static name: string
    static $gtype: GObject.GType<BasicForm>

    // Constructors of Gdaui-5.0.Gdaui.BasicForm

    constructor(config?: BasicForm_ConstructProps) 
    /**
     * Creates a new #GdauiBasicForm widget using all the #GdaHolder objects provided in `data_set`.
     * 
     * The global layout is rendered using a table (a #GtkTable), and an entry is created for each
     * node of `data_set`.
     * @constructor 
     * @param data_set a #GdaSet structure
     */
    constructor(data_set: Gda.Set) 
    /**
     * Creates a new #GdauiBasicForm widget using all the #GdaHolder objects provided in `data_set`.
     * 
     * The global layout is rendered using a table (a #GtkTable), and an entry is created for each
     * node of `data_set`.
     * @constructor 
     * @param data_set a #GdaSet structure
     */
    static new(data_set: Gda.Set): BasicForm

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    /**
     * Creates a new #GdauiBasicForm widget in the same way as gdaui_basic_form_new()
     * and puts it into a #GtkDialog widget. The returned dialog has the "Ok" and "Cancel" buttons
     * which respectively return GTK_RESPONSE_ACCEPT and GTK_RESPONSE_REJECT.
     * 
     * The #GdauiBasicForm widget is attached to the dialog using the user property
     * "form".
     * @constructor 
     * @param data_set a #GdaSet object
     * @param parent the parent window for the new dialog, or %NULL
     * @param title the title of the dialog window, or %NULL
     * @param header a helper text displayed at the top of the dialog, or %NULL
     */
    static new_in_dialog(data_set: Gda.Set, parent: Gtk.Window | null, title: string | null, header: string | null): BasicForm
    _init(config?: BasicForm_ConstructProps): void
}

interface Cloud_ConstructProps extends Atk.ImplementorIface_ConstructProps, DataSelector_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Box_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.Cloud

    label_column?: number | null
    max_scale?: number | null
    min_scale?: number | null
    model?: Gda.DataModel | null
    weight_column?: number | null
}

/**
 * Signal callback interface for `activate`
 */
interface Cloud_ActivateSignalCallback {
    ($obj: Cloud, object: number): void
}

interface Cloud extends Atk.ImplementorIface, DataSelector, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gdaui-5.0.Gdaui.Cloud

    label_column: number
    max_scale: number
    min_scale: number
    model: Gda.DataModel
    weight_column: number

    // Own fields of Gdaui-5.0.Gdaui.Cloud

    object: Gtk.Box
    priv: CloudPriv

    // Owm methods of Gdaui-5.0.Gdaui.Cloud

    /**
     * Creates a search widget linked directly to modify `cloud'`s appearance.
     */
    create_filter_widget(): Gtk.Widget
    /**
     * Filters the elements displayed in `cloud,` by altering their color.
     * @param filter the filter to use, or %NULL to remove any filter
     */
    filter(filter: string | null): void
    /**
     * Sets `cloud'`s selection mode
     * @param mode the desired selection mode
     */
    set_selection_mode(mode: Gtk.SelectionMode): void
    /**
     * Specifies a function called by `cloud` to compute each row's respective weight.
     * @param func a #GdauiCloudWeightFunc function which computes weights, or %NULL to unset
     */
    set_weight_func(func: CloudWeightFunc | null): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own virtual methods of Gdaui-5.0.Gdaui.Cloud

    vfunc_activate(row: number): void

    // Own signals of Gdaui-5.0.Gdaui.Cloud

    connect(sigName: "activate", callback: Cloud_ActivateSignalCallback): number
    connect_after(sigName: "activate", callback: Cloud_ActivateSignalCallback): number
    emit(sigName: "activate", object: number, ...args: any[]): void

    // Class property signals of Gdaui-5.0.Gdaui.Cloud

    connect(sigName: "notify::label-column", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label-column", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label-column", ...args: any[]): void
    connect(sigName: "notify::max-scale", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-scale", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-scale", ...args: any[]): void
    connect(sigName: "notify::min-scale", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-scale", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-scale", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::weight-column", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::weight-column", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::weight-column", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Cloud, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Cloud extends Gtk.Box {

    // Own properties of Gdaui-5.0.Gdaui.Cloud

    static name: string
    static $gtype: GObject.GType<Cloud>

    // Constructors of Gdaui-5.0.Gdaui.Cloud

    constructor(config?: Cloud_ConstructProps) 
    /**
     * Creates a new #GdauiCloud widget suitable to display the data in `model`
     * @constructor 
     * @param model a #GdaDataModel
     * @param label_column 
     * @param weight_column 
     */
    constructor(model: Gda.DataModel, label_column: number, weight_column: number) 
    /**
     * Creates a new #GdauiCloud widget suitable to display the data in `model`
     * @constructor 
     * @param model a #GdaDataModel
     * @param label_column 
     * @param weight_column 
     */
    static new(model: Gda.DataModel, label_column: number, weight_column: number): Cloud

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: Cloud_ConstructProps): void
}

interface Combo_ConstructProps extends Atk.ImplementorIface_ConstructProps, DataSelector_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.CellEditable_ConstructProps, Gtk.CellLayout_ConstructProps, Gtk.ComboBox_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.Combo

    as_list?: boolean | null
    model?: Gda.DataModel | null
}

interface Combo extends Atk.ImplementorIface, DataSelector, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {

    // Own properties of Gdaui-5.0.Gdaui.Combo

    as_list: boolean
    model: Gda.DataModel

    // Conflicting properties

    parent_instance: any

    // Own fields of Gdaui-5.0.Gdaui.Combo

    object: Gtk.ComboBox
    priv: ComboPrivate

    // Owm methods of Gdaui-5.0.Gdaui.Combo

    /**
     * Tells if `combo` should add a special entry representing an "undefined choice", as a %NULL entry. The default is
     * that only the available choices in `combo'`s model are presented.
     * @param add_null set to %TRUE to add a NULL value to the combo box
     */
    add_null(add_null: boolean): void
    /**
     * Tell if the currently selected entry represents the "undefined choice" entry.
     */
    is_null_selected(): boolean
    /**
     * Makes `combo` display data stored in `model` (makes the
     * combo widget refresh its list of values and display the values contained
     * in the model). A NULL `model` will make the combo empty
     * and disassociate the previous model, if any.
     * 
     * if `n_cols` is %0, then all the columns of `model` will be displayed in `combo`.
     * @param model a #GdaDataModel object to get data from.
     * @param cols_index an array of columns to be shown, its size must be `n_cols`
     */
    set_data(model: Gda.DataModel, cols_index?: number[]): void

    // Overloads of set_data

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    set_data(...args: any[]): any
    set_data(args_or_key: any[] | string, data?: object | null): void | any

    // Conflicting methods

    get_model(...args: any[]): any
    set_model(...args: any[]): any
    child_notify(...args: any[]): any

    // Class property signals of Gdaui-5.0.Gdaui.Combo

    connect(sigName: "notify::as-list", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::as-list", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::as-list", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::active-id", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-id", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-id", ...args: any[]): void
    connect(sigName: "notify::add-tearoffs", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::add-tearoffs", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::add-tearoffs", ...args: any[]): void
    connect(sigName: "notify::button-sensitivity", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::button-sensitivity", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::button-sensitivity", ...args: any[]): void
    connect(sigName: "notify::cell-area", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-area", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-area", ...args: any[]): void
    connect(sigName: "notify::column-span-column", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-span-column", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-span-column", ...args: any[]): void
    connect(sigName: "notify::entry-text-column", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entry-text-column", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entry-text-column", ...args: any[]): void
    connect(sigName: "notify::has-entry", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-entry", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-entry", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::id-column", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-column", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id-column", ...args: any[]): void
    connect(sigName: "notify::popup-fixed-width", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-fixed-width", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::popup-fixed-width", ...args: any[]): void
    connect(sigName: "notify::popup-shown", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-shown", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::popup-shown", ...args: any[]): void
    connect(sigName: "notify::row-span-column", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-span-column", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-span-column", ...args: any[]): void
    connect(sigName: "notify::tearoff-title", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tearoff-title", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tearoff-title", ...args: any[]): void
    connect(sigName: "notify::wrap-width", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-width", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-width", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::editing-canceled", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: Combo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing-canceled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Combo extends Gtk.ComboBox {

    // Own properties of Gdaui-5.0.Gdaui.Combo

    static name: string
    static $gtype: GObject.GType<Combo>

    // Constructors of Gdaui-5.0.Gdaui.Combo

    constructor(config?: Combo_ConstructProps) 
    /**
     * Create a new GdauiCombo widget.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new GdauiCombo widget.
     * @constructor 
     */
    static new(): Combo
    /**
     * Create a new GdauiCombo widget with a model. See gdaui_combo_set_model() for
     * more information about the `n_cols` and `cols_index` usage.
     * @constructor 
     * @param model a #GdaDataModel object.
     * @param n_cols number of columns in the model to be shown
     * @param cols_index an array of columns to be shown, its size must be `n_cols`
     */
    static new_with_model(model: Gda.DataModel, n_cols: number, cols_index: number): Combo

    // Overloads of new_with_model

    /**
     * Creates a new #GtkComboBox with the model initialized to `model`.
     * @constructor 
     * @param model A #GtkTreeModel.
     */
    static new_with_model(model: Gtk.TreeModel): Gtk.ComboBox
    _init(config?: Combo_ConstructProps): void
}

interface DataCellRendererBin_ConstructProps extends Gtk.CellRendererPixbuf_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.DataCellRendererBin

    data_handler?: Gda.DataHandler | null
    editable?: boolean | null
    to_be_deleted?: boolean | null
    type?: GObject.GType | null
    value?: any | null
}

/**
 * Signal callback interface for `changed`
 */
interface DataCellRendererBin_ChangedSignalCallback {
    ($obj: DataCellRendererBin, object: string, p0: any): void
}

interface DataCellRendererBin {

    // Own properties of Gdaui-5.0.Gdaui.DataCellRendererBin

    readonly data_handler: Gda.DataHandler
    editable: boolean
    to_be_deleted: boolean
    readonly type: GObject.GType
    value: any

    // Own fields of Gdaui-5.0.Gdaui.DataCellRendererBin

    parent: Gtk.CellRendererPixbuf
    priv: DataCellRendererBinPrivate

    // Own virtual methods of Gdaui-5.0.Gdaui.DataCellRendererBin

    vfunc_changed(path: string, new_value: any): void

    // Own signals of Gdaui-5.0.Gdaui.DataCellRendererBin

    connect(sigName: "changed", callback: DataCellRendererBin_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: DataCellRendererBin_ChangedSignalCallback): number
    emit(sigName: "changed", object: string, p0: any, ...args: any[]): void

    // Class property signals of Gdaui-5.0.Gdaui.DataCellRendererBin

    connect(sigName: "notify::data-handler", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-handler", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-handler", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::to-be-deleted", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::to-be-deleted", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::to-be-deleted", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::follow-state", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::follow-state", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::follow-state", ...args: any[]): void
    connect(sigName: "notify::gicon", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gicon", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gicon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::pixbuf", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf", ...args: any[]): void
    connect(sigName: "notify::pixbuf-expander-closed", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf-expander-closed", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf-expander-closed", ...args: any[]): void
    connect(sigName: "notify::pixbuf-expander-open", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf-expander-open", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf-expander-open", ...args: any[]): void
    connect(sigName: "notify::stock-detail", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock-detail", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stock-detail", ...args: any[]): void
    connect(sigName: "notify::stock-id", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock-id", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stock-id", ...args: any[]): void
    connect(sigName: "notify::stock-size", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stock-size", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stock-size", ...args: any[]): void
    connect(sigName: "notify::surface", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: "notify::cell-background", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background", ...args: any[]): void
    connect(sigName: "notify::cell-background-gdk", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-gdk", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-gdk", ...args: any[]): void
    connect(sigName: "notify::cell-background-rgba", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-rgba", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-rgba", ...args: any[]): void
    connect(sigName: "notify::cell-background-set", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-set", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-set", ...args: any[]): void
    connect(sigName: "notify::editing", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::is-expanded", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expanded", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expanded", ...args: any[]): void
    connect(sigName: "notify::is-expander", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expander", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expander", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: DataCellRendererBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataCellRendererBin extends Gtk.CellRendererPixbuf {

    // Own properties of Gdaui-5.0.Gdaui.DataCellRendererBin

    static name: string
    static $gtype: GObject.GType<DataCellRendererBin>

    // Constructors of Gdaui-5.0.Gdaui.DataCellRendererBin

    constructor(config?: DataCellRendererBin_ConstructProps) 
    /**
     * Creates a new #GdauiDataCellRendererBin. Adjust rendering
     * parameters using object properties. Object properties can be set
     * globally (with g_object_set()). Also, with #GtkTreeViewColumn, you
     * can bind a property to a value in a #GtkTreeModel. For example, you
     * can bind the "active" property on the cell renderer to a bin value
     * in the model, thus causing the check button to reflect the state of
     * the model.
     * @constructor 
     * @param dh a #GdaDataHandler object
     * @param type the #GType of the data to be displayed
     */
    constructor(dh: Gda.DataHandler, type: GObject.GType) 
    /**
     * Creates a new #GdauiDataCellRendererBin. Adjust rendering
     * parameters using object properties. Object properties can be set
     * globally (with g_object_set()). Also, with #GtkTreeViewColumn, you
     * can bind a property to a value in a #GtkTreeModel. For example, you
     * can bind the "active" property on the cell renderer to a bin value
     * in the model, thus causing the check button to reflect the state of
     * the model.
     * @constructor 
     * @param dh a #GdaDataHandler object
     * @param type the #GType of the data to be displayed
     */
    static new(dh: Gda.DataHandler, type: GObject.GType): DataCellRendererBin

    // Overloads of new

    /**
     * Creates a new #GtkCellRendererPixbuf. Adjust rendering
     * parameters using object properties. Object properties can be set
     * globally (with g_object_set()). Also, with #GtkTreeViewColumn, you
     * can bind a property to a value in a #GtkTreeModel. For example, you
     * can bind the “pixbuf” property on the cell renderer to a pixbuf value
     * in the model, thus rendering a different image in each row of the
     * #GtkTreeView.
     * @constructor 
     */
    static new(): Gtk.CellRendererPixbuf
    _init(config?: DataCellRendererBin_ConstructProps): void
}

interface DataCellRendererBoolean_ConstructProps extends Gtk.CellRendererToggle_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.DataCellRendererBoolean

    data_handler?: Gda.DataHandler | null
    editable?: boolean | null
    to_be_deleted?: boolean | null
    type?: GObject.GType | null
    value?: any | null
}

/**
 * Signal callback interface for `changed`
 */
interface DataCellRendererBoolean_ChangedSignalCallback {
    ($obj: DataCellRendererBoolean, object: string, p0: any): void
}

interface DataCellRendererBoolean {

    // Own properties of Gdaui-5.0.Gdaui.DataCellRendererBoolean

    readonly data_handler: Gda.DataHandler
    editable: boolean
    to_be_deleted: boolean
    readonly type: GObject.GType
    value: any

    // Own fields of Gdaui-5.0.Gdaui.DataCellRendererBoolean

    parent: Gtk.CellRendererToggle
    priv: DataCellRendererBooleanPrivate

    // Own virtual methods of Gdaui-5.0.Gdaui.DataCellRendererBoolean

    vfunc_changed(path: string, new_value: any): void

    // Own signals of Gdaui-5.0.Gdaui.DataCellRendererBoolean

    connect(sigName: "changed", callback: DataCellRendererBoolean_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: DataCellRendererBoolean_ChangedSignalCallback): number
    emit(sigName: "changed", object: string, p0: any, ...args: any[]): void

    // Class property signals of Gdaui-5.0.Gdaui.DataCellRendererBoolean

    connect(sigName: "notify::data-handler", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-handler", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-handler", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::to-be-deleted", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::to-be-deleted", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::to-be-deleted", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activatable", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::inconsistent", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inconsistent", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inconsistent", ...args: any[]): void
    connect(sigName: "notify::indicator-size", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indicator-size", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indicator-size", ...args: any[]): void
    connect(sigName: "notify::radio", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::radio", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::radio", ...args: any[]): void
    connect(sigName: "notify::cell-background", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background", ...args: any[]): void
    connect(sigName: "notify::cell-background-gdk", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-gdk", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-gdk", ...args: any[]): void
    connect(sigName: "notify::cell-background-rgba", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-rgba", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-rgba", ...args: any[]): void
    connect(sigName: "notify::cell-background-set", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-set", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-set", ...args: any[]): void
    connect(sigName: "notify::editing", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::is-expanded", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expanded", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expanded", ...args: any[]): void
    connect(sigName: "notify::is-expander", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expander", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expander", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: DataCellRendererBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataCellRendererBoolean extends Gtk.CellRendererToggle {

    // Own properties of Gdaui-5.0.Gdaui.DataCellRendererBoolean

    static name: string
    static $gtype: GObject.GType<DataCellRendererBoolean>

    // Constructors of Gdaui-5.0.Gdaui.DataCellRendererBoolean

    constructor(config?: DataCellRendererBoolean_ConstructProps) 
    /**
     * Creates a new #GdauiDataCellRendererBoolean. Adjust rendering
     * parameters using object properties. Object properties can be set
     * globally (with g_object_set()). Also, with #GtkTreeViewColumn, you
     * can bind a property to a value in a #GtkTreeModel. For example, you
     * can bind the "active" property on the cell renderer to a boolean value
     * in the model, thus causing the check button to reflect the state of
     * the model.
     * @constructor 
     * @param dh a #GdaDataHandler object
     * @param type the #GType of the data to be displayed
     */
    constructor(dh: Gda.DataHandler, type: GObject.GType) 
    /**
     * Creates a new #GdauiDataCellRendererBoolean. Adjust rendering
     * parameters using object properties. Object properties can be set
     * globally (with g_object_set()). Also, with #GtkTreeViewColumn, you
     * can bind a property to a value in a #GtkTreeModel. For example, you
     * can bind the "active" property on the cell renderer to a boolean value
     * in the model, thus causing the check button to reflect the state of
     * the model.
     * @constructor 
     * @param dh a #GdaDataHandler object
     * @param type the #GType of the data to be displayed
     */
    static new(dh: Gda.DataHandler, type: GObject.GType): DataCellRendererBoolean

    // Overloads of new

    /**
     * Creates a new #GtkCellRendererToggle. Adjust rendering
     * parameters using object properties. Object properties can be set
     * globally (with g_object_set()). Also, with #GtkTreeViewColumn, you
     * can bind a property to a value in a #GtkTreeModel. For example, you
     * can bind the “active” property on the cell renderer to a boolean value
     * in the model, thus causing the check button to reflect the state of
     * the model.
     * @constructor 
     */
    static new(): Gtk.CellRendererToggle
    _init(config?: DataCellRendererBoolean_ConstructProps): void
}

interface DataCellRendererCombo_ConstructProps extends Gtk.CellRendererText_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.DataCellRendererCombo

    data_set?: Set | null
    data_set_source?: object | null
    set_default_if_invalid?: boolean | null
    show_expander?: boolean | null
    to_be_deleted?: boolean | null
    values?: object | null
    values_display?: object | null
}

/**
 * Signal callback interface for `changed`
 */
interface DataCellRendererCombo_ChangedSignalCallback {
    ($obj: DataCellRendererCombo, object: string, p0: object | null, p1: object | null): void
}

interface DataCellRendererCombo {

    // Own properties of Gdaui-5.0.Gdaui.DataCellRendererCombo

    readonly data_set: Set
    readonly data_set_source: object
    set_default_if_invalid: boolean
    show_expander: boolean
    to_be_deleted: boolean
    values: object
    values_display: object

    // Own fields of Gdaui-5.0.Gdaui.DataCellRendererCombo

    parent: Gtk.CellRendererText
    priv: DataCellRendererComboPrivate

    // Own signals of Gdaui-5.0.Gdaui.DataCellRendererCombo

    connect(sigName: "changed", callback: DataCellRendererCombo_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: DataCellRendererCombo_ChangedSignalCallback): number
    emit(sigName: "changed", object: string, p0: object | null, p1: object | null, ...args: any[]): void

    // Class property signals of Gdaui-5.0.Gdaui.DataCellRendererCombo

    connect(sigName: "notify::data-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-set", ...args: any[]): void
    connect(sigName: "notify::data-set-source", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-set-source", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-set-source", ...args: any[]): void
    connect(sigName: "notify::set-default-if-invalid", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::set-default-if-invalid", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::set-default-if-invalid", ...args: any[]): void
    connect(sigName: "notify::show-expander", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-expander", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-expander", ...args: any[]): void
    connect(sigName: "notify::to-be-deleted", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::to-be-deleted", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::to-be-deleted", ...args: any[]): void
    connect(sigName: "notify::values", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::values-display", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::values-display", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::values-display", ...args: any[]): void
    connect(sigName: "notify::align-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::align-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::align-set", ...args: any[]): void
    connect(sigName: "notify::alignment", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alignment", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::background", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background", ...args: any[]): void
    connect(sigName: "notify::background-gdk", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-gdk", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-gdk", ...args: any[]): void
    connect(sigName: "notify::background-rgba", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-rgba", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-rgba", ...args: any[]): void
    connect(sigName: "notify::background-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-set", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::editable-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable-set", ...args: any[]): void
    connect(sigName: "notify::ellipsize", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ellipsize", ...args: any[]): void
    connect(sigName: "notify::ellipsize-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ellipsize-set", ...args: any[]): void
    connect(sigName: "notify::family", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::family", ...args: any[]): void
    connect(sigName: "notify::family-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::family-set", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::foreground", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground", ...args: any[]): void
    connect(sigName: "notify::foreground-gdk", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-gdk", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground-gdk", ...args: any[]): void
    connect(sigName: "notify::foreground-rgba", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-rgba", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground-rgba", ...args: any[]): void
    connect(sigName: "notify::foreground-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground-set", ...args: any[]): void
    connect(sigName: "notify::language", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::language-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language-set", ...args: any[]): void
    connect(sigName: "notify::markup", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::markup", ...args: any[]): void
    connect(sigName: "notify::max-width-chars", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width-chars", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-width-chars", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::rise", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rise", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rise", ...args: any[]): void
    connect(sigName: "notify::rise-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rise-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rise-set", ...args: any[]): void
    connect(sigName: "notify::scale", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::scale-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-set", ...args: any[]): void
    connect(sigName: "notify::single-paragraph-mode", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::single-paragraph-mode", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::single-paragraph-mode", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::size-points", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-points", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size-points", ...args: any[]): void
    connect(sigName: "notify::size-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size-set", ...args: any[]): void
    connect(sigName: "notify::stretch", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stretch", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stretch", ...args: any[]): void
    connect(sigName: "notify::stretch-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stretch-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stretch-set", ...args: any[]): void
    connect(sigName: "notify::strikethrough", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::strikethrough", ...args: any[]): void
    connect(sigName: "notify::strikethrough-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::strikethrough-set", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::style-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style-set", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::underline", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::underline", ...args: any[]): void
    connect(sigName: "notify::underline-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::underline-set", ...args: any[]): void
    connect(sigName: "notify::variant", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variant", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::variant", ...args: any[]): void
    connect(sigName: "notify::variant-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variant-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::variant-set", ...args: any[]): void
    connect(sigName: "notify::weight", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::weight", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::weight", ...args: any[]): void
    connect(sigName: "notify::weight-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::weight-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::weight-set", ...args: any[]): void
    connect(sigName: "notify::width-chars", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-chars", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-chars", ...args: any[]): void
    connect(sigName: "notify::wrap-mode", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-mode", ...args: any[]): void
    connect(sigName: "notify::wrap-width", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-width", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-width", ...args: any[]): void
    connect(sigName: "notify::cell-background", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background", ...args: any[]): void
    connect(sigName: "notify::cell-background-gdk", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-gdk", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-gdk", ...args: any[]): void
    connect(sigName: "notify::cell-background-rgba", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-rgba", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-rgba", ...args: any[]): void
    connect(sigName: "notify::cell-background-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-set", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-set", ...args: any[]): void
    connect(sigName: "notify::editing", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::is-expanded", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expanded", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expanded", ...args: any[]): void
    connect(sigName: "notify::is-expander", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expander", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expander", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: DataCellRendererCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataCellRendererCombo extends Gtk.CellRendererText {

    // Own properties of Gdaui-5.0.Gdaui.DataCellRendererCombo

    static name: string
    static $gtype: GObject.GType<DataCellRendererCombo>

    // Constructors of Gdaui-5.0.Gdaui.DataCellRendererCombo

    constructor(config?: DataCellRendererCombo_ConstructProps) 
    /**
     * Creates a new #GdauiDataCellRendererCombo which will fill the parameters listed in
     * `source->`nodes with values available from `source->`data_model.
     * @constructor 
     * @param paramlist a #GdaSet object
     * @param source a #GdauiSetSource structure listed in `paramlist->`sources_list
     */
    constructor(paramlist: Set, source: SetSource) 
    /**
     * Creates a new #GdauiDataCellRendererCombo which will fill the parameters listed in
     * `source->`nodes with values available from `source->`data_model.
     * @constructor 
     * @param paramlist a #GdaSet object
     * @param source a #GdauiSetSource structure listed in `paramlist->`sources_list
     */
    static new(paramlist: Set, source: SetSource): DataCellRendererCombo

    // Overloads of new

    /**
     * Creates a new #GtkCellRendererText. Adjust how text is drawn using
     * object properties. Object properties can be
     * set globally (with g_object_set()). Also, with #GtkTreeViewColumn,
     * you can bind a property to a value in a #GtkTreeModel. For example,
     * you can bind the “text” property on the cell renderer to a string
     * value in the model, thus rendering a different string in each row
     * of the #GtkTreeView
     * @constructor 
     */
    static new(): Gtk.CellRendererText
    _init(config?: DataCellRendererCombo_ConstructProps): void
}

interface DataCellRendererInfo_ConstructProps extends Gtk.CellRenderer_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.DataCellRendererInfo

    editable?: boolean | null
    group?: object | null
    iter?: Gda.DataModelIter | null
    store?: DataStore | null
    to_be_deleted?: boolean | null
}


interface DataCellRendererInfo {

    // Own properties of Gdaui-5.0.Gdaui.DataCellRendererInfo

    editable: boolean
    readonly group: object
    readonly iter: Gda.DataModelIter
    readonly store: DataStore
    to_be_deleted: boolean

    // Own fields of Gdaui-5.0.Gdaui.DataCellRendererInfo

    parent: Gtk.CellRenderer
    priv: DataCellRendererInfoPriv

    // Own virtual methods of Gdaui-5.0.Gdaui.DataCellRendererInfo

    vfunc_status_changed(path: string, requested_action: Gda.ValueAttribute): void

    // Own signals of Gdaui-5.0.Gdaui.DataCellRendererInfo

    connect(sigName: "status-changed", callback: (...args: any[]) => void): number
    connect_after(sigName: "status-changed", callback: (...args: any[]) => void): number
    emit(sigName: "status-changed", object: string, p0: any, ...args: any[]): void

    // Class property signals of Gdaui-5.0.Gdaui.DataCellRendererInfo

    connect(sigName: "notify::editable", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::group", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::group", ...args: any[]): void
    connect(sigName: "notify::iter", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iter", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::iter", ...args: any[]): void
    connect(sigName: "notify::store", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::store", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::store", ...args: any[]): void
    connect(sigName: "notify::to-be-deleted", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::to-be-deleted", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::to-be-deleted", ...args: any[]): void
    connect(sigName: "notify::cell-background", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background", ...args: any[]): void
    connect(sigName: "notify::cell-background-gdk", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-gdk", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-gdk", ...args: any[]): void
    connect(sigName: "notify::cell-background-rgba", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-rgba", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-rgba", ...args: any[]): void
    connect(sigName: "notify::cell-background-set", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-set", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-set", ...args: any[]): void
    connect(sigName: "notify::editing", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::is-expanded", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expanded", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expanded", ...args: any[]): void
    connect(sigName: "notify::is-expander", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expander", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expander", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: DataCellRendererInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataCellRendererInfo extends Gtk.CellRenderer {

    // Own properties of Gdaui-5.0.Gdaui.DataCellRendererInfo

    static name: string
    static $gtype: GObject.GType<DataCellRendererInfo>

    // Constructors of Gdaui-5.0.Gdaui.DataCellRendererInfo

    constructor(config?: DataCellRendererInfo_ConstructProps) 
    /**
     * Creates a new #GdauiDataCellRendererInfo. Adjust rendering
     * parameters using object properties. Object properties can be set
     * globally (with g_object_set()). Also, with #GtkTreeViewColumn, you
     * can bind a property to a value in a #GtkTreeModel. For example, you
     * can bind the "active" property on the cell renderer to a boolean value
     * in the model, thus causing the check button to reflect the state of
     * the model.
     * @constructor 
     * @param store a #GdauiDataStore
     * @param iter a #GdaDataModelIter
     * @param group a #GdauiSetGroup pointer
     */
    constructor(store: DataStore, iter: Gda.DataModelIter, group: SetGroup) 
    /**
     * Creates a new #GdauiDataCellRendererInfo. Adjust rendering
     * parameters using object properties. Object properties can be set
     * globally (with g_object_set()). Also, with #GtkTreeViewColumn, you
     * can bind a property to a value in a #GtkTreeModel. For example, you
     * can bind the "active" property on the cell renderer to a boolean value
     * in the model, thus causing the check button to reflect the state of
     * the model.
     * @constructor 
     * @param store a #GdauiDataStore
     * @param iter a #GdaDataModelIter
     * @param group a #GdauiSetGroup pointer
     */
    static new(store: DataStore, iter: Gda.DataModelIter, group: SetGroup): DataCellRendererInfo
    _init(config?: DataCellRendererInfo_ConstructProps): void
}

interface DataCellRendererTextual_ConstructProps extends Gtk.CellRendererText_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.DataCellRendererTextual

    data_handler?: Gda.DataHandler | null
    options?: string | null
    to_be_deleted?: boolean | null
    type?: GObject.GType | null
    value?: object | null
}

/**
 * Signal callback interface for `changed`
 */
interface DataCellRendererTextual_ChangedSignalCallback {
    ($obj: DataCellRendererTextual, object: string, p0: any): void
}

interface DataCellRendererTextual {

    // Own properties of Gdaui-5.0.Gdaui.DataCellRendererTextual

    readonly data_handler: Gda.DataHandler
    options: string
    to_be_deleted: boolean
    readonly type: GObject.GType
    value: object

    // Own fields of Gdaui-5.0.Gdaui.DataCellRendererTextual

    parent: Gtk.CellRendererText
    priv: DataCellRendererTextualPrivate

    // Own virtual methods of Gdaui-5.0.Gdaui.DataCellRendererTextual

    vfunc_changed(path: string, new_value: any): void

    // Own signals of Gdaui-5.0.Gdaui.DataCellRendererTextual

    connect(sigName: "changed", callback: DataCellRendererTextual_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: DataCellRendererTextual_ChangedSignalCallback): number
    emit(sigName: "changed", object: string, p0: any, ...args: any[]): void

    // Class property signals of Gdaui-5.0.Gdaui.DataCellRendererTextual

    connect(sigName: "notify::data-handler", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-handler", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-handler", ...args: any[]): void
    connect(sigName: "notify::options", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: "notify::to-be-deleted", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::to-be-deleted", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::to-be-deleted", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::align-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::align-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::align-set", ...args: any[]): void
    connect(sigName: "notify::alignment", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alignment", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::background", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background", ...args: any[]): void
    connect(sigName: "notify::background-gdk", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-gdk", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-gdk", ...args: any[]): void
    connect(sigName: "notify::background-rgba", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-rgba", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-rgba", ...args: any[]): void
    connect(sigName: "notify::background-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-set", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::editable-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable-set", ...args: any[]): void
    connect(sigName: "notify::ellipsize", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ellipsize", ...args: any[]): void
    connect(sigName: "notify::ellipsize-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ellipsize-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ellipsize-set", ...args: any[]): void
    connect(sigName: "notify::family", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::family", ...args: any[]): void
    connect(sigName: "notify::family-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::family-set", ...args: any[]): void
    connect(sigName: "notify::font", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::foreground", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground", ...args: any[]): void
    connect(sigName: "notify::foreground-gdk", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-gdk", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground-gdk", ...args: any[]): void
    connect(sigName: "notify::foreground-rgba", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-rgba", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground-rgba", ...args: any[]): void
    connect(sigName: "notify::foreground-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreground-set", ...args: any[]): void
    connect(sigName: "notify::language", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::language-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language-set", ...args: any[]): void
    connect(sigName: "notify::markup", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::markup", ...args: any[]): void
    connect(sigName: "notify::max-width-chars", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width-chars", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-width-chars", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::rise", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rise", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rise", ...args: any[]): void
    connect(sigName: "notify::rise-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rise-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rise-set", ...args: any[]): void
    connect(sigName: "notify::scale", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::scale-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-set", ...args: any[]): void
    connect(sigName: "notify::single-paragraph-mode", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::single-paragraph-mode", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::single-paragraph-mode", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::size-points", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-points", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size-points", ...args: any[]): void
    connect(sigName: "notify::size-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size-set", ...args: any[]): void
    connect(sigName: "notify::stretch", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stretch", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stretch", ...args: any[]): void
    connect(sigName: "notify::stretch-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stretch-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stretch-set", ...args: any[]): void
    connect(sigName: "notify::strikethrough", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::strikethrough", ...args: any[]): void
    connect(sigName: "notify::strikethrough-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::strikethrough-set", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::style-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style-set", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::underline", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::underline", ...args: any[]): void
    connect(sigName: "notify::underline-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::underline-set", ...args: any[]): void
    connect(sigName: "notify::variant", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variant", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::variant", ...args: any[]): void
    connect(sigName: "notify::variant-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variant-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::variant-set", ...args: any[]): void
    connect(sigName: "notify::weight", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::weight", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::weight", ...args: any[]): void
    connect(sigName: "notify::weight-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::weight-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::weight-set", ...args: any[]): void
    connect(sigName: "notify::width-chars", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-chars", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-chars", ...args: any[]): void
    connect(sigName: "notify::wrap-mode", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-mode", ...args: any[]): void
    connect(sigName: "notify::wrap-width", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-width", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-width", ...args: any[]): void
    connect(sigName: "notify::cell-background", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background", ...args: any[]): void
    connect(sigName: "notify::cell-background-gdk", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-gdk", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-gdk", ...args: any[]): void
    connect(sigName: "notify::cell-background-rgba", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-rgba", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-rgba", ...args: any[]): void
    connect(sigName: "notify::cell-background-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-background-set", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-background-set", ...args: any[]): void
    connect(sigName: "notify::editing", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::is-expanded", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expanded", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expanded", ...args: any[]): void
    connect(sigName: "notify::is-expander", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-expander", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-expander", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: DataCellRendererTextual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataCellRendererTextual extends Gtk.CellRendererText {

    // Own properties of Gdaui-5.0.Gdaui.DataCellRendererTextual

    static name: string
    static $gtype: GObject.GType<DataCellRendererTextual>

    // Constructors of Gdaui-5.0.Gdaui.DataCellRendererTextual

    constructor(config?: DataCellRendererTextual_ConstructProps) 
    /**
     * Creates a new #GdauiDataCellRendererTextual. Adjust how text is drawn using
     * object properties. Object properties can be
     * set globally (with g_object_set()). Also, with #GtkTreeViewColumn,
     * you can bind a property to a value in a #GtkTreeModel. For example,
     * you can bind the "text" property on the cell renderer to a string
     * value in the model, thus rendering a different string in each row
     * of the #GtkTreeView
     * @constructor 
     * @param dh a #GdaDataHandler object, or %NULL
     * @param type the #GType being edited
     * @param options options as a string
     */
    constructor(dh: Gda.DataHandler | null, type: GObject.GType, options: string) 
    /**
     * Creates a new #GdauiDataCellRendererTextual. Adjust how text is drawn using
     * object properties. Object properties can be
     * set globally (with g_object_set()). Also, with #GtkTreeViewColumn,
     * you can bind a property to a value in a #GtkTreeModel. For example,
     * you can bind the "text" property on the cell renderer to a string
     * value in the model, thus rendering a different string in each row
     * of the #GtkTreeView
     * @constructor 
     * @param dh a #GdaDataHandler object, or %NULL
     * @param type the #GType being edited
     * @param options options as a string
     */
    static new(dh: Gda.DataHandler | null, type: GObject.GType, options: string): DataCellRendererTextual

    // Overloads of new

    /**
     * Creates a new #GtkCellRendererText. Adjust how text is drawn using
     * object properties. Object properties can be
     * set globally (with g_object_set()). Also, with #GtkTreeViewColumn,
     * you can bind a property to a value in a #GtkTreeModel. For example,
     * you can bind the “text” property on the cell renderer to a string
     * value in the model, thus rendering a different string in each row
     * of the #GtkTreeView
     * @constructor 
     */
    static new(): Gtk.CellRendererText
    _init(config?: DataCellRendererTextual_ConstructProps): void
}

interface DataFilter_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Box_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.DataFilter

    data_widget?: DataProxy | null
}

interface DataFilter extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gdaui-5.0.Gdaui.DataFilter

    data_widget: DataProxy

    // Own fields of Gdaui-5.0.Gdaui.DataFilter

    object: Gtk.Box
    priv: DataFilterPriv

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Gdaui-5.0.Gdaui.DataFilter

    connect(sigName: "notify::data-widget", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-widget", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-widget", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: DataFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataFilter extends Gtk.Box {

    // Own properties of Gdaui-5.0.Gdaui.DataFilter

    static name: string
    static $gtype: GObject.GType<DataFilter>

    // Constructors of Gdaui-5.0.Gdaui.DataFilter

    constructor(config?: DataFilter_ConstructProps) 
    /**
     * Creates a new #GdauiDataFilter widget suitable to change the filter expression
     * for `data_widget'`s displayed rows
     * @constructor 
     * @param data_widget a widget implementing the #GdauiDataProxy interface
     */
    constructor(data_widget: DataProxy) 
    /**
     * Creates a new #GdauiDataFilter widget suitable to change the filter expression
     * for `data_widget'`s displayed rows
     * @constructor 
     * @param data_widget a widget implementing the #GdauiDataProxy interface
     */
    static new(data_widget: DataProxy): DataFilter

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: DataFilter_ConstructProps): void
}

interface DataProxyInfo_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Box_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.DataProxyInfo

    data_proxy?: DataProxy | null
}

interface DataProxyInfo extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gdaui-5.0.Gdaui.DataProxyInfo

    data_proxy: DataProxy
    /**
     * Use this property to obtain the #GtkUIManager object internally used (to add new actions
     * for example).
     */
    readonly ui_manager: Gtk.UIManager

    // Own fields of Gdaui-5.0.Gdaui.DataProxyInfo

    object: Gtk.Box
    priv: DataProxyInfoPriv

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Gdaui-5.0.Gdaui.DataProxyInfo

    connect(sigName: "notify::data-proxy", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-proxy", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-proxy", ...args: any[]): void
    connect(sigName: "notify::ui-manager", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ui-manager", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ui-manager", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: DataProxyInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataProxyInfo extends Gtk.Box {

    // Own properties of Gdaui-5.0.Gdaui.DataProxyInfo

    static name: string
    static $gtype: GObject.GType<DataProxyInfo>

    // Constructors of Gdaui-5.0.Gdaui.DataProxyInfo

    constructor(config?: DataProxyInfo_ConstructProps) 
    /**
     * Creates a new #GdauiDataProxyInfo widget suitable to display information about `data_proxy`
     * @constructor 
     * @param data_proxy a widget implementing the #GdauiDataProxy interface
     * @param flags OR'ed values, specifying what to display in the new widget
     */
    constructor(data_proxy: DataProxy, flags: DataProxyInfoFlag) 
    /**
     * Creates a new #GdauiDataProxyInfo widget suitable to display information about `data_proxy`
     * @constructor 
     * @param data_proxy a widget implementing the #GdauiDataProxy interface
     * @param flags OR'ed values, specifying what to display in the new widget
     */
    static new(data_proxy: DataProxy, flags: DataProxyInfoFlag): DataProxyInfo

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: DataProxyInfo_ConstructProps): void
}

interface DataStore_ConstructProps extends Gtk.TreeModel_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.DataStore

    model?: object | null
    prepend_null_entry?: boolean | null
}

interface DataStore extends Gtk.TreeModel {

    // Own properties of Gdaui-5.0.Gdaui.DataStore

    readonly model: object
    prepend_null_entry: boolean
    readonly proxy: object

    // Own fields of Gdaui-5.0.Gdaui.DataStore

    object: GObject.Object
    priv: DataStorePriv

    // Owm methods of Gdaui-5.0.Gdaui.DataStore

    /**
     * Appends a new row.
     * @param iter an unset #GtkTreeIter to set to the appended row
     */
    append(iter: Gtk.TreeIter): boolean
    /**
     * Marks the row pointed by `iter` to be deleted
     * @param iter the considered row
     */
    delete(iter: Gtk.TreeIter): void
    /**
     * Sets `iter` to the first row where all the values in `values` at the columns identified at
     * `cols_index` match. If the row can't be identified, then the contents of `iter` is not modified.
     * 
     * NOTE: the `cols_index` array MUST contain a column index for each value in `values`
     * @param values a list of #GValue values
     * @param cols_index an array of #gint containing the column number to match each value of `values`
     */
    get_iter_from_values(values: any[], cols_index: number): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    get_proxy(): Gda.DataProxy
    /**
     * Get the number of the row represented by `iter`
     * @param iter a valid #GtkTreeIter
     */
    get_row_from_iter(iter: Gtk.TreeIter): number
    /**
     * Stores a value in the `store` data model.
     * @param iter the considered row
     * @param col the data model column
     * @param value the value to store (gets copied)
     */
    set_value(iter: Gtk.TreeIter, col: number, value: any): boolean
    /**
     * Remove the "to be deleted" mark the row pointed by `iter,` if it existed.
     * @param iter the considered row
     */
    undelete(iter: Gtk.TreeIter): void

    // Class property signals of Gdaui-5.0.Gdaui.DataStore

    connect(sigName: "notify::model", callback: (($obj: DataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: DataStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::prepend-null-entry", callback: (($obj: DataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prepend-null-entry", callback: (($obj: DataStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prepend-null-entry", ...args: any[]): void
    connect(sigName: "notify::proxy", callback: (($obj: DataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: DataStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DataStore extends GObject.Object {

    // Own properties of Gdaui-5.0.Gdaui.DataStore

    static name: string
    static $gtype: GObject.GType<DataStore>

    // Constructors of Gdaui-5.0.Gdaui.DataStore

    constructor(config?: DataStore_ConstructProps) 
    _init(config?: DataStore_ConstructProps): void
    /**
     * Creates a #GtkTreeModel interface with a #GdaDataModel
     * @param model a #GdaDataModel object
     */
    static new(model: Gda.DataModel): Gtk.TreeModel
}

interface Entry_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.CellEditable_ConstructProps, Gtk.Editable_ConstructProps, Gtk.Entry_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.Entry

    prefix?: string | null
    suffix?: string | null
}

interface Entry extends Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {

    // Own properties of Gdaui-5.0.Gdaui.Entry

    prefix: string
    suffix: string

    // Own fields of Gdaui-5.0.Gdaui.Entry

    entry: Gtk.Entry
    priv: EntryPrivate

    // Owm methods of Gdaui-5.0.Gdaui.Entry

    /**
     * Get a new string containing the contents of the widget as a string without the
     * prefix and/or suffix and/or format if they have been specified. This method differs
     * from calling gtk_entry_get_text() since the latest will return the complete text
     * in `entry` including prefix and/or suffix and/or format.
     * 
     * Note: %NULL may be returned if this method is called while the widget is working on some
     * internal modifications, or if gdaui_entry_set_text() was called with a %NULL
     * as its `text` argument.
     */
    get_text(): string
    /**
     * Sets the maximum allowed length of the contents of the widget.
     * If the current contents are longer than the given length, then they will be truncated to fit.
     * 
     * The difference with gtk_entry_set_max_length() is that the max length does not take into account
     * the prefix and/or suffix parts which may have been set.
     * @param max the maximum length of the entry, or 0 for no maximum.
     */
    set_max_length(max: number): void
    /**
     * Sets `prefix` as a prefix string of `entry:` that string will always be displayed in the
     * text entry, will not be modifiable, and won't be part of the returned text
     * @param prefix a prefix string
     */
    set_prefix(prefix: string): void
    /**
     * Sets `suffix` as a suffix string of `entry:` that string will always be displayed in the
     * text entry, will not be modifiable, and won't be part of the returned text
     * @param suffix a suffix string
     */
    set_suffix(suffix: string): void
    /**
     * Sets `text` into `entry`.
     * 
     * As a side effect, if `text` is %NULL, then the entry will
     * be completely empty, whereas if `text` is the empty string (""), then
     * `entry` will display the prefix and/or suffix and/or format string if they have
     * been set. Except this case, calling this method is similar to calling
     * gtk_entry_set_text()
     * @param text the text to set into `entry,` or %NULL
     */
    set_text(text: string | null): void

    // Overloads of set_text

    /**
     * Sets the text in the widget to the given
     * value, replacing the current contents.
     * 
     * See gtk_entry_buffer_set_text().
     * @param text the new text
     */
    set_text(text: string): void
    set_text(...args: any[]): any
    set_text(args_or_text: any[] | string): void | any
    /**
     * Sets `entry'`s maximum width in characters, without taking into account
     * any prefix or suffix (which will automatically be handled). If you want to take
     * a prefix or suffix into account direclty, then use gtk_entry_set_width_chars()
     * @param max_width maximum width, or -1
     */
    set_width_chars(max_width: number): void

    // Own virtual methods of Gdaui-5.0.Gdaui.Entry

    /**
     * To be defined by children classes to handle delete themselves
     * @virtual 
     * @param virt_start_pos the starting position.
     * @param virt_end_pos the end position (not included in deletion), always > `start_pos`
     * @param offset an offset to add to positions using `virt_start_pos` or `virt_end_pos` as reference          to call gtk_editable_*()
     */
    vfunc_assume_delete(virt_start_pos: number, virt_end_pos: number, offset: number): void
    /**
     * To be defined by children classes to handle insert themselves
     * @virtual 
     * @param text the text to be inserted
     * @param text_length `text'`s length in bytes (not characters)
     * @param virt_pos the position where `text` is to be inserted
     * @param offset an offset to add to positions using `virt_pos` as reference to call gtk_editable_*()
     */
    vfunc_assume_insert(text: string, text_length: number, virt_pos: number, offset: number): void
    /**
     * If defined, sould return a text suitable to display EMPTY value, it will be called when
     * entry was set to NULL and is becomming not NULL
     * @virtual 
     */
    vfunc_get_empty_text(): string

    // Class property signals of Gdaui-5.0.Gdaui.Entry

    connect(sigName: "notify::prefix", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::suffix", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suffix", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::suffix", ...args: any[]): void
    connect(sigName: "notify::activates-default", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activates-default", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activates-default", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::caps-lock-warning", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-warning", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caps-lock-warning", ...args: any[]): void
    connect(sigName: "notify::completion", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::cursor-position", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-position", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::enable-emoji-completion", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-emoji-completion", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-emoji-completion", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::inner-border", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inner-border", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inner-border", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::invisible-char", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char", ...args: any[]): void
    connect(sigName: "notify::invisible-char-set", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char-set", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char-set", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-length", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::max-width-chars", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width-chars", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-width-chars", ...args: any[]): void
    connect(sigName: "notify::overwrite-mode", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite-mode", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overwrite-mode", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::populate-all", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::populate-all", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::populate-all", ...args: any[]): void
    connect(sigName: "notify::primary-icon-activatable", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-activatable", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-gicon", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-name", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-pixbuf", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-pixbuf", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::primary-icon-sensitive", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-sensitive", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::primary-icon-stock", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-stock", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::primary-icon-storage-type", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-storage-type", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::progress-fraction", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-fraction", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-fraction", ...args: any[]): void
    connect(sigName: "notify::progress-pulse-step", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-pulse-step", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-pulse-step", ...args: any[]): void
    connect(sigName: "notify::scroll-offset", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-offset", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scroll-offset", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-activatable", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-activatable", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-gicon", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-name", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-sensitive", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-sensitive", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-stock", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-stock", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-storage-type", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-storage-type", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::selection-bound", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-bound", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selection-bound", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::show-emoji-icon", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-emoji-icon", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-emoji-icon", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::text-length", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-length", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-length", ...args: any[]): void
    connect(sigName: "notify::truncate-multiline", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::truncate-multiline", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::truncate-multiline", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::width-chars", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-chars", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-chars", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::editing-canceled", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: Entry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing-canceled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Entry extends Gtk.Entry {

    // Own properties of Gdaui-5.0.Gdaui.Entry

    static name: string
    static $gtype: GObject.GType<Entry>

    // Constructors of Gdaui-5.0.Gdaui.Entry

    constructor(config?: Entry_ConstructProps) 
    /**
     * Creates a new #GdauiEntry widget.
     * @constructor 
     * @param prefix a prefix (not modifiable) string, or %NULL
     * @param suffix a suffix (not modifiable) string, or %NULL
     */
    constructor(prefix: string | null, suffix: string | null) 
    /**
     * Creates a new #GdauiEntry widget.
     * @constructor 
     * @param prefix a prefix (not modifiable) string, or %NULL
     * @param suffix a suffix (not modifiable) string, or %NULL
     */
    static new(prefix: string | null, suffix: string | null): Entry

    // Overloads of new

    /**
     * Creates a new entry.
     * @constructor 
     */
    static new(): Gtk.Entry
    _init(config?: Entry_ConstructProps): void
}

interface EntryBin_ConstructProps extends Atk.ImplementorIface_ConstructProps, DataEntry_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Scrollable_ConstructProps, EntryWrapper_ConstructProps {
}

interface EntryBin extends Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.Scrollable {

    // Own fields of Gdaui-5.0.Gdaui.EntryBin

    object: EntryWrapper
    priv: EntryBinPrivate

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Gdaui-5.0.Gdaui.EntryBin

    connect(sigName: "notify::set-default-if-invalid", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::set-default-if-invalid", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::set-default-if-invalid", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::handler", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handler", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handler", ...args: any[]): void
    connect(sigName: "notify::is-cell-renderer", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cell-renderer", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-cell-renderer", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: EntryBin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EntryBin extends EntryWrapper {

    // Own properties of Gdaui-5.0.Gdaui.EntryBin

    static name: string
    static $gtype: GObject.GType<EntryBin>

    // Constructors of Gdaui-5.0.Gdaui.EntryBin

    constructor(config?: EntryBin_ConstructProps) 
    /**
     * Creates a new widget which is mainly a #GtkEntry
     * @constructor 
     * @param dh the data handler to be used by the new widget
     * @param type the requested data type (compatible with `dh)`
     */
    constructor(dh: Gda.DataHandler, type: GObject.GType) 
    /**
     * Creates a new widget which is mainly a #GtkEntry
     * @constructor 
     * @param dh the data handler to be used by the new widget
     * @param type the requested data type (compatible with `dh)`
     */
    static new(dh: Gda.DataHandler, type: GObject.GType): EntryBin

    // Overloads of new

    /**
     * Creates a new #GtkViewport with the given adjustments, or with default
     * adjustments if none are given.
     * @constructor 
     * @param hadjustment horizontal adjustment
     * @param vadjustment vertical adjustment
     */
    static new(hadjustment: Gtk.Adjustment | null, vadjustment: Gtk.Adjustment | null): Gtk.Viewport
    _init(config?: EntryBin_ConstructProps): void
}

interface EntryBoolean_ConstructProps extends Atk.ImplementorIface_ConstructProps, DataEntry_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Scrollable_ConstructProps, EntryWrapper_ConstructProps {
}

interface EntryBoolean extends Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.Scrollable {

    // Own fields of Gdaui-5.0.Gdaui.EntryBoolean

    object: EntryWrapper
    priv: EntryBooleanPrivate

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Gdaui-5.0.Gdaui.EntryBoolean

    connect(sigName: "notify::set-default-if-invalid", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::set-default-if-invalid", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::set-default-if-invalid", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::handler", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handler", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handler", ...args: any[]): void
    connect(sigName: "notify::is-cell-renderer", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cell-renderer", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-cell-renderer", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: EntryBoolean, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EntryBoolean extends EntryWrapper {

    // Own properties of Gdaui-5.0.Gdaui.EntryBoolean

    static name: string
    static $gtype: GObject.GType<EntryBoolean>

    // Constructors of Gdaui-5.0.Gdaui.EntryBoolean

    constructor(config?: EntryBoolean_ConstructProps) 
    /**
     * Creates a new data entry widget
     * @constructor 
     * @param dh the data handler to be used by the new widget
     * @param type the requested data type (compatible with `dh)`
     */
    constructor(dh: Gda.DataHandler, type: GObject.GType) 
    /**
     * Creates a new data entry widget
     * @constructor 
     * @param dh the data handler to be used by the new widget
     * @param type the requested data type (compatible with `dh)`
     */
    static new(dh: Gda.DataHandler, type: GObject.GType): EntryBoolean

    // Overloads of new

    /**
     * Creates a new #GtkViewport with the given adjustments, or with default
     * adjustments if none are given.
     * @constructor 
     * @param hadjustment horizontal adjustment
     * @param vadjustment vertical adjustment
     */
    static new(hadjustment: Gtk.Adjustment | null, vadjustment: Gtk.Adjustment | null): Gtk.Viewport
    _init(config?: EntryBoolean_ConstructProps): void
}

interface EntryCombo_ConstructProps extends Atk.ImplementorIface_ConstructProps, DataEntry_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Scrollable_ConstructProps, EntryShell_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.EntryCombo

    set_default_if_invalid?: boolean | null
}

interface EntryCombo extends Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of Gdaui-5.0.Gdaui.EntryCombo

    set_default_if_invalid: boolean

    // Own fields of Gdaui-5.0.Gdaui.EntryCombo

    object: EntryShell
    priv: EntryComboPriv

    // Owm methods of Gdaui-5.0.Gdaui.EntryCombo

    /**
     * Get a list of all the values in `combo'`s data model's selected row. The list
     * must be freed by the caller.
     */
    get_all_values(): any[]
    /**
     * Get the original values stored within `combo`. The returned values are the ones
     * within `combo,` so they must not be freed afterwards; the list has to be freed afterwards.
     */
    get_reference_values(): any[]
    /**
     * Get the values stored within `combo`. The returned values are the ones
     * within `combo,` so they must not be freed afterwards, however the returned
     * list has to be freed afterwards.
     */
    get_values(): any[]
    /**
     * Sets the default values of `combo` to the specified ones. None of the
     * values provided in the list is modified.
     * @param values a list of #GValue values
     */
    set_default_values(values: any[]): void
    /**
     * Sets the original values of `combo` to the specified ones. None of the
     * values provided in the list is modified.
     * @param values a list of #GValue values
     */
    set_reference_values(values: any[]): void
    /**
     * Sets the values of `combo` to the specified ones. None of the
     * values provided in the list is modified.
     * 
     * `values` holds a list of #GValue values, one for each parameter that is present in the `node` argument
     * of the gdaui_entry_combo_new() function which created `combo`.
     * 
     * An error can occur when there is no corresponding value(s) to be displayed
     * for the provided values.
     * 
     * If `values` is %NULL, then the entry itself is set to NULL;
     * @param values a list of #GValue values, or %NULL
     */
    set_values(values: any[] | null): boolean

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Gdaui-5.0.Gdaui.EntryCombo

    connect(sigName: "notify::set-default-if-invalid", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::set-default-if-invalid", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::set-default-if-invalid", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::handler", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handler", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handler", ...args: any[]): void
    connect(sigName: "notify::is-cell-renderer", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cell-renderer", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-cell-renderer", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: EntryCombo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EntryCombo extends EntryShell {

    // Own properties of Gdaui-5.0.Gdaui.EntryCombo

    static name: string
    static $gtype: GObject.GType<EntryCombo>

    // Constructors of Gdaui-5.0.Gdaui.EntryCombo

    constructor(config?: EntryCombo_ConstructProps) 
    /**
     * Creates a new #GdauiEntryCombo widget. The widget is a combo box which displays a
     * selectable list of items (the items come from the 'source->data_model' data model)
     * 
     * The widget allows the value setting of one or more #GdaHolder objects
     * (one for each 'source->nodes') while proposing potentially "more readable" choices.
     * @constructor 
     * @param paramlist a #GdauiSet object
     * @param source a #GdauiSetSource structure, part of `paramlist`
     */
    constructor(paramlist: Set, source: SetSource) 
    /**
     * Creates a new #GdauiEntryCombo widget. The widget is a combo box which displays a
     * selectable list of items (the items come from the 'source->data_model' data model)
     * 
     * The widget allows the value setting of one or more #GdaHolder objects
     * (one for each 'source->nodes') while proposing potentially "more readable" choices.
     * @constructor 
     * @param paramlist a #GdauiSet object
     * @param source a #GdauiSetSource structure, part of `paramlist`
     */
    static new(paramlist: Set, source: SetSource): EntryCombo

    // Overloads of new

    /**
     * Creates a new #GtkViewport with the given adjustments, or with default
     * adjustments if none are given.
     * @constructor 
     * @param hadjustment horizontal adjustment
     * @param vadjustment vertical adjustment
     */
    static new(hadjustment: Gtk.Adjustment | null, vadjustment: Gtk.Adjustment | null): Gtk.Viewport
    _init(config?: EntryCombo_ConstructProps): void
}

interface EntryCommonTime_ConstructProps extends Atk.ImplementorIface_ConstructProps, DataEntry_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.CellEditable_ConstructProps, Gtk.Scrollable_ConstructProps, EntryWrapper_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.EntryCommonTime

    editing_canceled?: boolean | null
    type?: number | null
}

interface EntryCommonTime extends Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.CellEditable, Gtk.Scrollable {

    // Own properties of Gdaui-5.0.Gdaui.EntryCommonTime

    editing_canceled: boolean
    type: number

    // Own fields of Gdaui-5.0.Gdaui.EntryCommonTime

    object: EntryWrapper
    priv: EntryCommonTimePrivate

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Gdaui-5.0.Gdaui.EntryCommonTime

    connect(sigName: "notify::editing-canceled", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing-canceled", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::set-default-if-invalid", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::set-default-if-invalid", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::set-default-if-invalid", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::handler", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handler", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handler", ...args: any[]): void
    connect(sigName: "notify::is-cell-renderer", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cell-renderer", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-cell-renderer", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: EntryCommonTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EntryCommonTime extends EntryWrapper {

    // Own properties of Gdaui-5.0.Gdaui.EntryCommonTime

    static name: string
    static $gtype: GObject.GType<EntryCommonTime>

    // Constructors of Gdaui-5.0.Gdaui.EntryCommonTime

    constructor(config?: EntryCommonTime_ConstructProps) 
    _init(config?: EntryCommonTime_ConstructProps): void
}

interface EntryDate_ConstructProps extends Atk.ImplementorIface_ConstructProps, DataEntry_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.CellEditable_ConstructProps, Gtk.Scrollable_ConstructProps, EntryCommonTime_ConstructProps {
}

interface EntryDate extends Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.CellEditable, Gtk.Scrollable {

    // Conflicting properties

    priv: any

    // Own fields of Gdaui-5.0.Gdaui.EntryDate

    object: EntryCommonTime

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Gdaui-5.0.Gdaui.EntryDate

    connect(sigName: "notify::editing-canceled", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing-canceled", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::set-default-if-invalid", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::set-default-if-invalid", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::set-default-if-invalid", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::handler", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handler", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handler", ...args: any[]): void
    connect(sigName: "notify::is-cell-renderer", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cell-renderer", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-cell-renderer", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: EntryDate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EntryDate extends EntryCommonTime {

    // Own properties of Gdaui-5.0.Gdaui.EntryDate

    static name: string
    static $gtype: GObject.GType<EntryDate>

    // Constructors of Gdaui-5.0.Gdaui.EntryDate

    constructor(config?: EntryDate_ConstructProps) 
    /**
     * Creates a new data entry widget
     * @constructor 
     * @param dh the data handler to be used by the new widget
     */
    constructor(dh: Gda.DataHandler) 
    /**
     * Creates a new data entry widget
     * @constructor 
     * @param dh the data handler to be used by the new widget
     */
    static new(dh: Gda.DataHandler): EntryDate

    // Overloads of new

    /**
     * Creates a new #GtkViewport with the given adjustments, or with default
     * adjustments if none are given.
     * @constructor 
     * @param hadjustment horizontal adjustment
     * @param vadjustment vertical adjustment
     */
    static new(hadjustment: Gtk.Adjustment | null, vadjustment: Gtk.Adjustment | null): Gtk.Viewport
    _init(config?: EntryDate_ConstructProps): void
}

interface EntryNone_ConstructProps extends Atk.ImplementorIface_ConstructProps, DataEntry_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Scrollable_ConstructProps, EntryWrapper_ConstructProps {
}

interface EntryNone extends Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.Scrollable {

    // Own fields of Gdaui-5.0.Gdaui.EntryNone

    object: EntryWrapper
    priv: EntryNonePrivate

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Gdaui-5.0.Gdaui.EntryNone

    connect(sigName: "notify::set-default-if-invalid", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::set-default-if-invalid", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::set-default-if-invalid", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::handler", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handler", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handler", ...args: any[]): void
    connect(sigName: "notify::is-cell-renderer", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cell-renderer", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-cell-renderer", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: EntryNone, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EntryNone extends EntryWrapper {

    // Own properties of Gdaui-5.0.Gdaui.EntryNone

    static name: string
    static $gtype: GObject.GType<EntryNone>

    // Constructors of Gdaui-5.0.Gdaui.EntryNone

    constructor(config?: EntryNone_ConstructProps) 
    /**
     * Creates a new data entry widget
     * @constructor 
     * @param type the requested data type (compatible with `dh)`
     */
    constructor(type: GObject.GType) 
    /**
     * Creates a new data entry widget
     * @constructor 
     * @param type the requested data type (compatible with `dh)`
     */
    static new(type: GObject.GType): EntryNone

    // Overloads of new

    /**
     * Creates a new #GtkViewport with the given adjustments, or with default
     * adjustments if none are given.
     * @constructor 
     * @param hadjustment horizontal adjustment
     * @param vadjustment vertical adjustment
     */
    static new(hadjustment: Gtk.Adjustment | null, vadjustment: Gtk.Adjustment | null): Gtk.Viewport
    _init(config?: EntryNone_ConstructProps): void
}

interface EntryNumber_ConstructProps extends Atk.ImplementorIface_ConstructProps, DataEntry_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.CellEditable_ConstructProps, Gtk.Scrollable_ConstructProps, EntryWrapper_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.EntryNumber

    editing_canceled?: boolean | null
    options?: string | null
}

interface EntryNumber extends Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.CellEditable, Gtk.Scrollable {

    // Own properties of Gdaui-5.0.Gdaui.EntryNumber

    editing_canceled: boolean
    options: string

    // Own fields of Gdaui-5.0.Gdaui.EntryNumber

    object: EntryWrapper
    priv: EntryNumberPrivate

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Gdaui-5.0.Gdaui.EntryNumber

    connect(sigName: "notify::editing-canceled", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing-canceled", ...args: any[]): void
    connect(sigName: "notify::options", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: "notify::set-default-if-invalid", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::set-default-if-invalid", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::set-default-if-invalid", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::handler", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handler", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handler", ...args: any[]): void
    connect(sigName: "notify::is-cell-renderer", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cell-renderer", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-cell-renderer", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: EntryNumber, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EntryNumber extends EntryWrapper {

    // Own properties of Gdaui-5.0.Gdaui.EntryNumber

    static name: string
    static $gtype: GObject.GType<EntryNumber>

    // Constructors of Gdaui-5.0.Gdaui.EntryNumber

    constructor(config?: EntryNumber_ConstructProps) 
    /**
     * Creates a new data entry widget
     * @constructor 
     * @param dh the data handler to be used by the new widget
     * @param type the requested data type (compatible with `dh)`
     * @param options 
     */
    constructor(dh: Gda.DataHandler, type: GObject.GType, options: string) 
    /**
     * Creates a new data entry widget
     * @constructor 
     * @param dh the data handler to be used by the new widget
     * @param type the requested data type (compatible with `dh)`
     * @param options 
     */
    static new(dh: Gda.DataHandler, type: GObject.GType, options: string): EntryNumber

    // Overloads of new

    /**
     * Creates a new #GtkViewport with the given adjustments, or with default
     * adjustments if none are given.
     * @constructor 
     * @param hadjustment horizontal adjustment
     * @param vadjustment vertical adjustment
     */
    static new(hadjustment: Gtk.Adjustment | null, vadjustment: Gtk.Adjustment | null): Gtk.Viewport
    _init(config?: EntryNumber_ConstructProps): void
    static is_type_numeric(type: GObject.GType): boolean
}

interface EntryShell_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Scrollable_ConstructProps, Gtk.Viewport_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.EntryShell

    actions?: boolean | null
    handler?: Gda.DataHandler | null
    is_cell_renderer?: boolean | null
}

interface EntryShell extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of Gdaui-5.0.Gdaui.EntryShell

    actions: boolean
    handler: Gda.DataHandler
    is_cell_renderer: boolean

    // Own fields of Gdaui-5.0.Gdaui.EntryShell

    object: Gtk.Viewport
    priv: EntryShellPriv

    // Owm methods of Gdaui-5.0.Gdaui.EntryShell

    /**
     * Packs a #GTkWidget widget into the GdauiEntryShell.
     * @param main_widget a #GtkWidget to pack into `shell`
     */
    pack_entry(main_widget: Gtk.Widget): void
    /**
     * Forces the shell to refresh its display (mainly the color of the
     * button).
     */
    refresh(): void
    /**
     * Defines the color to be used when `de` displays an invalid value. Any value not
     * between 0. and 1. will result in the default hard coded values to be used (grayish).
     * @param red the red component of a color
     * @param green the green component of a color
     * @param blue the blue component of a color
     * @param alpha the alpha component of a color
     */
    set_ucolor(red: number, green: number, blue: number, alpha: number): void
    /**
     * Defines if `shell'`s contents is in an undefined state (shows or hides `shell'`s contents)
     * @param unknown set to %TRUE if `shell'`s contents is unavailable and should not be modified
     */
    set_unknown(unknown: boolean): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Gdaui-5.0.Gdaui.EntryShell

    connect(sigName: "notify::actions", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::handler", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handler", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handler", ...args: any[]): void
    connect(sigName: "notify::is-cell-renderer", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cell-renderer", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-cell-renderer", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: EntryShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EntryShell extends Gtk.Viewport {

    // Own properties of Gdaui-5.0.Gdaui.EntryShell

    static name: string
    static $gtype: GObject.GType<EntryShell>

    // Constructors of Gdaui-5.0.Gdaui.EntryShell

    constructor(config?: EntryShell_ConstructProps) 
    _init(config?: EntryShell_ConstructProps): void
}

interface EntryString_ConstructProps extends Atk.ImplementorIface_ConstructProps, DataEntry_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.CellEditable_ConstructProps, Gtk.Scrollable_ConstructProps, EntryWrapper_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.EntryString

    editing_canceled?: boolean | null
    multiline?: boolean | null
    options?: string | null
}

interface EntryString extends Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.CellEditable, Gtk.Scrollable {

    // Own properties of Gdaui-5.0.Gdaui.EntryString

    editing_canceled: boolean
    multiline: boolean
    options: string

    // Own fields of Gdaui-5.0.Gdaui.EntryString

    object: EntryWrapper
    priv: EntryStringPrivate

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Gdaui-5.0.Gdaui.EntryString

    connect(sigName: "notify::editing-canceled", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing-canceled", ...args: any[]): void
    connect(sigName: "notify::multiline", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::multiline", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::multiline", ...args: any[]): void
    connect(sigName: "notify::options", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: "notify::set-default-if-invalid", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::set-default-if-invalid", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::set-default-if-invalid", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::handler", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handler", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handler", ...args: any[]): void
    connect(sigName: "notify::is-cell-renderer", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cell-renderer", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-cell-renderer", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: EntryString, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EntryString extends EntryWrapper {

    // Own properties of Gdaui-5.0.Gdaui.EntryString

    static name: string
    static $gtype: GObject.GType<EntryString>

    // Constructors of Gdaui-5.0.Gdaui.EntryString

    constructor(config?: EntryString_ConstructProps) 
    /**
     * Creates a new data entry widget
     * @constructor 
     * @param dh the data handler to be used by the new widget
     * @param type the requested data type (compatible with `dh)`
     * @param options 
     */
    constructor(dh: Gda.DataHandler, type: GObject.GType, options: string) 
    /**
     * Creates a new data entry widget
     * @constructor 
     * @param dh the data handler to be used by the new widget
     * @param type the requested data type (compatible with `dh)`
     * @param options 
     */
    static new(dh: Gda.DataHandler, type: GObject.GType, options: string): EntryString

    // Overloads of new

    /**
     * Creates a new #GtkViewport with the given adjustments, or with default
     * adjustments if none are given.
     * @constructor 
     * @param hadjustment horizontal adjustment
     * @param vadjustment vertical adjustment
     */
    static new(hadjustment: Gtk.Adjustment | null, vadjustment: Gtk.Adjustment | null): Gtk.Viewport
    _init(config?: EntryString_ConstructProps): void
}

interface EntryTime_ConstructProps extends Atk.ImplementorIface_ConstructProps, DataEntry_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.CellEditable_ConstructProps, Gtk.Scrollable_ConstructProps, EntryCommonTime_ConstructProps {
}

interface EntryTime extends Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.CellEditable, Gtk.Scrollable {

    // Conflicting properties

    priv: any

    // Own fields of Gdaui-5.0.Gdaui.EntryTime

    object: EntryCommonTime

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Gdaui-5.0.Gdaui.EntryTime

    connect(sigName: "notify::editing-canceled", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing-canceled", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::set-default-if-invalid", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::set-default-if-invalid", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::set-default-if-invalid", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::handler", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handler", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handler", ...args: any[]): void
    connect(sigName: "notify::is-cell-renderer", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cell-renderer", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-cell-renderer", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: EntryTime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EntryTime extends EntryCommonTime {

    // Own properties of Gdaui-5.0.Gdaui.EntryTime

    static name: string
    static $gtype: GObject.GType<EntryTime>

    // Constructors of Gdaui-5.0.Gdaui.EntryTime

    constructor(config?: EntryTime_ConstructProps) 
    /**
     * Creates a new widget which is mainly a GtkEntry
     * @constructor 
     * @param dh the data handler to be used by the new widget
     */
    constructor(dh: Gda.DataHandler) 
    /**
     * Creates a new widget which is mainly a GtkEntry
     * @constructor 
     * @param dh the data handler to be used by the new widget
     */
    static new(dh: Gda.DataHandler): EntryTime

    // Overloads of new

    /**
     * Creates a new #GtkViewport with the given adjustments, or with default
     * adjustments if none are given.
     * @constructor 
     * @param hadjustment horizontal adjustment
     * @param vadjustment vertical adjustment
     */
    static new(hadjustment: Gtk.Adjustment | null, vadjustment: Gtk.Adjustment | null): Gtk.Viewport
    _init(config?: EntryTime_ConstructProps): void
}

interface EntryTimestamp_ConstructProps extends Atk.ImplementorIface_ConstructProps, DataEntry_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.CellEditable_ConstructProps, Gtk.Scrollable_ConstructProps, EntryCommonTime_ConstructProps {
}

interface EntryTimestamp extends Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.CellEditable, Gtk.Scrollable {

    // Conflicting properties

    priv: any

    // Own fields of Gdaui-5.0.Gdaui.EntryTimestamp

    object: EntryCommonTime

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Gdaui-5.0.Gdaui.EntryTimestamp

    connect(sigName: "notify::editing-canceled", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing-canceled", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::set-default-if-invalid", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::set-default-if-invalid", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::set-default-if-invalid", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::handler", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handler", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handler", ...args: any[]): void
    connect(sigName: "notify::is-cell-renderer", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cell-renderer", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-cell-renderer", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: EntryTimestamp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EntryTimestamp extends EntryCommonTime {

    // Own properties of Gdaui-5.0.Gdaui.EntryTimestamp

    static name: string
    static $gtype: GObject.GType<EntryTimestamp>

    // Constructors of Gdaui-5.0.Gdaui.EntryTimestamp

    constructor(config?: EntryTimestamp_ConstructProps) 
    /**
     * Creates a new data entry widget
     * @constructor 
     * @param dh the data handler to be used by the new widget
     */
    constructor(dh: Gda.DataHandler) 
    /**
     * Creates a new data entry widget
     * @constructor 
     * @param dh the data handler to be used by the new widget
     */
    static new(dh: Gda.DataHandler): EntryTimestamp

    // Overloads of new

    /**
     * Creates a new #GtkViewport with the given adjustments, or with default
     * adjustments if none are given.
     * @constructor 
     * @param hadjustment horizontal adjustment
     * @param vadjustment vertical adjustment
     */
    static new(hadjustment: Gtk.Adjustment | null, vadjustment: Gtk.Adjustment | null): Gtk.Viewport
    _init(config?: EntryTimestamp_ConstructProps): void
}

interface EntryWrapper_ConstructProps extends Atk.ImplementorIface_ConstructProps, DataEntry_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Scrollable_ConstructProps, EntryShell_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.EntryWrapper

    set_default_if_invalid?: boolean | null
}

interface EntryWrapper extends Atk.ImplementorIface, DataEntry, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of Gdaui-5.0.Gdaui.EntryWrapper

    set_default_if_invalid: boolean

    // Own fields of Gdaui-5.0.Gdaui.EntryWrapper

    object: EntryShell
    priv: EntryWrapperPriv

    // Owm methods of Gdaui-5.0.Gdaui.EntryWrapper

    /**
     * Signals to `gwrap` that the entry has been activated (that is the user
     * pressed ENTER for example to signify he has finished entering data)
     */
    contents_activated(): void
    /**
     * Signals to `gwrap` that the entry has changed
     */
    contents_changed(): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own virtual methods of Gdaui-5.0.Gdaui.EntryWrapper

    vfunc_can_expand(horiz: boolean): boolean
    vfunc_grab_focus(): void
    vfunc_is_valid(): boolean
    vfunc_real_get_value(): any
    vfunc_real_set_value(value: any): void
    vfunc_set_editable(editable: boolean): void
    vfunc_value_is_equal_to(value: any): boolean
    vfunc_value_is_null(): boolean

    // Class property signals of Gdaui-5.0.Gdaui.EntryWrapper

    connect(sigName: "notify::set-default-if-invalid", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::set-default-if-invalid", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::set-default-if-invalid", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::handler", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handler", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handler", ...args: any[]): void
    connect(sigName: "notify::is-cell-renderer", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cell-renderer", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-cell-renderer", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: EntryWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class EntryWrapper extends EntryShell {

    // Own properties of Gdaui-5.0.Gdaui.EntryWrapper

    static name: string
    static $gtype: GObject.GType<EntryWrapper>

    // Constructors of Gdaui-5.0.Gdaui.EntryWrapper

    constructor(config?: EntryWrapper_ConstructProps) 
    _init(config?: EntryWrapper_ConstructProps): void
}

interface Form_ConstructProps extends Atk.ImplementorIface_ConstructProps, DataProxy_ConstructProps, DataSelector_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Box_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.Form

    model?: Gda.DataModel | null
}

interface Form extends Atk.ImplementorIface, DataProxy, DataSelector, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gdaui-5.0.Gdaui.Form

    readonly info: DataProxyInfo
    readonly model: Gda.DataModel
    readonly raw_form: RawForm

    // Own fields of Gdaui-5.0.Gdaui.Form

    object: Gtk.Box
    priv: FormPriv

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Gdaui-5.0.Gdaui.Form

    connect(sigName: "notify::info", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::info", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::info", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::raw-form", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::raw-form", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::raw-form", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Form, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Form extends Gtk.Box {

    // Own properties of Gdaui-5.0.Gdaui.Form

    static name: string
    static $gtype: GObject.GType<Form>

    // Constructors of Gdaui-5.0.Gdaui.Form

    constructor(config?: Form_ConstructProps) 
    /**
     * Creates a new #GdauiForm widget suitable to display the data in `model`
     * @constructor 
     * @param model a #GdaDataModel
     */
    constructor(model: Gda.DataModel) 
    /**
     * Creates a new #GdauiForm widget suitable to display the data in `model`
     * @constructor 
     * @param model a #GdaDataModel
     */
    static new(model: Gda.DataModel): Form

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: Form_ConstructProps): void
}

interface FormattedEntry_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.CellEditable_ConstructProps, Gtk.Editable_ConstructProps, Entry_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.FormattedEntry

    format?: string | null
    mask?: string | null
}

interface FormattedEntry extends Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {

    // Own properties of Gdaui-5.0.Gdaui.FormattedEntry

    format: string
    mask: string

    // Own fields of Gdaui-5.0.Gdaui.FormattedEntry

    entry: Entry
    priv: FormattedEntryPrivate

    // Owm methods of Gdaui-5.0.Gdaui.FormattedEntry

    /**
     * Get `entry'`s contents. This function is similar to gdaui_get_text() except
     * that it optionnally uses the information contained in `mask` when gdaui_formatted_entry_new()
     * was called to format the output differently.
     */
    get_text(): string
    /**
     * Specifies that `entry` should call `insert_func` when the user wants to insert a char
     * which is anot allowed, to perform other actions
     * @param insert_func a #GdauiFormattedEntryInsertFunc, or %NULL
     */
    set_insert_func(insert_func: FormattedEntryInsertFunc | null): void

    // Conflicting methods

    set_text(...args: any[]): any

    // Class property signals of Gdaui-5.0.Gdaui.FormattedEntry

    connect(sigName: "notify::format", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::mask", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mask", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mask", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::suffix", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suffix", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::suffix", ...args: any[]): void
    connect(sigName: "notify::activates-default", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activates-default", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activates-default", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::caps-lock-warning", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-warning", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caps-lock-warning", ...args: any[]): void
    connect(sigName: "notify::completion", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::cursor-position", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-position", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::enable-emoji-completion", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-emoji-completion", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-emoji-completion", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::inner-border", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inner-border", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inner-border", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::invisible-char", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char", ...args: any[]): void
    connect(sigName: "notify::invisible-char-set", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char-set", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char-set", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-length", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::max-width-chars", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width-chars", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-width-chars", ...args: any[]): void
    connect(sigName: "notify::overwrite-mode", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite-mode", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overwrite-mode", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::populate-all", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::populate-all", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::populate-all", ...args: any[]): void
    connect(sigName: "notify::primary-icon-activatable", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-activatable", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-gicon", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-name", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-pixbuf", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-pixbuf", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::primary-icon-sensitive", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-sensitive", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::primary-icon-stock", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-stock", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::primary-icon-storage-type", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-storage-type", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::progress-fraction", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-fraction", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-fraction", ...args: any[]): void
    connect(sigName: "notify::progress-pulse-step", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-pulse-step", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-pulse-step", ...args: any[]): void
    connect(sigName: "notify::scroll-offset", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-offset", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scroll-offset", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-activatable", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-activatable", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-gicon", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-name", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-sensitive", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-sensitive", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-stock", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-stock", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-storage-type", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-storage-type", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::selection-bound", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-bound", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selection-bound", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::show-emoji-icon", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-emoji-icon", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-emoji-icon", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::text-length", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-length", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-length", ...args: any[]): void
    connect(sigName: "notify::truncate-multiline", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::truncate-multiline", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::truncate-multiline", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::width-chars", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-chars", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-chars", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::editing-canceled", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: FormattedEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing-canceled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FormattedEntry extends Entry {

    // Own properties of Gdaui-5.0.Gdaui.FormattedEntry

    static name: string
    static $gtype: GObject.GType<FormattedEntry>

    // Constructors of Gdaui-5.0.Gdaui.FormattedEntry

    constructor(config?: FormattedEntry_ConstructProps) 
    /**
     * Creates a new #GdauiFormattedEntry widget.
     * 
     * Characters in `format` are of two types:
     *   writeable: writeable characters which will be replaced with and underscore and where text will be entered
     *   fixed: every other characters are fixed characters, where text cant' be edited, and will be displayed AS IS
     * 
     * Possible values for writeable characters are:
     * <itemizedlist>
     *   <listitem><para>'0': digits</para></listitem>
     *   <listitem><para>'9': digits excluded 0</para></listitem>
     *   <listitem><para>'`'`: alpha</para></listitem>
     *   <listitem><para>'^': alpha converted to upper case</para></listitem>
     *   <listitem><para>'#': alphanumeric</para></listitem>
     *   <listitem><para>'*': any char</para></listitem>
     * </itemizedlist>
     * 
     * if `mask` is not %NULL, then it should only contains the follogin characters, which are used side by side with
     * `format'`s characters:
     * <itemizedlist>
     *   <listitem><para>'_': the corresponding character in `format` is actually used as a writable character</para></listitem>
     *   <listitem><para>'-': the corresponding character in `format` is actually used as a writable character, but
     *              the character will be removed from gdaui_formatted_entry_get_text()'s result if it was not
     *              filled by the user</para></listitem>
     *   <listitem><para>' ': the corresponding character in `format` will not be considered as a writable character
     *              but as a non writable character</para></listitem>
     * </itemizedlist>
     * it is then interpreted in the following way: for a character C in `format,` if the character at the same
     * position in `mask` is the space character (' '), then C will not interpreted as a writable format
     * character as defined above. `mask` does not be to have the same length as `format`.
     * @constructor 
     * @param format a format string
     * @param mask a mask string, or %NULL
     */
    constructor(format: string, mask: string | null) 
    /**
     * Creates a new #GdauiFormattedEntry widget.
     * 
     * Characters in `format` are of two types:
     *   writeable: writeable characters which will be replaced with and underscore and where text will be entered
     *   fixed: every other characters are fixed characters, where text cant' be edited, and will be displayed AS IS
     * 
     * Possible values for writeable characters are:
     * <itemizedlist>
     *   <listitem><para>'0': digits</para></listitem>
     *   <listitem><para>'9': digits excluded 0</para></listitem>
     *   <listitem><para>'`'`: alpha</para></listitem>
     *   <listitem><para>'^': alpha converted to upper case</para></listitem>
     *   <listitem><para>'#': alphanumeric</para></listitem>
     *   <listitem><para>'*': any char</para></listitem>
     * </itemizedlist>
     * 
     * if `mask` is not %NULL, then it should only contains the follogin characters, which are used side by side with
     * `format'`s characters:
     * <itemizedlist>
     *   <listitem><para>'_': the corresponding character in `format` is actually used as a writable character</para></listitem>
     *   <listitem><para>'-': the corresponding character in `format` is actually used as a writable character, but
     *              the character will be removed from gdaui_formatted_entry_get_text()'s result if it was not
     *              filled by the user</para></listitem>
     *   <listitem><para>' ': the corresponding character in `format` will not be considered as a writable character
     *              but as a non writable character</para></listitem>
     * </itemizedlist>
     * it is then interpreted in the following way: for a character C in `format,` if the character at the same
     * position in `mask` is the space character (' '), then C will not interpreted as a writable format
     * character as defined above. `mask` does not be to have the same length as `format`.
     * @constructor 
     * @param format a format string
     * @param mask a mask string, or %NULL
     */
    static new(format: string, mask: string | null): FormattedEntry

    // Overloads of new

    /**
     * Creates a new #GdauiEntry widget.
     * @constructor 
     * @param prefix a prefix (not modifiable) string, or %NULL
     * @param suffix a suffix (not modifiable) string, or %NULL
     */
    static new(prefix: string | null, suffix: string | null): Entry
    /**
     * Creates a new entry.
     * @constructor 
     */
    static new(): Gtk.Entry
    _init(config?: FormattedEntry_ConstructProps): void
}

interface Grid_ConstructProps extends Atk.ImplementorIface_ConstructProps, DataProxy_ConstructProps, DataSelector_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Box_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.Grid

    model?: Gda.DataModel | null
}

interface Grid extends Atk.ImplementorIface, DataProxy, DataSelector, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gdaui-5.0.Gdaui.Grid

    readonly info: DataProxyInfo
    model: Gda.DataModel
    readonly raw_grid: RawGrid

    // Own fields of Gdaui-5.0.Gdaui.Grid

    object: Gtk.Box
    priv: GridPriv

    // Owm methods of Gdaui-5.0.Gdaui.Grid

    /**
     * Sets the size of each chunk of data to display: the maximum number of rows which
     * can be displayed at a time. See gdaui_raw_grid_set_sample_size() and gda_data_proxy_set_sample_size()
     * @param sample_size the size of the sample displayed in `grid`
     */
    set_sample_size(sample_size: number): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Gdaui-5.0.Gdaui.Grid

    connect(sigName: "notify::info", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::info", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::info", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::raw-grid", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::raw-grid", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::raw-grid", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Grid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Grid extends Gtk.Box {

    // Own properties of Gdaui-5.0.Gdaui.Grid

    static name: string
    static $gtype: GObject.GType<Grid>

    // Constructors of Gdaui-5.0.Gdaui.Grid

    constructor(config?: Grid_ConstructProps) 
    /**
     * Creates a new #GdauiGrid widget suitable to display the data in `model`
     * @constructor 
     * @param model a #GdaDataModel, or %NULL
     */
    constructor(model: Gda.DataModel | null) 
    /**
     * Creates a new #GdauiGrid widget suitable to display the data in `model`
     * @constructor 
     * @param model a #GdaDataModel, or %NULL
     */
    static new(model: Gda.DataModel | null): Grid

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: Grid_ConstructProps): void
}

interface Login_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Box_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.Login

    dsn?: string | null
}

/**
 * Signal callback interface for `changed`
 */
interface Login_ChangedSignalCallback {
    ($obj: Login, object: boolean): void
}

interface Login extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gdaui-5.0.Gdaui.Login

    dsn: string
    readonly valid: boolean

    // Own fields of Gdaui-5.0.Gdaui.Login

    parent: Gtk.Box
    priv: LoginPrivate

    // Owm methods of Gdaui-5.0.Gdaui.Login

    /**
     * Get the information specified in `login` as a pointer to a (read-only) #GdaDsnInfo.
     * If the connection is not specified by a DSN, then the 'name' attribute of the returned
     * #GdaDsnInfo will be %NULL, and otherwise it will contain the name of the selected DSN.
     */
    get_connection_information(): Gda.DsnInfo
    /**
     * Changes the information displayed in `login,` to represent `cinfo`.
     * If `login'`s mode has %GDA_UI_LOGIN_HIDE_DIRECT_CONNECTION_MODE, then
     * if `cinfo->`name is not %NULL it is displayed in the DSN selector, otherwise
     * a warning is shown and the result
     * is the same as having passed %NULL for the `cinfo` argument.
     * 
     * In any case `login'`s mode (set by gdaui_login_set_mode()) is not changed.
     * @param cinfo a pointer to a structure representing the information to display.
     */
    set_connection_information(cinfo: Gda.DsnInfo): void
    /**
     * Changes the information displayed in `login,` to represent `dsn`.
     * If `login'`s mode has %GDA_UI_LOGIN_HIDE_DSN_SELECTION_MODE, then
     * the DSN information is extracted and displayed in the direct login area.
     * 
     * If `dsn` is not a declared data source name, then a warning is shown and the result
     * is the same as having passed %NULL for the `dsn` argument.
     * 
     * In any case `login'`s mode (set by gdaui_login_set_mode()) is not changed.
     * @param dsn a data source name, or %NULL
     */
    set_dsn(dsn: string | null): void
    /**
     * Set how `login` operates
     * @param mode a flag
     */
    set_mode(mode: LoginMode): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own virtual methods of Gdaui-5.0.Gdaui.Login

    vfunc_changed(is_valid: boolean): void

    // Own signals of Gdaui-5.0.Gdaui.Login

    connect(sigName: "changed", callback: Login_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Login_ChangedSignalCallback): number
    emit(sigName: "changed", object: boolean, ...args: any[]): void

    // Class property signals of Gdaui-5.0.Gdaui.Login

    connect(sigName: "notify::dsn", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dsn", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dsn", ...args: any[]): void
    connect(sigName: "notify::valid", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valid", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Login, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Login extends Gtk.Box {

    // Own properties of Gdaui-5.0.Gdaui.Login

    static name: string
    static $gtype: GObject.GType<Login>

    // Constructors of Gdaui-5.0.Gdaui.Login

    constructor(config?: Login_ConstructProps) 
    /**
     * Creates a new login widget which enables the user to specify connection parameters.
     * @constructor 
     * @param dsn a data source name, or %NULL
     */
    constructor(dsn: string | null) 
    /**
     * Creates a new login widget which enables the user to specify connection parameters.
     * @constructor 
     * @param dsn a data source name, or %NULL
     */
    static new(dsn: string | null): Login

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: Login_ConstructProps): void
}

interface NumericEntry_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.CellEditable_ConstructProps, Gtk.Editable_ConstructProps, Entry_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.NumericEntry

    decimal_sep?: number | null
    n_decimals?: number | null
    thousands_sep?: number | null
    type?: GObject.GType | null
}

interface NumericEntry extends Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {

    // Own properties of Gdaui-5.0.Gdaui.NumericEntry

    decimal_sep: number
    n_decimals: number
    thousands_sep: number
    type: GObject.GType

    // Own fields of Gdaui-5.0.Gdaui.NumericEntry

    entry: Entry
    priv: NumericEntryPrivate

    // Owm methods of Gdaui-5.0.Gdaui.NumericEntry

    get_value(): any

    // Conflicting methods

    set_text(...args: any[]): any

    // Class property signals of Gdaui-5.0.Gdaui.NumericEntry

    connect(sigName: "notify::decimal-sep", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decimal-sep", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decimal-sep", ...args: any[]): void
    connect(sigName: "notify::n-decimals", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-decimals", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-decimals", ...args: any[]): void
    connect(sigName: "notify::thousands-sep", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thousands-sep", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::thousands-sep", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::suffix", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suffix", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::suffix", ...args: any[]): void
    connect(sigName: "notify::activates-default", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activates-default", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activates-default", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::caps-lock-warning", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-warning", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caps-lock-warning", ...args: any[]): void
    connect(sigName: "notify::completion", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::cursor-position", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-position", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::enable-emoji-completion", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-emoji-completion", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-emoji-completion", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::inner-border", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inner-border", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inner-border", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::invisible-char", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char", ...args: any[]): void
    connect(sigName: "notify::invisible-char-set", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char-set", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char-set", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-length", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::max-width-chars", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width-chars", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-width-chars", ...args: any[]): void
    connect(sigName: "notify::overwrite-mode", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite-mode", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overwrite-mode", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::populate-all", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::populate-all", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::populate-all", ...args: any[]): void
    connect(sigName: "notify::primary-icon-activatable", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-activatable", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-gicon", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-name", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-pixbuf", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-pixbuf", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::primary-icon-sensitive", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-sensitive", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::primary-icon-stock", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-stock", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::primary-icon-storage-type", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-storage-type", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::progress-fraction", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-fraction", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-fraction", ...args: any[]): void
    connect(sigName: "notify::progress-pulse-step", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-pulse-step", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-pulse-step", ...args: any[]): void
    connect(sigName: "notify::scroll-offset", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-offset", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scroll-offset", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-activatable", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-activatable", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-gicon", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-name", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-sensitive", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-sensitive", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-stock", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-stock", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-storage-type", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-storage-type", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::selection-bound", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-bound", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selection-bound", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::show-emoji-icon", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-emoji-icon", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-emoji-icon", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::text-length", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-length", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-length", ...args: any[]): void
    connect(sigName: "notify::truncate-multiline", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::truncate-multiline", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::truncate-multiline", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::width-chars", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-chars", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-chars", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::editing-canceled", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: NumericEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing-canceled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NumericEntry extends Entry {

    // Own properties of Gdaui-5.0.Gdaui.NumericEntry

    static name: string
    static $gtype: GObject.GType<NumericEntry>

    // Constructors of Gdaui-5.0.Gdaui.NumericEntry

    constructor(config?: NumericEntry_ConstructProps) 
    /**
     * Creates a new #GdauiNumericEntry widget.
     * @constructor 
     * @param type the numeric type
     */
    constructor(type: GObject.GType) 
    /**
     * Creates a new #GdauiNumericEntry widget.
     * @constructor 
     * @param type the numeric type
     */
    static new(type: GObject.GType): NumericEntry

    // Overloads of new

    /**
     * Creates a new #GdauiEntry widget.
     * @constructor 
     * @param prefix a prefix (not modifiable) string, or %NULL
     * @param suffix a suffix (not modifiable) string, or %NULL
     */
    static new(prefix: string | null, suffix: string | null): Entry
    /**
     * Creates a new entry.
     * @constructor 
     */
    static new(): Gtk.Entry
    _init(config?: NumericEntry_ConstructProps): void
}

interface ProviderSelector_ConstructProps extends Atk.ImplementorIface_ConstructProps, DataSelector_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.CellEditable_ConstructProps, Gtk.CellLayout_ConstructProps, Combo_ConstructProps {
}

interface ProviderSelector extends Atk.ImplementorIface, DataSelector, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {

    // Conflicting properties

    model: any
    parent_instance: any

    // Own fields of Gdaui-5.0.Gdaui.ProviderSelector

    parent: Combo
    priv: ProviderSelectorPrivate

    // Owm methods of Gdaui-5.0.Gdaui.ProviderSelector

    /**
     * Get the selected provider.
     */
    get_provider(): string
    /**
     * Get the selected provider as a #GdaServerProvider object
     */
    get_provider_obj(): Gda.ServerProvider
    /**
     * Forces `selector` to be set on `provider`
     * @param provider the provider to be selected, or %NULL for the default (SQLite)
     */
    set_provider(provider: string | null): boolean

    // Conflicting methods

    set_data(...args: any[]): any
    get_model(...args: any[]): any
    set_model(...args: any[]): any
    child_notify(...args: any[]): any

    // Class property signals of Gdaui-5.0.Gdaui.ProviderSelector

    connect(sigName: "notify::as-list", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::as-list", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::as-list", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::active-id", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-id", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-id", ...args: any[]): void
    connect(sigName: "notify::add-tearoffs", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::add-tearoffs", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::add-tearoffs", ...args: any[]): void
    connect(sigName: "notify::button-sensitivity", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::button-sensitivity", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::button-sensitivity", ...args: any[]): void
    connect(sigName: "notify::cell-area", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-area", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-area", ...args: any[]): void
    connect(sigName: "notify::column-span-column", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-span-column", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-span-column", ...args: any[]): void
    connect(sigName: "notify::entry-text-column", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entry-text-column", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entry-text-column", ...args: any[]): void
    connect(sigName: "notify::has-entry", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-entry", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-entry", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::id-column", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-column", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id-column", ...args: any[]): void
    connect(sigName: "notify::popup-fixed-width", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-fixed-width", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::popup-fixed-width", ...args: any[]): void
    connect(sigName: "notify::popup-shown", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-shown", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::popup-shown", ...args: any[]): void
    connect(sigName: "notify::row-span-column", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-span-column", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-span-column", ...args: any[]): void
    connect(sigName: "notify::tearoff-title", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tearoff-title", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tearoff-title", ...args: any[]): void
    connect(sigName: "notify::wrap-width", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-width", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-width", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::editing-canceled", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: ProviderSelector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing-canceled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ProviderSelector extends Combo {

    // Own properties of Gdaui-5.0.Gdaui.ProviderSelector

    static name: string
    static $gtype: GObject.GType<ProviderSelector>

    // Constructors of Gdaui-5.0.Gdaui.ProviderSelector

    constructor(config?: ProviderSelector_ConstructProps) 
    /**
     * Create a new #GdauiProviderSelector widget.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GdauiProviderSelector widget.
     * @constructor 
     */
    static new(): ProviderSelector
    _init(config?: ProviderSelector_ConstructProps): void

    // Conflicting static methods

    static new_with_model(...args: any[]): any
}

interface RawForm_ConstructProps extends Atk.ImplementorIface_ConstructProps, DataProxy_ConstructProps, DataSelector_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, BasicForm_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.RawForm

    model?: Gda.DataModel | null
}

interface RawForm extends Atk.ImplementorIface, DataProxy, DataSelector, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gdaui-5.0.Gdaui.RawForm

    model: Gda.DataModel

    // Own fields of Gdaui-5.0.Gdaui.RawForm

    object: BasicForm
    priv: RawFormPriv

    // Conflicting methods

    get_data_set(...args: any[]): any
    child_notify(...args: any[]): any

    // Class property signals of Gdaui-5.0.Gdaui.RawForm

    connect(sigName: "notify::model", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::can-expand-v", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-expand-v", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-expand-v", ...args: any[]): void
    connect(sigName: "notify::entries-auto-default", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entries-auto-default", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entries-auto-default", ...args: any[]): void
    connect(sigName: "notify::headers-sensitive", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-sensitive", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-sensitive", ...args: any[]): void
    connect(sigName: "notify::paramlist", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paramlist", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::paramlist", ...args: any[]): void
    connect(sigName: "notify::show-actions", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-actions", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-actions", ...args: any[]): void
    connect(sigName: "notify::xml-layout", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xml-layout", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xml-layout", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: RawForm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RawForm extends BasicForm {

    // Own properties of Gdaui-5.0.Gdaui.RawForm

    static name: string
    static $gtype: GObject.GType<RawForm>

    // Constructors of Gdaui-5.0.Gdaui.RawForm

    constructor(config?: RawForm_ConstructProps) 
    /**
     * Creates a new #GdauiRawForm widget to display data in `model`
     * @constructor 
     * @param model a #GdaDataModel, or %NULL
     */
    constructor(model: Gda.DataModel | null) 
    /**
     * Creates a new #GdauiRawForm widget to display data in `model`
     * @constructor 
     * @param model a #GdaDataModel, or %NULL
     */
    static new(model: Gda.DataModel | null): RawForm

    // Overloads of new

    /**
     * Creates a new #GdauiBasicForm widget using all the #GdaHolder objects provided in `data_set`.
     * 
     * The global layout is rendered using a table (a #GtkTable), and an entry is created for each
     * node of `data_set`.
     * @constructor 
     * @param data_set a #GdaSet structure
     */
    static new(data_set: Gda.Set): BasicForm
    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: RawForm_ConstructProps): void
}

interface RawGrid_ConstructProps extends Atk.ImplementorIface_ConstructProps, DataProxy_ConstructProps, DataSelector_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Scrollable_ConstructProps, Gtk.TreeView_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.RawGrid

    global_actions_visible?: boolean | null
    info_cell_visible?: boolean | null
    model?: Gda.DataModel | null
    xml_layout?: object | null
}

/**
 * Signal callback interface for `double-clicked`
 */
interface RawGrid_DoubleClickedSignalCallback {
    ($obj: RawGrid, row: number): void
}

/**
 * Signal callback interface for `populate-popup`
 */
interface RawGrid_PopulatePopupSignalCallback {
    ($obj: RawGrid, menu: Gtk.Menu): void
}

interface RawGrid extends Atk.ImplementorIface, DataProxy, DataSelector, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of Gdaui-5.0.Gdaui.RawGrid

    global_actions_visible: boolean
    info_cell_visible: boolean
    model: Gda.DataModel
    xml_layout: object

    // Own fields of Gdaui-5.0.Gdaui.RawGrid

    object: Gtk.TreeView
    priv: RawGridPriv

    // Owm methods of Gdaui-5.0.Gdaui.RawGrid

    /**
     * This function allows you to specify that the `func` function needs to be called
     * whenever the rendering of a cell in `grid` needs to be done. It is similar in purpose
     * to the gtk_tree_view_column_set_cell_data_func() function.
     * @param func a #GdauiRawGridFormatFunc function pointer
     */
    add_formatting_function(func: RawGridFormatFunc): void
    /**
     * This function undoes what has been specified before by gdaui_raw_grid_add_formatting_function()
     * @param func a #GdauiRawGridFormatFunc function pointer
     */
    remove_formatting_function(func: RawGridFormatFunc): void
    /**
     * Sets a grid's columns layout according an XML description contained in `file_name,` for the grid identified
     * by the `grid_name` name (as an XML layout file can contain the descriptions of several forms and grids).
     * @param file_name XML file name to use
     * @param grid_name the name of the grid to use, in `file_name`
     */
    set_layout_from_file(file_name: string, grid_name: string): void
    /**
     * Sets the size of each chunk of data to display: the maximum number of rows which
     * can be displayed at a time. See gdaui_grid_set_sample_size() and gda_data_proxy_set_sample_size()
     * @param sample_size the size of the sample displayed in `grid`
     */
    set_sample_size(sample_size: number): void
    set_sample_start(sample_start: number): void

    // Conflicting methods

    get_model(...args: any[]): any
    set_model(...args: any[]): any
    child_notify(...args: any[]): any

    // Own virtual methods of Gdaui-5.0.Gdaui.RawGrid

    vfunc_double_clicked(row: number): void
    vfunc_populate_popup(menu: Gtk.Menu): void

    // Own signals of Gdaui-5.0.Gdaui.RawGrid

    connect(sigName: "double-clicked", callback: RawGrid_DoubleClickedSignalCallback): number
    connect_after(sigName: "double-clicked", callback: RawGrid_DoubleClickedSignalCallback): number
    emit(sigName: "double-clicked", row: number, ...args: any[]): void
    connect(sigName: "populate-popup", callback: RawGrid_PopulatePopupSignalCallback): number
    connect_after(sigName: "populate-popup", callback: RawGrid_PopulatePopupSignalCallback): number
    emit(sigName: "populate-popup", menu: Gtk.Menu, ...args: any[]): void

    // Class property signals of Gdaui-5.0.Gdaui.RawGrid

    connect(sigName: "notify::global-actions-visible", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::global-actions-visible", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::global-actions-visible", ...args: any[]): void
    connect(sigName: "notify::info-cell-visible", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::info-cell-visible", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::info-cell-visible", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::xml-layout", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xml-layout", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xml-layout", ...args: any[]): void
    connect(sigName: "notify::activate-on-single-click", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activate-on-single-click", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activate-on-single-click", ...args: any[]): void
    connect(sigName: "notify::enable-grid-lines", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-grid-lines", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-grid-lines", ...args: any[]): void
    connect(sigName: "notify::enable-search", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-search", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-search", ...args: any[]): void
    connect(sigName: "notify::enable-tree-lines", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-tree-lines", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-tree-lines", ...args: any[]): void
    connect(sigName: "notify::expander-column", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expander-column", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expander-column", ...args: any[]): void
    connect(sigName: "notify::fixed-height-mode", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-height-mode", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-height-mode", ...args: any[]): void
    connect(sigName: "notify::headers-clickable", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-clickable", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-clickable", ...args: any[]): void
    connect(sigName: "notify::headers-visible", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers-visible", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::headers-visible", ...args: any[]): void
    connect(sigName: "notify::hover-expand", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-expand", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hover-expand", ...args: any[]): void
    connect(sigName: "notify::hover-selection", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-selection", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hover-selection", ...args: any[]): void
    connect(sigName: "notify::level-indentation", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level-indentation", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::level-indentation", ...args: any[]): void
    connect(sigName: "notify::reorderable", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reorderable", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reorderable", ...args: any[]): void
    connect(sigName: "notify::rubber-banding", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rubber-banding", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rubber-banding", ...args: any[]): void
    connect(sigName: "notify::rules-hint", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rules-hint", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rules-hint", ...args: any[]): void
    connect(sigName: "notify::search-column", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-column", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::search-column", ...args: any[]): void
    connect(sigName: "notify::show-expanders", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-expanders", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-expanders", ...args: any[]): void
    connect(sigName: "notify::tooltip-column", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-column", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-column", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: RawGrid, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RawGrid extends Gtk.TreeView {

    // Own properties of Gdaui-5.0.Gdaui.RawGrid

    static name: string
    static $gtype: GObject.GType<RawGrid>

    // Constructors of Gdaui-5.0.Gdaui.RawGrid

    constructor(config?: RawGrid_ConstructProps) 
    /**
     * Creates a new #GdauiRawGrid widget suitable to display the data in `model`
     * @constructor 
     * @param model a #GdaDataModel
     */
    constructor(model: Gda.DataModel) 
    /**
     * Creates a new #GdauiRawGrid widget suitable to display the data in `model`
     * @constructor 
     * @param model a #GdaDataModel
     */
    static new(model: Gda.DataModel): RawGrid

    // Overloads of new

    /**
     * Creates a new #GtkTreeView widget.
     * @constructor 
     */
    static new(): Gtk.TreeView
    _init(config?: RawGrid_ConstructProps): void
}

interface RtEditor_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Box_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.RtEditor

    /**
     * Determines if the contents of the widget appears in a scrolled window or not.
     */
    in_scrolled_window?: boolean | null
    /**
     * If set to %TRUE, then the default text background is removed
     * and thus the textbackground is the default widget's background.
     * 
     * This property has to be set before the widget is realized, and is taken into account only
     * if the widget is not editable (when it's realized).
     */
    no_background?: boolean | null
    /**
     * Instead of showing the formatted text, display the raw text (in the txt2tags syntax)
     */
    show_markup?: boolean | null
}

/**
 * Signal callback interface for `changed`
 */
interface RtEditor_ChangedSignalCallback {
    ($obj: RtEditor): void
}

interface RtEditor extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gdaui-5.0.Gdaui.RtEditor

    /**
     * Get access to the actual #GtkTextBuffer used. Do not modify it!
     */
    readonly buffer: Gtk.TextBuffer
    /**
     * Determines if the contents of the widget appears in a scrolled window or not.
     */
    in_scrolled_window: boolean
    /**
     * If set to %TRUE, then the default text background is removed
     * and thus the textbackground is the default widget's background.
     * 
     * This property has to be set before the widget is realized, and is taken into account only
     * if the widget is not editable (when it's realized).
     */
    no_background: boolean
    /**
     * Instead of showing the formatted text, display the raw text (in the txt2tags syntax)
     */
    show_markup: boolean

    // Own fields of Gdaui-5.0.Gdaui.RtEditor

    object: Gtk.Box
    priv: RtEditorPriv

    // Owm methods of Gdaui-5.0.Gdaui.RtEditor

    /**
     * Get the contents of `editor,` using the markup syntax
     */
    get_contents(): string
    /**
     * Set `editor'`s contents. If `length` is -1, `markup` must be nul-terminated
     * @param markup the text to set in `editor,` using the markup syntax (must be valid UTF-8)
     * @param length length of text in bytes.
     */
    set_contents(markup: string, length: number): void
    /**
     * Set `editor'`s editability
     * @param editable whether it's editable
     */
    set_editable(editable: boolean): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own virtual methods of Gdaui-5.0.Gdaui.RtEditor

    vfunc_changed(): void

    // Own signals of Gdaui-5.0.Gdaui.RtEditor

    connect(sigName: "changed", callback: RtEditor_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: RtEditor_ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Gdaui-5.0.Gdaui.RtEditor

    connect(sigName: "notify::buffer", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::in-scrolled-window", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-scrolled-window", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::in-scrolled-window", ...args: any[]): void
    connect(sigName: "notify::no-background", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-background", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-background", ...args: any[]): void
    connect(sigName: "notify::show-markup", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-markup", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-markup", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: RtEditor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RtEditor extends Gtk.Box {

    // Own properties of Gdaui-5.0.Gdaui.RtEditor

    static name: string
    static $gtype: GObject.GType<RtEditor>

    // Constructors of Gdaui-5.0.Gdaui.RtEditor

    constructor(config?: RtEditor_ConstructProps) 
    /**
     * Creates a new #GdauiRtEditor widget
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GdauiRtEditor widget
     * @constructor 
     */
    static new(): RtEditor

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: RtEditor_ConstructProps): void
}

interface ServerOperation_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Box_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.ServerOperation

    hide_single_header?: boolean | null
    server_operation?: Gda.ServerOperation | null
}

interface ServerOperation extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gdaui-5.0.Gdaui.ServerOperation

    hide_single_header: boolean
    readonly server_operation: Gda.ServerOperation

    // Own fields of Gdaui-5.0.Gdaui.ServerOperation

    object: Gtk.Box
    priv: ServerOperationPriv

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Gdaui-5.0.Gdaui.ServerOperation

    connect(sigName: "notify::hide-single-header", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-single-header", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-single-header", ...args: any[]): void
    connect(sigName: "notify::server-operation", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-operation", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::server-operation", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: ServerOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ServerOperation extends Gtk.Box {

    // Own properties of Gdaui-5.0.Gdaui.ServerOperation

    static name: string
    static $gtype: GObject.GType<ServerOperation>

    // Constructors of Gdaui-5.0.Gdaui.ServerOperation

    constructor(config?: ServerOperation_ConstructProps) 
    /**
     * Creates a new #GdauiServerOperation widget using all the parameters provided in `paramlist`.
     * 
     * The global layout is rendered using a table (a #GtkTable), and an entry is created for each
     * node of `paramlist`.
     * @constructor 
     * @param op a #GdaServerOperation structure
     */
    constructor(op: Gda.ServerOperation) 
    /**
     * Creates a new #GdauiServerOperation widget using all the parameters provided in `paramlist`.
     * 
     * The global layout is rendered using a table (a #GtkTable), and an entry is created for each
     * node of `paramlist`.
     * @constructor 
     * @param op a #GdaServerOperation structure
     */
    static new(op: Gda.ServerOperation): ServerOperation

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    /**
     * Creates a new #GdauiServerOperation widget in the same way as gdaui_server_operation_new()
     * and puts it into a #GtkDialog widget. The returned dialog has the "Ok" and "Cancel" buttons
     * which respectively return GTK_RESPONSE_ACCEPT and GTK_RESPONSE_REJECT.
     * 
     * The #GdauiServerOperation widget is attached to the dialog using the user property
     * "form".
     * @constructor 
     * @param op a #GdaServerOperation object
     * @param parent the parent window for the new dialog, or %NULL
     * @param title the title of the dialog window, or %NULL
     * @param header a helper text displayed at the top of the dialog, or %NULL
     */
    static new_in_dialog(op: Gda.ServerOperation, parent: Gtk.Window | null, title: string | null, header: string | null): ServerOperation
    _init(config?: ServerOperation_ConstructProps): void
}

interface Set_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.Set

    set?: Gda.Set | null
}

/**
 * Signal callback interface for `public-data-changed`
 */
interface Set_PublicDataChangedSignalCallback {
    ($obj: Set): void
}

/**
 * Signal callback interface for `source-model-changed`
 */
interface Set_SourceModelChangedSignalCallback {
    ($obj: Set, object: object | null): void
}

interface Set {

    // Own properties of Gdaui-5.0.Gdaui.Set

    readonly set: Gda.Set

    // Own fields of Gdaui-5.0.Gdaui.Set

    object: GObject.Object
    priv: SetPriv
    /**
     * list of #GdauiSetSource
     * @field 
     */
    sources_list: SetSource[]
    /**
     * list of #GdauiSetGroup
     * @field 
     */
    groups_list: SetGroup[]

    // Owm methods of Gdaui-5.0.Gdaui.Set

    get_group(holder: Gda.Holder): SetGroup

    // Own virtual methods of Gdaui-5.0.Gdaui.Set

    vfunc_public_data_changed(): void
    vfunc_source_model_changed(source: SetSource): void

    // Own signals of Gdaui-5.0.Gdaui.Set

    connect(sigName: "public-data-changed", callback: Set_PublicDataChangedSignalCallback): number
    connect_after(sigName: "public-data-changed", callback: Set_PublicDataChangedSignalCallback): number
    emit(sigName: "public-data-changed", ...args: any[]): void
    connect(sigName: "source-model-changed", callback: Set_SourceModelChangedSignalCallback): number
    connect_after(sigName: "source-model-changed", callback: Set_SourceModelChangedSignalCallback): number
    emit(sigName: "source-model-changed", object: object | null, ...args: any[]): void

    // Class property signals of Gdaui-5.0.Gdaui.Set

    connect(sigName: "notify::set", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::set", callback: (($obj: Set, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::set", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Set extends GObject.Object {

    // Own properties of Gdaui-5.0.Gdaui.Set

    static name: string
    static $gtype: GObject.GType<Set>

    // Constructors of Gdaui-5.0.Gdaui.Set

    constructor(config?: Set_ConstructProps) 
    /**
     * Creates a new #GdauiSet which wraps `set'`s properties
     * @constructor 
     * @param set a #GdaSet
     */
    constructor(set: Gda.Set) 
    /**
     * Creates a new #GdauiSet which wraps `set'`s properties
     * @constructor 
     * @param set a #GdaSet
     */
    static new(set: Gda.Set): Set
    _init(config?: Set_ConstructProps): void
}

interface TreeStore_ConstructProps extends Gtk.TreeDragDest_ConstructProps, Gtk.TreeDragSource_ConstructProps, Gtk.TreeModel_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Gdaui-5.0.Gdaui.TreeStore

    tree?: Gda.Tree | null
}

/**
 * Signal callback interface for `drag-can-drag`
 */
interface TreeStore_DragCanDragSignalCallback {
    ($obj: TreeStore, object: string): boolean
}

/**
 * Signal callback interface for `drag-can-drop`
 */
interface TreeStore_DragCanDropSignalCallback {
    ($obj: TreeStore, object: string, p0: object | null): boolean
}

/**
 * Signal callback interface for `drag-delete`
 */
interface TreeStore_DragDeleteSignalCallback {
    ($obj: TreeStore, object: string): boolean
}

/**
 * Signal callback interface for `drag-drop`
 */
interface TreeStore_DragDropSignalCallback {
    ($obj: TreeStore, object: string, p0: object | null): boolean
}

/**
 * Signal callback interface for `drag-get`
 */
interface TreeStore_DragGetSignalCallback {
    ($obj: TreeStore, object: string, p0: object | null): boolean
}

interface TreeStore extends Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel {

    // Own properties of Gdaui-5.0.Gdaui.TreeStore

    readonly tree: Gda.Tree

    // Own fields of Gdaui-5.0.Gdaui.TreeStore

    object: GObject.Object
    priv: TreeStorePriv

    // Owm methods of Gdaui-5.0.Gdaui.TreeStore

    /**
     * Sets `iter` to represent `node` in the tree.
     * @param iter a #GtkTreeIter
     * @param node a #GdaTreeNode in `store`
     */
    get_iter_from_node(iter: Gtk.TreeIter, node: Gda.TreeNode): boolean
    /**
     * Get the  #GdaTreeNode represented by `iter`.
     * @param iter a valid #GtkTreeIter
     */
    get_node(iter: Gtk.TreeIter): Gda.TreeNode

    // Own virtual methods of Gdaui-5.0.Gdaui.TreeStore

    vfunc_drag_can_drag(path: string): boolean
    vfunc_drag_can_drop(path: string, selection_data: Gtk.SelectionData): boolean
    vfunc_drag_delete(path: string): boolean
    vfunc_drag_drop(path: string, selection_data: Gtk.SelectionData): boolean
    vfunc_drag_get(path: string, selection_data: Gtk.SelectionData): boolean

    // Own signals of Gdaui-5.0.Gdaui.TreeStore

    connect(sigName: "drag-can-drag", callback: TreeStore_DragCanDragSignalCallback): number
    connect_after(sigName: "drag-can-drag", callback: TreeStore_DragCanDragSignalCallback): number
    emit(sigName: "drag-can-drag", object: string, ...args: any[]): void
    connect(sigName: "drag-can-drop", callback: TreeStore_DragCanDropSignalCallback): number
    connect_after(sigName: "drag-can-drop", callback: TreeStore_DragCanDropSignalCallback): number
    emit(sigName: "drag-can-drop", object: string, p0: object | null, ...args: any[]): void
    connect(sigName: "drag-delete", callback: TreeStore_DragDeleteSignalCallback): number
    connect_after(sigName: "drag-delete", callback: TreeStore_DragDeleteSignalCallback): number
    emit(sigName: "drag-delete", object: string, ...args: any[]): void
    connect(sigName: "drag-drop", callback: TreeStore_DragDropSignalCallback): number
    connect_after(sigName: "drag-drop", callback: TreeStore_DragDropSignalCallback): number
    emit(sigName: "drag-drop", object: string, p0: object | null, ...args: any[]): void
    connect(sigName: "drag-get", callback: TreeStore_DragGetSignalCallback): number
    connect_after(sigName: "drag-get", callback: TreeStore_DragGetSignalCallback): number
    emit(sigName: "drag-get", object: string, p0: object | null, ...args: any[]): void

    // Class property signals of Gdaui-5.0.Gdaui.TreeStore

    connect(sigName: "notify::tree", callback: (($obj: TreeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tree", callback: (($obj: TreeStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tree", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TreeStore extends GObject.Object {

    // Own properties of Gdaui-5.0.Gdaui.TreeStore

    static name: string
    static $gtype: GObject.GType<TreeStore>

    // Constructors of Gdaui-5.0.Gdaui.TreeStore

    constructor(config?: TreeStore_ConstructProps) 
    _init(config?: TreeStore_ConstructProps): void
    /**
     * Creates a #GtkTreeModel interface with a #GdaTree, mapping columns to attributes' values.
     * For more information and limitations, see gdaui_tree_store_new().
     * @param tree a #GdaTree object
     * @param n_columns number of columns in the tree store
     * @param types an array of `n_columns` GType to specify the type of each column
     * @param attribute_names an array of `n_columns` strings to specify the attribute name                   to map each column on
     */
    static newv(tree: Gda.Tree, n_columns: number, types: GObject.GType, attribute_names: string): Gtk.TreeModel
}

interface BasicFormClass {

    // Own fields of Gdaui-5.0.Gdaui.BasicFormClass

    parent_class: Gtk.BoxClass
    holder_changed: (form: BasicForm, holder: Gda.Holder, is_user_action: boolean) => void
    activated: (form: BasicForm) => void
    layout_changed: (form: BasicForm) => void
}

abstract class BasicFormClass {

    // Own properties of Gdaui-5.0.Gdaui.BasicFormClass

    static name: string
}

interface BasicFormPriv {
}

class BasicFormPriv {

    // Own properties of Gdaui-5.0.Gdaui.BasicFormPriv

    static name: string
}

interface CloudClass {

    // Own fields of Gdaui-5.0.Gdaui.CloudClass

    parent_class: Gtk.BoxClass
    activate: (cloud: Cloud, row: number) => void
}

abstract class CloudClass {

    // Own properties of Gdaui-5.0.Gdaui.CloudClass

    static name: string
}

interface CloudPriv {
}

class CloudPriv {

    // Own properties of Gdaui-5.0.Gdaui.CloudPriv

    static name: string
}

interface ComboClass {

    // Own fields of Gdaui-5.0.Gdaui.ComboClass

    parent_class: Gtk.ComboBoxClass
}

abstract class ComboClass {

    // Own properties of Gdaui-5.0.Gdaui.ComboClass

    static name: string
}

interface ComboPrivate {
}

class ComboPrivate {

    // Own properties of Gdaui-5.0.Gdaui.ComboPrivate

    static name: string
}

interface DataCellRendererBinClass {

    // Own fields of Gdaui-5.0.Gdaui.DataCellRendererBinClass

    parent_class: Gtk.CellRendererPixbufClass
    changed: (cell_renderer: DataCellRendererBin, path: string, new_value: any) => void
}

abstract class DataCellRendererBinClass {

    // Own properties of Gdaui-5.0.Gdaui.DataCellRendererBinClass

    static name: string
}

interface DataCellRendererBinPrivate {
}

class DataCellRendererBinPrivate {

    // Own properties of Gdaui-5.0.Gdaui.DataCellRendererBinPrivate

    static name: string
}

interface DataCellRendererBooleanClass {

    // Own fields of Gdaui-5.0.Gdaui.DataCellRendererBooleanClass

    parent_class: Gtk.CellRendererToggleClass
    changed: (cell_renderer: DataCellRendererBoolean, path: string, new_value: any) => void
}

abstract class DataCellRendererBooleanClass {

    // Own properties of Gdaui-5.0.Gdaui.DataCellRendererBooleanClass

    static name: string
}

interface DataCellRendererBooleanPrivate {
}

class DataCellRendererBooleanPrivate {

    // Own properties of Gdaui-5.0.Gdaui.DataCellRendererBooleanPrivate

    static name: string
}

interface DataCellRendererComboClass {

    // Own fields of Gdaui-5.0.Gdaui.DataCellRendererComboClass

    parent_class: Gtk.CellRendererTextClass
}

abstract class DataCellRendererComboClass {

    // Own properties of Gdaui-5.0.Gdaui.DataCellRendererComboClass

    static name: string
}

interface DataCellRendererComboPrivate {
}

class DataCellRendererComboPrivate {

    // Own properties of Gdaui-5.0.Gdaui.DataCellRendererComboPrivate

    static name: string
}

interface DataCellRendererInfoClass {

    // Own fields of Gdaui-5.0.Gdaui.DataCellRendererInfoClass

    parent_class: Gtk.CellRendererClass
    status_changed: (cell_renderer_info: DataCellRendererInfo, path: string, requested_action: Gda.ValueAttribute) => void
}

abstract class DataCellRendererInfoClass {

    // Own properties of Gdaui-5.0.Gdaui.DataCellRendererInfoClass

    static name: string
}

interface DataCellRendererInfoPriv {
}

class DataCellRendererInfoPriv {

    // Own properties of Gdaui-5.0.Gdaui.DataCellRendererInfoPriv

    static name: string
}

interface DataCellRendererTextualClass {

    // Own fields of Gdaui-5.0.Gdaui.DataCellRendererTextualClass

    parent_class: Gtk.CellRendererTextClass
    changed: (cell_renderer_textual: DataCellRendererTextual, path: string, new_value: any) => void
}

abstract class DataCellRendererTextualClass {

    // Own properties of Gdaui-5.0.Gdaui.DataCellRendererTextualClass

    static name: string
}

interface DataCellRendererTextualPrivate {
}

class DataCellRendererTextualPrivate {

    // Own properties of Gdaui-5.0.Gdaui.DataCellRendererTextualPrivate

    static name: string
}

interface DataEntryIface {

    // Own fields of Gdaui-5.0.Gdaui.DataEntryIface

    g_iface: GObject.TypeInterface
    contents_modified: (de: DataEntry) => void
    contents_activated: (de: DataEntry) => void
    status_changed: (de: DataEntry) => void
    contents_valid: (de: DataEntry) => boolean
    set_value_type: (de: DataEntry, type: GObject.GType) => void
    get_value_type: (de: DataEntry) => GObject.GType
    set_value: (de: DataEntry, value: any | null) => void
    get_value: (de: DataEntry) => any
    set_ref_value: (de: DataEntry, value: any) => void
    get_ref_value: (de: DataEntry) => any
    set_value_default: (de: DataEntry, value: any) => void
    set_attributes: (de: DataEntry, attrs: Gda.ValueAttribute, mask: Gda.ValueAttribute) => void
    get_attributes: (de: DataEntry) => Gda.ValueAttribute
    get_handler: (de: DataEntry) => Gda.DataHandler
    can_expand: (de: DataEntry, horiz: boolean) => boolean
    set_editable: (de: DataEntry, editable: boolean) => void
    get_editable: (de: DataEntry) => boolean
    grab_focus: (de: DataEntry) => void
    expand_changed: (de: DataEntry) => void
    set_unknown_color: (de: DataEntry, red: number, green: number, blue: number, alpha: number) => void
    validate: (de: DataEntry) => boolean
}

abstract class DataEntryIface {

    // Own properties of Gdaui-5.0.Gdaui.DataEntryIface

    static name: string
}

interface DataFilterClass {

    // Own fields of Gdaui-5.0.Gdaui.DataFilterClass

    parent_class: Gtk.BoxClass
}

abstract class DataFilterClass {

    // Own properties of Gdaui-5.0.Gdaui.DataFilterClass

    static name: string
}

interface DataFilterPriv {
}

class DataFilterPriv {

    // Own properties of Gdaui-5.0.Gdaui.DataFilterPriv

    static name: string
}

interface DataProxyIface {

    // Own fields of Gdaui-5.0.Gdaui.DataProxyIface

    g_iface: GObject.TypeInterface
    get_proxy: (iface: DataProxy) => Gda.DataProxy
    set_column_editable: (iface: DataProxy, column: number, editable: boolean) => void
    show_column_actions: (iface: DataProxy, column: number, show_actions: boolean) => void
    get_actions_group: (iface: DataProxy) => Gtk.ActionGroup
    set_write_mode: (iface: DataProxy, mode: DataProxyWriteMode) => boolean
    get_write_mode: (iface: DataProxy) => DataProxyWriteMode
    proxy_changed: (iface: DataProxy, proxy: Gda.DataProxy) => void
}

abstract class DataProxyIface {

    // Own properties of Gdaui-5.0.Gdaui.DataProxyIface

    static name: string
}

interface DataProxyInfoClass {

    // Own fields of Gdaui-5.0.Gdaui.DataProxyInfoClass

    parent_class: Gtk.BoxClass
}

abstract class DataProxyInfoClass {

    // Own properties of Gdaui-5.0.Gdaui.DataProxyInfoClass

    static name: string
}

interface DataProxyInfoPriv {
}

class DataProxyInfoPriv {

    // Own properties of Gdaui-5.0.Gdaui.DataProxyInfoPriv

    static name: string
}

interface DataSelectorIface {

    // Own fields of Gdaui-5.0.Gdaui.DataSelectorIface

    g_iface: GObject.TypeInterface
    get_model: (iface: DataSelector) => Gda.DataModel
    set_model: (iface: DataSelector, model: Gda.DataModel) => void
    get_selected_rows: (iface: DataSelector) => number[]
    get_data_set: (iface: DataSelector) => Gda.DataModelIter
    select_row: (iface: DataSelector, row: number) => boolean
    unselect_row: (iface: DataSelector, row: number) => void
    set_column_visible: (iface: DataSelector, column: number, visible: boolean) => void
    selection_changed: (iface: DataSelector) => void
}

abstract class DataSelectorIface {

    // Own properties of Gdaui-5.0.Gdaui.DataSelectorIface

    static name: string
}

interface DataStoreClass {

    // Own fields of Gdaui-5.0.Gdaui.DataStoreClass

    parent_class: GObject.ObjectClass
}

abstract class DataStoreClass {

    // Own properties of Gdaui-5.0.Gdaui.DataStoreClass

    static name: string
}

interface DataStorePriv {
}

class DataStorePriv {

    // Own properties of Gdaui-5.0.Gdaui.DataStorePriv

    static name: string
}

interface EntryBinClass {

    // Own fields of Gdaui-5.0.Gdaui.EntryBinClass

    parent_class: EntryWrapperClass
}

abstract class EntryBinClass {

    // Own properties of Gdaui-5.0.Gdaui.EntryBinClass

    static name: string
}

interface EntryBinPrivate {
}

class EntryBinPrivate {

    // Own properties of Gdaui-5.0.Gdaui.EntryBinPrivate

    static name: string
}

interface EntryBooleanClass {

    // Own fields of Gdaui-5.0.Gdaui.EntryBooleanClass

    parent_class: EntryWrapperClass
}

abstract class EntryBooleanClass {

    // Own properties of Gdaui-5.0.Gdaui.EntryBooleanClass

    static name: string
}

interface EntryBooleanPrivate {
}

class EntryBooleanPrivate {

    // Own properties of Gdaui-5.0.Gdaui.EntryBooleanPrivate

    static name: string
}

interface EntryClass {

    // Own fields of Gdaui-5.0.Gdaui.EntryClass

    parent_class: Gtk.EntryClass
    get_empty_text: (entry: Entry) => string
    assume_insert: (entry: Entry, text: string, text_length: number, virt_pos: number, offset: number) => void
    assume_delete: (entry: Entry, virt_start_pos: number, virt_end_pos: number, offset: number) => void
}

abstract class EntryClass {

    // Own properties of Gdaui-5.0.Gdaui.EntryClass

    static name: string
}

interface EntryComboClass {

    // Own fields of Gdaui-5.0.Gdaui.EntryComboClass

    parent_class: EntryShellClass
}

abstract class EntryComboClass {

    // Own properties of Gdaui-5.0.Gdaui.EntryComboClass

    static name: string
}

interface EntryComboPriv {
}

class EntryComboPriv {

    // Own properties of Gdaui-5.0.Gdaui.EntryComboPriv

    static name: string
}

interface EntryCommonTimeClass {

    // Own fields of Gdaui-5.0.Gdaui.EntryCommonTimeClass

    parent_class: EntryWrapperClass
}

abstract class EntryCommonTimeClass {

    // Own properties of Gdaui-5.0.Gdaui.EntryCommonTimeClass

    static name: string
}

interface EntryCommonTimePrivate {
}

class EntryCommonTimePrivate {

    // Own properties of Gdaui-5.0.Gdaui.EntryCommonTimePrivate

    static name: string
}

interface EntryDateClass {

    // Own fields of Gdaui-5.0.Gdaui.EntryDateClass

    parent_class: EntryCommonTimeClass
}

abstract class EntryDateClass {

    // Own properties of Gdaui-5.0.Gdaui.EntryDateClass

    static name: string
}

interface EntryDatePrivate {
}

class EntryDatePrivate {

    // Own properties of Gdaui-5.0.Gdaui.EntryDatePrivate

    static name: string
}

interface EntryNoneClass {

    // Own fields of Gdaui-5.0.Gdaui.EntryNoneClass

    parent_class: EntryWrapperClass
}

abstract class EntryNoneClass {

    // Own properties of Gdaui-5.0.Gdaui.EntryNoneClass

    static name: string
}

interface EntryNonePrivate {
}

class EntryNonePrivate {

    // Own properties of Gdaui-5.0.Gdaui.EntryNonePrivate

    static name: string
}

interface EntryNumberClass {

    // Own fields of Gdaui-5.0.Gdaui.EntryNumberClass

    parent_class: EntryWrapperClass
}

abstract class EntryNumberClass {

    // Own properties of Gdaui-5.0.Gdaui.EntryNumberClass

    static name: string
}

interface EntryNumberPrivate {
}

class EntryNumberPrivate {

    // Own properties of Gdaui-5.0.Gdaui.EntryNumberPrivate

    static name: string
}

interface EntryPrivate {
}

class EntryPrivate {

    // Own properties of Gdaui-5.0.Gdaui.EntryPrivate

    static name: string
}

interface EntryShellClass {

    // Own fields of Gdaui-5.0.Gdaui.EntryShellClass

    parent_class: Gtk.ViewportClass
}

abstract class EntryShellClass {

    // Own properties of Gdaui-5.0.Gdaui.EntryShellClass

    static name: string
}

interface EntryShellPriv {
}

class EntryShellPriv {

    // Own properties of Gdaui-5.0.Gdaui.EntryShellPriv

    static name: string
}

interface EntryStringClass {

    // Own fields of Gdaui-5.0.Gdaui.EntryStringClass

    parent_class: EntryWrapperClass
}

abstract class EntryStringClass {

    // Own properties of Gdaui-5.0.Gdaui.EntryStringClass

    static name: string
}

interface EntryStringPrivate {
}

class EntryStringPrivate {

    // Own properties of Gdaui-5.0.Gdaui.EntryStringPrivate

    static name: string
}

interface EntryTimeClass {

    // Own fields of Gdaui-5.0.Gdaui.EntryTimeClass

    parent_class: EntryCommonTimeClass
}

abstract class EntryTimeClass {

    // Own properties of Gdaui-5.0.Gdaui.EntryTimeClass

    static name: string
}

interface EntryTimePrivate {
}

class EntryTimePrivate {

    // Own properties of Gdaui-5.0.Gdaui.EntryTimePrivate

    static name: string
}

interface EntryTimestampClass {

    // Own fields of Gdaui-5.0.Gdaui.EntryTimestampClass

    parent_class: EntryCommonTimeClass
}

abstract class EntryTimestampClass {

    // Own properties of Gdaui-5.0.Gdaui.EntryTimestampClass

    static name: string
}

interface EntryTimestampPrivate {
}

class EntryTimestampPrivate {

    // Own properties of Gdaui-5.0.Gdaui.EntryTimestampPrivate

    static name: string
}

interface EntryWrapperClass {

    // Own fields of Gdaui-5.0.Gdaui.EntryWrapperClass

    parent_class: EntryShellClass
    real_set_value: (wrapper: EntryWrapper, value: any) => void
    real_get_value: (wrapper: EntryWrapper) => any
    can_expand: (wrapper: EntryWrapper, horiz: boolean) => boolean
    set_editable: (wrapper: EntryWrapper, editable: boolean) => void
    value_is_equal_to: (wrapper: EntryWrapper, value: any) => boolean
    value_is_null: (wrapper: EntryWrapper) => boolean
    is_valid: (wrapper: EntryWrapper) => boolean
    grab_focus: (wrapper: EntryWrapper) => void
}

abstract class EntryWrapperClass {

    // Own properties of Gdaui-5.0.Gdaui.EntryWrapperClass

    static name: string
}

interface EntryWrapperPriv {
}

class EntryWrapperPriv {

    // Own properties of Gdaui-5.0.Gdaui.EntryWrapperPriv

    static name: string
}

interface FormClass {

    // Own fields of Gdaui-5.0.Gdaui.FormClass

    parent_class: Gtk.BoxClass
}

abstract class FormClass {

    // Own properties of Gdaui-5.0.Gdaui.FormClass

    static name: string
}

interface FormPriv {
}

class FormPriv {

    // Own properties of Gdaui-5.0.Gdaui.FormPriv

    static name: string
}

interface FormattedEntryClass {

    // Own fields of Gdaui-5.0.Gdaui.FormattedEntryClass

    parent_class: EntryClass
}

abstract class FormattedEntryClass {

    // Own properties of Gdaui-5.0.Gdaui.FormattedEntryClass

    static name: string
}

interface FormattedEntryPrivate {
}

class FormattedEntryPrivate {

    // Own properties of Gdaui-5.0.Gdaui.FormattedEntryPrivate

    static name: string
}

interface GridClass {

    // Own fields of Gdaui-5.0.Gdaui.GridClass

    parent_class: Gtk.BoxClass
}

abstract class GridClass {

    // Own properties of Gdaui-5.0.Gdaui.GridClass

    static name: string
}

interface GridPriv {
}

class GridPriv {

    // Own properties of Gdaui-5.0.Gdaui.GridPriv

    static name: string
}

interface LoginClass {

    // Own fields of Gdaui-5.0.Gdaui.LoginClass

    parent_class: Gtk.BoxClass
    changed: (login: Login, is_valid: boolean) => void
}

abstract class LoginClass {

    // Own properties of Gdaui-5.0.Gdaui.LoginClass

    static name: string
}

interface LoginPrivate {
}

class LoginPrivate {

    // Own properties of Gdaui-5.0.Gdaui.LoginPrivate

    static name: string
}

interface NumericEntryClass {

    // Own fields of Gdaui-5.0.Gdaui.NumericEntryClass

    parent_class: EntryClass
}

abstract class NumericEntryClass {

    // Own properties of Gdaui-5.0.Gdaui.NumericEntryClass

    static name: string
}

interface NumericEntryPrivate {
}

class NumericEntryPrivate {

    // Own properties of Gdaui-5.0.Gdaui.NumericEntryPrivate

    static name: string
}

interface Plugin {

    // Own fields of Gdaui-5.0.Gdaui.Plugin

    /**
     * the name of the plugin
     * @field 
     */
    plugin_name: string
    /**
     * a description for the plugin, or %NULL
     * @field 
     */
    plugin_descr: string
    /**
     * the shared object implementing the plugin, can be %NULL for internal plugins
     * @field 
     */
    plugin_file: string
    /**
     * number of types the plugin can handle, or %0 for any type
     * @field 
     */
    nb_g_types: number
    /**
     * an array of #GType, containing the accepted types, its size is `nb_g_types,` or %NULL if `nb_g_types` is %0
     * @field 
     */
    valid_g_types: GObject.GType
    /**
     * a string describing the plugin's options, or %NULL
     * @field 
     */
    options_xml_spec: string

    // Owm methods of Gdaui-5.0.Gdaui.Plugin

    /**
     * Adds a new plugin which will be used by the forms and grids. The new plugin, as
     * described by `plugin` can declare a custom widget to be used for forms, grids, or both.
     * 
     * If a plugin is already declared with the same name as the requested name, then
     * a warning is issued and the operation fails.
     */
    declare(): void
}

/**
 * Structure representing a plugin.
 * 
 * Note: `entry_create_func` and `cell_create_func` can't be %NULL at the same time
 * @record 
 */
class Plugin {

    // Own properties of Gdaui-5.0.Gdaui.Plugin

    static name: string
}

interface ProviderSelectorClass {

    // Own fields of Gdaui-5.0.Gdaui.ProviderSelectorClass

    parent_class: ComboClass
}

abstract class ProviderSelectorClass {

    // Own properties of Gdaui-5.0.Gdaui.ProviderSelectorClass

    static name: string
}

interface ProviderSelectorPrivate {
}

class ProviderSelectorPrivate {

    // Own properties of Gdaui-5.0.Gdaui.ProviderSelectorPrivate

    static name: string
}

interface RawFormClass {

    // Own fields of Gdaui-5.0.Gdaui.RawFormClass

    parent_class: BasicFormClass
}

abstract class RawFormClass {

    // Own properties of Gdaui-5.0.Gdaui.RawFormClass

    static name: string
}

interface RawFormPriv {
}

class RawFormPriv {

    // Own properties of Gdaui-5.0.Gdaui.RawFormPriv

    static name: string
}

interface RawGridClass {

    // Own fields of Gdaui-5.0.Gdaui.RawGridClass

    parent_class: Gtk.TreeViewClass
    double_clicked: (grid: RawGrid, row: number) => void
    populate_popup: (grid: RawGrid, menu: Gtk.Menu) => void
}

abstract class RawGridClass {

    // Own properties of Gdaui-5.0.Gdaui.RawGridClass

    static name: string
}

interface RawGridPriv {
}

class RawGridPriv {

    // Own properties of Gdaui-5.0.Gdaui.RawGridPriv

    static name: string
}

interface RtEditorClass {

    // Own fields of Gdaui-5.0.Gdaui.RtEditorClass

    parent_class: Gtk.BoxClass
    changed: (editor: RtEditor) => void
}

abstract class RtEditorClass {

    // Own properties of Gdaui-5.0.Gdaui.RtEditorClass

    static name: string
}

interface RtEditorPriv {
}

class RtEditorPriv {

    // Own properties of Gdaui-5.0.Gdaui.RtEditorPriv

    static name: string
}

interface ServerOperationClass {

    // Own fields of Gdaui-5.0.Gdaui.ServerOperationClass

    parent_class: Gtk.BoxClass
}

abstract class ServerOperationClass {

    // Own properties of Gdaui-5.0.Gdaui.ServerOperationClass

    static name: string
}

interface ServerOperationPriv {
}

class ServerOperationPriv {

    // Own properties of Gdaui-5.0.Gdaui.ServerOperationPriv

    static name: string
}

interface SetClass {

    // Own fields of Gdaui-5.0.Gdaui.SetClass

    parent_class: GObject.ObjectClass
    public_data_changed: (set: Set) => void
    source_model_changed: (set: Set, source: SetSource) => void
}

abstract class SetClass {

    // Own properties of Gdaui-5.0.Gdaui.SetClass

    static name: string
}

interface SetGroup {

    // Own fields of Gdaui-5.0.Gdaui.SetGroup

    group: Gda.SetGroup
    source: SetSource

    // Owm methods of Gdaui-5.0.Gdaui.SetGroup

    /**
     * Copy constructor.
     */
    copy(): SetGroup
    /**
     * Frees any resources taken by `sg` struct. If `sg` is %NULL, then nothing happens.
     */
    free(): void
    /**
     * Get group used by `sg`.
     */
    get_group(): Gda.SetGroup
    /**
     * Get source used by `sg`.
     */
    get_source(): SetSource
    /**
     * Set source to `source`.
     * @param group a #GdaSetGroup struct
     */
    set_group(group: Gda.SetGroup): void
    /**
     * Set source to `source`. if `source` is #NULL, then `group` nodes contains exactly one entry.
     * @param source 
     */
    set_source(source: SetSource): void
}

/**
 * The <structname>GdauiSetGroup</structname>.
 * 
 * To create a new #GdauiSetGroup use #gdaiu_set_group_new.
 * 
 * To free a #GdauiSetGroup, created by #gdaui_set_group_new, use #gda_set_group_free.
 * 
 * Since 5.2, you must consider this struct as opaque. Any access to its internal must use public API.
 * Don't try to use #gdaui_set_group_free on a struct that was created manually.
 * @record 
 */
class SetGroup {

    // Own properties of Gdaui-5.0.Gdaui.SetGroup

    static name: string

    // Constructors of Gdaui-5.0.Gdaui.SetGroup

    /**
     * Creates a new #GdauiSetGroup struct.
     * @constructor 
     * @param group a #GdaSetGroup
     */
    constructor(group: Gda.SetGroup) 
    /**
     * Creates a new #GdauiSetGroup struct.
     * @constructor 
     * @param group a #GdaSetGroup
     */
    static new(group: Gda.SetGroup): SetGroup
}

interface SetPriv {
}

class SetPriv {

    // Own properties of Gdaui-5.0.Gdaui.SetPriv

    static name: string
}

interface SetSource {

    // Own fields of Gdaui-5.0.Gdaui.SetSource

    /**
     * a #GdaSetSource
     * @field 
     */
    source: Gda.SetSource
    /**
     * number of elements of `shown_cols_index`
     * @field 
     */
    shown_n_cols: number
    /**
     * Array with the column number to be shown from #GdaSetSource
     * @field 
     */
    shown_cols_index: number[]
    /**
     * number of elements of `ref_cols_index`
     * @field 
     */
    ref_n_cols: number
    /**
     * Array with the number of columns as PRIMARY KEY in #GdaSetSource
     * @field 
     */
    ref_cols_index: number[]

    // Owm methods of Gdaui-5.0.Gdaui.SetSource

    /**
     * Copy constructor.
     */
    copy(): SetSource
    /**
     * Frees any resources taken by `s` struct. If `s` is %NULL, then nothing happens.
     */
    free(): void
    get_ref_columns(): number[]
    get_ref_n_cols(): number
    get_shown_columns(): number[]
    get_shown_n_cols(): number
    /**
     * Get source used by `sg`.
     */
    get_source(): Gda.SetSource
    /**
     * Set the columns to be shown.
     * @param columns an array of with columns numbers of referen (Primary Key) at #GdaSetSource
     */
    set_ref_columns(columns: number[]): void
    /**
     * Set the columns to be shown.
     * @param columns an array of with columns numbers to be shown from a #GdaSetSource
     */
    set_shown_columns(columns: number[]): void
    /**
     * Set source to `source`.
     * @param source a #GdaSetSource struct
     */
    set_source(source: Gda.SetSource): void
}

/**
 * The <structname>GdauiSetSource</structname> is a ...
 * 
 * To create a new #GdauiSetSource use #gdaui_set_source_new.
 * 
 * To free a #GdauiSetSource, created by #gdaui_set_source_new, use #gdaui_set_source_free.
 * 
 * Since 5.2, you must consider this struct as opaque. Any access to its internal must use public API.
 * Don't try to use #gdaui_set_source_free on a struct that was created manually.
 * @record 
 */
class SetSource {

    // Own properties of Gdaui-5.0.Gdaui.SetSource

    static name: string

    // Constructors of Gdaui-5.0.Gdaui.SetSource

    /**
     * Creates a new #GdauiSetSource struct.
     * @constructor 
     * @param source 
     */
    constructor(source: Gda.SetSource) 
    /**
     * Creates a new #GdauiSetSource struct.
     * @constructor 
     * @param source 
     */
    static new(source: Gda.SetSource): SetSource
}

interface TreeStoreClass {

    // Own fields of Gdaui-5.0.Gdaui.TreeStoreClass

    parent_class: GObject.ObjectClass
    drag_can_drag: (store: TreeStore, path: string) => boolean
    drag_get: (store: TreeStore, path: string, selection_data: Gtk.SelectionData) => boolean
    drag_can_drop: (store: TreeStore, path: string, selection_data: Gtk.SelectionData) => boolean
    drag_drop: (store: TreeStore, path: string, selection_data: Gtk.SelectionData) => boolean
    drag_delete: (store: TreeStore, path: string) => boolean
}

abstract class TreeStoreClass {

    // Own properties of Gdaui-5.0.Gdaui.TreeStoreClass

    static name: string
}

interface TreeStorePriv {
}

class TreeStorePriv {

    // Own properties of Gdaui-5.0.Gdaui.TreeStorePriv

    static name: string
}

}
export default Gdaui;